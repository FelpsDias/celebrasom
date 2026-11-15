import { ArrowRight, Building2, HeartHandshake, Mic2, Wine } from 'lucide-react';
import { EventTypeOption, SERVICES, ServiceItem } from '../data/bandData';

interface ServicesSectionProps {
  onSelectService: (eventType: EventTypeOption) => void;
}

function ServiceIcon({ name }: { name: ServiceItem['iconName'] }) {
  const iconClass = 'w-5 h-5 text-[#D4AF37]';
  switch (name) {
    case 'wedding':
      return <HeartHandshake className={iconClass} aria-hidden="true" />;
    case 'corporate':
      return <Building2 className={iconClass} aria-hidden="true" />;
    case 'party':
      return <Wine className={iconClass} aria-hidden="true" />;
    case 'backing':
      return <Mic2 className={iconClass} aria-hidden="true" />;
  }
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section
      id="servicos"
      className="py-20 md:py-24 bg-[#151515] border-t border-[#D4AF37]/15"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium mb-2">
              Formações & Repertório
            </p>
            <h2
              className="font-serif-editorial text-3xl sm:text-4xl text-[#FAF8F5] font-semibold"
              style={{ textWrap: 'balance' }}
            >
              O Que Fazemos
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#FAF8F5]/70 max-w-md">
            Cada evento pede uma dinâmica musical única. Escolha o formato ideal para sua data.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              className="group bg-[#0B0B0B] border border-[#D4AF37]/20 hover:border-[#D4AF37]/55 rounded-xl p-6 flex flex-col justify-between transition-colors duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-[#151515] border border-[#D4AF37]/30 flex items-center justify-center">
                    <ServiceIcon name={service.iconName} />
                  </div>
                  <span className="text-xs font-medium text-[#D4AF37]/65 tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif-editorial text-xl text-[#FAF8F5] font-semibold mb-3 leading-snug">
                  {service.title}
                </h3>

                <p className="text-sm text-[#FAF8F5]/72 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onSelectService(service.eventOptionValue)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#D4AF37] group-hover:text-[#F3D078] transition-colors py-2 cursor-pointer whitespace-nowrap shrink-0 self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
              >
                <span>Cotar este formato</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
