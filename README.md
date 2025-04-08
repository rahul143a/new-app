# Leadrat CRM Piece for Activepieces

This piece provides integration with Leadrat CRM, focusing on the leads module. It allows you to create, read, update, and delete leads in your Leadrat CRM instance.

## Features

- Create new leads
- Retrieve leads with filtering options
- Update existing leads
- Delete leads

## Authentication

To use this piece, you'll need:
1. Your Leadrat CRM API key
2. Your Leadrat CRM instance URL (defaults to https://api.leadrat.com)

## Actions

### Create Lead
Creates a new lead in Leadrat CRM with the following fields:
- First Name (required)
- Last Name (required)
- Email (required)
- Phone (required)
- Source (required)
- Status (defaults to "New")
- Notes (optional)

### Get Leads
Retrieves leads from Leadrat CRM with optional filtering:
- Status filter
- Source filter
- Pagination support (page number and results per page)

### Update Lead
Updates an existing lead in Leadrat CRM:
- Lead ID (required)
- First Name (optional)
- Last Name (optional)
- Email (optional)
- Phone (optional)
- Status (optional)
- Notes (optional)

### Delete Lead
Deletes a lead from Leadrat CRM:
- Lead ID (required)

## Installation

1. Install the piece in your Activepieces instance
2. Configure authentication with your Leadrat CRM credentials
3. Start using the actions in your flows

## Development

```bash
# Install dependencies
npm install

# Build the piece
npm run build

# Run tests
npm test

# Lint the code
npm run lint
```

## License

MIT 