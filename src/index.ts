import { PieceAuth, createPiece, Property } from '@activepieces/pieces-framework';
import { createLead } from './lib/actions/create-lead';
import { getLeads } from './lib/actions/get-leads';
import { updateLead } from './lib/actions/update-lead';
import { deleteLead } from './lib/actions/delete-lead';

export const leadratAuth = PieceAuth.CustomAuth({
  required: true,
  props: {
    apiKey: PieceAuth.SecretText({
      displayName: 'API Key',
      description: 'Enter your Leadrat CRM API key',
      required: true,
    }),
    baseUrl: PieceAuth.SecretText({
      displayName: 'Base URL',
      description: 'Enter your Leadrat CRM instance URL',
      required: true,
      defaultValue: 'https://api.leadrat.com',
    }),
  },
});

export const leadratPiece = createPiece({
  displayName: 'Leadrat CRM',
  description: 'Manage leads in Leadrat CRM',
  logoUrl: 'https://leadrat.com/favicon.ico',
  minimumSupportedRelease: '0.5.0',
  authors: ['activepieces'],
  auth: leadratAuth,
  actions: [
    createLead,
    getLeads,
    updateLead,
    deleteLead,
  ],
  triggers: [],
}); 