import { createAction, Property } from '@activepieces/pieces-framework';
import axios, { AxiosError } from 'axios';

export const createLead = createAction({
  name: 'create_lead',
  displayName: 'Create Lead',
  description: 'Creates a new lead in Leadrat CRM',
  props: {
    firstName: Property.ShortText({
      displayName: 'First Name',
      description: 'First name of the lead',
      required: true,
    }),
    lastName: Property.ShortText({
      displayName: 'Last Name',
      description: 'Last name of the lead',
      required: true,
    }),
    email: Property.ShortText({
      displayName: 'Email',
      description: 'Email address of the lead',
      required: true,
    }),
    phone: Property.ShortText({
      displayName: 'Phone',
      description: 'Phone number of the lead',
      required: true,
    }),
    source: Property.ShortText({
      displayName: 'Lead Source',
      description: 'Source of the lead (e.g., Website, Social Media)',
      required: true,
    }),
    status: Property.ShortText({
      displayName: 'Lead Status',
      description: 'Current status of the lead',
      required: true,
      defaultValue: 'New',
    }),
    notes: Property.LongText({
      displayName: 'Notes',
      description: 'Additional notes about the lead',
      required: false,
    }),
  },
  async run(context) {
    const auth = context.auth as { apiKey: string; baseUrl: string };
    const { firstName, lastName, email, phone, source, status, notes } = context.propsValue;

    try {
      const response = await axios.post(
        `${auth.baseUrl}/api/leads`,
        {
          firstName,
          lastName,
          email,
          phone,
          source,
          status,
          notes,
        },
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
        throw new Error(`Failed to create lead: ${error.message}`);
      }
      throw new Error('Failed to create lead: Unknown error occurred');
    }
  },
}); 