"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leadratPiece = exports.leadratAuth = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
const create_lead_1 = require("./lib/actions/create-lead");
const get_leads_1 = require("./lib/actions/get-leads");
const update_lead_1 = require("./lib/actions/update-lead");
const delete_lead_1 = require("./lib/actions/delete-lead");
exports.leadratAuth = pieces_framework_1.PieceAuth.CustomAuth({
    required: true,
    props: {
        apiKey: pieces_framework_1.PieceAuth.SecretText({
            displayName: 'API Key',
            description: 'Enter your Leadrat CRM API key',
            required: true,
        }),
        baseUrl: pieces_framework_1.PieceAuth.SecretText({
            displayName: 'Base URL',
            description: 'Enter your Leadrat CRM instance URL',
            required: true,
            defaultValue: 'https://api.leadrat.com',
        }),
    },
});
exports.leadratPiece = (0, pieces_framework_1.createPiece)({
    displayName: 'Leadrat CRM',
    description: 'Manage leads in Leadrat CRM',
    logoUrl: 'https://leadrat.com/favicon.ico',
    minimumSupportedRelease: '0.5.0',
    authors: ['activepieces'],
    auth: exports.leadratAuth,
    actions: [
        create_lead_1.createLead,
        get_leads_1.getLeads,
        update_lead_1.updateLead,
        delete_lead_1.deleteLead,
    ],
    triggers: [],
});
