import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Cookie Policy",
  `Cookie policy for ${site.legalName}. Learn how we use cookies and how you can manage them.`,
  { canonical: "/cookies", noIndex: true }
);

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy">
      <p>
        This Cookie Policy explains how {site.legalName} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) uses cookies 
        and similar tracking technologies when you visit our website. It details what these technologies are, why we use them, 
        and your rights to control our use of them.
      </p>
      <p>
        We advise reading this policy alongside our comprehensive Privacy Policy. By continuing to browse our site, you agree to our 
        use of cookies as configured in your preferences.
      </p>

      {/* SECTION 1: What are cookies? */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        1. What are cookies and tracking technologies?
      </h3>
      <p>
        Cookies are small text files containing a string of alphanumeric characters that are downloaded and stored on your computer 
        or mobile device when you access certain web pages. They serve as a memory for the website, allowing it to remember 
        your device, browse settings, or past activity.
      </p>
      <ul className="list-inside list-disc space-y-2 pl-4 text-sm text-slate-600 dark:text-zinc-400 font-sans">
        <li><strong>First-Party Cookies:</strong> Set directly by Leadora Systems, primarily used to support basic security, preserve state, and keep our layout responsive.</li>
        <li><strong>Third-Party Cookies:</strong> Set by external domains or partner services (such as Google Analytics or advertising networks) to support analytics, traffic monitoring, or social media integration.</li>
        <li><strong>Session Cookies:</strong> Temporary files that expire and are automatically deleted once you close your browser tab or terminate your session.</li>
        <li><strong>Persistent Cookies:</strong> Remain stored on your device for a predetermined period or until you manually erase them, allowing us to recognize your browser on your next visit.</li>
      </ul>

      {/* SECTION 2: Why we use cookies */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        2. How we categorize and use cookies
      </h3>
      <p>
        To align with modern GDPR regulations, we divide the cookies we use into three distinct classifications. You can customize 
        these at any time using our Cookie Preference Center.
      </p>

      {/* Category A */}
      <div className="space-y-1.5 mt-4">
        <h4 className="font-montserrat text-[14px] font-bold text-navy dark:text-white">
          A. Strictly Essential Cookies (Always Active)
        </h4>
        <p className="text-sm text-slate-600 dark:text-zinc-400">
          These cookies are essential to enable you to navigate our site securely and use its basic features. Without these cookies, 
          fundamental services like secure page load, contact form submission, and cookie preference memory cannot be provided.
        </p>
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-xs text-left border-collapse border border-glass-border">
            <thead>
              <tr className="bg-slate-50 dark:bg-zinc-900/50">
                <th className="p-2 border border-glass-border font-bold">Cookie Name</th>
                <th className="p-2 border border-glass-border font-bold">Provider</th>
                <th className="p-2 border border-glass-border font-bold">Purpose</th>
                <th className="p-2 border border-glass-border font-bold">Expiry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-glass-border font-mono font-semibold">leadora-cookie-consent</td>
                <td className="p-2 border border-glass-border">First-Party</td>
                <td className="p-2 border border-glass-border">Remembers your custom cookie preferences so the banner doesn&apos;t block you.</td>
                <td className="p-2 border border-glass-border">Session</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Category B */}
      <div className="space-y-1.5 mt-6">
        <h4 className="font-montserrat text-[14px] font-bold text-navy dark:text-white">
          B. Performance &amp; Analytics Cookies (Optional)
        </h4>
        <p className="text-sm text-slate-600 dark:text-zinc-400">
          These cookies gather aggregated, anonymous information about how visitors interact with our solutions, case studies, and career pages. 
          This help us measure site performance, find out which pages are most popular, identify load-time delays, and continuously optimize 
          our website speed and user interface.
        </p>
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-xs text-left border-collapse border border-glass-border">
            <thead>
              <tr className="bg-slate-50 dark:bg-zinc-900/50">
                <th className="p-2 border border-glass-border font-bold">Cookie Name</th>
                <th className="p-2 border border-glass-border font-bold">Provider</th>
                <th className="p-2 border border-glass-border font-bold">Purpose</th>
                <th className="p-2 border border-glass-border font-bold">Expiry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-glass-border font-mono font-semibold">_ga, _ga_*</td>
                <td className="p-2 border border-glass-border">Google Analytics 4</td>
                <td className="p-2 border border-glass-border">Collects anonymous visitor counts, session details, and click maps to evaluate traffic trends.</td>
                <td className="p-2 border border-glass-border">2 Years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Category C */}
      <div className="space-y-1.5 mt-6">
        <h4 className="font-montserrat text-[14px] font-bold text-navy dark:text-white">
          C. Marketing &amp; Personalization Cookies (Optional)
        </h4>
        <p className="text-sm text-slate-600 dark:text-zinc-400">
          We may use these cookies to understand the performance of our promotional campaigns, social media posts, and online ads. 
          They track referral links to see if you discovered our company via an external directory or ad platform, ensuring we deliver 
          more tailored technical insights and relevant recommendations to you.
        </p>
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-xs text-left border-collapse border border-glass-border">
            <thead>
              <tr className="bg-slate-50 dark:bg-zinc-900/50">
                <th className="p-2 border border-glass-border font-bold">Cookie Name</th>
                <th className="p-2 border border-glass-border font-bold">Provider</th>
                <th className="p-2 border border-glass-border font-bold">Purpose</th>
                <th className="p-2 border border-glass-border font-bold">Expiry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-glass-border font-mono font-semibold">_fbp, _li_dnd</td>
                <td className="p-2 border border-glass-border">Meta / LinkedIn Ads</td>
                <td className="p-2 border border-glass-border">Analyzes ad conversion success and guides customized technical campaigns on business networks.</td>
                <td className="p-2 border border-glass-border">3 Months</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 3: Managing your cookies */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        3. How to manage, block, or delete cookies
      </h3>
      <p>
        You have the absolute right to choose whether to accept or decline non-essential cookies. You can manage your choices 
        through multiple channels:
      </p>
      <ul className="list-inside list-disc space-y-2 pl-4 text-sm text-slate-600 dark:text-zinc-400 font-sans">
        <li><strong>Preference Center:</strong> You can adjust, toggle off, or reactivate individual cookie categories directly via our <strong>Cookie Preferences</strong> popup box available at the bottom corner of our web pages.</li>
        <li><strong>Browser Controls:</strong> You can configure or amend your browser settings to automatically accept, alert, or completely reject cookies. Links to instructions for popular browsers:
          <ul className="list-none pl-4 mt-1.5 space-y-1 text-xs">
            <li>• <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">Google Chrome Guide</a></li>
            <li>• <a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">Apple Safari Guide</a></li>
            <li>• <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">Mozilla Firefox Guide</a></li>
            <li>• <a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9a73-d098-6178-e525683d04a2" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">Microsoft Edge Guide</a></li>
          </ul>
        </li>
        <li><strong>Universal Opt-Out:</strong> You can also opt-out of aggregated third-party tracking networks globally by visiting the <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">Digital Advertising Alliance Opt-Out Portal</a>.</li>
      </ul>
      <p className="text-xs text-amber-600 font-medium bg-amber-50 dark:bg-amber-950/10 dark:text-amber-400 border border-amber-200/50 dark:border-amber-950/30 rounded-lg p-3 mt-4">
        ⚠️ <strong>Note:</strong> Disabling strictly essential cookies will affect site stability and prevent form operations or preference remembering from functioning correctly.
      </p>

      {/* SECTION 4: Revisions to this policy */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        4. Policy updates
      </h3>
      <p>
        We may update this Cookie Policy from time to time to reflect modifications in our technology stack, hosting structures, 
        or legal regulations. All amendments will be published on this page with an updated &quot;Last updated&quot; tag at the top. 
        Please review this document periodically to stay informed about our tracking guidelines.
      </p>

      {/* SECTION 5: Contact Card */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        5. Contact Us
      </h3>
      <p>
        If you have questions, feedback, or compliance inquiries regarding our cookie use or tracking technologies, please feel 
        free to reach out to our administration:
      </p>
      
      <div className="rounded-xl border border-glass-border bg-slate-50/50 p-5 mt-4 space-y-3 dark:bg-zinc-900/10 dark:border-zinc-800/80">
        <p className="font-montserrat text-sm font-bold text-navy dark:text-white m-0">
          Leadora Systems Private Limited
        </p>
        <div className="text-xs text-slate-600 dark:text-zinc-400 space-y-2.5 leading-relaxed font-sans">
          <p className="m-0">
            <strong>📍 Head Office:</strong> {site.location}
          </p>
          <p className="m-0">
            <strong>✉️ Corporate Email:</strong>{" "}
            <a href={`mailto:${site.email}`} className="text-blue font-semibold hover:underline">
              {site.email}
            </a>
          </p>
          <p className="m-0">
            <strong>📞 Phone Contact:</strong>{" "}
            <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="text-blue font-semibold hover:underline">
              {site.phone}
            </a>
          </p>
          <p className="m-0">
            <strong>⏰ Support Timing:</strong> {site.hours}
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
