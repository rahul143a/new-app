import { createAction, Property } from '@activepieces/pieces-framework';
import axios from 'axios';
import { LeadratAuth } from '../types';

export const deleteLead = createAction({
  name: 'delete_lead',
  displayName: 'Delete Lead',
  description: 'Deletes a lead from Leadrat CRM',
  props: {
    leadId: Property.ShortText({
      displayName: 'Lead ID',
      description: 'ID of the lead to delete',
      required: true,
    }),
  },
  async run(context) {
    const { leadId } = context.propsValue;
    const auth = context.auth as LeadratAuth;

    try {
      await axios.delete(`${auth.baseUrl}/api/leads/${leadId}`, {
        headers: {
          'Authorization': `Bearer ${auth.apiKey}`,
        },
      });

      return { success: true };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Failed to delete lead: ${error.response?.data?.message || error.message}`);
      }
      throw error;
    }
  },
}); 