"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_lead_1 = require("../create-lead");
const axios_1 = __importDefault(require("axios"));
jest.mock('axios');
const mockedAxios = axios_1.default;
describe('createLead', () => {
    const mockContext = {
        propsValue: {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '1234567890',
            source: 'Website',
            status: 'New',
            notes: 'Test lead',
        },
        auth: {
            apiKey: 'test-api-key',
            baseUrl: 'https://api.leadrat.com',
        },
        flows: {},
        store: {},
        project: {},
    };
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should create a lead successfully', async () => {
        const mockResponse = {
            data: {
                id: '123',
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                phone: '1234567890',
                source: 'Website',
                status: 'New',
                notes: 'Test lead',
                createdAt: '2023-01-01T00:00:00Z',
                updatedAt: '2023-01-01T00:00:00Z',
            },
        };
        mockedAxios.post.mockResolvedValueOnce(mockResponse);
        const result = await create_lead_1.createLead.run(mockContext);
        expect(mockedAxios.post).toHaveBeenCalledWith('https://api.leadrat.com/api/leads', {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '1234567890',
            source: 'Website',
            status: 'New',
            notes: 'Test lead',
        }, {
            headers: {
                'Authorization': 'Bearer test-api-key',
                'Content-Type': 'application/json',
            },
        });
        expect(result).toEqual(mockResponse.data);
    });
    it('should handle API errors', async () => {
        const mockError = {
            isAxiosError: true,
            response: {
                data: {
                    message: 'Invalid input',
                },
            },
            message: 'Request failed with status code 400',
        };
        mockedAxios.post.mockRejectedValueOnce(mockError);
        let error;
        try {
            await create_lead_1.createLead.run(mockContext);
        }
        catch (e) {
            error = e;
        }
        expect(error).toBeDefined();
        expect(error === null || error === void 0 ? void 0 : error.message).toBe('Failed to create lead: Request failed with status code 400');
    });
});
