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
exports.getLeads = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
const axios_1 = __importStar(require("axios"));
exports.getLeads = (0, pieces_framework_1.createAction)({
    name: 'get_leads',
    displayName: 'Get Leads',
    description: 'Retrieves leads from Leadrat CRM',
    props: {
        status: pieces_framework_1.Property.ShortText({
            displayName: 'Lead Status',
            description: 'Filter leads by status',
            required: false,
        }),
        source: pieces_framework_1.Property.ShortText({
            displayName: 'Lead Source',
            description: 'Filter leads by source',
            required: false,
        }),
        page: pieces_framework_1.Property.Number({
            displayName: 'Page Number',
            description: 'Page number for pagination',
            required: false,
            defaultValue: 1,
        }),
        limit: pieces_framework_1.Property.Number({
            displayName: 'Results Per Page',
            description: 'Number of results per page',
            required: false,
            defaultValue: 10,
        }),
    },
    async run(context) {
        const auth = context.auth;
        const { status, source, page, limit } = context.propsValue;
        try {
            const params = new URLSearchParams();
            if (status)
                params.append('status', status);
            if (source)
                params.append('source', source);
            if (page)
                params.append('page', page.toString());
            if (limit)
                params.append('limit', limit.toString());
            const response = await axios_1.default.get(`${auth.baseUrl}/api/leads?${params.toString()}`, {
                headers: {
                    'Authorization': `Bearer ${auth.apiKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        }
        catch (error) {
            if (error instanceof axios_1.AxiosError) {
                throw new Error(`Failed to get leads: ${error.message}`);
            }
            throw new Error('Failed to get leads: Unknown error occurred');
        }
    },
});
