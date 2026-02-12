
import { FormData } from "../types.ts";

/**
 * Service to handle sending lead data to Ax-Group AI Tech admin.
 * Lead receiver: kerven@axgroup.tech
 */
export const sendLeadToAdmin = async (data: FormData): Promise<boolean> => {
  // Primary notification email for the team
  const adminEmail = 'kerven@axgroup.tech';
  
  console.log(`[LEAD NOTIFICATION] Sending new lead from ${data.businessName} to ${adminEmail}`);
  console.table({
    Business: data.businessName,
    Email: data.email,
    Phone: data.phone,
    Website: data.website,
    Industry: data.industry,
    Preference: data.deliveryPreference
  });

  // In a real-world scenario, you would use a service like Formspree or EmailJS here:
  /*
  try {
    const response = await fetch('https://formspree.io/f/your_form_id', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _to: adminEmail,
        subject: `New AI Demo Request: ${data.businessName}`,
        ...data
      })
    });
    return response.ok;
  } catch (error) {
    console.error("Error sending lead:", error);
    return false;
  }
  */

  // Simulating the successful dispatch of the lead information
  return new Promise((resolve) => setTimeout(() => resolve(true), 800));
};
