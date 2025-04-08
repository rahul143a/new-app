import { createAction, Property } from '@activepieces/pieces-framework';
import axios, { AxiosError } from 'axios';

export const getLeads = createAction({
  name: 'get_leads',
  displayName: 'Get Leads',
  description: 'Retrieves leads from Leadrat CRM',
  props: {
    status: Property.ShortText({
      displayName: 'Lead Status',
      description: 'Filter leads by status',
      required: false,
    }),
    source: Property.ShortText({
      displayName: 'Lead Source',
      description: 'Filter leads by source',
      required: false,
    }),
    page: Property.Number({
      displayName: 'Page Number',
      description: 'Page number for pagination',
      required: false,
      defaultValue: 1,
    }),
    limit: Property.Number({
      displayName: 'Results Per Page',
      description: 'Number of results per page',
      required: false,
      defaultValue: 10,
    }),
  },
  async run(context) {
    const auth = context.auth as { apiKey: string; baseUrl: string };
    const { status, source, page, limit } = context.propsValue;

    try {
      const params = new URLSearchParams();
      if (status) params.append('status', status);
      if (source) params.append('source', source);
      if (page) params.append('page', page.toString());
      if (limit) params.append('limit', limit.toString());

      const response = await axios.get(
        `${auth.baseUrl}/api/leads?${params.toString()}`,
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
        throw new Error(`Failed to get leads: ${error.message}`);
      }
      throw new Error('Failed to get leads: Unknown error occurred');
    }
  },
}); 