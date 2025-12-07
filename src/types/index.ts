// src/types/index.ts

export interface LeadFormData {
    name: string;
    phone: string;
    email: string;
    companyName?: string;
    serviceInterest: string;
    message: string;
    hearAboutUs?: string;
    source: string;
  }
  
  export interface LeadResponse {
    id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    status: string;
    createdAt: string;
  }