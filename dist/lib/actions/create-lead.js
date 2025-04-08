"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLead = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
const auth_1 = require("../auth");
exports.createLead = (0, pieces_framework_1.createAction)({
    name: 'create_lead',
    displayName: 'Create Lead',
    description: 'Create a new lead in Leadrat CRM',
    auth: auth_1.leadratAuth,
    props: {
        firstName: pieces_framework_1.Property.ShortText({
            displayName: 'First Name',
            description: 'The first name of the lead',
            required: true,
        }),
        lastName: pieces_framework_1.Property.ShortText({
            displayName: 'Last Name',
            description: 'The last name of the lead',
            required: true,
        }),
        email: pieces_framework_1.Property.ShortText({
            displayName: 'Email',
            description: 'The email address of the lead',
            required: true,
        }),
        phone: pieces_framework_1.Property.ShortText({
            displayName: 'Phone',
            description: 'The phone number of the lead',
            required: false,
        }),
        company: pieces_framework_1.Property.ShortText({
            displayName: 'Company',
            description: 'The company name of the lead',
            required: false,
        }),
        title: pieces_framework_1.Property.ShortText({
            displayName: 'Title',
            description: 'The job title of the lead',
            required: false,
        }),
        source: pieces_framework_1.Property.ShortText({
            displayName: 'Source',
            description: 'The source of the lead',
            required: false,
        }),
        status: pieces_framework_1.Property.ShortText({
            displayName: 'Status',
            description: 'The status of the lead',
            required: false,
        }),
    },
    async run(context) {
        const { auth, propsValue } = context;
        const authValue = auth;
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
                source: propsValue.source,
                status: propsValue.status,
            }),
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(`Failed to create lead: ${error.message}`);
        }
        return await response.json();
    },
});
