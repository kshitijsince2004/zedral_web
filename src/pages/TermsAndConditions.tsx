import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const sections = [
  {
    num: "01",
    title: "Introduction and Acceptance of Terms",
    content: (
      <>
        <p className="mb-3">Welcome to Zedral. These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("Client", "you", or "your") and Zedral Technologies Private Limited ("Zedral", "we", "us", or "our"), a company incorporated under the laws of India.</p>
        <p className="mb-3">By accessing or using the Zedral platform, including all related software, dashboards, APIs, mobile applications, and services (collectively, the "Platform"), you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.</p>
        <p className="mb-3">If you are accessing the Platform on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms. In such cases, "you" and "your" refer to that entity.</p>
        <p>If you do not agree to these Terms, you must not access or use the Platform.</p>
      </>
    ),
  },
  {
    num: "02",
    title: "Definitions",
    content: (
      <>
        <p className="mb-3">For the purposes of these Terms, the following definitions apply:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-foreground">"Platform"</strong> means the Zedral operational intelligence software, web application, dashboard, APIs, and all associated tools and services.</li>
          <li><strong className="text-foreground">"Subscription"</strong> means a paid plan granting access to the Platform on a monthly or annual basis.</li>
          <li><strong className="text-foreground">"Client Data"</strong> means all operational, production, and performance data submitted to or processed by the Platform on your behalf.</li>
          <li><strong className="text-foreground">"Authorised Users"</strong> means employees, contractors, or agents of the Client who are authorised to access the Platform under the Client's account.</li>
          <li><strong className="text-foreground">"Intellectual Property"</strong> means patents, trademarks, copyrights, trade secrets, algorithms, software, and all other proprietary rights.</li>
          <li><strong className="text-foreground">"Confidential Information"</strong> means any non-public information disclosed by either party that is designated as confidential or that reasonably should be understood to be confidential.</li>
        </ul>
      </>
    ),
  },
  {
    num: "03",
    title: "Description of the Platform",
    content: (
      <>
        <p className="mb-3">Zedral is an operational intelligence platform designed to assist manufacturing and industrial organisations in improving operational efficiency. The Platform provides:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Real-time operational visibility and workflow monitoring</li>
          <li>Workflow performance analysis and process variability identification</li>
          <li>Production line optimisation and constraint detection</li>
          <li>Shift-level performance awareness and throughput alignment</li>
          <li>Structured performance insights and automated reporting</li>
          <li>Integration capabilities with existing manufacturing execution systems and industrial infrastructure</li>
        </ul>
        <p>Zedral is a decision-support tool. Operational decisions remain entirely at the discretion of the Client. Zedral does not guarantee specific operational outcomes, production targets, or business results.</p>
      </>
    ),
  },
  {
    num: "04",
    title: "Account Registration and Security",
    content: (
      <>
        <h3 className="font-medium text-foreground mb-1">Account Creation</h3>
        <p className="mb-3">To access the Platform, you must register an account by providing accurate, complete, and current information. You agree to promptly update your account information to keep it accurate.</p>
        <h3 className="font-medium text-foreground mb-1">Account Security</h3>
        <p className="mb-3">You are responsible for maintaining the confidentiality of your account credentials. You must notify Zedral immediately at <a href="mailto:hello@zedral.com" className="text-foreground underline hover:no-underline">hello@zedral.com</a> upon discovering any unauthorised access to or use of your account.</p>
        <h3 className="font-medium text-foreground mb-1">Authorised Users</h3>
        <p className="mb-3">The Client is responsible for managing access for all Authorised Users and ensuring compliance with these Terms. The Client assumes full liability for all activities conducted under its account, whether or not authorised.</p>
        <h3 className="font-medium text-foreground mb-1">One Account Per Entity</h3>
        <p>Each Subscription is issued to a single legal entity. Sharing account credentials across multiple organisations is strictly prohibited.</p>
      </>
    ),
  },
  {
    num: "05",
    title: "Subscriptions, Billing, and Payment",
    content: (
      <>
        <h3 className="font-medium text-foreground mb-1">Subscription Plans</h3>
        <p className="mb-3">Zedral offers monthly and annual Subscription plans. Details of available plans, features, and pricing are set out on our website at www.zedral.ai or as otherwise agreed in a separate order form or service agreement.</p>
        <h3 className="font-medium text-foreground mb-1">Billing</h3>
        <p className="mb-3">Subscriptions are billed in advance on a recurring basis; monthly or annually, depending on the plan selected. By providing payment information, you authorise Zedral to charge the applicable fees to your designated payment method.</p>
        <h3 className="font-medium text-foreground mb-1">Taxes</h3>
        <p className="mb-3">All fees are exclusive of applicable taxes including Goods and Services Tax (GST) as levied under Indian law. You are responsible for paying all applicable taxes in connection with your Subscription.</p>
        <h3 className="font-medium text-foreground mb-1">Price Changes</h3>
        <p className="mb-3">Zedral reserves the right to modify Subscription pricing at any time. We will provide at least thirty (30) days written notice before any price change takes effect. Continued use of the Platform after the price change constitutes acceptance of the new pricing.</p>
        <h3 className="font-medium text-foreground mb-1">Late Payments</h3>
        <p>Overdue amounts may accrue interest at a rate of 1.5% per month or the maximum rate permitted by applicable law, whichever is lower. Zedral reserves the right to suspend access for accounts with outstanding balances.</p>
      </>
    ),
  },
  {
    num: "06",
    title: "Free Trials and Promotional Access",
    content: (
      <>
        <p className="mb-3">Zedral may offer free trial access to the Platform for a limited period. Unless otherwise specified, free trials are available once per organisation. At the end of the trial period, continued access requires activation of a paid Subscription.</p>
        <p>Zedral reserves the right to modify or discontinue free trial offers at any time without notice.</p>
      </>
    ),
  },
  {
    num: "07",
    title: "Cancellation and Refund Policy",
    content: (
      <>
        <h3 className="font-medium text-foreground mb-1">Cancellation by Client</h3>
        <p className="mb-3">You may cancel your Subscription at any time by contacting <a href="mailto:hello@zedral.com" className="text-foreground underline hover:no-underline">hello@zedral.com</a> or through your account settings. Cancellation takes effect at the end of the current billing period. You will retain access to the Platform until the end of the paid period.</p>
        <h3 className="font-medium text-foreground mb-1">Refunds</h3>
        <p className="mb-3">Zedral does not provide refunds for partial months or unused portions of an annual Subscription, except where required by applicable law. If you cancel an annual Subscription within seven (7) days of the initial purchase and have not made significant use of the Platform, you may be eligible for a pro-rated refund at Zedral's sole discretion.</p>
        <h3 className="font-medium text-foreground mb-1">Cancellation by Zedral</h3>
        <p>Zedral may terminate or suspend your Subscription immediately if you breach these Terms or engage in conduct that is harmful to Zedral, other clients, or third parties. In the event of termination for cause, no refund will be issued.</p>
      </>
    ),
  },
  {
    num: "08",
    title: "Acceptable Use Policy",
    content: (
      <>
        <p className="mb-3">You agree not to use the Platform for any purpose that is unlawful or prohibited by these Terms. Specifically, you must not:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Use the Platform in any manner that violates applicable Indian laws or international regulations</li>
          <li>Attempt to gain unauthorised access to any part of the Platform, its systems, or networks</li>
          <li>Reverse engineer, decompile, or attempt to derive the source code of the Platform</li>
          <li>Introduce viruses, malware, or other harmful code into the Platform</li>
          <li>Scrape, crawl, or use automated means to access the Platform without Zedral's express written consent</li>
          <li>Resell, sublicense, or otherwise commercialise access to the Platform without authorisation</li>
          <li>Use the Platform to monitor individuals in violation of applicable privacy laws</li>
          <li>Misrepresent your identity or affiliation in connection with your use of the Platform</li>
        </ul>
        <p>Zedral reserves the right to investigate and take appropriate action, including suspension or termination of access, against any user who violates this policy.</p>
      </>
    ),
  },
  {
    num: "09",
    title: "Intellectual Property Rights",
    content: (
      <>
        <h3 className="font-medium text-foreground mb-1">Zedral's Intellectual Property</h3>
        <p className="mb-3">The Platform, including all software, algorithms, models, designs, interfaces, and documentation, is the exclusive property of Zedral Technologies Private Limited and is protected by applicable intellectual property laws. These Terms do not grant you any ownership rights in the Platform.</p>
        <h3 className="font-medium text-foreground mb-1">Limited Licence to Client</h3>
        <p className="mb-3">Subject to your compliance with these Terms and payment of applicable fees, Zedral grants you a limited, non-exclusive, non-transferable, revocable licence to access and use the Platform solely for your internal business operations during the Subscription term.</p>
        <h3 className="font-medium text-foreground mb-1">Client Data Ownership</h3>
        <p className="mb-3">You retain all ownership rights to your Client Data. By uploading or submitting data to the Platform, you grant Zedral a limited, non-exclusive licence to process and use your Client Data solely for the purpose of delivering the Platform services to you.</p>
        <h3 className="font-medium text-foreground mb-1">Feedback</h3>
        <p>If you provide Zedral with feedback, suggestions, or ideas regarding the Platform, you grant Zedral a perpetual, irrevocable, royalty-free licence to use such feedback for any purpose, including improving the Platform.</p>
      </>
    ),
  },
  {
    num: "10",
    title: "Data Processing, Privacy, and Security",
    content: (
      <>
        <h3 className="font-medium text-foreground mb-1">Privacy Policy</h3>
        <p className="mb-3">Zedral's collection and use of personal data is governed by our Privacy Policy, available at www.zedral.ai/privacy, which is incorporated into these Terms by reference.</p>
        <h3 className="font-medium text-foreground mb-1">Data Security</h3>
        <p className="mb-3">Zedral implements industry-standard technical and organisational measures to protect Client Data, including end-to-end encryption, secure infrastructure, and role-based access controls. However, no method of transmission over the internet is completely secure and Zedral cannot guarantee absolute security.</p>
        <h3 className="font-medium text-foreground mb-1">Video Data Retention</h3>
        <p className="mb-3">Where the Platform processes video or image streams, such data is processed in real time and deleted within ten (10) minutes of processing. Only structured operational analytics and performance metrics derived from such streams are retained.</p>
        <h3 className="font-medium text-foreground mb-1">Data Localisation</h3>
        <p className="mb-3">Zedral processes and stores data in accordance with applicable Indian data protection laws, including the Digital Personal Data Protection Act, 2023 (DPDPA), where applicable.</p>
        <h3 className="font-medium text-foreground mb-1">Client Responsibilities</h3>
        <p>You are responsible for ensuring that your use of the Platform complies with all applicable data protection and privacy laws, including obtaining any necessary consents from employees or workers whose operational data may be processed through the Platform.</p>
      </>
    ),
  },
  {
    num: "11",
    title: "Confidentiality",
    content: (
      <>
        <p className="mb-3">Both parties agree to keep confidential all Confidential Information received from the other party and to use such information only for purposes contemplated under these Terms. Each party agrees to protect the other's Confidential Information using at least the same degree of care it uses for its own confidential information, but in no event less than reasonable care.</p>
        <p>Confidentiality obligations do not apply to information that: (a) is or becomes publicly available through no fault of the receiving party; (b) was already known to the receiving party; (c) is independently developed without reference to the Confidential Information; or (d) is required to be disclosed by law or court order, provided the disclosing party is given prompt notice where legally permissible.</p>
      </>
    ),
  },
  {
    num: "12",
    title: "Disclaimers and Limitation of Liability",
    content: (
      <>
        <h3 className="font-medium text-foreground mb-1">"As Is" Service</h3>
        <p className="mb-3">The Platform is provided "as is" and "as available" without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
        <h3 className="font-medium text-foreground mb-1">No Guarantee of Results</h3>
        <p className="mb-3">Zedral does not warrant that use of the Platform will result in specific operational improvements, production targets, efficiency gains, or business outcomes. Insights provided by the Platform are advisory in nature only.</p>
        <h3 className="font-medium text-foreground mb-1">Limitation of Liability</h3>
        <p className="mb-3">To the maximum extent permitted by applicable law, Zedral's total cumulative liability for all claims arising from or related to these Terms shall not exceed the total fees paid by you in the twelve (12) months immediately preceding the claim.</p>
        <h3 className="font-medium text-foreground mb-1">Exclusion of Consequential Damages</h3>
        <p>In no event shall Zedral be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, loss of data, business interruption, or loss of goodwill, even if Zedral has been advised of the possibility of such damages.</p>
      </>
    ),
  },
  {
    num: "13",
    title: "Indemnification",
    content: (
      <>
        <p className="mb-3">You agree to indemnify, defend, and hold harmless Zedral, its directors, officers, employees, agents, and licensors from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or relating to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Your use of or access to the Platform</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of any applicable law or regulation</li>
          <li>Your infringement of any third-party rights, including intellectual property or privacy rights</li>
          <li>Any Client Data submitted by you to the Platform</li>
        </ul>
      </>
    ),
  },
  {
    num: "14",
    title: "Term and Termination",
    content: (
      <>
        <h3 className="font-medium text-foreground mb-1">Term</h3>
        <p className="mb-3">These Terms commence on the date you first access or use the Platform and continue for as long as you maintain an active Subscription or account, unless earlier terminated.</p>
        <h3 className="font-medium text-foreground mb-1">Termination for Convenience</h3>
        <p className="mb-3">Either party may terminate these Terms at any time upon written notice. If you terminate, your access will continue until the end of your current billing period.</p>
        <h3 className="font-medium text-foreground mb-1">Termination for Cause</h3>
        <p className="mb-3">Zedral may immediately suspend or terminate your access if you breach any material provision of these Terms and fail to remedy the breach within fourteen (14) days of written notice.</p>
        <h3 className="font-medium text-foreground mb-1">Effect of Termination</h3>
        <p className="mb-3">Upon termination, your licence to use the Platform immediately ceases. Zedral will retain Client Data for thirty (30) days following termination, after which it will be permanently deleted. You may request an export of your data within this window.</p>
        <h3 className="font-medium text-foreground mb-1">Survival</h3>
        <p>Clauses relating to intellectual property, confidentiality, limitation of liability, indemnification, and governing law shall survive termination of these Terms.</p>
      </>
    ),
  },
  {
    num: "15",
    title: "Modifications to the Platform and Terms",
    content: (
      <>
        <p className="mb-3">Zedral reserves the right to modify, update, or discontinue the Platform or any features thereof at any time, with or without notice. Zedral will endeavour to provide advance notice of material changes that significantly affect functionality.</p>
        <p>Zedral may update these Terms from time to time. We will notify you of material changes by email or by posting a notice on the Platform. Your continued use of the Platform after any such changes constitutes acceptance of the updated Terms.</p>
      </>
    ),
  },
  {
    num: "16",
    title: "Third-Party Integrations and Services",
    content: (
      <>
        <p className="mb-3">The Platform may integrate with or link to third-party services, software, or infrastructure providers. Zedral does not endorse or assume responsibility for any third-party services. Your use of any third-party service is subject to that provider's terms and conditions.</p>
        <p>Zedral shall not be liable for any loss or damage arising from your use of third-party services integrated with the Platform.</p>
      </>
    ),
  },
  {
    num: "17",
    title: "Governing Law and Dispute Resolution",
    content: (
      <>
        <h3 className="font-medium text-foreground mb-1">Governing Law</h3>
        <p className="mb-3">These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.</p>
        <h3 className="font-medium text-foreground mb-1">Jurisdiction</h3>
        <p className="mb-3">Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in India. You consent to the personal jurisdiction of such courts.</p>
        <h3 className="font-medium text-foreground mb-1">Informal Resolution</h3>
        <p>Before initiating any formal legal proceedings, both parties agree to attempt to resolve disputes informally by contacting Zedral at <a href="mailto:hello@zedral.com" className="text-foreground underline hover:no-underline">hello@zedral.com</a>. Both parties will make good faith efforts to resolve the dispute within thirty (30) days of notice.</p>
      </>
    ),
  },
  {
    num: "18",
    title: "General Provisions",
    content: (
      <>
        <h3 className="font-medium text-foreground mb-1">Entire Agreement</h3>
        <p className="mb-3">These Terms, together with our Privacy Policy and any applicable order form or service agreement, constitute the entire agreement between you and Zedral with respect to the Platform and supersede all prior agreements.</p>
        <h3 className="font-medium text-foreground mb-1">Severability</h3>
        <p className="mb-3">If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remaining Terms remain in full force and effect.</p>
        <h3 className="font-medium text-foreground mb-1">Waiver</h3>
        <p className="mb-3">Zedral's failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision unless acknowledged and agreed to in writing.</p>
        <h3 className="font-medium text-foreground mb-1">Assignment</h3>
        <p className="mb-3">You may not assign or transfer your rights or obligations under these Terms without Zedral's prior written consent. Zedral may freely assign these Terms in connection with a merger, acquisition, or sale of assets.</p>
        <h3 className="font-medium text-foreground mb-1">Force Majeure</h3>
        <p className="mb-3">Zedral shall not be liable for any delay or failure to perform resulting from causes beyond its reasonable control, including acts of God, war, terrorism, government action, natural disasters, internet outages, or failure of third-party services.</p>
        <h3 className="font-medium text-foreground mb-1">Notices</h3>
        <p>All legal notices under these Terms must be in writing and sent to <a href="mailto:hello@zedral.com" className="text-foreground underline hover:no-underline">hello@zedral.com</a>. Notices will be deemed received one business day after sending if sent by email with confirmation of receipt.</p>
      </>
    ),
  },
  {
    num: "19",
    title: "Contact Information",
    content: (
      <p>
        If you have any questions, concerns, or requests regarding these Terms, please contact us at{" "}
        <a href="mailto:hello@zedral.com" className="text-foreground underline hover:no-underline">hello@zedral.com</a>.
      </p>
    ),
  },
];

const TermsAndConditions = () => (
  <div className="min-h-screen bg-background">
    <SEO 
      title="Terms & Conditions: Zedral Platform Agreement"
      description="Read Zedral's terms and conditions for using our AI-powered operational intelligence platform. Governing law: India. Effective February 2026."
      url="https://zedral.com/terms"
      keywords="Zedral terms and conditions, manufacturing software legal agreement, operational intelligence platform terms, Zedral terms of service India, SaaS terms India, B2B software terms"
    />
    <Navbar />
    <main className="max-w-3xl mx-auto px-6 py-24 md:py-32">
      <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-6">
        Terms &amp; Conditions
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

export default TermsAndConditions;
