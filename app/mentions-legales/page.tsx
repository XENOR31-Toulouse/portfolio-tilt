import type { Metadata } from "next";
import { profile } from "@/lib/profile";
import { delay } from "@/lib/motion";
import Scramble from "@/components/Scramble";
import HeroGlow from "@/components/HeroGlow";

export const metadata: Metadata = {
  title: "Mentions légales — Axel Ibanez",
  description:
    "Mentions légales et politique de confidentialité du portfolio d’Axel Ibanez.",
};

const email = profile.contact.email;

export default function LegalPage() {
  return (
    <main id="main-content">
      <section className="shell project-hero hero-stage">
        <HeroGlow />
        <p className="eyebrow enter" style={delay(0)}>
          <Scramble text="INFORMATIONS LÉGALES" />
        </p>
        <h1>
          <span className="hero-line">
            <span style={delay(1)}>Mentions légales</span>
          </span>
          <span className="hero-line">
            <em style={delay(2)}>& confidentialité.</em>
          </span>
        </h1>
        <p className="intro muted enter" style={delay(4)}>
          Dernière mise à jour : novembre 2026.
        </p>
      </section>

      <section className="shell legal-body">
        <article className="project-content">
          <h2>Éditeur du site</h2>
          <p>
            Ce site est un portfolio personnel, édité à titre non professionnel
            par {profile.name}, développeur full stack à Toulouse (France).
          </p>
          <p>
            Contact : <a href={`mailto:${email}`}>{email}</a>
            <br />
            Directeur de la publication : {profile.name}
          </p>

          <h2>Hébergement</h2>
          <p>
            Vercel Inc.
            <br />
            440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis
            <br />
            <a href="https://vercel.com" target="_blank" rel="noreferrer">
              vercel.com
            </a>
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes, le design et le code de ce site sont la propriété de{" "}
            {profile.name}, sauf mention contraire. Toute reproduction sans
            autorisation est interdite.
          </p>
          <p>
            Les noms, marques, logos et captures d’écran de réalisations
            appartiennent à leurs titulaires respectifs et sont présentés
            uniquement à titre de références professionnelles. Les polices
            Space Grotesk et Inter sont distribuées sous licence SIL Open Font
            License.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Ce site ne dépose aucun cookie, n’utilise aucun outil de mesure
            d’audience ou de publicité et ne contient aucun formulaire.
          </p>
          <ul>
            <li>
              <strong>Hébergement :</strong> comme tout hébergeur, Vercel
              enregistre des journaux techniques (adresse IP, navigateur, page
              consultée) nécessaires au fonctionnement et à la sécurité du site.
              Ces données peuvent être traitées hors de l’Union européenne,
              dans le cadre des garanties décrites dans la{" "}
              <a
                href="https://vercel.com/legal/privacy-notice"
                target="_blank"
                rel="noreferrer"
              >
                politique de confidentialité de Vercel
              </a>
              .
            </li>
            <li>
              <strong>Prise de contact :</strong> si vous m’écrivez par e-mail,
              vos coordonnées et votre message servent uniquement à vous
              répondre. Ils ne sont ni cédés ni utilisés à d’autres fins, et
              sont conservés le temps de nos échanges.
            </li>
          </ul>
          <p>
            Conformément au RGPD, vous disposez d’un droit d’accès, de
            rectification, d’effacement et d’opposition sur vos données. Pour
            l’exercer, écrivez à <a href={`mailto:${email}`}>{email}</a>. Vous
            pouvez également adresser une réclamation à la{" "}
            <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">
              CNIL
            </a>
            .
          </p>
        </article>
      </section>
    </main>
  );
}
