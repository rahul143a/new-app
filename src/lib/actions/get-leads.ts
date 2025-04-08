import { createAction, Property } from '@activepieces/pieces-framework';
import { LeadratAuth } from '../auth';
import { Lead } from '../models';
import axios from 'axios';
import { LeadList } from '../types';

export const getLeads = createAction({
  name: 'get_leads',
  displayName: 'Get Leads',
  description: 'Retrieves a list of leads with optional filtering',
  props: {
    status: Property.ShortText({
      displayName: 'Status',
      description: 'Filter leads by status',
      required: false,
    }),
    source: Property.ShortText({
      displayName: 'Source',
      description: 'Filter leads by source',
      required: false,
    }),
    page: Property.Number({
      displayName: 'Page',
      description: 'Page number for pagination',
      required: false,
      defaultValue: 1,
    }),
    limit: Property.Number({
      displayName: 'Limit',
      description: 'Number of items per page',
      required: false,
      defaultValue: 10,
    }),
  },
  async run(context) {
    const { page = 1, limit = 10, status, source } = context.propsValue;
    const auth = context.auth as LeadratAuth;

    try {
      const response = await axios.get<{ data: Lead[]; total: number }>(
        `${auth.baseUrl}/api/leads`,
        {
          headers: {
            'Authorization': `Bearer ${auth.apiKey}`,
          },
          params: {
            page,
            limit,
            status,
            source,
          },
        }
      );

      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message: axios.isAxiosError(error) 
            ? error.response?.data?.message || error.message
            : 'An unexpected error occurred',
          status: axios.isAxiosError(error) ? error.response?.status : 500,
          details: axios.isAxiosError(error) ? error.response?.data : null
        }
      };
    }
  },
}); 