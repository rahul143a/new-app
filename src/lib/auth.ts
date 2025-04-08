import { PieceAuth } from '@activepieces/pieces-framework';

export type LeadratAuth = {
  apiKey: string;
  baseUrl: string;
};

export const leadratAuth = PieceAuth.CustomAuth({
  required: true,
  description: 'Authentication for Leadrat CRM API',
  props: {
    apiKey: PieceAuth.SecretText({
      displayName: 'API Key',
      description: 'Your Leadrat CRM API key',
      required: true,
    }),
    baseUrl: PieceAuth.SecretText({
      displayName: 'Base URL',
      description: 'Your Leadrat CRM instance URL (e.g., https://your-instance.leadrat.com)',
      required: true,
    }),
  },
}); 