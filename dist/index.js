"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leadratPiece = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
const create_lead_1 = require("./lib/actions/create-lead");
const get_leads_1 = require("./lib/actions/get-leads");
const update_lead_1 = require("./lib/actions/update-lead");
const delete_lead_1 = require("./lib/actions/delete-lead");
const auth_1 = require("./lib/auth");
exports.leadratPiece = (0, pieces_framework_1.createPiece)({
    displayName: 'Leadrat CRM',
    description: 'Manage leads in Leadrat CRM with actions for creating, reading, updating, and deleting leads.',
    logoUrl: 'https://cdn.activepieces.com/pieces/leadrat.png',
    minimumSupportedRelease: '0.7.0',
    authors: ['activepieces'],
    auth: auth_1.leadratAuth,
    actions: [
        create_lead_1.createLead,
        get_leads_1.getLeads,
        update_lead_1.updateLead,
        delete_lead_1.deleteLead,
    ],
    triggers: [],
});
