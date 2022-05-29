/**
 * Apps on app store use this as unique identifier.
 * @summary Domain schema
 * @example com.merchant.app
 */
export type AppDomain = `com.${string}.${string}`;


/**
 * Website to be displayed throughout the app.
 * @deprecated
 * @summary Merchant website
 * @example http://merchant.domain.com
 */
export type AppWebsite = `${'http'|'https'}://${string}`;


/**
 * Information about the merchant used throughout the app
 * as of means personalisation.
 * @summary Merchant schema
 * @property {string} key - Identifier
 * @property {AppDomain} domain - App store identifier
 * @property {MerchantCompany} company - Company information
 * @property {MerchantBranding} branding - Personalisation
 */
export type Merchant = {
    key: string;
    domain: AppDomain;
    company: MerchantCompany;
    branding: MerchantBranding;
};


/**
 * Merchant company information used for personalisation.
 * Content will have to be moved to server side for dynamic updates
 * and app should not be aware of information.
 * @deprecated
 * @property {string} title - Display title
 * @property {string} email - Email address
 * @property {string} telephone - Telephone number
 * @property {string[]} address - Address lines
 * @property {AppWebsite} website - Website
 */
export type MerchantCompany = {
    title: string;
    email: string;
    telephone: string;
    address: string[];
    website: AppWebsite;
};


/**
 * App personalisation with external styles and images.
 * Styling should be flexible and image resources availale during build.
 * @summary Branding
 * @property {string} theme - Theme for styling
 * @property {string} assets - Path for assets
 * @property {string} appName - Display name for application
 */
export type MerchantBranding = {
    theme: string;
    assets: string,
    appName: string;
};
