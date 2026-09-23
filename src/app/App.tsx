import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Zap,
  Link2,
  LayoutDashboard,
  Smartphone,
  Brain,
  ClipboardList,
  MapPin,
  Layers,
  Clock,
  AlertCircle,
  Settings2,
  ShieldCheck,
  TrendingUp,
  Package,
  Instagram,
  MessageCircle,
  Mail,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logo from "@/imports/logo_simples_sem_fundo.png";

type Page = "home" | "metodo" | "solucoes" | "diagnostico";

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav({ current, onNav }: { current: Page; onNav: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links: { label: string; page: Page }[] = [
    { label: "Início", page: "home" },
    { label: "Método DADO", page: "metodo" },
    { label: "Soluções", page: "solucoes" },
    { label: "Diagnóstico Gratuito", page: "diagnostico" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <button onClick={() => onNav("home")} className="flex items-center">
          <ImageWithFallback
            src={logo}
            alt="AG Data Solutions"
            className="h-12 w-auto object-contain"
          />
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => onNav(l.page)}
              className={`text-sm font-medium transition-colors ${
                current === l.page
                  ? "text-[#6A1B7A]"
                  : "text-[#2B2830]/70 hover:text-[#2B2830]"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => onNav("diagnostico")}
          className="hidden lg:flex items-center gap-2 bg-[#0E9E6E] hover:bg-[#0b8a5e] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          Agendar diagnóstico <ArrowRight size={14} />
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#2B2830]"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => { onNav(l.page); setOpen(false); }}
              className={`text-left text-sm font-medium py-1 ${
                current === l.page ? "text-[#6A1B7A]" : "text-[#2B2830]/70"
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => { onNav("diagnostico"); setOpen(false); }}
            className="mt-1 bg-[#0E9E6E] text-white text-sm font-semibold px-5 py-3 rounded-lg"
          >
            Agendar diagnóstico gratuito
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ onNav }: { onNav: (p: Page) => void }) {
  const navLinks: { label: string; page: Page }[] = [
    { label: "Início", page: "home" },
    { label: "Método DADO", page: "metodo" },
    { label: "Soluções", page: "solucoes" },
    { label: "Diagnóstico Gratuito", page: "diagnostico" },
  ];

  return (
    <footer className="bg-[#3D0F49] text-white/75">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <ImageWithFallback
            src={logo}
            alt="AG Data Solutions"
            className="h-12 w-auto object-contain mb-4 brightness-0 invert"
          />
          <p className="text-sm leading-relaxed max-w-xs">
            Transformamos dados em decisões.
          </p>
        </div>

        <div>
          <p className="text-white font-semibold text-sm mb-4">Navegação</p>
          <ul className="flex flex-col gap-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.page}>
                <button
                  onClick={() => onNav(l.page)}
                  className="hover:text-[#0E9E6E] transition-colors"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold text-sm mb-4">Contato</p>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a
                href="https://wa.me/5562991502112"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#0E9E6E] transition-colors"
              >
                <MessageCircle size={14} className="text-[#0E9E6E] shrink-0" />
                <span>(62) 99150-2112</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:contato@agdatasolutions.com.br"
                className="flex items-center gap-2.5 hover:text-[#0E9E6E] transition-colors"
              >
                <Mail size={14} className="text-[#0E9E6E] shrink-0" />
                <span className="break-all">contato@agdatasolutions.com.br</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/agdatasolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#0E9E6E] transition-colors"
              >
                <Instagram size={14} className="text-[#0E9E6E] shrink-0" />
                <span>@agdatasolutions</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 text-xs text-white/40 text-center">
          © 2026 AG Data Solutions. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
function HomePage({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <div>
      {/* 1 — HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(140deg, #3D0F49 0%, #6A1B7A 55%, #4e1460 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#0E9E6E 1px, transparent 1px), linear-gradient(90deg, #0E9E6E 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div
          className="absolute right-0 top-0 w-[700px] h-[700px] opacity-20"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, #0E9E6E 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-28 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0E9E6E] animate-pulse" />
              <span className="text-white/80 text-xs font-medium tracking-wide">
                Gestão baseada em dados para o agronegócio
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.08] mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Sua gestão não precisa de mais planilhas.{" "}
              <span className="text-[#0E9E6E]">Precisa de mais clareza.</span>
            </h1>

            <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-8 lg:mb-10 max-w-xl">
              Ajudamos produtores, revendas, consultorias e empresas do agro a
              organizar dados, digitalizar processos e tomar decisões com mais
              segurança — sem depender de sistemas complicados.
            </p>

            <button
              onClick={() => onNav("diagnostico")}
              className="inline-flex items-center gap-2 bg-[#0E9E6E] hover:bg-[#0b8a5e] text-white font-semibold w-full sm:w-auto px-6 lg:px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#0E9E6E]/30 hover:-translate-y-0.5 text-base"
            >
              Agendar diagnóstico gratuito <ArrowRight size={17} />
            </button>
          </div>

          {/* Hero visual */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-7">
                <p className="text-white/50 text-xs uppercase tracking-wider mb-5 font-medium">
                  Painel da Fazenda · Tempo real
                </p>
                <div className="flex items-end gap-2 h-32 mb-5">
                  {[55, 72, 48, 88, 65, 95, 78].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-md" style={{
                      height: `${h}%`,
                      background: i === 5 ? "#0E9E6E" : "rgba(255,255,255,0.18)",
                    }} />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Animais", value: "1.240 cabeças", up: true },
                    { label: "Pesagem média", value: "482 kg", up: true },
                    { label: "Sanidade ok", value: "98,4%", up: null },
                    { label: "Relatório", value: "Automático", up: null },
                  ].map((m) => (
                    <div key={m.label} className="bg-white/10 rounded-xl p-3">
                      <p className="text-white/50 text-xs mb-0.5">{m.label}</p>
                      <p className="text-white font-bold text-sm">{m.value}</p>
                      {m.up && <p className="text-[#0E9E6E] text-xs">↑ em alta</p>}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#0E9E6E] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                Sem planilha 🎯
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-[#6A1B7A] text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                Atualizado agora
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 72L1440 72L1440 36C1200 72 960 8 720 36C480 64 240 0 0 36Z" fill="#FAF9FB" />
          </svg>
        </div>
      </section>

      {/* 2 — O PROBLEMA */}
      <section className="py-14 lg:py-24 bg-[#FAF9FB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 bg-[#E6F7F0] text-[#0E9E6E] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0E9E6E]" />
              O que está travando sua gestão
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2B2830] leading-tight mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Se a informação está espalhada, a decisão fica difícil
            </h2>
            <p className="text-[#2B2830]/65 leading-relaxed">
              Muitas empresas do agro sabem que precisam melhorar a gestão,
              mas não sabem por onde começar. O dia a dia consome o tempo que
              seria usado para organizar.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Layers,
                title: "Dados espalhados",
                desc: "Planilhas, cadernos e grupos de WhatsApp guardam informações importantes — mas nenhum lugar mostra o todo.",
              },
              {
                icon: Clock,
                title: "Tempo perdido",
                desc: "Horas são gastas preenchendo controles manuais e repetindo relatórios que poderiam ser automáticos.",
              },
              {
                icon: AlertCircle,
                title: "Decisão sem informação",
                desc: "Sem dados atualizados, decisões acabam baseadas em percepção — e o risco de erro aumenta.",
              },
              {
                icon: Settings2,
                title: "Sistemas que não encaixam",
                desc: "Ferramentas genéricas obrigam sua operação a se adaptar a elas. Deveria ser o contrário.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="bg-white border border-[#6A1B7A]/10 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-[#6A1B7A]/8 flex items-center justify-center mb-4">
                  <c.icon size={20} className="text-[#6A1B7A]" />
                </div>
                <h3 className="text-[#2B2830] font-bold text-base mb-2">{c.title}</h3>
                <p className="text-[#2B2830]/60 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — A SOLUÇÃO */}
      <section className="py-14 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E6F7F0] text-[#0E9E6E] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0E9E6E]" />
              Como resolvemos isso
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2B2830] leading-tight mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Organizamos seus dados. Você ganha clareza para decidir.
            </h2>
            <p className="text-[#2B2830]/65 leading-relaxed mb-5">
              Não vendemos sistema pronto. Primeiro entendemos como o seu
              negócio funciona — depois construímos, junto com você, a forma
              mais simples de organizar sua operação.
            </p>
            <p className="text-[#2B2830]/65 leading-relaxed">
              Isso pode ser um aplicativo para substituir a planilha, um painel
              para acompanhar os números da fazenda ou da empresa, ou uma
              automação que elimina tarefas repetitivas.{" "}
              <strong className="text-[#2B2830]">
                A tecnologia é o meio. A gestão é o objetivo.
              </strong>
            </p>
          </div>

          <div className="relative mb-8 lg:mb-0">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-[#E6F7F0]">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&auto=format"
                alt="Produtor rural analisando dados no campo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D0F49]/50 to-transparent" />
            </div>
            <div className="absolute -bottom-4 left-4 lg:-bottom-6 lg:-left-6 bg-white rounded-2xl shadow-xl border border-border p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E6F7F0] flex items-center justify-center">
                <CheckCircle2 size={20} className="text-[#0E9E6E]" />
              </div>
              <div>
                <p className="text-[#2B2830] font-bold text-sm">Feito para o seu negócio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — PRODUTO PRINCIPAL */}
      <section className="py-14 lg:py-24 bg-[#FAF9FB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E6F7F0] text-[#0E9E6E] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0E9E6E]" />
              Nosso principal produto
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2B2830] leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Gestão Inteligente por Assinatura
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#6A1B7A] to-[#3D0F49] rounded-3xl p-10 lg:p-14 relative overflow-hidden">
            <div
              className="absolute inset-0 rounded-3xl opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(#0E9E6E 1px, transparent 1px), linear-gradient(90deg, #0E9E6E 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />
            <div className="relative grid md:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-white/80 text-base leading-relaxed mb-6">
                  Um aplicativo personalizado para organizar os dados da sua
                  operação — sem custo de implantação, sem complicação técnica.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Aplicativo feito sob medida para o seu negócio",
                    "Sem investimento inicial",
                    "Infraestrutura, backup e segurança inclusos",
                    "Suporte incluso",
                    "Evolui junto com sua empresa",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/90 text-sm">
                      <CheckCircle2 size={16} className="text-[#0E9E6E] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-start gap-8">
                <div className="bg-white/10 border border-white/20 rounded-2xl px-7 py-6 text-center md:text-right">
                  <p className="text-white/60 text-xs uppercase tracking-wide mb-1">a partir de</p>
                  <p
                    className="text-white font-extrabold text-4xl"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    R$ 99
                    <span className="text-xl font-semibold text-white/60">/mês</span>
                  </p>
                  <p className="text-white/50 text-xs mt-1">sem taxa de implantação</p>
                </div>

                <button
                  onClick={() => onNav("diagnostico")}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#0E9E6E] hover:bg-[#0b8a5e] text-white font-semibold px-7 py-4 rounded-xl transition-all shadow-lg shadow-[#0E9E6E]/30"
                >
                  Agendar diagnóstico <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.1 — OUTROS SERVIÇOS */}
      <section className="py-14 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E6F7F0] text-[#0E9E6E] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0E9E6E]" />
              Quando sua empresa precisa ir além
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2B2830] leading-tight mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Outros serviços
            </h2>
            <p className="text-[#2B2830]/65 leading-relaxed">
              Conforme sua gestão evolui, também evoluímos com você — sempre
              sob orçamento, com escopo definido para o seu momento.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              { icon: Zap, title: "Automações", desc: "Menos tarefa manual, mais tempo para o que importa" },
              { icon: Link2, title: "Integrações entre sistemas", desc: "Suas ferramentas conversando entre si" },
              { icon: LayoutDashboard, title: "Painéis gerenciais", desc: "Seus números, visíveis em tempo real" },
              { icon: Smartphone, title: "Sistema de Gestão Completo", desc: "Soluções sob medida para operações maiores" },
              { icon: Brain, title: "Inteligência artificial", desc: "Aplicada à gestão, sem complicação" },
              { icon: ClipboardList, title: "Consultoria em gestão de dados", desc: "Diagnóstico e plano antes da tecnologia" },
            ].map((s) => (
              <div
                key={s.title}
                className="group flex items-start gap-4 bg-[#FAF9FB] border border-[#6A1B7A]/10 rounded-2xl p-5 hover:border-[#0E9E6E]/40 hover:bg-[#E6F7F0]/50 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#6A1B7A]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0E9E6E]/10 group-hover:border-[#0E9E6E]/20 transition-colors">
                  <s.icon size={18} className="text-[#6A1B7A] group-hover:text-[#0E9E6E] transition-colors" />
                </div>
                <div>
                  <p className="text-[#2B2830] font-semibold text-sm mb-0.5">{s.title}</p>
                  <p className="text-[#2B2830]/55 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#2B2830]/50 text-sm mb-6">
            Projeto sob orçamento, com escopo definido para cada caso.
          </p>

          <button
            onClick={() => onNav("solucoes")}
            className="inline-flex items-center gap-2 border-2 border-[#6A1B7A] text-[#6A1B7A] hover:bg-[#6A1B7A] hover:text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm"
          >
            Conheça nossas soluções <ChevronRight size={16} />
          </button>
        </div>
      </section>

      {/* 5 — MÉTODO DADO (resumo) */}
      <section className="py-14 lg:py-24 bg-[#3D0F49]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-[#0E9E6E] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0E9E6E]" />
                Nossa forma de trabalhar
              </div>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                O Método DADO
              </h2>
              <p className="text-white/65 leading-relaxed mb-8">
                Toda evolução começa entendendo o negócio — nunca escolhendo
                uma ferramenta primeiro.
              </p>
              <button
                onClick={() => onNav("metodo")}
                className="inline-flex items-center gap-2 border border-[#0E9E6E] text-[#0E9E6E] hover:bg-[#0E9E6E] hover:text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm"
              >
                Conhecer o método completo <ChevronRight size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  letter: "D",
                  title: "Diagnosticar",
                  desc: "Entendemos como sua operação funciona hoje.",
                },
                {
                  letter: "A",
                  title: "Analisar",
                  desc: "Organizamos as informações e encontramos os gargalos.",
                },
                {
                  letter: "D",
                  title: "Digitalizar",
                  desc: "Criamos uma solução simples para o seu dia a dia.",
                },
                {
                  letter: "O",
                  title: "Otimizar",
                  desc: "Melhoramos continuamente, conforme sua empresa cresce.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/8 border border-white/10 rounded-2xl px-5 py-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0E9E6E] flex items-center justify-center text-white font-extrabold text-lg shrink-0">
                    {step.letter}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{step.title}</p>
                    <p className="text-white/55 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 — BENEFÍCIOS */}
      <section className="py-14 lg:py-24 bg-[#FAF9FB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#E6F7F0] text-[#0E9E6E] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0E9E6E]" />
              O que você ganha
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2B2830] leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Resultados que aparecem desde os primeiros dias
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { icon: Package, title: "Mais organização", desc: "Tudo em um só lugar, fácil de consultar" },
              { icon: Zap, title: "Mais produtividade", desc: "Menos tarefa manual, mais tempo para decidir" },
              { icon: LayoutDashboard, title: "Mais controle", desc: "Você acompanha a operação em tempo real" },
              { icon: ShieldCheck, title: "Mais segurança", desc: "Dados protegidos, com backup automático" },
              { icon: TrendingUp, title: "Decisões mais seguras", desc: 'Menos "achismo", mais informação' },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-white border border-[#6A1B7A]/10 rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#E6F7F0] flex items-center justify-center mx-auto mb-4">
                  <b.icon size={22} className="text-[#0E9E6E]" />
                </div>
                <p className="text-[#2B2830] font-bold text-sm mb-1.5">{b.title}</p>
                <p className="text-[#2B2830]/55 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — CASOS REAIS */}
      <section className="py-14 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#E6F7F0] text-[#0E9E6E] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0E9E6E]" />
              Quem já organizou a gestão com a gente
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2B2830] leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Resultado real, no campo e na empresa
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              {
                tag: "Pecuária de corte · MG",
                before: "Anotações soltas",
                after: "App com controle de pesagem, sanidade e histórico do rebanho.",
                result: "Mais clareza para decidir o manejo.",
                color: "#6A1B7A",
              },
              {
                tag: "Consultoria agropecuária · GO",
                before: "Planilhas separadas",
                after: "Sistema único com clientes, projetos e contratos.",
                result: "Menos tempo em relatório, mais tempo em consultoria.",
                color: "#0E9E6E",
              },
              {
                tag: "Indústria · GO",
                before: "Controle de ativos manual",
                after: "Painéis em tempo real.",
                result: "Relatório que levava dias agora leva minutos.",
                color: "#6A1B7A",
              },
              {
                tag: "Revenda de equipamentos · MG",
                before: "Estoque desatualizado",
                after: "Painel integrado com WhatsApp.",
                result: "Menos venda perdida por falta de informação.",
                color: "#0E9E6E",
              },
            ].map((c) => (
              <div
                key={c.tag}
                className="bg-[#FAF9FB] border border-[#6A1B7A]/10 rounded-2xl p-6 flex flex-col"
              >
                <div
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-5 self-start"
                  style={{
                    background: c.color + "15",
                    color: c.color,
                  }}
                >
                  <MapPin size={11} />
                  {c.tag}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#2B2830]/40 text-xs line-through">{c.before}</span>
                    <span className="text-[#0E9E6E] text-xs">→</span>
                  </div>
                  <p className="text-[#2B2830] text-sm font-semibold leading-snug mb-3">{c.after}</p>
                  <p className="text-[#0E9E6E] text-xs font-medium">{c.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNav("diagnostico")}
              className="inline-flex items-center gap-2 bg-[#6A1B7A] hover:bg-[#5a1568] text-white font-semibold px-5 py-4 text-sm rounded-xl transition-all shadow-lg shadow-[#6A1B7A]/20 text-center"
            >
              Quero um resultado assim na minha empresa <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 8 — JORNADA DO CLIENTE */}
      <section className="py-14 lg:py-24 bg-[#FAF9FB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#E6F7F0] text-[#0E9E6E] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0E9E6E]" />
              Onde sua empresa pode chegar
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2B2830] leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Sua gestão pode evoluir, um passo de cada vez
            </h2>
          </div>

          {/* Journey steps */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row gap-6 lg:gap-0">
            {[
              { step: 1, label: "Planilhas", desc: "Onde a maioria começa", icon: "📋", current: true },
              { step: 2, label: "Gestão Inteligente", desc: "App sob medida", icon: "📱", current: false },
              { step: 3, label: "Automação", desc: "Tarefas no piloto automático", icon: "⚡", current: false },
              { step: 4, label: "Painéis (Dashboards)", desc: "Visão do negócio em tempo real", icon: "📊", current: false },
              { step: 5, label: "Inteligência Artificial", desc: "Decisão preditiva", icon: "🤖", current: false },
            ].map((step) => (
              <div key={step.step} className="flex flex-col items-center flex-1 text-center gap-2">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl border-2 ${step.current ? "bg-[#FAF9FB] border-[#6A1B7A] shadow-md" : "bg-white border-[#6A1B7A]/20"}`}>
                  {step.icon}
                </div>
                <div>
                  <p className={`font-bold text-sm ${step.current ? "text-[#6A1B7A]" : "text-[#2B2830]"}`}>{step.label}</p>
                  <p className="text-[#2B2830]/50 text-xs">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[#2B2830]/55 text-sm mt-10 max-w-xl mx-auto">
            Você não precisa dar o salto todo de uma vez. Começa organizando o
            básico — e evolui no seu ritmo.
          </p>
        </div>
      </section>

      {/* 9 — CTA FINAL */}
      <section className="py-14 lg:py-24 bg-[#3D0F49] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#0E9E6E 1px, transparent 1px), linear-gradient(90deg, #0E9E6E 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Vamos entender sua gestão?
          </h2>
          <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            O diagnóstico é gratuito, sem compromisso, e mostra exatamente onde
            sua empresa pode ganhar tempo, controle e clareza.
          </p>
          <button
            onClick={() => onNav("diagnostico")}
            className="inline-flex items-center gap-2 bg-[#0E9E6E] hover:bg-[#0b8a5e] text-white font-bold px-10 py-5 rounded-xl transition-all shadow-2xl shadow-[#0E9E6E]/30 hover:-translate-y-0.5 text-lg"
          >
            Agendar diagnóstico gratuito <ArrowRight size={20} />
          </button>
          <p className="text-white/35 text-sm mt-5">
            Sem compromisso · Totalmente gratuito · Resposta em até 24h
          </p>
        </div>
      </section>
    </div>
  );
}

// ─── PLACEHOLDER PAGES ────────────────────────────────────────────────────────
// ─── MÉTODO DADO PAGE ─────────────────────────────────────────────────────────
function MetodoPage({ onNav }: { onNav: (p: Page) => void }) {
  const steps = [
    {
      letter: "D",
      name: "Diagnosticar",
      color: "#6A1B7A",
      light: "#f3e8f7",
      headline: "Antes de falar de tecnologia, ouvimos.",
      body: "Entendemos como sua operação funciona na prática: os processos, as rotinas, onde a informação se perde.",
      focus: "Entender o problema real, não vender uma solução pronta.",
    },
    {
      letter: "A",
      name: "Analisar",
      color: "#0E9E6E",
      light: "#E6F7F0",
      headline: "Organizamos o que foi levantado.",
      body: "Identificamos padrões, inconsistências e oportunidades — e transformamos informação dispersa em uma visão clara da operação.",
      focus: "Clareza antes de qualquer linha de código.",
    },
    {
      letter: "D",
      name: "Digitalizar",
      color: "#6A1B7A",
      light: "#f3e8f7",
      headline: "Com os dados organizados, construímos a solução.",
      body: "Um aplicativo, um painel, um formulário digital. Sempre simples, sempre no ritmo da sua equipe.",
      focus: "A ferramenta serve o processo — nunca o contrário.",
    },
    {
      letter: "O",
      name: "Otimizar",
      color: "#0E9E6E",
      light: "#E6F7F0",
      headline: "Depois de digitalizar, seguimos melhorando.",
      body: "Automações, indicadores, e — quando fizer sentido — inteligência artificial. Evolução contínua, no seu ritmo.",
      focus: "Um processo que nunca termina, porque sua empresa nunca para.",
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section
        className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
        style={{ background: "linear-gradient(140deg, #3D0F49 0%, #6A1B7A 60%, #4e1460 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#0E9E6E 1px, transparent 1px), linear-gradient(90deg, #0E9E6E 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0E9E6E] animate-pulse" />
            <span className="text-white/80 text-xs font-medium tracking-wide">Nossa metodologia</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            O Método <span className="text-[#0E9E6E]">DADO</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Toda empresa que organiza sua gestão passa pelo mesmo caminho:
            entender o negócio, organizar as informações, digitalizar o que faz
            sentido e melhorar continuamente. É esse caminho que chamamos de
            Método DADO.
          </p>
        </div>

        {/* DADO pills */}
        <div className="relative max-w-xl mx-auto px-6 mt-12 flex justify-center gap-3">
          {["D", "A", "D", "O"].map((l, i) => (
            <div
              key={i}
              className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white font-extrabold text-2xl"
            >
              {l}
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 72L1440 72L1440 36C1200 72 960 8 720 36C480 64 240 0 0 36Z" fill="#FAF9FB" />
          </svg>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-14 lg:py-24 bg-[#FAF9FB]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group bg-white border border-[#6A1B7A]/10 rounded-3xl p-6 lg:p-12 grid lg:grid-cols-[auto_1fr] gap-8 items-start hover:shadow-lg transition-shadow"
            >
              {/* Letter */}
              <div
                className="w-14 h-14 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center text-white font-extrabold text-3xl lg:text-4xl shrink-0"
                style={{ background: step.color }}
              >
                {step.letter}
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: step.color }}
                  >
                    {step.name}
                  </span>
                  <div className="h-px flex-1 bg-[#6A1B7A]/10" />
                </div>
                <h3
                  className="text-2xl font-extrabold text-[#2B2830] mb-3 leading-snug"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {step.headline}
                </h3>
                <p className="text-[#2B2830]/65 leading-relaxed mb-5">{step.body}</p>
                <div
                  className="inline-flex items-start gap-2.5 rounded-xl px-4 py-3 text-sm font-medium"
                  style={{ background: step.light, color: step.color }}
                >
                  <span className="font-bold shrink-0">Foco:</span>
                  <span>{step.focus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="py-14 lg:py-24 bg-[#3D0F49] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#0E9E6E 1px, transparent 1px), linear-gradient(90deg, #0E9E6E 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          {/* Timeline */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
            {[
              { label: "Diagnóstico", color: "#6A1B7A" },
              { label: "Organização", color: "#0E9E6E" },
              { label: "Digitalização", color: "#6A1B7A" },
              { label: "Otimização", color: "#0E9E6E" },
            ].map((item, i, arr) => (
              <div key={i} className="flex items-center gap-3">
                <span
                  className="text-white font-semibold text-sm px-4 py-2 rounded-full"
                  style={{ background: item.color + "33", border: `1px solid ${item.color}50` }}
                >
                  {item.label}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-white/30 text-lg">→</span>
                )}
              </div>
            ))}
          </div>

          <p
            className="text-2xl lg:text-3xl font-extrabold text-white leading-snug mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Não é um projeto que termina.
          </p>
          <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            É uma forma de gerir que evolui com você.
          </p>
          <button
            onClick={() => onNav("diagnostico")}
            className="inline-flex items-center gap-2 bg-[#0E9E6E] hover:bg-[#0b8a5e] text-white font-bold px-10 py-5 rounded-xl transition-all shadow-xl shadow-[#0E9E6E]/30 hover:-translate-y-0.5 text-lg"
          >
            Quero passar pelo diagnóstico <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

// ─── PLACEHOLDER ──────────────────────────────────────────────────────────────
function PlaceholderPage({ title, onNav }: { title: string; onNav: (p: Page) => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF9FB] pt-20">
      <div className="text-center px-6">
        <div className="w-16 h-16 rounded-2xl bg-[#E6F7F0] flex items-center justify-center mx-auto mb-6">
          <TrendingUp size={28} className="text-[#0E9E6E]" />
        </div>
        <h1
          className="text-3xl font-extrabold text-[#2B2830] mb-3"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {title}
        </h1>
        <p className="text-[#2B2830]/55 mb-8">Esta página está sendo desenvolvida.</p>
        <button
          onClick={() => onNav("home")}
          className="inline-flex items-center gap-2 bg-[#6A1B7A] text-white font-semibold px-6 py-3 rounded-xl"
        >
          Voltar ao início
        </button>
      </div>
    </div>
  );
}

// ─── SOLUÇÕES PAGE ────────────────────────────────────────────────────────────
function SolucoesPage({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
        style={{ background: "linear-gradient(140deg, #3D0F49 0%, #6A1B7A 60%, #4e1460 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#0E9E6E 1px, transparent 1px), linear-gradient(90deg, #0E9E6E 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0E9E6E] animate-pulse" />
            <span className="text-white/80 text-xs font-medium tracking-wide">O que fazemos</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Uma solução para{" "}
            <span className="text-[#0E9E6E]">cada momento</span>{" "}
            da sua gestão
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Você não precisa contratar tudo de uma vez. Nossas soluções
            evoluem junto com a maturidade da sua empresa.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 72L1440 72L1440 36C1200 72 960 8 720 36C480 64 240 0 0 36Z" fill="#FAF9FB" />
          </svg>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section className="py-14 lg:py-24 bg-[#FAF9FB]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col gap-8">

          {/* 3.1 — Gestão Inteligente por Assinatura */}
          <div className="bg-white border-2 border-[#6A1B7A]/20 rounded-3xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#6A1B7A] to-[#3D0F49] px-6 lg:px-12 py-6 lg:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-[#0E9E6E] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  ⭐ Ponto de partida
                </span>
                <h2
                  className="text-xl lg:text-3xl font-extrabold text-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Gestão Inteligente por Assinatura
                </h2>
              </div>
              <div className="text-right shrink-0">
                <p className="text-white/60 text-xs uppercase tracking-wide mb-0.5">a partir de</p>
                <p className="text-white font-extrabold text-3xl leading-none">
                  R$ 99<span className="text-lg font-semibold text-white/60">/mês</span>
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="px-6 lg:px-12 py-8 lg:py-10 grid lg:grid-cols-2 gap-10">
              <div>
                <p className="text-[#2B2830]/70 leading-relaxed mb-8">
                  A forma mais simples de sair da planilha. Um aplicativo feito
                  sob medida para o seu negócio, sem custo de implantação.
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "Sistema Web e Mobile",
                    "Assinatura recorrente mensal",
                    "Cancelamento gratuito",
                    "Entrega em até 7 dias úteis",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-[#0E9E6E] shrink-0" />
                      <span className="text-[#2B2830] text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Inclui */}
                <div className="bg-[#E6F7F0] rounded-2xl p-5">
                  <p className="text-[#0E9E6E] font-bold text-xs uppercase tracking-wide mb-3">Inclui</p>
                  <p className="text-[#2B2830]/75 text-sm leading-relaxed">
                    Infraestrutura, backup automático, monitoramento, suporte
                    básico e pequenas atualizações.
                  </p>
                </div>
              </div>

              <div>
                {/* Indicado para */}
                <div className="bg-[#FAF9FB] border border-[#6A1B7A]/10 rounded-2xl p-6">
                  <p className="text-[#6A1B7A] font-bold text-xs uppercase tracking-wide mb-4">Indicado para</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Controle de estoque",
                      "Checklists",
                      "Visitas técnicas",
                      "Gestão de ativos",
                      "Manutenção",
                      "Ordens de serviço",
                      "Controle financeiro simples",
                      "Cadastros",
                      "Coleta de dados em campo",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-[#6A1B7A] bg-[#6A1B7A]/8 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onNav("diagnostico")}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#6A1B7A] hover:bg-[#5a1568] text-white font-semibold px-6 py-4 rounded-xl transition-colors"
                >
                  Quero começar com essa solução <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* 3.2 — Implementações Inteligentes */}
          <div className="bg-white border border-[#6A1B7A]/15 rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#0E9E6E] to-[#0a7a55] px-6 lg:px-12 py-6 lg:py-8">
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                🚀 Para quem quer ir além
              </span>
              <h2
                className="text-xl lg:text-3xl font-extrabold text-white"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Implementações Inteligentes
              </h2>
            </div>

            <div className="px-6 lg:px-12 py-8 lg:py-10 grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-[#2B2830]/70 leading-relaxed mb-8">
                  Quando a empresa já organizou o básico e precisa de mais:
                  automações, integrações entre sistemas, painéis gerenciais,
                  sistemas de gestão completos e inteligência artificial
                  aplicada à operação.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: Zap, label: "Automações de processos" },
                    { icon: Link2, label: "Integrações entre sistemas" },
                    { icon: LayoutDashboard, label: "Painéis gerenciais (Dashboards)" },
                    { icon: Smartphone, label: "Sistemas de gestão completos" },
                    { icon: Brain, label: "Inteligência artificial aplicada" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#E6F7F0] flex items-center justify-center shrink-0">
                        <item.icon size={15} className="text-[#0E9E6E]" />
                      </div>
                      <span className="text-[#2B2830] text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-[#E6F7F0] rounded-2xl p-6 text-center">
                  <p className="text-[#0E9E6E] font-bold text-xs uppercase tracking-wide mb-2">Valor</p>
                  <p className="text-[#2B2830] font-extrabold text-xl mb-1">Projeto sob orçamento</p>
                  <p className="text-[#2B2830]/55 text-sm">com escopo e prazo definidos</p>
                </div>
                <button
                  onClick={() => onNav("diagnostico")}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0E9E6E] hover:bg-[#0b8a5e] text-white font-semibold px-6 py-4 rounded-xl transition-colors"
                >
                  Solicitar orçamento <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* 3.3 — Consultoria em Gestão de Dados */}
          <div className="bg-white border border-[#6A1B7A]/15 rounded-3xl overflow-hidden">
            <div className="bg-[#2B2830] px-6 lg:px-12 py-6 lg:py-8">
              <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                🔍 Antes da tecnologia
              </span>
              <h2
                className="text-xl lg:text-3xl font-extrabold text-white"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Consultoria em Gestão de Dados
              </h2>
            </div>

            <div className="px-6 lg:px-12 py-8 lg:py-10 grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-[#2B2830]/70 leading-relaxed mb-8">
                  Nem toda empresa precisa de um sistema no primeiro passo. Às
                  vezes o que falta é entender os processos, mapear os gargalos
                  e planejar a digitalização com calma.
                </p>
                <div className="bg-[#FAF9FB] border border-[#6A1B7A]/10 rounded-2xl p-6">
                  <p className="text-[#6A1B7A] font-bold text-xs uppercase tracking-wide mb-4">Inclui</p>
                  <div className="flex flex-col gap-3">
                    {[
                      "Análise de processos",
                      "Identificação de gargalos",
                      "Definição de indicadores",
                      "Plano de evolução digital",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <CheckCircle2 size={15} className="text-[#0E9E6E] shrink-0" />
                        <span className="text-[#2B2830] text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-[#f3e8f7] rounded-2xl p-6 text-center">
                  <p className="text-[#6A1B7A] font-bold text-xs uppercase tracking-wide mb-2">Valor</p>
                  <p className="text-[#2B2830] font-extrabold text-xl mb-1">Sob orçamento</p>
                  <p className="text-[#2B2830]/55 text-sm">escopo definido para cada caso</p>
                </div>
                <button
                  onClick={() => onNav("diagnostico")}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#6A1B7A] hover:bg-[#5a1568] text-white font-semibold px-6 py-4 rounded-xl transition-colors"
                >
                  Solicitar orçamento <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-24 bg-[#3D0F49] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#0E9E6E 1px, transparent 1px), linear-gradient(90deg, #0E9E6E 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Não sabe por onde começar?
          </h2>
          <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            O diagnóstico gratuito mostra qual solução faz mais sentido para
            o momento da sua empresa — sem compromisso.
          </p>
          <button
            onClick={() => onNav("diagnostico")}
            className="inline-flex items-center gap-2 bg-[#0E9E6E] hover:bg-[#0b8a5e] text-white font-bold px-10 py-5 rounded-xl transition-all shadow-xl shadow-[#0E9E6E]/30 hover:-translate-y-0.5 text-lg"
          >
            Agendar diagnóstico gratuito <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

// ─── DIAGNÓSTICO PAGE ─────────────────────────────────────────────────────────
function DiagnosticoPage() {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    empresa: "",
    desafio: "",
    detalhe: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const desafios = [
    { value: "estoque", label: "Estoque" },
    { value: "financeiro", label: "Financeiro" },
    { value: "processos", label: "Processos manuais" },
    { value: "indicadores", label: "Falta de indicadores" },
    { value: "outro", label: "Outro" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
  };

  const steps = [
    "Você agenda uma conversa (sem custo)",
    "Entendemos como sua operação funciona hoje",
    "Mostramos onde estão as oportunidades de melhoria",
    "Sugerimos o caminho mais simples — sem empurrar sistema",
  ];

  return (
    <div>
      {/* HERO */}
      <section
        className="relative pt-28 pb-16 lg:pt-36 overflow-hidden"
        style={{ background: "linear-gradient(140deg, #3D0F49 0%, #6A1B7A 60%, #4e1460 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#0E9E6E 1px, transparent 1px), linear-gradient(90deg, #0E9E6E 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0E9E6E] animate-pulse" />
            <span className="text-white/80 text-xs font-medium tracking-wide">
              Sem custo. Sem compromisso.
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.08] mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Vamos entender sua gestão,{" "}
            <span className="text-[#0E9E6E]">juntos</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Em uma conversa de cerca de 30 minutos, entendemos como sua empresa
            funciona hoje, identificamos onde estão os principais gargalos e
            mostramos o caminho mais simples para organizar sua gestão.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 72L1440 72L1440 36C1200 72 960 8 720 36C480 64 240 0 0 36Z" fill="#FAF9FB" />
          </svg>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-12 lg:py-20 bg-[#FAF9FB]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">

          {/* LEFT — Como funciona + confiança */}
          <div>
            <h2
              className="text-2xl font-extrabold text-[#2B2830] mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Como funciona
            </h2>
            <ol className="flex flex-col gap-5 mb-10">
              {steps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#6A1B7A] text-white font-bold text-sm flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-[#2B2830]/80 text-sm leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>

            {/* Confiança */}
            <div className="bg-gradient-to-br from-[#6A1B7A]/8 to-[#0E9E6E]/8 border border-[#6A1B7A]/15 rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-2">
                <ShieldCheck size={20} className="text-[#0E9E6E] shrink-0 mt-0.5" />
                <p className="text-[#2B2830] font-semibold text-sm">Personalizado para você</p>
              </div>
              <p className="text-[#2B2830]/65 text-sm leading-relaxed pl-8">
                Não existe proposta padrão. Cada diagnóstico é sobre a sua
                empresa, do seu jeito.
              </p>
            </div>

            {/* WhatsApp direto */}
            <div className="mt-8 pt-8 border-t border-[#6A1B7A]/10">
              <p className="text-[#2B2830]/55 text-sm mb-3">Prefere falar agora?</p>
              <a
                href="https://wa.me/5562991502112"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-5 py-3 rounded-xl transition-all shadow-md shadow-[#25D366]/20 hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT — Formulário */}
          <div className="bg-white border border-[#6A1B7A]/12 rounded-3xl p-6 lg:p-10 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-10">
                <div className="w-16 h-16 rounded-2xl bg-[#E6F7F0] flex items-center justify-center mb-5">
                  <CheckCircle2 size={32} className="text-[#0E9E6E]" />
                </div>
                <h3
                  className="text-2xl font-extrabold text-[#2B2830] mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Mensagem enviada!
                </h3>
                <p className="text-[#2B2830]/65 leading-relaxed max-w-sm">
                  Recebemos seu contato. Em breve nossa equipe entrará em
                  contato para agendar a conversa.
                </p>
                <a
                  href="https://wa.me/5562991502112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-xl"
                >
                  Falar também pelo WhatsApp
                </a>
              </div>
            ) : (
              <>
                <h3
                  className="text-xl font-extrabold text-[#2B2830] mb-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Agende sua conversa
                </h3>
                <p className="text-[#2B2830]/50 text-sm mb-7">
                  Preencha os campos abaixo e entraremos em contato.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Nome + WhatsApp */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2B2830]/70 mb-1.5">Nome *</label>
                      <input
                        required
                        type="text"
                        placeholder="Seu nome"
                        value={form.nome}
                        onChange={(e) => setForm({ ...form, nome: e.target.value })}
                        className="w-full bg-[#FAF9FB] border border-[#6A1B7A]/15 rounded-xl px-4 py-3 text-sm text-[#2B2830] placeholder-[#2B2830]/30 focus:outline-none focus:border-[#6A1B7A]/50 focus:ring-2 focus:ring-[#6A1B7A]/10 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2B2830]/70 mb-1.5">WhatsApp *</label>
                      <input
                        required
                        type="tel"
                        placeholder="(62) 99999-0000"
                        value={form.whatsapp}
                        onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                        className="w-full bg-[#FAF9FB] border border-[#6A1B7A]/15 rounded-xl px-4 py-3 text-sm text-[#2B2830] placeholder-[#2B2830]/30 focus:outline-none focus:border-[#6A1B7A]/50 focus:ring-2 focus:ring-[#6A1B7A]/10 transition"
                      />
                    </div>
                  </div>

                  {/* Email + Empresa */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2B2830]/70 mb-1.5">E-mail *</label>
                      <input
                        required
                        type="email"
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-[#FAF9FB] border border-[#6A1B7A]/15 rounded-xl px-4 py-3 text-sm text-[#2B2830] placeholder-[#2B2830]/30 focus:outline-none focus:border-[#6A1B7A]/50 focus:ring-2 focus:ring-[#6A1B7A]/10 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2B2830]/70 mb-1.5">Nome da empresa *</label>
                      <input
                        required
                        type="text"
                        placeholder="Sua empresa"
                        value={form.empresa}
                        onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                        className="w-full bg-[#FAF9FB] border border-[#6A1B7A]/15 rounded-xl px-4 py-3 text-sm text-[#2B2830] placeholder-[#2B2830]/30 focus:outline-none focus:border-[#6A1B7A]/50 focus:ring-2 focus:ring-[#6A1B7A]/10 transition"
                      />
                    </div>
                  </div>

                  {/* Desafio */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2B2830]/70 mb-1.5">
                      Principal desafio hoje *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {desafios.map((d) => (
                        <button
                          key={d.value}
                          type="button"
                          onClick={() => setForm({ ...form, desafio: d.value })}
                          className={`text-xs font-semibold px-3.5 py-2 rounded-lg border transition-all ${
                            form.desafio === d.value
                              ? "bg-[#6A1B7A] text-white border-[#6A1B7A]"
                              : "bg-[#FAF9FB] text-[#2B2830]/70 border-[#6A1B7A]/15 hover:border-[#6A1B7A]/40"
                          }`}
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Detalhe */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2B2830]/70 mb-1.5">
                      Conte-nos um pouco mais
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Como funciona sua operação hoje? Qual o maior ponto de dor?"
                      value={form.detalhe}
                      onChange={(e) => setForm({ ...form, detalhe: e.target.value })}
                      className="w-full bg-[#FAF9FB] border border-[#6A1B7A]/15 rounded-xl px-4 py-3 text-sm text-[#2B2830] placeholder-[#2B2830]/30 focus:outline-none focus:border-[#6A1B7A]/50 focus:ring-2 focus:ring-[#6A1B7A]/10 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending || !form.desafio}
                    className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-[#6A1B7A] hover:bg-[#5a1568] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-6 py-4 rounded-xl transition-all shadow-lg shadow-[#6A1B7A]/20 text-base"
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Enviando…
                      </>
                    ) : (
                      <>
                        Agendar meu diagnóstico gratuito <ArrowRight size={17} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[#2B2830]/35 text-xs">
                    Sem compromisso · 100% gratuito · Resposta em até 24h
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-[#FAF9FB] text-[#2B2830]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <Nav current={page} onNav={navigate} />

      {page === "home" && <HomePage onNav={navigate} />}
      {page === "metodo" && <MetodoPage onNav={navigate} />}
      {page === "solucoes" && <SolucoesPage onNav={navigate} />}
      {page === "diagnostico" && <DiagnosticoPage />}

      <Footer onNav={navigate} />

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/5562991502112"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
