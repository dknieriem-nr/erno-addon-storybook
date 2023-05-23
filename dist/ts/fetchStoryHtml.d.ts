type StorybookContext = {
    globals: {
        responsiveColumns_active?: boolean;
        responsiveColumns_bgType?: string;
        responsiveColumns_bgColor?: string;
        responsiveColumns_textColor?: string;
        responsiveColumns_columns?: string;
        responsiveColumns_fullBleed?: boolean;
        drupalTheme?: string;
    };
    args: Record<string, unknown>;
    parameters: {
        options: {
            variant: string;
        };
        columns: {
            active: boolean;
        };
        fileName: string;
        drupalTheme?: string;
        supportedDrupalThemes?: Record<string, {
            title: string;
        }>;
    };
};
declare const fetchStoryHtml: (url: string, path: string, params: Record<string, unknown>, context: StorybookContext) => Promise<string>;
export default fetchStoryHtml;
