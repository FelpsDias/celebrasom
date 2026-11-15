import { FormEvent, useEffect, useRef, useState } from 'react';
import { Calendar, CheckCircle2, ExternalLink, MapPin, MessageCircle, Music2 } from 'lucide-react';
import { BAND_CONFIG, buildWhatsAppUrl, EventTypeOption } from '../data/bandData';

interface QuoteSectionProps {
  preselectedEventType: EventTypeOption;
  preselectedNote: string;
}

const EVENT_OPTIONS: EventTypeOption[] = [
  'Casamento (Cerimônia & Festa)',
  'Eventos Corporativos',
  'Aniversários & Confraternizações',
  'Backing Band para Cantores',
];

function formatBrazilianDate(isoDate: string): string {
  if (!isoDate || !isoDate.includes('-')) return isoDate;
  const [year, month, day] = isoDate.split('-');
  return `${day}/${month}/${year}`;
}

export function QuoteSection({ preselectedEventType, preselectedNote }: QuoteSectionProps) {
  const [name, setName] = useState('');
  const [eventType, setEventType] = useState<EventTypeOption>(preselectedEventType);
  const [eventDate, setEventDate] = useState('');
  const [cityVenue, setCityVenue] = useState('');
  const [notes, setNotes] = useState('');
  const [formError, setFormError] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [generatedMessage, setGeneratedMessage] = useState('');
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setEventType(preselectedEventType);
  }, [preselectedEventType]);

  useEffect(() => {
    if (preselectedNote) {
      setNotes(preselectedNote);
    }
  }, [preselectedNote]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError('');

    const cleanName = name.trim();
    const cleanCity = cityVenue.trim();
    const cleanNotes = notes.trim();

    if (cleanName.length < 2) {
      setFormError('Por favor, informe seu nome completo.');
      nameInputRef.current?.focus();
      return;
    }

    if (!eventDate) {
      setFormError('Por favor, selecione a data prevista do evento.');
      return;
    }

    if (cleanCity.length < 2) {
      setFormError('Por favor, informe a cidade ou local do evento.');
      return;
    }

    const formattedDate = formatBrazilianDate(eventDate);
    const obsPart = cleanNotes ? cleanNotes : 'Sem observações adicionais';

    const message = `Olá Celebra Som! Vim pelo site e gostaria de um orçamento. Nome: ${cleanName} | Evento: ${eventType} | Data: ${formattedDate} | Local: ${cleanCity} | Obs: ${obsPart}`;
    const whatsappHref = buildWhatsAppUrl(message);

    setGeneratedMessage(message);
    setGeneratedUrl(whatsappHref);

    // Abre o link oficial do WhatsApp em nova aba sem usar window.open
    const anchor = document.createElement('a');
    anchor.href = whatsappHref;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <section id="orcamento" className="py-20 md:py-24 bg-[#FAF8F5] text-[#0B0B0B]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Booking Guidance & Lineup Context */}
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#9A7818] font-semibold mb-2">
              Atendimento Direto no WhatsApp
            </p>
            <h2
              className="font-serif-editorial text-3xl sm:text-4xl text-[#0B0B0B] font-semibold leading-tight mb-4"
              style={{ textWrap: 'balance' }}
            >
              Verifique a Disponibilidade da Sua Data
            </h2>
            <p className="text-sm sm:text-base text-[#0B0B0B]/75 leading-relaxed mb-8">
              Preencha os dados essenciais ao lado. Nossa equipe já recebe sua mensagem organizada com data, local e formato para agilizar a proposta da sua festa.
            </p>

            <div className="space-y-4 pt-6 border-t border-[#0B0B0B]/12 text-sm text-[#0B0B0B]/80">
              <div className="flex items-start gap-3">
                <Music2 className="w-5 h-5 text-[#9A7818] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#0B0B0B]">Banda Completa ao Vivo</p>
                  <p className="text-xs sm:text-sm text-[#0B0B0B]/70 mt-0.5">
                    {BAND_CONFIG.formationSummary} · {BAND_CONFIG.visualStandard}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#9A7818] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#0B0B0B]">Região de Atuação</p>
                  <p className="text-xs sm:text-sm text-[#0B0B0B]/70 mt-0.5">
                    {BAND_CONFIG.cityRegion} (consulte disponibilidade para outras cidades)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#9A7818] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#0B0B0B]">Reserva de Agenda</p>
                  <p className="text-xs sm:text-sm text-[#0B0B0B]/70 mt-0.5">
                    Orçamento personalizado conforme duração, sonorização e formato escolhido.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Quote Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white border border-[#0B0B0B]/10 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Nome Completo */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="quote-name"
                    className="block text-xs sm:text-sm font-semibold text-[#0B0B0B] mb-1.5"
                  >
                    Nome completo
                  </label>
                  <input
                    ref={nameInputRef}
                    id="quote-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Mariana & Lucas / Empresa"
                    className="w-full h-12 px-4 rounded-lg bg-[#FAF8F5] border border-[#0B0B0B]/15 text-[#0B0B0B] placeholder:text-[#0B0B0B]/40 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 transition-colors"
                  />
                </div>

                {/* Tipo de Evento */}
                <div>
                  <label
                    htmlFor="quote-event-type"
                    className="block text-xs sm:text-sm font-semibold text-[#0B0B0B] mb-1.5"
                  >
                    Tipo de Evento
                  </label>
                  <select
                    id="quote-event-type"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value as EventTypeOption)}
                    className="w-full h-12 px-4 rounded-lg bg-[#FAF8F5] border border-[#0B0B0B]/15 text-[#0B0B0B] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 transition-colors"
                  >
                    {EVENT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Data prevista do evento */}
                <div>
                  <label
                    htmlFor="quote-date"
                    className="block text-xs sm:text-sm font-semibold text-[#0B0B0B] mb-1.5"
                  >
                    Data prevista do evento
                  </label>
                  <input
                    id="quote-date"
                    type="date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full h-12 px-4 rounded-lg bg-[#FAF8F5] border border-[#0B0B0B]/15 text-[#0B0B0B] text-sm tabular-nums focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 transition-colors"
                  />
                </div>

                {/* Cidade / Local do evento */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="quote-city"
                    className="block text-xs sm:text-sm font-semibold text-[#0B0B0B] mb-1.5"
                  >
                    Cidade / Local do evento
                  </label>
                  <input
                    id="quote-city"
                    type="text"
                    required
                    value={cityVenue}
                    onChange={(e) => setCityVenue(e.target.value)}
                    placeholder="Ex: Campinas - Espaço Quinta das Flores"
                    className="w-full h-12 px-4 rounded-lg bg-[#FAF8F5] border border-[#0B0B0B]/15 text-[#0B0B0B] placeholder:text-[#0B0B0B]/40 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 transition-colors"
                  />
                </div>

                {/* Observação rápida */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="quote-notes"
                    className="block text-xs sm:text-sm font-semibold text-[#0B0B0B] mb-1.5"
                  >
                    Observação rápida <span className="font-normal text-[#0B0B0B]/55">(opcional)</span>
                  </label>
                  <textarea
                    id="quote-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ex: Cerimônia + Festa, horário estimado ou repertório especial"
                    className="w-full px-4 py-3 rounded-lg bg-[#FAF8F5] border border-[#0B0B0B]/15 text-[#0B0B0B] placeholder:text-[#0B0B0B]/40 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Validation Error */}
              {formError && (
                <p
                  role="alert"
                  className="mt-4 text-xs sm:text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5"
                >
                  {formError}
                </p>
              )}

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full min-h-[52px] gold-gradient-bg text-[#0B0B0B] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-lg inline-flex items-center justify-center gap-2.5 hover:brightness-105 active:scale-[0.99] transition-all duration-150 cursor-pointer shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0B0B]"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>Enviar Pedido pelo WhatsApp</span>
                </button>
              </div>

              {/* Confirmation & Direct Fallback Link */}
              {generatedUrl && (
                <div
                  role="status"
                  className="mt-5 p-4 rounded-xl bg-[#FAF8F5] border border-[#D4AF37]/60 text-sm text-[#0B0B0B]"
                >
                  <div className="flex items-start gap-2.5 mb-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#9A7818] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-[#0B0B0B]">
                        Mensagem pronta para envio no WhatsApp
                      </p>
                      <p className="text-xs text-[#0B0B0B]/70 mt-0.5 break-words">
                        &ldquo;{generatedMessage}&rdquo;
                      </p>
                    </div>
                  </div>
                  <a
                    href={generatedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0B0B0B] underline decoration-[#D4AF37] underline-offset-4 hover:text-[#9A7818]"
                  >
                    <span>Caso o WhatsApp não tenha aberto automaticamente, clique aqui</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
