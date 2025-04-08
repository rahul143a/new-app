import { createAction, Property } from '@activepieces/pieces-framework';

export const createLead = createAction({
  name: 'create_lead',
  displayName: 'Create Lead',
  description: 'Creates a new lead in Leadrat CRM',
  props: {
    firstName: Property.ShortText({
      displayName: 'First Name',
      description: 'The first name of the lead',
      required: true,
    }),
    lastName: Property.ShortText({
      displayName: 'Last Name',
      description: 'The last name of the lead',
      required: true,
    }),
    email: Property.ShortText({
      displayName: 'Email',
      description: 'The email address of the lead',
      required: true,
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
  },
  async run(context) {
    const { auth, propsValue } = context;
    const authValue = auth as { baseUrl: string; apiKey: string };

    const response = await fetch(`${authValue.baseUrl}/api/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authValue.apiKey}`,
      },
      body: JSON.stringify({
        firstName: propsValue.firstName,
        lastName: propsValue.lastName,
        email: propsValue.email,
        phone: propsValue.phone,
        company: propsValue.company,
        title: propsValue.title,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Failed to create lead: ${error.message}`);
    }

    return await response.json();
  },
}); 