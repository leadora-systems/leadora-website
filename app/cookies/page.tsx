import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Cookie Policy",
  `Cookie policy for ${site.legalName}.`
);

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy">
      <p>
        This website may use cookies and similar technologies to improve
        experience and analyze traffic (e.g. Google Analytics when configured).
      </p>
      <h3 className="font-montserrat text-lg font-bold text-navy">What are cookies?</h3>
      <p>
        Cookies are small text files stored on your device. They help websites
        remember preferences and understand how visitors use the site.
      </p>
      <h3 className="font-montserrat text-lg font-bold text-navy">Cookies we may use</h3>
      <ul className="list-inside list-disc space-y-2">
        <li>Essential cookies for site functionality</li>
        <li>Analytics cookies (e.g. GA4) to measure traffic and performance</li>
      </ul>
      <h3 className="font-montserrat text-lg font-bold text-navy">Managing cookies</h3>
      <p>
        You can control cookies through your browser settings. Disabling cookies
        may affect some site features.
      </p>
      <h3 className="font-montserrat text-lg font-bold text-navy">Contact</h3>
      <p>
        Questions? Email{" "}
        <a href={`mailto:${site.email}`} className="text-blue">
          {site.email}
        </a>
        .
      </p>
    </LegalLayout>
  );
}
