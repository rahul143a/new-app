"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLead = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
const axios_1 = __importDefault(require("axios"));
exports.deleteLead = (0, pieces_framework_1.createAction)({
    name: 'delete_lead',
    displayName: 'Delete Lead',
    description: 'Deletes a lead from Leadrat CRM',
    props: {
        leadId: pieces_framework_1.Property.ShortText({
            displayName: 'Lead ID',
            description: 'ID of the lead to delete',
            required: true,
        }),
    },
    async run(context) {
        var _a, _b;
        const { leadId } = context.propsValue;
        const auth = context.auth;
        try {
            await axios_1.default.delete(`${auth.baseUrl}/api/leads/${leadId}`, {
                headers: {
                    'Authorization': `Bearer ${auth.apiKey}`,
                },
            });
            return { success: true };
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                throw new Error(`Failed to delete lead: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || error.message}`);
            }
            throw error;
        }
    },
});
