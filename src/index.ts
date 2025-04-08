import { createPiece, PieceAuth } from '@activepieces/pieces-framework';
import { createLead } from './lib/actions/create-lead';
import { getLeads } from './lib/actions/get-leads';
import { updateLead } from './lib/actions/update-lead';
import { deleteLead } from './lib/actions/delete-lead';
import { leadratAuth } from './lib/auth';

export const leadratPiece = createPiece({
  displayName: 'Leadrat CRM',
  description: 'Manage leads in Leadrat CRM with actions for creating, reading, updating, and deleting leads.',
  logoUrl: 'https://cdn.activepieces.com/pieces/leadrat.png',
  minimumSupportedRelease: '0.7.0',
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