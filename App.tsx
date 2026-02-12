
import React, { useState, useEffect } from 'react';
import { AppState, FormData, AnalysisResult } from './types.ts';
import LandingView from './components/LandingView.tsx';
import MultiStepForm from './components/MultiStepForm.tsx';
import AnalyzingView from './components/AnalyzingView.tsx';
import ResultView from './components/ResultView.tsx';
import Navbar from './components/Navbar.tsx';
import { sendLeadToAdmin } from './services/leadService.ts';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppState>(AppState.LANDING);
  const [userLocation, setUserLocation] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    website: '',
    instagram: '',
    tiktok: '',
    facebook: '',
    industry: '',
    customIndustry: '',
    monthlyCalls: '',
    email: '',
    phone: '',
    deliveryPreference: 'email',
    specialRequests: ''
  });
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.city) {
          setUserLocation(`${data.city}, ${data.country_name}`);
        }
      })
      .catch(() => console.log("Location detection skipped."));
  }, []);

  const handleFormSubmit = async (data: FormData) => {
    setFormData(data);
    setCurrentStep(AppState.ANALYZING);
    sendLeadToAdmin(data).catch(console.error);
  };

  const handleAnalysisComplete = (result: AnalysisResult) => {
    setAnalysis(result);
    setCurrentStep(AppState.RESULT);
  };

  const reset = () => {
    setCurrentStep(AppState.LANDING);
    setAnalysis(null);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100">
      {/* Background decoration */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-40"></div>
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -mr-64 -mt-64 pointer-events-none"></div>
      
      <Navbar location={userLocation} onLogoClick={reset} />
      
      <main className="relative pt-32 pb-20 px-4 min-h-[calc(100vh-80px)]">
        {currentStep === AppState.LANDING && (
          <LandingView onStart={() => setCurrentStep(AppState.FORM)} location={userLocation} />
        )}

        {currentStep === AppState.FORM && (
          <MultiStepForm onSubmit={handleFormSubmit} />
        )}

        {currentStep === AppState.ANALYZING && (
          <AnalyzingView 
            formData={formData} 
            onComplete={handleAnalysisComplete} 
          />
        )}

        {currentStep === AppState.RESULT && analysis && (
          <ResultView 
            analysis={analysis} 
            formData={formData} 
            onReset={reset} 
            location={userLocation}
          />
        )}
      </main>

      <footer className="relative py-12 border-t border-slate-100 bg-slate-50/50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-slate-400 text-sm mb-2 font-medium uppercase tracking-widest">Powered by Ax-Group AI Tech</p>
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Ax-Group AI Tech. Delivering cutting-edge AI Receptionist solutions globally.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
