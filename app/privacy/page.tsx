import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Privacy Policy",
  `Privacy policy for ${site.legalName}. Learn how we collect, use, and protect your personal data.`,
  { canonical: "/privacy", noIndex: true }
);

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        {site.legalName} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects
        your privacy. This policy describes how we collect, use, and protect
        information when you visit our website or submit forms.
      </p>
      <h3 className="font-montserrat text-lg font-bold text-navy">Information we collect</h3>
      <p>
        When you contact us or apply for a role, we may collect your name, email
        address, phone number, company name, and any message you provide.
      </p>
      <h3 className="font-montserrat text-lg font-bold text-navy">How we use information</h3>
      <p>
        We use this information solely to respond to inquiries, process job
        applications, and improve our services. We do not sell your personal data.
      </p>
      <h3 className="font-montserrat text-lg font-bold text-navy">Data retention</h3>
      <p>
        We retain contact and application data only as long as necessary for
        business purposes or as required by law.
      </p>
      <h3 className="font-montserrat text-lg font-bold text-navy">Contact</h3>
      <p>
        For privacy-related questions, email{" "}
        <a href={`mailto:${site.email}`} className="text-blue">
          {site.email}
        </a>
        .
      </p>
    </LegalLayout>
  );
}
