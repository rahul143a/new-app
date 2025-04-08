import { Static } from '@sinclair/typebox';
export declare const SampleDataSettingsObject: import("@sinclair/typebox").TObject<{
    currentSelectedData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
    customizedInputs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
    lastTestDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type SampleDataSettings = Static<typeof SampleDataSettingsObject>;
export declare const DEFAULT_SAMPLE_DATA_SETTINGS: SampleDataSettings;
