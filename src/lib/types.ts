export interface LeadratAuth {
  apiKey: string;
  baseUrl: string;
}

export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  source: string;
  status?: string;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface LeadList {
  data: Lead[];
  total: number;
  page: number;
  limit: number;
} 