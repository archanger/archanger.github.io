/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    singleQuote: true,
    jsxSingleQuote: true,
    semi: false,
    trailingComma: 'es5',
    tabWidth: 2,
    useTabs: false,
    overrides: [
        {
            files: '*.svg',
            options: {
                parser: 'html'
            }
        }
    ],
    plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss']
};

export default config;