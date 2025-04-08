import { createAction, Property } from '@activepieces/pieces-framework';

export const getLeads = createAction({
  name: 'get_leads',
  displayName: 'Get Leads',
  description: 'Retrieves a list of leads from Leadrat CRM',
  props: {
    page: Property.Number({
      displayName: 'Page',
      description: 'The page number to retrieve',
      required: false,
      defaultValue: 1,
    }),
    limit: Property.Number({
      displayName: 'Limit',
      description: 'The number of leads to retrieve per page',
      required: false,
      defaultValue: 10,
    }),
    status: Property.ShortText({
      displayName: 'Status',
      description: 'Filter leads by status',
      required: false,
    }),
  },
  async run(context) {
    const { auth, propsValue } = context;
    const authValue = auth as { baseUrl: string; apiKey: string };

    const queryParams = new URLSearchParams({
      page: propsValue.page?.toString() || '1',
      limit: propsValue.limit?.toString() || '10',
      ...(propsValue.status && { status: propsValue.status }),
    });

    const response = await fetch(`${authValue.baseUrl}/api/leads?${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authValue.apiKey}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Failed to get leads: ${error.message}`);
    }

    return await response.json();
  },
}); 