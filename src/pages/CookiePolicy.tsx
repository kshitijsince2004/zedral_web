import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const sections = [
  {
    num: "01",
    title: "Introduction",
    content: (
      <>
        <p className="mb-3">This Cookie Policy ("Policy") explains how Zedral Technologies Private Limited ("Zedral", "we", "us", or "our"), a company incorporated under the laws of India, uses cookies and similar tracking technologies when you access or use the Zedral platform, including all related software, dashboards, APIs, mobile applications, and services (collectively, the "Platform").</p>
        <p className="mb-3">This Policy should be read together with our <a href="/privacy" className="text-foreground underline hover:no-underline">Privacy Policy</a> and <a href="/terms" className="text-foreground underline hover:no-underline">Terms and Conditions</a>, which provide further detail on how we collect, use, and protect your information.</p>
        <p>By continuing to use the Platform, you consent to the use of cookies as described in this Policy. If you do not agree to our use of cookies, you should adjust your browser settings accordingly or refrain from using the Platform.</p>
      </>
    ),
  },
  {
    num: "02",
    title: "What Are Cookies",
    content: (
      <>
        <p className="mb-3">Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website or use an application. Cookies are widely used to make websites and applications function more efficiently, provide a better user experience, and supply information to the operators of the site or application.</p>
        <p className="mb-3">Cookies may be set by the website or application you are visiting ("first-party cookies") or by third-party services that provide content or functionality on the site ("third-party cookies").</p>
        <p>In addition to cookies, we may use similar technologies such as web beacons, pixel tags, local storage, and session storage (collectively referred to as "tracking technologies" in this Policy) to collect and store information about your interactions with the Platform.</p>
      </>
    ),
  },
  {
    num: "03",
    title: "Types of Cookies We Use",
    content: (
      <>
        <p className="mb-3">The Platform uses the following categories of cookies:</p>
        <h3 className="font-medium text-foreground mb-1">Essential Cookies</h3>
        <p className="mb-3">These cookies are strictly necessary for the Platform to function and cannot be disabled. They handle core functionality including user authentication, session management, security token validation, and load balancing. Without these cookies, the Platform cannot operate as intended. Essential cookies do not require your consent.</p>
        <h3 className="font-medium text-foreground mb-1">Analytics and Performance Cookies</h3>
        <p className="mb-3">These cookies collect anonymised and aggregated data about how users interact with the Platform, including pages visited, features used, session duration, error occurrences, and navigation patterns. This information helps us understand usage trends, identify performance issues, and improve the Platform's functionality and user experience. Analytics cookies are only set with your consent.</p>
        <h3 className="font-medium text-foreground mb-1">Preference and Functionality Cookies</h3>
        <p className="mb-3">These cookies remember your settings and preferences, such as language, timezone, dashboard layout, notification preferences, and display configurations. They enable the Platform to provide a personalised experience tailored to your choices. Preference cookies are only set with your consent.</p>
        <h3 className="font-medium text-foreground mb-1">Marketing and Advertising Cookies</h3>
        <p>These cookies are used to deliver relevant content and measure the effectiveness of our marketing campaigns. They may track your activity across websites to build a profile of your interests and show you relevant advertisements. Marketing cookies are only set with your explicit consent and can be disabled at any time.</p>
      </>
    ),
  },
  {
    num: "04",
    title: "Specific Cookies Used",
    content: (
      <>
        <p className="mb-3">The following table provides details of the specific cookies used on the Platform:</p>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-2 border-b border-border text-foreground font-medium">Cookie Name</th>
                <th className="text-left p-2 border-b border-border text-foreground font-medium">Category</th>
                <th className="text-left p-2 border-b border-border text-foreground font-medium">Purpose</th>
                <th className="text-left p-2 border-b border-border text-foreground font-medium">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-border font-mono text-xs">zedral_session</td>
                <td className="p-2 border-b border-border">Essential</td>
                <td className="p-2 border-b border-border">Maintains your authenticated session</td>
                <td className="p-2 border-b border-border">Session</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-border font-mono text-xs">zedral_csrf</td>
                <td className="p-2 border-b border-border">Essential</td>
                <td className="p-2 border-b border-border">Prevents cross-site request forgery attacks</td>
                <td className="p-2 border-b border-border">Session</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-border font-mono text-xs">zedral_prefs</td>
                <td className="p-2 border-b border-border">Preference</td>
                <td className="p-2 border-b border-border">Stores your dashboard and display preferences</td>
                <td className="p-2 border-b border-border">12 months</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-border font-mono text-xs">zedral_analytics</td>
                <td className="p-2 border-b border-border">Analytics</td>
                <td className="p-2 border-b border-border">Collects anonymised usage data for Platform improvement</td>
                <td className="p-2 border-b border-border">12 months</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-border font-mono text-xs">zedral_consent</td>
                <td className="p-2 border-b border-border">Essential</td>
                <td className="p-2 border-b border-border">Records your cookie consent preferences</td>
                <td className="p-2 border-b border-border">12 months</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>This list may be updated from time to time as we add or remove cookies. We will update this Policy accordingly.</p>
      </>
    ),
  },
  {
    num: "05",
    title: "Third-Party Cookies",
    content: (
      <>
        <p className="mb-3">Some cookies on the Platform are placed by third-party service providers who assist us in delivering our services. These third parties include:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li><strong className="text-foreground">Analytics Providers:</strong> We use analytics services to understand how users interact with the Platform. These services may set their own cookies to collect anonymised data about your usage.</li>
          <li><strong className="text-foreground">Cloud Infrastructure Providers:</strong> Our hosting and infrastructure providers may set cookies for load balancing, security, and performance optimisation.</li>
          <li><strong className="text-foreground">Payment Processors:</strong> If you make payments through the Platform, our payment processing partners may set cookies to facilitate secure transactions and prevent fraud.</li>
          <li><strong className="text-foreground">Customer Support Tools:</strong> Our support chat and ticketing systems may set cookies to maintain your support session and improve service delivery.</li>
        </ul>
        <p>These third parties operate under their own privacy and cookie policies. We encourage you to review the policies of these providers. Zedral does not control the cookies set by third parties and is not responsible for their data practices.</p>
      </>
    ),
  },
  {
    num: "06",
    title: "Cookie Consent",
    content: (
      <>
        <p className="mb-3">When you first access the Platform, you will be presented with a cookie consent banner that allows you to accept or decline non-essential cookies. You may:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li><strong className="text-foreground">Accept All Cookies:</strong> Enable all cookie categories, including analytics, preference, and marketing cookies.</li>
          <li><strong className="text-foreground">Reject Non-Essential Cookies:</strong> Only essential cookies required for Platform functionality will be set.</li>
          <li><strong className="text-foreground">Customise Preferences:</strong> Select specific cookie categories based on your preferences.</li>
        </ul>
        <p className="mb-3">Your consent preferences are stored in an essential cookie (zedral_consent) and will be remembered for subsequent visits. You may change your preferences at any time through the cookie settings accessible from the Platform footer.</p>
        <p>Essential cookies do not require consent as they are strictly necessary for the Platform to function. These cookies are set automatically when you access the Platform.</p>
      </>
    ),
  },
  {
    num: "07",
    title: "Managing Cookies Through Your Browser",
    content: (
      <>
        <p className="mb-3">In addition to the cookie consent controls provided on the Platform, you can manage cookies through your browser settings. Most modern browsers allow you to:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>View the cookies stored on your device</li>
          <li>Delete individual cookies or all cookies at once</li>
          <li>Block cookies from specific websites or all websites</li>
          <li>Set preferences for first-party and third-party cookies separately</li>
          <li>Receive notifications when cookies are being set</li>
        </ul>
        <p className="mb-3">Please note that blocking or deleting essential cookies may prevent the Platform from functioning correctly. If you disable essential cookies, you may not be able to log in, access your dashboard, or use core Platform features.</p>
        <p>For instructions on managing cookies in specific browsers, please refer to the help documentation provided by your browser vendor.</p>
      </>
    ),
  },
  {
    num: "08",
    title: "Cookie Retention Periods",
    content: (
      <>
        <p className="mb-3">Cookies used on the Platform have varying retention periods depending on their purpose:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li><strong className="text-foreground">Session Cookies:</strong> These are temporary cookies that are deleted when you close your browser. They are used for authentication, session management, and security purposes.</li>
          <li><strong className="text-foreground">Persistent Cookies:</strong> These cookies remain on your device for a predetermined period or until you manually delete them. Retention periods range from thirty (30) days to twelve (12) months depending on the cookie category.</li>
          <li><strong className="text-foreground">Analytics Cookies:</strong> Retained for up to twelve (12) months from the date they are set. Data collected through analytics cookies is anonymised and aggregated.</li>
          <li><strong className="text-foreground">Preference Cookies:</strong> Retained for up to twelve (12) months to ensure your settings are remembered across visits.</li>
          <li><strong className="text-foreground">Marketing Cookies:</strong> Retained for up to six (6) months. These can be deleted at any time by withdrawing your consent.</li>
        </ul>
        <p>We periodically review cookie retention periods to ensure they remain appropriate and proportionate to their purposes.</p>
      </>
    ),
  },
  {
    num: "09",
    title: "Do Not Track Signals",
    content: (
      <p>Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not wish to be tracked. There is currently no universally accepted standard for how companies should respond to DNT signals. At present, the Platform does not respond to DNT signals. However, you can manage your tracking preferences through our cookie consent controls and your browser settings as described in this Policy.</p>
    ),
  },
  {
    num: "10",
    title: "Cookies and Data Protection",
    content: (
      <>
        <p className="mb-3">Our use of cookies is governed by applicable Indian data protection laws, including the Digital Personal Data Protection Act, 2023 (DPDPA) and the Information Technology Act, 2000, as applicable.</p>
        <p className="mb-3">Where cookies collect Personal Data, such data is processed in accordance with our <a href="/privacy" className="text-foreground underline hover:no-underline">Privacy Policy</a>. We ensure that:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Data collected through cookies is processed only for the purposes specified in this Policy</li>
          <li>Appropriate technical and organisational security measures are in place to protect cookie data</li>
          <li>Third-party cookie providers comply with applicable data protection requirements</li>
          <li>Your consent preferences are respected and can be changed at any time</li>
        </ul>
        <p>You have the same rights over data collected via cookies as described in our Privacy Policy, including the right to access, rectify, delete, and restrict processing of your data.</p>
      </>
    ),
  },
  {
    num: "11",
    title: "Changes to This Policy",
    content: (
      <>
        <p className="mb-3">Zedral reserves the right to update or modify this Cookie Policy at any time to reflect changes in technology, regulation, or our data practices. We will notify you of material changes by:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Posting the updated Policy on the Platform with a revised "Last Updated" date</li>
          <li>Displaying a prominent notice or banner on the Platform</li>
          <li>Sending an email notification for significant changes that affect your cookie preferences</li>
        </ul>
        <p>Your continued use of the Platform after any changes to this Policy constitutes your acceptance of the updated Policy. We encourage you to review this Policy periodically.</p>
      </>
    ),
  },
  {
    num: "12",
    title: "Contact Information",
    content: (
      <>
        <p className="mb-3">If you have any questions, concerns, or requests regarding this Cookie Policy or our use of cookies and tracking technologies, please contact us at:</p>
        <ul className="list-none space-y-1">
          <li><strong className="text-foreground">Email:</strong> <a href="mailto:hello@zedral.com" className="text-foreground underline hover:no-underline">hello@zedral.com</a></li>
          <li><strong className="text-foreground">Legal Inquiries:</strong> <a href="mailto:hello@zedral.com" className="text-foreground underline hover:no-underline">hello@zedral.com</a></li>
          <li><strong className="text-foreground">Data Protection Officer:</strong> <a href="mailto:hello@zedral.com" className="text-foreground underline hover:no-underline">hello@zedral.com</a></li>
        </ul>
      </>
    ),
  },
];

const CookiePolicy = () => (
  <div className="min-h-screen bg-background">
    <SEO 
      title="Cookie Policy"
      description="Learn about how Zedral uses cookies and tracking technologies on our platform."
      url="https://zedral.com/cookies"
      keywords="cookie policy, tracking technologies, web cookies"
    />
    <Navbar />
    <main className="max-w-3xl mx-auto px-6 py-24 md:py-32">
      <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-6">
        Cookie Policy
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-3 text-sm text-muted-foreground mb-12 border-b border-border pb-8">
        <div>
          <span className="block text-xs uppercase tracking-wider text-muted-foreground/60 mb-1">Effective Date</span>
          <span className="text-foreground font-medium">28 February 2026</span>
        </div>
        <div>
          <span className="block text-xs uppercase tracking-wider text-muted-foreground/60 mb-1">Last Updated</span>
          <span className="text-foreground font-medium">February 2026</span>
        </div>
        <div>
          <span className="block text-xs uppercase tracking-wider text-muted-foreground/60 mb-1">Jurisdiction</span>
          <span className="text-foreground font-medium">India</span>
        </div>
      </div>

      <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
        {sections.map((s) => (
          <section key={s.num}>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              <span className="text-muted-foreground/50 mr-2">{s.num}</span>
              {s.title}
            </h2>
            {s.content}
          </section>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default CookiePolicy;
