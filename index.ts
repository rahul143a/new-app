import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
import { createLead } from './lib/actions/create-lead';
import { getLeads } from './lib/actions/get-leads';
import { updateLead } from './lib/actions/update-lead';
import { deleteLead } from './lib/actions/delete-lead';

export const leadratAuth = PieceAuth.CustomAuth({
  description: 'Authentication for Leadrat CRM API',
  required: true,
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

export const leadrat = createPiece({
  displayName: "Leadrat CRM",
  description: "Manage leads in Leadrat CRM with actions for creating, reading, updating, and deleting leads.",
  auth: leadratAuth,
  minimumSupportedRelease: '0.7.0',
  logoUrl: "https://images.yourstory.com/cs/images/companies/LRBlackLogo111-1694522207313.jpg",
  authors: ['activepieces'],
  actions: [
    createLead,
    getLeads,
    updateLead,
    deleteLead,
  ],
  triggers: [],
}); 