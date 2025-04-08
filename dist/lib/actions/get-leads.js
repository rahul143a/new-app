"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLeads = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
const axios_1 = __importDefault(require("axios"));
exports.getLeads = (0, pieces_framework_1.createAction)({
    name: 'get_leads',
    displayName: 'Get Leads',
    description: 'Retrieves a list of leads with optional filtering',
    props: {
        status: pieces_framework_1.Property.ShortText({
            displayName: 'Status',
            description: 'Filter leads by status',
            required: false,
        }),
        source: pieces_framework_1.Property.ShortText({
            displayName: 'Source',
            description: 'Filter leads by source',
            required: false,
        }),
        page: pieces_framework_1.Property.Number({
            displayName: 'Page',
            description: 'Page number for pagination',
            required: false,
            defaultValue: 1,
        }),
        limit: pieces_framework_1.Property.Number({
            displayName: 'Limit',
            description: 'Number of items per page',
            required: false,
            defaultValue: 10,
        }),
    },
    async run(context) {
        var _a, _b, _c, _d;
        const { page = 1, limit = 10, status, source } = context.propsValue;
        const auth = context.auth;
        try {
            const response = await axios_1.default.get(`${auth.baseUrl}/api/leads`, {
                headers: {
                    'Authorization': `Bearer ${auth.apiKey}`,
                },
                params: {
                    page,
                    limit,
                    status,
                    source,
                },
            });
            return {
                success: true,
                data: response.data
            };
        }
        catch (error) {
            return {
                success: false,
                error: {
                    message: axios_1.default.isAxiosError(error)
                        ? ((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || error.message
                        : 'An unexpected error occurred',
                    status: axios_1.default.isAxiosError(error) ? (_c = error.response) === null || _c === void 0 ? void 0 : _c.status : 500,
                    details: axios_1.default.isAxiosError(error) ? (_d = error.response) === null || _d === void 0 ? void 0 : _d.data : null
                }
            };
        }
    },
});
