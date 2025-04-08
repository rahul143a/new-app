export declare const createLead: import("@activepieces/pieces-framework").IAction<import("@activepieces/pieces-framework").CustomAuthProperty<{
    apiKey: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@activepieces/pieces-framework").SecretTextProperty<true>;
}>, {
    firstName: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    lastName: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    email: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    phone: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    company: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    title: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    source: import("@activepieces/pieces-framework").ShortTextProperty<false>;
    status: import("@activepieces/pieces-framework").ShortTextProperty<false>;
}>;
