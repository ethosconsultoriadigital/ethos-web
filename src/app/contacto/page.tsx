import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
      <FadeIn>
        <Card className="mx-auto max-w-xl border-border/60 bg-card/50">
          <CardHeader>
            <CardTitle className="text-ethos-white">
              Solicitud de consulta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" action="#" method="post">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-ethos-muted">
                    Nombre completo
                  </label>
                  <Input id="name" name="name" required placeholder="Su nombre" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-ethos-muted">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="correo@institucion.mx"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm text-ethos-muted">
                  Institución / Organización
                </label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Opcional"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-ethos-muted">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Describa brevemente su contexto y objetivos."
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Enviar solicitud
              </Button>
              <p className="text-center text-xs text-ethos-muted">
                La integración con base de datos se activará próximamente.
              </p>
            </form>
          </CardContent>
        </Card>
      </FadeIn>
    </Section>
  );
}
