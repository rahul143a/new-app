export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  title?: string;
  source?: string;
  status?: string;
  createdAt: string;
  updatedAt: string;
} 