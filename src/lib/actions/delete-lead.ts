import { createAction, Property } from '@activepieces/pieces-framework';
import axios, { AxiosError } from 'axios';

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
    const auth = context.auth as { apiKey: string; baseUrl: string };
    const { leadId } = context.propsValue;

    try {
      const response = await axios.delete(
        `${auth.baseUrl}/api/leads/${leadId}`,
        {
          headers: {
            'Authorization': `Bearer ${auth.apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(`Failed to delete lead: ${error.message}`);
      }
      throw new Error('Failed to delete lead: Unknown error occurred');
    }
  },
}); 