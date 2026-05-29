import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Terms & Conditions",
  `Terms and conditions for using ${site.legalName} website.`
);

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions">
      <p>
        Welcome to the website of {site.legalName} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). 
        By accessing, browsing, or using this website, you acknowledge that you have read, understood, 
        and agree to be bound by these Terms &amp; Conditions and to comply with all applicable laws and regulations.
      </p>
      <p>
        If you do not agree to these terms, please do not use this website. We recommend reading these terms 
        carefully alongside our Privacy Policy and Cookie Policy.
      </p>

      {/* SECTION 1: Use of Website */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        1. Use of Website &amp; Eligibility
      </h3>
      <p>
        Content on this site is provided for general informational purposes only, detailing our software development, 
        cloud consulting, and digital optimization capabilities.
      </p>
      <ul className="list-inside list-disc space-y-2 pl-4 text-sm text-slate-600 dark:text-zinc-400">
        <li><strong>Acceptable Use:</strong> You may use this website only for lawful purposes. You agree not to use the site in any way that violates national, state, or international laws.</li>
        <li><strong>Prohibited Behaviors:</strong> You must not attempt to disrupt the site infrastructure, upload malicious code (viruses, trojans, logic bombs), or engage in automated scraping, crawling, or data extraction without our prior written consent.</li>
        <li><strong>Accuracy of Information:</strong> While we make reasonable, continuous efforts to keep information on this website accurate, complete, and up-to-date, we do not warrant that all content is free from errors, omissions, or outdated material.</li>
      </ul>

      {/* SECTION 2: Intellectual Property */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        2. Intellectual Property Rights
      </h3>
      <p>
        All materials, codebases, structures, layouts, custom designs, logos, graphics, text, videos, and interface features 
        available on this website are the proprietary intellectual property of {site.legalName} unless otherwise explicitly stated.
      </p>
      <ul className="list-inside list-disc space-y-2 pl-4 text-sm text-slate-600 dark:text-zinc-400">
        <li><strong>Ownership Shield:</strong> These assets are protected by copyright, trademark, and other domestic and global intellectual property legislations.</li>
        <li><strong>Restricted Use:</strong> You are granted a limited, non-exclusive, non-transferable, and revocable license to access the site for informational and client evaluation purposes.</li>
        <li><strong>No Reproduction:</strong> You may not copy, modify, republish, distribute, sell, reverse-engineer, or commercially exploit any material or visual asset from this site without our express, prior written authorization.</li>
      </ul>

      {/* SECTION 3: Service Engagements & SOW */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        3. Professional Service Relationships
      </h3>
      <p>
        The informational content, showcases, case studies, or design illustrations featured on this website do not constitute 
        binding offers or professional agreements in themselves.
      </p>
      <ul className="list-inside list-disc space-y-2 pl-4 text-sm text-slate-600 dark:text-zinc-400">
        <li><strong>Formal Agreements:</strong> All active engineering, development, cloud infrastructure operations, or consultation services provided by Leadora Systems are governed solely by separate, signed Master Services Agreements (MSAs), Statements of Work (SOWs), and Service Level Agreements (SLAs).</li>
        <li><strong>Consultation Requests:</strong> Submitting an inquiry through our Consultation or Careers forms does not commit us to executing work, but acts as an introductory request to evaluate potential business or employment alignment.</li>
      </ul>

      {/* SECTION 4: External Third-Party Links */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        4. External Links &amp; Third-Party Content
      </h3>
      <p>
        Our website may contain links to third-party web pages, social portals, client projects, or tools that are not owned 
        or controlled by Leadora Systems.
      </p>
      <ul className="list-inside list-disc space-y-2 pl-4 text-sm text-slate-600 dark:text-zinc-400">
        <li><strong>No Endorsement:</strong> We do not verify, endorse, monitor, or accept liability for the content, privacy guidelines, terms of use, or operating performance of these external websites.</li>
        <li><strong>User Precaution:</strong> Clicking on external links is done completely at your own risk. We strongly advise you to inspect the terms and privacy conditions of any external portal you visit.</li>
      </ul>

      {/* SECTION 5: Limitation of Liability */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        5. Limitation of Liability
      </h3>
      <p>
        In no event shall {site.legalName}, its directors, officers, senior architects, partners, or employees be liable 
        for any direct, indirect, incidental, special, exemplary, consequential, or punitive damages (including, but not limited to, 
        loss of profits, business interruptions, data loss, or server downtime) resulting from:
      </p>
      <ul className="list-inside list-disc space-y-2 pl-4 text-sm text-slate-600 dark:text-zinc-400">
        <li>Your use of, or inability to access, the website, forms, or any information contained herein.</li>
        <li>Any technical disruption, slow load-times, or connectivity issues on our servers or cloud platforms.</li>
        <li>Your reliance on any visual blueprints, tech badges, case studies, or informational listings on the site.</li>
      </ul>
      <p>
        All content on this site is provided on an &quot;as is&quot; and &quot;as available&quot; basis, without warranties 
        of any kind, either express or implied.
      </p>

      {/* SECTION 6: Indemnification */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        6. Indemnification
      </h3>
      <p>
        You agree to defend, indemnify, and hold harmless {site.legalName}, its affiliates, officers, directors, and employees 
        from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses 
        (including attorney fees) arising from:
      </p>
      <ul className="list-inside list-disc space-y-2 pl-4 text-sm text-slate-600 dark:text-zinc-400">
        <li>Your violation of any clause within these Terms &amp; Conditions.</li>
        <li>Your misuse of this website or any of our proprietary assets.</li>
        <li>Your infringement of any copyright, trademark, or intellectual property laws on this site.</li>
      </ul>

      {/* SECTION 7: Governing Law */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        7. Governing Law &amp; Jurisdiction
      </h3>
      <p>
        These Terms &amp; Conditions, and any disputes, controversies, or claims arising from your use of this website, 
        shall be governed by and construed in accordance with the laws of **India**.
      </p>
      <p>
        You agree that any legal action, suit, or proceeding arising out of these terms shall be subject to the exclusive 
        jurisdiction of the courts located in **Hyderabad, Telangana, India**.
      </p>

      {/* SECTION 8: Modifications to Terms */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        8. Revisions to These Terms
      </h3>
      <p>
        We reserve the exclusive right to alter, modify, or replace these Terms &amp; Conditions at our discretion 
        at any time. Revisions will be made visible on this page with an updated &quot;Last updated&quot; marker at the top.
      </p>
      <p>
        By continuing to use this website after updates are published, you agree to be bound by the modified terms. 
        We recommend visiting this page regularly to keep abreast of our operational guidelines.
      </p>

      {/* SECTION 9: Corporate & Legal Contact */}
      <h3 className="font-montserrat text-lg font-bold text-navy mt-8 mb-4">
        9. Corporate &amp; Legal Contact Information
      </h3>
      <p>
        If you have any questions, clarifications, or requests regarding these Terms &amp; Conditions, please do not 
        hesitate to reach out to our administrative board:
      </p>
      
      <div className="rounded-xl border border-glass-border bg-slate-50/50 p-5 mt-4 space-y-3 dark:bg-zinc-900/10 dark:border-zinc-800/80">
        <p className="font-montserrat text-sm font-bold text-navy dark:text-white m-0">
          Leadora Systems Private Limited
        </p>
        <div className="text-xs text-slate-600 dark:text-zinc-400 space-y-2.5 leading-relaxed font-sans">
          <p className="m-0">
            <strong>📍 Corporate Office:</strong> {site.location}
          </p>
          <p className="m-0">
            <strong>✉️ Legal &amp; Compliance Email:</strong>{" "}
            <a href={`mailto:${site.email}`} className="text-blue font-semibold hover:underline">
              {site.email}
            </a>
          </p>
          <p className="m-0">
            <strong>📞 Office Phone:</strong>{" "}
            <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="text-blue font-semibold hover:underline">
              {site.phone}
            </a>
          </p>
          <p className="m-0">
            <strong>⏰ Support Hours:</strong> {site.hours}
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
