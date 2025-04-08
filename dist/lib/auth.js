"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leadratAuth = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
exports.leadratAuth = pieces_framework_1.PieceAuth.CustomAuth({
    required: true,
    description: 'Authentication for Leadrat CRM API',
    props: {
        apiKey: pieces_framework_1.PieceAuth.SecretText({
            displayName: 'API Key',
            description: 'Your Leadrat CRM API key',
            required: true,
        }),
        baseUrl: pieces_framework_1.PieceAuth.SecretText({
            displayName: 'Base URL',
            description: 'Your Leadrat CRM instance URL (e.g., https://your-instance.leadrat.com)',
            required: true,
        }),
    },
});
