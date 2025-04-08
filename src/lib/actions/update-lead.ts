import { createAction, Property } from '@activepieces/pieces-framework';
import axios, { AxiosError } from 'axios';

export const updateLead = createAction({
  name: 'update_lead',
  displayName: 'Update Lead',
  description: 'Updates an existing lead in Leadrat CRM',
  props: {
    leadId: Property.ShortText({
      displayName: 'Lead ID',
      description: 'ID of the lead to update',
      required: true,
    }),
    firstName: Property.ShortText({
      displayName: 'First Name',
      description: 'First name of the lead',
      required: false,
    }),
    lastName: Property.ShortText({
      displayName: 'Last Name',
      description: 'Last name of the lead',
      required: false,
    }),
    email: Property.ShortText({
      displayName: 'Email',
      description: 'Email address of the lead',
      required: false,
    }),
    phone: Property.ShortText({
      displayName: 'Phone',
      description: 'Phone number of the lead',
      required: false,
    }),
    status: Property.ShortText({
      displayName: 'Lead Status',
      description: 'New status of the lead',
      required: false,
    }),
    notes: Property.LongText({
      displayName: 'Notes',
      description: 'Additional notes about the lead',
      required: false,
    }),
  },
  async run(context) {
    const auth = context.auth as { apiKey: string; baseUrl: string };
    const { leadId, ...updateData } = context.propsValue;

    try {
      const response = await axios.put(
        `${auth.baseUrl}/api/leads/${leadId}`,
        updateData,
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
        throw new Error(`Failed to update lead: ${error.message}`);
      }
      throw new Error('Failed to update lead: Unknown error occurred');
    }
  },
}); 