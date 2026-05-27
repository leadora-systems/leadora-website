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
        By accessing this website operated by {site.legalName}, you agree to
        these terms. If you do not agree, please do not use this site.
      </p>
      <h3 className="font-montserrat text-lg font-bold text-navy">Use of website</h3>
      <p>
        Content on this site is for general information only. We make reasonable
        efforts to keep information accurate but do not warrant completeness or
        fitness for a particular purpose.
      </p>
      <h3 className="font-montserrat text-lg font-bold text-navy">Intellectual property</h3>
      <p>
        All branding, design, and content are owned by {site.legalName} unless
        otherwise stated. You may not reproduce materials without written
        permission.
      </p>
      <h3 className="font-montserrat text-lg font-bold text-navy">Limitation of liability</h3>
      <p>
        We are not liable for indirect or consequential damages arising from use
        of this website or reliance on its content.
      </p>
      <h3 className="font-montserrat text-lg font-bold text-navy">Governing law</h3>
      <p>These terms are governed by the laws of India.</p>
    </LegalLayout>
  );
}
