import { SectionImage } from "@/components/brand/section-image";
import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { whyEthos } from "@/lib/content";

export function WhyEthosSection() {
  return (
    <Section id="por-que-ethos">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Por qué ETHOS"
            title="Un nombre con peso. Una práctica con método."
            description="Del griego ethos — carácter, credibilidad — al estándar operativo que su institución necesita en el entorno digital."
            className="mb-0"
          />
          <FadeIn delay={0.06}>
            <SectionImage
              imageKey="credibility"
              aspectClassName="aspect-[16/10] max-w-md"
              sizes="400px"
            />
          </FadeIn>
        </div>

        <div className="space-y-5">
          {whyEthos.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <article className="border-l-2 border-ethos-gold/50 py-1 pl-6">
                <h3 className="text-lg font-semibold text-ethos-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ethos-muted md:text-base">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
