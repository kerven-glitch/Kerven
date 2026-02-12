
import React, { useState } from 'react';
import { FormData } from '../types.ts';

interface MultiStepFormProps {
  onSubmit: (data: FormData) => void;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ onSubmit }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>({
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

  const next = () => setStep(s => s + 1);
  const prev = () => setStep(s => s - 1);

  const industries = [
    'Medical/Dental', 'Real Estate', 'Legal Services', 'Home Services', 'SaaS/Tech', 'Retail', 'Other'
  ];

  const callRanges = [
    '0-50 calls/mo', '51-200 calls/mo', '201-500 calls/mo', '500+ calls/mo'
  ];

  const isStep1Valid = data.businessName && data.website && data.industry && (data.industry !== 'Other' || data.customIndustry);

  return (
    <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-[2.5rem] p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-8">
      <div className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Step {step} of 3</span>
          <div className="flex gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-1.5 w-10 rounded-full transition-all duration-500 ${i <= step ? 'bg-slate-950' : 'bg-slate-100'}`} />
            ))}
          </div>
        </div>
        
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900">Your Business Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-full">
                <label className="block text-sm font-bold text-slate-700 mb-2">Business Name</label>
                <input 
                  type="text" 
                  autoFocus
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium"
                  placeholder="e.g. Acme Health Clinic"
                  value={data.businessName}
                  onChange={e => setData({...data, businessName: e.target.value})}
                />
              </div>
              
              <div className="col-span-full">
                <label className="block text-sm font-bold text-slate-700 mb-2">Website</label>
                <input 
                  type="url" 
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium"
                  placeholder="https://www.yourbusiness.com"
                  value={data.website}
                  onChange={e => setData({...data, website: e.target.value})}
                />
              </div>

              <div className="col-span-full">
                <label className="block text-sm font-bold text-slate-700 mb-2">Industry</label>
                <select 
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium appearance-none"
                  value={data.industry}
                  onChange={e => setData({...data, industry: e.target.value})}
                >
                  <option value="">Select industry...</option>
                  {industries.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>

              {data.industry === 'Other' && (
                <div className="col-span-full animate-in slide-in-from-top-2">
                  <input 
                    type="text" 
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium"
                    placeholder="Specify your industry"
                    value={data.customIndustry}
                    onChange={e => setData({...data, customIndustry: e.target.value})}
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-slate-900">Call Volume</h2>
            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-700">Estimated monthly calls to handle?</label>
              <div className="grid grid-cols-1 gap-4">
                {callRanges.map(range => (
                  <button
                    key={range}
                    onClick={() => {
                      setData({...data, monthlyCalls: range});
                      next();
                    }}
                    className={`text-left px-6 py-5 rounded-2xl border-2 transition-all ${data.monthlyCalls === range ? 'border-slate-950 bg-slate-950 text-white shadow-xl' : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200'}`}
                  >
                    <span className="font-bold text-lg">{range}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-slate-900">Contact Delivery</h2>
            
            <div className="space-y-6">
              <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-200">
                <button 
                  onClick={() => setData({...data, deliveryPreference: 'email'})}
                  className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${data.deliveryPreference === 'email' ? 'bg-white shadow-md text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Email Blueprint
                </button>
                <button 
                  onClick={() => setData({...data, deliveryPreference: 'whatsapp'})}
                  className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${data.deliveryPreference === 'whatsapp' ? 'bg-white shadow-md text-green-600' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  WhatsApp Video
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                  <input 
                    type="email" 
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium"
                    placeholder="name@company.com"
                    value={data.email}
                    onChange={e => setData({...data, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium"
                    placeholder="+1 (000) 000-0000"
                    value={data.phone}
                    onChange={e => setData({...data, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Special Requirements</label>
                <textarea 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all min-h-[120px] font-medium"
                  placeholder="Need it to speak Arabic? Handle appointment bookings? Tell us here..."
                  value={data.specialRequests}
                  onChange={e => setData({...data, specialRequests: e.target.value})}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between gap-6">
        {step > 1 && (
          <button 
            onClick={prev}
            className="px-8 py-4 font-bold text-slate-400 hover:text-slate-900 transition-colors"
          >
            Back
          </button>
        )}
        <div className="flex-1" />
        {step < 3 ? (
          step !== 2 && (
            <button 
              onClick={next}
              disabled={!isStep1Valid}
              className="px-10 py-4 bg-slate-950 text-white rounded-2xl font-black disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-900 transition-all shadow-xl shadow-slate-900/10 active:scale-95"
            >
              Next Step
            </button>
          )
        ) : (
          <button 
            onClick={() => onSubmit(data)}
            disabled={!data.email || !data.phone}
            className="px-12 py-4 bg-slate-950 text-white rounded-2xl font-black hover:bg-slate-900 transition-all shadow-2xl shadow-slate-900/20 active:scale-95 disabled:opacity-30"
          >
            Generate My Demo
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
