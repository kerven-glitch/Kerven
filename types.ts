
export interface FormData {
  businessName: string;
  website: string;
  instagram?: string;
  tiktok?: string;
  facebook?: string;
  industry: string;
  customIndustry?: string;
  monthlyCalls: string;
  email: string;
  phone: string;
  deliveryPreference: 'email' | 'whatsapp';
  specialRequests?: string;
}

export interface AnalysisResult {
  strategicInsight: string;
  receptionistPersona: string;
}

export enum AppState {
  LANDING = 'LANDING',
  FORM = 'FORM',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT'
}
