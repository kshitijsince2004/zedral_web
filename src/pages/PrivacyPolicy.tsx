import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const sections = [
  {
    num: "01",
    title: "Introduction",
    content: (
      <>
        <p className="mb-3">This Privacy Policy describes how Zedral Technologies Private Limited ("Zedral", "we", "us", or "our") collects, uses, stores, and protects information when you access or use the Zedral platform, including all related software, dashboards, APIs, and services (collectively, the "Platform").</p>
        <p className="mb-3">By accessing or using the Platform, you acknowledge that you have read, understood, and agree to the practices described in this Privacy Policy. If you are accessing the Platform on behalf of an organisation, you confirm that you have the authority to accept this Policy on behalf of that organisation.</p>
        <p>This Policy should be read alongside our <a href="/terms" className="text-foreground underline hover:no-underline">Terms &amp; Conditions</a> and <a href="/cookies" className="text-foreground underline hover:no-underline">Cookie Policy</a>.</p>
      </>
    ),
  },
  {
    num: "02",
    title: "Definitions",
    content: (
      <>
        <p className="mb-3">For the purposes of this Privacy Policy, the following definitions apply:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-foreground">Personal Data</strong> means any information that relates to an identified or identifiable natural person, including name, email address, IP address, or device identifiers.</li>
          <li><strong className="text-foreground">Client Data</strong> means all operational, production, and performance data submitted to or processed by the Platform on behalf of a Client organisation.</li>
          <li><strong className="text-foreground">Processing</strong> means any operation performed on Personal Data, including collection, recording, storage, retrieval, use, disclosure, or deletion.</li>
          <li><strong className="text-foreground">Data Controller</strong> means the entity that determines the purposes and means of processing Personal Data. For the purposes of this Policy, Zedral acts as the Data Controller for account and usage data.</li>
          <li><strong className="text-foreground">Data Processor</strong> means the entity that processes Personal Data on behalf of the Data Controller. Zedral acts as a Data Processor when processing Client Data on behalf of a Client organisation.</li>
          <li><strong className="text-foreground">Authorised Users</strong> means employees, contractors, or agents of the Client who are authorised to access the Platform under the Client's account.</li>
        </ul>
      </>
    ),
  },
  {
    num: "03",
    title: "Information We Collect",
    content: (
      <>
        <p className="mb-3">We collect the following categories of information:</p>
        <h3 className="font-medium text-foreground mb-1">Account Information</h3>
        <p className="mb-3">When you register an account, we collect your name, email address, organisation name, role, and contact details. This information is necessary to create and manage your account.</p>
        <h3 className="font-medium text-foreground mb-1">Operational Data</h3>
        <p className="mb-3">Manufacturing, production, and workflow data that your organisation submits to the Platform for analytics processing. This data remains the property of your organisation.</p>
        <h3 className="font-medium text-foreground mb-1">Usage Data</h3>
        <p className="mb-3">Information about how you interact with the Platform, including pages visited, features used, session duration, click patterns, and navigation paths.</p>
        <h3 className="font-medium text-foreground mb-1">Device and Technical Data</h3>
        <p className="mb-3">Browser type and version, operating system, IP address, device identifiers, screen resolution, and language preferences.</p>
        <h3 className="font-medium text-foreground mb-1">Communication Data</h3>
        <p>Records of communications between you and Zedral, including support tickets, emails, and feedback submissions.</p>
      </>
    ),
  },
  {
    num: "04",
    title: "Legal Basis for Processing",
    content: (
      <>
        <p className="mb-3">We process Personal Data on the following legal grounds:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-foreground">Contractual Necessity:</strong> Processing required to perform our obligations under the Terms &amp; Conditions and deliver the Platform services.</li>
          <li><strong className="text-foreground">Legitimate Interest:</strong> Processing necessary for our legitimate business interests, including improving the Platform, ensuring security, and preventing fraud.</li>
          <li><strong className="text-foreground">Consent:</strong> Where you have provided explicit consent, such as for marketing communications or optional analytics.</li>
          <li><strong className="text-foreground">Legal Obligation:</strong> Processing required to comply with applicable laws, regulations, or lawful requests from authorities.</li>
        </ul>
      </>
    ),
  },
  {
    num: "05",
    title: "How We Use Your Information",
    content: (
      <>
        <p className="mb-3">We use the information we collect for the following purposes:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>To provide, maintain, and improve the Zedral platform and its features</li>
          <li>To generate operational analytics and performance insights for your organisation</li>
          <li>To authenticate users and manage account access</li>
          <li>To communicate with you about your account, updates, and support</li>
          <li>To detect, prevent, and address technical issues and security threats</li>
          <li>To analyse usage patterns and improve user experience</li>
          <li>To comply with legal obligations and enforce our Terms</li>
        </ul>
        <p>We do not use Client Data for any purpose other than providing the Platform services to the Client that submitted it.</p>
      </>
    ),
  },
  {
    num: "06",
    title: "Data Storage and Security",
    content: (
      <>
        <h3 className="font-medium text-foreground mb-1">Encryption</h3>
        <p className="mb-3">All data is encrypted at rest using AES-256 encryption and in transit using TLS 1.3. Database backups are encrypted and stored in geographically separate locations.</p>
        <h3 className="font-medium text-foreground mb-1">Infrastructure Security</h3>
        <p className="mb-3">The Platform is hosted on enterprise-grade cloud infrastructure with SOC 2 compliance, regular penetration testing, and continuous vulnerability monitoring.</p>
        <h3 className="font-medium text-foreground mb-1">Access Controls</h3>
        <p className="mb-3">Zedral employs role-based access controls, multi-factor authentication for internal systems, and the principle of least privilege to restrict data access to authorised personnel only.</p>
        <h3 className="font-medium text-foreground mb-1">Incident Response</h3>
        <p>Zedral maintains an incident response plan and will notify affected Clients of any data breach without undue delay, and in any event within seventy-two (72) hours of becoming aware of the breach, where required by applicable law.</p>
      </>
    ),
  },
  {
    num: "07",
    title: "Data Retention",
    content: (
      <>
        <p className="mb-3">We retain Personal Data only for as long as necessary to fulfil the purposes outlined in this Policy:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li><strong className="text-foreground">Account Data:</strong> Retained for the duration of your Subscription and for thirty (30) days following account termination.</li>
          <li><strong className="text-foreground">Client Data:</strong> Retained for the duration of the Client's Subscription. Upon termination, Client Data is retained for thirty (30) days to allow export, after which it is permanently deleted.</li>
          <li><strong className="text-foreground">Video and Image Data:</strong> Processed in real time and deleted within ten (10) minutes. Only structured analytics derived from such data are retained.</li>
          <li><strong className="text-foreground">Usage and Technical Data:</strong> Retained in aggregated, anonymised form for up to twenty-four (24) months for analytics and service improvement.</li>
          <li><strong className="text-foreground">Communication Records:</strong> Retained for twenty-four (24) months from the date of the last communication.</li>
        </ul>
        <p>Upon expiration of the applicable retention period, data is permanently deleted or irreversibly anonymised.</p>
      </>
    ),
  },
  {
    num: "08",
    title: "Data Sharing and Disclosure",
    content: (
      <>
        <p className="mb-3">We do not sell your Personal Data. We may share information in the following limited circumstances:</p>
        <h3 className="font-medium text-foreground mb-1">Service Providers</h3>
        <p className="mb-3">We engage trusted third-party service providers to assist with hosting, analytics, payment processing, and customer support. These providers are bound by data processing agreements and are prohibited from using your data for any purpose other than providing services to Zedral.</p>
        <h3 className="font-medium text-foreground mb-1">Legal Requirements</h3>
        <p className="mb-3">We may disclose information when required to comply with applicable laws, regulations, legal processes, or enforceable governmental requests.</p>
        <h3 className="font-medium text-foreground mb-1">Business Transfers</h3>
        <p className="mb-3">In the event of a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity, subject to the same privacy protections described in this Policy.</p>
        <h3 className="font-medium text-foreground mb-1">With Your Consent</h3>
        <p>We may share data for purposes not described in this Policy only with your explicit prior consent.</p>
      </>
    ),
  },
  {
    num: "09",
    title: "International Data Transfers",
    content: (
      <>
        <p className="mb-3">Zedral primarily processes and stores data within India. Where data is transferred outside India, we ensure appropriate safeguards are in place, including:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Standard contractual clauses approved by applicable data protection authorities</li>
          <li>Data processing agreements with all international sub-processors</li>
          <li>Compliance with the Digital Personal Data Protection Act, 2023 (DPDPA) requirements for cross-border transfers</li>
          <li>Ensuring the receiving jurisdiction provides an adequate level of data protection</li>
        </ul>
        <p>You may contact us at <a href="mailto:hello@zedral.com" className="text-foreground underline hover:no-underline">hello@zedral.com</a> to obtain details of the specific safeguards applied to any international transfer of your data.</p>
      </>
    ),
  },
  {
    num: "10",
    title: "Your Rights",
    content: (
      <>
        <p className="mb-3">Subject to applicable law, including the Digital Personal Data Protection Act, 2023 (DPDPA), you have the following rights with respect to your Personal Data:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li><strong className="text-foreground">Right of Access:</strong> You may request a copy of the Personal Data we hold about you.</li>
          <li><strong className="text-foreground">Right to Correction:</strong> You may request that we correct inaccurate or incomplete Personal Data.</li>
          <li><strong className="text-foreground">Right to Erasure:</strong> You may request deletion of your Personal Data, subject to our legal retention obligations.</li>
          <li><strong className="text-foreground">Right to Restrict Processing:</strong> You may request that we restrict processing of your data in certain circumstances.</li>
          <li><strong className="text-foreground">Right to Data Portability:</strong> You may request an export of your data in a structured, commonly used, machine-readable format.</li>
          <li><strong className="text-foreground">Right to Withdraw Consent:</strong> Where processing is based on consent, you may withdraw consent at any time without affecting the lawfulness of prior processing.</li>
          <li><strong className="text-foreground">Right to Grievance Redressal:</strong> You have the right to register a complaint with the Data Protection Board of India if you believe your data rights have been violated.</li>
        </ul>
        <p>To exercise any of these rights, contact us at <a href="mailto:hello@zedral.com" className="text-foreground underline hover:no-underline">hello@zedral.com</a>. We will respond within thirty (30) days of receiving your request.</p>
      </>
    ),
  },
  {
    num: "11",
    title: "Cookies and Tracking Technologies",
    content: (
      <>
        <p className="mb-3">We use cookies and similar tracking technologies to enhance your experience on the Platform. For detailed information about the types of cookies we use, their purposes, and how to manage your preferences, please refer to our <a href="/cookies" className="text-foreground underline hover:no-underline">Cookie Policy</a>.</p>
        <p>You can control cookie preferences through your browser settings or through the cookie consent mechanism provided on the Platform.</p>
      </>
    ),
  },
  {
    num: "12",
    title: "Third-Party Links and Services",
    content: (
      <p>The Platform may contain links to third-party websites or integrate with third-party services. This Privacy Policy applies only to the Zedral Platform. We are not responsible for the privacy practices of third-party websites or services. We encourage you to review the privacy policies of any third-party services before providing them with your information.</p>
    ),
  },
  {
    num: "13",
    title: "Children's Privacy",
    content: (
      <p>The Platform is not directed at individuals under the age of eighteen (18). We do not knowingly collect Personal Data from children. If we become aware that we have collected data from a child without parental consent, we will take steps to delete such information promptly. If you believe we have collected data from a child, please contact us at <a href="mailto:hello@zedral.com" className="text-foreground underline hover:no-underline">hello@zedral.com</a>.</p>
    ),
  },
  {
    num: "14",
    title: "Data Protection Officer",
    content: (
      <>
        <p className="mb-3">Zedral has appointed a Data Protection Officer (DPO) who is responsible for overseeing compliance with this Privacy Policy and applicable data protection laws.</p>
        <p>You may contact our DPO at <a href="mailto:hello@zedral.com" className="text-foreground underline hover:no-underline">hello@zedral.com</a> for any privacy-related inquiries, concerns, or requests.</p>
      </>
    ),
  },
  {
    num: "15",
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p className="mb-3">We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Posting the updated Policy on the Platform with a revised "Last Updated" date</li>
          <li>Sending an email notification to the address associated with your account</li>
          <li>Displaying a prominent notice on the Platform dashboard</li>
        </ul>
        <p>Your continued use of the Platform after any changes to this Policy constitutes acceptance of the updated terms.</p>
      </>
    ),
  },
  {
    num: "16",
    title: "Governing Law",
    content: (
      <p>This Privacy Policy is governed by and construed in accordance with the laws of India, including the Digital Personal Data Protection Act, 2023 (DPDPA) and the Information Technology Act, 2000, as amended. Any disputes arising from this Policy shall be subject to the exclusive jurisdiction of the courts located in India.</p>
    ),
  },
  {
    num: "17",
    title: "Contact Information",
    content: (
      <>
        <p className="mb-3">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
        <ul className="list-none space-y-1">
          <li><strong className="text-foreground">Email:</strong> <a href="mailto:hello@zedral.com" className="text-foreground underline hover:no-underline">hello@zedral.com</a></li>
          <li><strong className="text-foreground">Data Protection Officer:</strong> <a href="mailto:hello@zedral.com" className="text-foreground underline hover:no-underline">hello@zedral.com</a></li>
          <li><strong className="text-foreground">Legal:</strong> <a href="mailto:hello@zedral.com" className="text-foreground underline hover:no-underline">hello@zedral.com</a></li>
        </ul>
      </>
    ),
  },
];

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <SEO 
      title="Privacy Policy"
      description="Learn how Zedral collects, uses, and protects your data. Read our comprehensive privacy policy."
      url="https://zedral.com/privacy"
      keywords="privacy policy, data protection, GDPR compliance, data security"
    />
    <Navbar />
    <main className="max-w-3xl mx-auto px-6 py-24 md:py-32">
      <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-6">
        Privacy Policy
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

export default PrivacyPolicy;
