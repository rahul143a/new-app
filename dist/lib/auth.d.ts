export type LeadratAuth = {
    apiKey: string;
    baseUrl: string;
};
export declare const leadratAuth: import("@activepieces/pieces-framework").CustomAuthProperty<{
    apiKey: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@activepieces/pieces-framework").SecretTextProperty<true>;
}>;
