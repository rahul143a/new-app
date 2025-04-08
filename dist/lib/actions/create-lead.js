"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLead = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
const axios_1 = __importStar(require("axios"));
exports.createLead = (0, pieces_framework_1.createAction)({
    name: 'create_lead',
    displayName: 'Create Lead',
    description: 'Creates a new lead in Leadrat CRM',
    props: {
        firstName: pieces_framework_1.Property.ShortText({
            displayName: 'First Name',
            description: 'First name of the lead',
            required: true,
        }),
        lastName: pieces_framework_1.Property.ShortText({
            displayName: 'Last Name',
            description: 'Last name of the lead',
            required: true,
        }),
        email: pieces_framework_1.Property.ShortText({
            displayName: 'Email',
            description: 'Email address of the lead',
            required: true,
        }),
        phone: pieces_framework_1.Property.ShortText({
            displayName: 'Phone',
            description: 'Phone number of the lead',
            required: true,
        }),
        source: pieces_framework_1.Property.ShortText({
            displayName: 'Lead Source',
            description: 'Source of the lead (e.g., Website, Social Media)',
            required: true,
        }),
        status: pieces_framework_1.Property.ShortText({
            displayName: 'Lead Status',
            description: 'Current status of the lead',
            required: true,
            defaultValue: 'New',
        }),
        notes: pieces_framework_1.Property.LongText({
            displayName: 'Notes',
            description: 'Additional notes about the lead',
            required: false,
        }),
    },
    async run(context) {
        const auth = context.auth;
        const { firstName, lastName, email, phone, source, status, notes } = context.propsValue;
        try {
            const response = await axios_1.default.post(`${auth.baseUrl}/api/leads`, {
                firstName,
                lastName,
                email,
                phone,
                source,
                status,
                notes,
            }, {
                headers: {
                    'Authorization': `Bearer ${auth.apiKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        }
        catch (error) {
            if (error instanceof axios_1.AxiosError) {
                throw new Error(`Failed to create lead: ${error.message}`);
            }
            throw new Error('Failed to create lead: Unknown error occurred');
        }
    },
});
