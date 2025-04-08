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
exports.deleteLead = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
const axios_1 = __importStar(require("axios"));
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
        const auth = context.auth;
        const { leadId } = context.propsValue;
        try {
            const response = await axios_1.default.delete(`${auth.baseUrl}/api/leads/${leadId}`, {
                headers: {
                    'Authorization': `Bearer ${auth.apiKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        }
        catch (error) {
            if (error instanceof axios_1.AxiosError) {
                throw new Error(`Failed to delete lead: ${error.message}`);
            }
            throw new Error('Failed to delete lead: Unknown error occurred');
        }
    },
});
