"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLead = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
const axios_1 = __importDefault(require("axios"));
exports.updateLead = (0, pieces_framework_1.createAction)({
    name: 'update_lead',
    displayName: 'Update Lead',
    description: 'Updates an existing lead in Leadrat CRM',
    props: {
        leadId: pieces_framework_1.Property.ShortText({
            displayName: 'Lead ID',
            description: 'ID of the lead to update',
            required: true,
        }),
        firstName: pieces_framework_1.Property.ShortText({
            displayName: 'First Name',
            description: 'First name of the lead',
            required: false,
        }),
        lastName: pieces_framework_1.Property.ShortText({
            displayName: 'Last Name',
            description: 'Last name of the lead',
            required: false,
        }),
        email: pieces_framework_1.Property.ShortText({
            displayName: 'Email',
            description: 'Email address of the lead',
            required: false,
        }),
        phone: pieces_framework_1.Property.ShortText({
            displayName: 'Phone',
            description: 'Phone number of the lead',
            required: false,
        }),
        source: pieces_framework_1.Property.ShortText({
            displayName: 'Source',
            description: 'Source of the lead',
            required: false,
        }),
        status: pieces_framework_1.Property.ShortText({
            displayName: 'Status',
            description: 'Status of the lead',
            required: false,
        }),
        notes: pieces_framework_1.Property.LongText({
            displayName: 'Notes',
            description: 'Additional notes about the lead',
            required: false,
        }),
    },
    async run(context) {
        var _a, _b;
        const { leadId, ...updateData } = context.propsValue;
        const auth = context.auth;
        try {
            const response = await axios_1.default.put(`${auth.baseUrl}/api/leads/${leadId}`, updateData, {
                headers: {
                    'Authorization': `Bearer ${auth.apiKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                throw new Error(`Failed to update lead: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || error.message}`);
            }
            throw error;
        }
    },
});
