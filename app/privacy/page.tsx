import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Privacy Policy",
  `Privacy policy for ${site.legalName}.`
);

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        {site.legalName} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects
        your privacy. This policy describes how we collect, use, and protect
        information when you visit our website or submit forms.
      </p>

      {/* SECTION 1: Information We Collect (Retained & Enhanced) */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        1. Information we collect
      </h3>
      <p>
        When you contact us, apply for a role, or interact with our systems, we may collect:
      </p>
      <ul className="list-inside list-disc space-y-2 pl-4 text-sm text-slate-600 dark:text-zinc-400">
        <li><strong>Contact Details:</strong> Your name, email address, phone number, and physical or business address.</li>
        <li><strong>Professional Information:</strong> Your company name, job title, and professional background.</li>
        <li><strong>Employment Application Data:</strong> Your resume, CV, work history, and portfolio links (such as LinkedIn or GitHub) when you apply for a job on our Careers portal.</li>
        <li><strong>Communication Logs:</strong> Any message, feedback, or custom information you submit via our Contact or Careers forms.</li>
      </ul>

      {/* SECTION 2: How We Use Information (Retained & Enhanced) */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        2. How we use information
      </h3>
      <p>
        We use this information solely for legitimate business practices:
      </p>
      <ul className="list-inside list-disc space-y-2 pl-4 text-sm text-slate-600 dark:text-zinc-400">
        <li>To respond directly to your technical, project, or business inquiries.</li>
        <li>To evaluate, process, and communicate with you regarding your application for active job openings at Leadora Systems.</li>
        <li>To deliver, maintain, optimize, and secure our website systems.</li>
      </ul>
      <p>
        We do not sell, rent, lease, or trade your personal data to any third party for marketing or advertising purposes.
      </p>

      {/* NEW SECTION 3: Data Security */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        3. Data Security
      </h3>
      <p>
        We implement industry-standard administrative, physical, and technological security controls to guard your personal data:
      </p>
      <ul className="list-inside list-disc space-y-2 pl-4 text-sm text-slate-600 dark:text-zinc-400">
        <li><strong>Encryption:</strong> Data transmitted via our online contact and career forms is securely encrypted using Hypertext Protocol Secure (HTTPS) and Transport Layer Security (TLS).</li>
        <li><strong>Access Controls:</strong> Only authorized Leadora Systems administrators, HR personnel, and security architects have access to the data you submit.</li>
        <li><strong>System Monitoring:</strong> We continuously monitor our servers and cloud containers on Microsoft Azure to protect against unauthorized access, alterations, disclosure, or destruction of your data.</li>
      </ul>

      {/* NEW SECTION 4: Third-Party Services */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        4. Third-Party Services
      </h3>
      <p>
        We may collaborate with trusted third-party cloud architectures and performance services to process your inquiries efficiently:
      </p>
      <ul className="list-inside list-disc space-y-2 pl-4 text-sm text-slate-600 dark:text-zinc-400">
        <li><strong>Infrastructure Providers:</strong> Secure hosting environments and databases running on Microsoft Azure.</li>
        <li><strong>Form Processing Solutions:</strong> Secure script pathways (such as automated secure workflows) to store application and contact form entries.</li>
        <li><strong>Analytics Providers:</strong> Performance-based analytics tools (such as Google Analytics 4) to monitor website traffic and ensure optimal speed, subject to your cookie selections.</li>
      </ul>
      <p>
        All third-party services are contractually bound to process your personal data only on our instructions and under strict confidentiality and security regulations.
      </p>

      {/* SECTION 5: Data Retention (Retained & Enhanced) */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        5. Data retention
      </h3>
      <p>
        We retain contact, business inquiry, and job application data only as long as necessary:
      </p>
      <ul className="list-inside list-disc space-y-2 pl-4 text-sm text-slate-600 dark:text-zinc-400">
        <li><strong>General Enquiries:</strong> Retained for the duration needed to resolve your query and maintain business relations.</li>
        <li><strong>Careers & Applications:</strong> Retained for ongoing recruitment evaluations or as required under local labor regulations.</li>
        <li><strong>Legal Compliance:</strong> Retained as required to satisfy our administrative, tax, audit, or legal compliance mandates.</li>
      </ul>

      {/* NEW SECTION 6: User Rights */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        6. User Rights
      </h3>
      <p>
        Depending on your physical location or local regulations (such as GDPR or other state statutes), you hold distinct legal rights regarding your personal information:
      </p>
      <ul className="list-inside list-disc space-y-2 pl-4 text-sm text-slate-600 dark:text-zinc-400">
        <li><strong>Right to Access:</strong> You can request a summary or a direct copy of the personal details we hold about you.</li>
        <li><strong>Right to Rectification:</strong> You can ask us to correct, update, or amend any inaccurate or incomplete details.</li>
        <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> You can request that we delete your contact or job application records completely from our systems, subject to certain exceptions.</li>
        <li><strong>Right to Restrict or Object:</strong> You can ask us to halt active processing of your data, or withdraw prior consent at any time.</li>
      </ul>
      <p>
        To exercise any of these rights, please email us directly with your request details.
      </p>

      {/* NEW SECTION 7: Changes to This Privacy Policy */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        7. Changes to This Privacy Policy
      </h3>
      <p>
        We reserve the right to revise or update this Privacy Policy periodically to reflect technological upgrades, legal changes, or operational enhancements. 
      </p>
      <p>
        Any revisions will be posted on this page with an updated &quot;Last updated&quot; timestamp at the top. We encourage you to review this page regularly to stay informed about how we safeguard your personal information.
      </p>

      {/* NEW SECTION 8: Complete Contact Information */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        8. Complete Contact Information
      </h3>
      <p>
        If you have questions, inquiries, complaints, or wishes regarding this policy, or if you need to access, correct, or erase your information, feel free to reach out to our privacy board:
      </p>
      <div className="rounded-xl border border-glass-border bg-slate-50/50 p-5 mt-4 space-y-3 dark:bg-zinc-900/10 dark:border-zinc-800/80">
        <p className="font-montserrat text-sm font-bold text-navy dark:text-white m-0">
          Leadora Systems Private Limited
        </p>
        <div className="text-xs text-slate-600 dark:text-zinc-400 space-y-2.5 leading-relaxed font-sans">
          <p className="m-0">
            <strong>📍 Office Address:</strong> {site.location}
          </p>
          <p className="m-0">
            <strong>✉️ Privacy Board Email:</strong>{" "}
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
            <strong>⏰ Business Hours:</strong> {site.hours}
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
