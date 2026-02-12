
import { GoogleGenAI, Type } from "@google/genai";
import { FormData, AnalysisResult } from "../types.ts";

export const analyzeBusinessPotential = async (data: FormData): Promise<AnalysisResult> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const industry = data.industry === 'Other' ? data.customIndustry : data.industry;
  const socials = [
    data.instagram ? `Instagram: ${data.instagram}` : '',
    data.tiktok ? `TikTok: ${data.tiktok}` : '',
    data.facebook ? `Facebook: ${data.facebook}` : ''
  ].filter(Boolean).join(', ');

  const prompt = `Analyze this business and provide a strategy for an AI receptionist to prevent lead loss:
    Business Name: ${data.businessName}
    Website: ${data.website}
    Social Presence: ${socials || 'Not provided'}
    Industry: ${industry}
    Estimated Monthly Calls: ${data.monthlyCalls}
    Special Requests/Preferences: ${data.specialRequests || 'None provided'}
    
    Focus ONLY on:
    1. A specific strategic insight on how an AI receptionist solves their pain points for their specific industry and digital presence.
    2. A suggested 'Persona' for the AI receptionist (e.g., 'The Professional Concierge' or 'The Friendly Tech Assistant').
    
    Do not include any financial figures or ROI calculations.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          strategicInsight: {
            type: Type.STRING,
            description: "A short paragraph explaining the core benefit for this specific business.",
          },
          receptionistPersona: {
            type: Type.STRING,
            description: "A description of the AI voice persona suitable for this business.",
          },
        },
        required: ["strategicInsight", "receptionistPersona"],
      },
    },
  });

  try {
    return JSON.parse(response.text.trim()) as AnalysisResult;
  } catch (error) {
    console.error("Failed to parse AI response", error);
    return {
      strategicInsight: "By capturing after-hours leads and managing overflows during peak times, your business ensures no customer is left waiting for a competitor to pick up.",
      receptionistPersona: "Professional, Efficient, and Friendly."
    };
  }
};
