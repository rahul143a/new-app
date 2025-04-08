# Leadrat CRM Piece for Activepieces

This piece allows you to interact with the Leadrat CRM API from Activepieces flows.

## Features

- Create new leads
- Retrieve leads with filtering and pagination
- Update existing leads
- Delete leads

## Installation

### Option 1: Install from npm package

```bash
npm install @activepieces/piece-leadrat
```

### Option 2: Install from local package

```bash
npm install /path/to/activepieces-piece-leadrat-0.0.1.tgz
```

## Authentication

To use this piece, you need to configure the following authentication parameters:

- **API Key**: Your Leadrat CRM API key
- **Base URL**: The base URL for your Leadrat CRM API (e.g., `https://api.leadrat.com`)

## Actions

### Create Lead

Creates a new lead in Leadrat CRM.

**Required Fields:**
- First Name
- Last Name
- Email
- Phone
- Source

**Optional Fields:**
- Status (default: "New")
- Notes

### Get Leads

Retrieves a list of leads with optional filtering.

**Optional Parameters:**
- Status: Filter leads by status
- Source: Filter leads by source
- Page: Page number for pagination (default: 1)
- Limit: Number of items per page (default: 10)

### Update Lead

Updates an existing lead in Leadrat CRM.

**Required Fields:**
- Lead ID

**Optional Fields:**
- First Name
- Last Name
- Email
- Phone
- Source
- Status
- Notes

### Delete Lead

Deletes a lead from Leadrat CRM.

**Required Fields:**
- Lead ID

## Example Flow

1. Trigger: When a new contact form is submitted
2. Action: Create Lead
   - First Name: {{trigger.firstName}}
   - Last Name: {{trigger.lastName}}
   - Email: {{trigger.email}}
   - Phone: {{trigger.phone}}
   - Source: "Website Contact Form"
   - Notes: {{trigger.message}}

## Development

### Building the Piece

```bash
npm install
npm run build
```

### Testing

```bash
npm test
```

### Linting

```bash
npm run lint
```

## License

MIT 