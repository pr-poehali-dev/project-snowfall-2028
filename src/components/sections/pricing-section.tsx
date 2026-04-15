import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"
import type { translations } from "@/lib/i18n"

type Props = {
  scrollToSection?: (index: number) => void
  t: typeof translations["ru"]["pricing"]
}

export function PricingSection({ scrollToSection, t }: Props) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {t.title}
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">{t.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:gap-20">
          {/* Free */}
          <div
            className={`flex flex-col border border-foreground/10 p-6 transition-all duration-700 md:p-10 ${
              isVisible ? "opacity-100 translate-x-0" : "-translate-x-16 opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="mb-6">
              <p className="mb-1 font-mono text-xs uppercase tracking-widest text-foreground/50">{t.freeLabel}</p>
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-5xl font-light text-foreground md:text-6xl">0 ₽</span>
                <span className="font-mono text-sm text-foreground/50">{t.freePeriod}</span>
              </div>
            </div>

            <ul className="mb-8 flex-1 space-y-3">
              {t.freeFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <Icon name="Check" size={14} className="shrink-0 text-foreground/50" />
                  <span className="text-sm text-foreground/80 md:text-base">{f}</span>
                </li>
              ))}
            </ul>

            <MagneticButton variant="secondary" size="lg" onClick={() => scrollToSection?.(5)}>
              {t.ctaFree}
            </MagneticButton>
          </div>

          {/* Premium */}
          <div
            className={`relative flex flex-col border border-primary/50 bg-primary/5 p-6 transition-all duration-700 md:p-10 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="absolute -top-3 left-6 bg-background px-3">
              <span className="font-mono text-xs uppercase tracking-widest text-primary">{t.popular}</span>
            </div>

            <div className="mb-6">
              <p className="mb-1 font-mono text-xs uppercase tracking-widest text-foreground/50">{t.proLabel}</p>
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-5xl font-light text-foreground md:text-6xl">399 ₽</span>
                <span className="font-mono text-sm text-foreground/50">{t.proPeriod}</span>
              </div>
              <p className="mt-1 font-mono text-xs text-foreground/40">{t.proNote}</p>
            </div>

            <ul className="mb-8 flex-1 space-y-3">
              {t.proFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <Icon name="Check" size={14} className="shrink-0 text-primary" />
                  <span className="text-sm text-foreground/90 md:text-base">{f}</span>
                </li>
              ))}
            </ul>

            <MagneticButton variant="primary" size="lg" onClick={() => scrollToSection?.(5)}>
              {t.ctaPro}
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}
