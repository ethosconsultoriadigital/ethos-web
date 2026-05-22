import { ContactForm } from "@/app/contacto/contact-form";
import { SectionImage } from "@/components/brand/section-image";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Contacto",
  description:
    "Formulario de contacto confidencial con ETHOS. Consultoría en reputación digital y estrategia institucional en México.",
};

export default function ContactoPage() {
  return (
    <Section className="pt-12">
      <SectionHeading
        eyebrow="Contacto"
        title="Conversemos con discreción"
        description="Complete el formulario y nuestro equipo senior responderá en menos de 24 horas hábiles. Toda la información se trata de forma confidencial."
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <FadeIn className="hidden lg:block">
          <SectionImage
            imageKey="institution"
            aspectClassName="aspect-[4/5]"
            sizes="480px"
          />
        </FadeIn>
        <FadeIn>
        <Card className="border-border/60 bg-card/50 lg:max-w-none">
          <CardHeader>
            <CardTitle className="text-ethos-white">
              Solicitud de consulta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
