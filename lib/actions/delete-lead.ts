import { createAction, Property } from '@activepieces/pieces-framework';

export const deleteLead = createAction({
  name: 'delete_lead',
  displayName: 'Delete Lead',
  description: 'Deletes a lead from Leadrat CRM',
  props: {
    leadId: Property.ShortText({
      displayName: 'Lead ID',
      description: 'The ID of the lead to delete',
      required: true,
    }),
  },
  async run(context) {
    const { auth, propsValue } = context;
    const authValue = auth as { baseUrl: string; apiKey: string };

    const response = await fetch(`${authValue.baseUrl}/api/leads/${propsValue.leadId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authValue.apiKey}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Failed to delete lead: ${error.message}`);
    }

    return {
      success: true,
      message: 'Lead deleted successfully',
    };
  },
}); 