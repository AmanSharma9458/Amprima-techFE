import type { LeadFormData } from './types';

export async function submitLead(formData: LeadFormData) {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    let errMsg = 'Failed to submit lead.';
    try {
      const errorData = await response.json();
      errMsg = errorData.message || errMsg;
    } catch (e) {}
    throw new Error(errMsg);
  }

  return await response.json();
}
