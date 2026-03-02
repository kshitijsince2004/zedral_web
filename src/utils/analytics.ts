import ReactGA from 'react-ga4';

const SITE_URL = 'https://zedral.com'; // Update this with your actual domain
const MEASUREMENT_ID = 'G-4ZXR36HYGL';

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID, {
    gaOptions: {
      anonymize_ip: true, // GDPR compliance
    },
  });
};

export const logPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const logEvent = (category: string, action: string, label?: string, value?: number) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

// Specific event tracking functions
export const trackContactFormSubmit = (success: boolean) => {
  logEvent('Contact', success ? 'Form Submitted' : 'Form Error', 'Contact Page');
};

export const trackEmailSignup = (location: string) => {
  logEvent('Lead', 'Email Signup', location);
};

export const trackCTAClick = (ctaName: string, location: string) => {
  logEvent('Engagement', 'CTA Click', `${ctaName} - ${location}`);
};

export const trackNavigation = (destination: string) => {
  logEvent('Navigation', 'Menu Click', destination);
};

export const trackScrollDepth = (percentage: number) => {
  logEvent('Engagement', 'Scroll Depth', `${percentage}%`);
};
