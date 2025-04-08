import { createAction, Property } from '@activepieces/pieces-framework';

export const updateLead = createAction({
  name: 'update_lead',
  displayName: 'Update Lead',
  description: 'Updates an existing lead in Leadrat CRM',
  props: {
    leadId: Property.ShortText({
      displayName: 'Lead ID',
      description: 'The ID of the lead to update',
      required: true,
    }),
    firstName: Property.ShortText({
      displayName: 'First Name',
      description: 'The first name of the lead',
      required: false,
    }),
    lastName: Property.ShortText({
      displayName: 'Last Name',
      description: 'The last name of the lead',
      required: false,
    }),
    email: Property.ShortText({
      displayName: 'Email',
      description: 'The email address of the lead',
      required: false,
    }),
    phone: Property.ShortText({
      displayName: 'Phone',
      description: 'The phone number of the lead',
      required: false,
    }),
    company: Property.ShortText({
      displayName: 'Company',
      description: 'The company name of the lead',
      required: false,
    }),
    title: Property.ShortText({
      displayName: 'Title',
      description: 'The job title of the lead',
      required: false,
    }),
    status: Property.ShortText({
      displayName: 'Status',
      description: 'The status of the lead',
      required: false,
    }),
  },
  async run(context) {
    const { auth, propsValue } = context;
    const authValue = auth as { baseUrl: string; apiKey: string };

    const updateData = {
      ...(propsValue.firstName && { firstName: propsValue.firstName }),
      ...(propsValue.lastName && { lastName: propsValue.lastName }),
      ...(propsValue.email && { email: propsValue.email }),
      ...(propsValue.phone && { phone: propsValue.phone }),
      ...(propsValue.company && { company: propsValue.company }),
      ...(propsValue.title && { title: propsValue.title }),
      ...(propsValue.status && { status: propsValue.status }),
    };

    const response = await fetch(`${authValue.baseUrl}/api/leads/${propsValue.leadId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authValue.apiKey}`,
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Failed to update lead: ${error.message}`);
    }

    return await response.json();
  },
}); 