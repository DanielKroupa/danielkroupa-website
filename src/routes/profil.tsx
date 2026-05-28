import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Blocks,
  Brush,
  CakeSlice,
  Camera,
  ChefHat,
  CheckCircle2,
  ChevronDown,
  Code2,
  Cpu,
  Film,
  Guitar,
  Github,
  Instagram,
  Leaf,
  Mail,
  MessageCircle,
  Mountain,
  Music4,
  Phone,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { createSeoHead } from "#/lib/seo/meta";
import { Image } from "@unpic/react";

const HIGHLIGHTS: { title: string; icon: LucideIcon }[] = [
  { title: "Web Development", icon: Code2 },
  { title: "UX/UI Design", icon: Brush },
  { title: "IT & Hardware", icon: Cpu },
  { title: "Technické řešení problémů", icon: Wrench },
];

const TECH_TAGS = [
  "HTML",
  "TailwindCSS",
  "TypeScript",
  "Next.js",
  "TanStack Start",
  "Node.js",
  "Docker",
  "Git",
  "MySQL",
];

const HERO_CONTACT_LINKS: {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}[] = [
  {
    label: "GitHub",
    href: "https://github.com/username",
    icon: Github,
    external: true,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/username",
    icon: Instagram,
    external: true,
  },
  {
    label: "Telefon",
    href: "tel:+420605465600",
    icon: Phone,
  },
  {
    label: "Email",
    href: "mailto:info@danielkroupa.cz",
    icon: Mail,
  },
];

const SECTIONS: {
  id: string;
  title: string;
  icon: LucideIcon;
  points: string[];
  tags?: string[];
  levels?: { technology: string; level: string }[];
}[] = [
  {
    id: "webovy-vyvoj",
    title: "Webový vývoj",
    icon: Code2,

    points: [
      "Analýza požadavků a návrh řešešní",
      "Optimalizace výkonu",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Docker",
      "Git",
      "REST API",
      "Deployment",
      "VPS konfigurace",
      "SEO optimalizace",
      "Responzivní design",
      "Kontaktní formuláře",
      "Rezervační systémy",
      "API propojení",
      "Auth integrace",
    ],
    tags: [
      "HTML",
      "React",
      "Next.js",
      "GitHub",
      "TanStack Start",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Docker",
      "SEO",
      "VPS",
    ],
    levels: [
      { technology: "HTML", level: "pokročilý" },
      { technology: "TailwindCSS", level: "pokročilý" },
      { technology: "Next.js", level: "pokročilý" },
      { technology: "TypeScript", level: "zkušený" },
      { technology: "TanStack Start", level: "začátečník" },
    ],
  },
  {
    id: "ux-ui-design",
    title: "UX/UI Design",
    icon: Brush,
    points: [
      "Návrhy moderních rozhraní",
      "Důraz na jednoduchost a použitelnost",
      "Wireframy",
      "Responzivní design",
      "Dark/light mode",
      "Animace UI",
      "User flow",
      "Cit pro vizuální čistotu",
      "Moderní layouty",
      "UX přemýšlení",
      "Práce s detailem",
    ],
    tags: ["UX", "UI", "Wireframe", "Dark/Light", "User Flow"],
  },
  {
    id: "it-hardware",
    title: "IT, hardware a systémy",
    icon: Cpu,
    points: [
      "Diagnostika problémů",
      "Stavba a upgrade PC",
      "BIOS/UEFI konfigurace",
      "Troubleshooting Windows/macOS/Linux",
      "Konfigurace systému",
      "Docker",
      "VPS servery",
      "Instalace Hackintosh",
      "Práce s hardwarem",
      "Reinstalace a optimalizace systému",
      "Opravy zařízení",
      "Práce s technickou dokumentací",
      "Síťové základy",
      "Optimalizace zařízení",
    ],
    tags: ["Windows", "macOS", "Linux", "Docker", "VPS", "Hardware"],
  },
  {
    id: "opravy-zarizeni",
    title: "Opravy zařízení",
    icon: Wrench,

    points: [
      "Čištění zařízení",
      "Výměna a upgrade komponent",
      "Stavba PC na míru",
      "Přeinstalace systému",
      "Řešení problémů se softwarem",
      "Optimalizace výkonu zařízení",
      "Základní servis zařízení",
      "Diagnostika problémů",
    ],
    tags: ["Servis", "Diagnostika", "Optimalizace"],
  },
  {
    id: "kreativita",
    title: "Kreativita a tvorba obsahu",
    icon: Sparkles,

    points: [
      "Střih a úprava videa",
      "Fotografie",
      "Amatérské natáčení",
      "Úprava grafiky / fotky",
      "Cit pro kompozici",
      "Kombinace technického a kreativního myšlení",
    ],
    tags: ["Video", "Foto", "Kompozice", "Grafika"],
  },
  {
    id: "komunikace",
    title: "Komunikace a přístup",
    icon: MessageCircle,
    points: [
      "Vysvětluji technické věci lidskou řečí",
      "Preferuji jednoduchá a funkční řešení",
      "Pracuji samostatně",
      "Hledám praktická řešení",
      "Kombinuji technické a kreativní myšlení",
      "Spolehlivost",
      "Schopnost návrhu řešení",
      "Schopnost práce s dokumentací",
    ],
    tags: ["Komunikace", "Samostatnost", "Spolehlivost", "Praxe"],
  },
];

const HOBBIES: { title: string; icon: LucideIcon }[] = [
  { title: "Klavír", icon: Music4 },
  { title: "Kytara", icon: Guitar },
  { title: "Focení", icon: Camera },
  { title: "Turistika", icon: Mountain },
  { title: "Příroda", icon: Leaf },
  { title: "Vaření", icon: ChefHat },
  { title: "Pečení", icon: CakeSlice },
  { title: "Filmy", icon: Film },
  { title: "Opravy zařízení", icon: Wrench },
  { title: "Technologie", icon: Blocks },
];

// ─── Route ───────────────────────────────────────────────────────────────────

export const Route = createFileRoute("/profil")({
  head: () =>
    createSeoHead({
      title: "Profil | Daniel Kroupa",
      description:
        "Osobní profil Daniela Kroupy: dovednosti, zkušenosti, kreativní přesah a praktický přístup.",
      path: "/profil",
      noIndex: true,
    }),
  component: ProfilePage,
});

export function ProfilePage() {
  const [openId, setOpenId] = useState<string>(SECTIONS[0]?.id ?? "");

  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-b from-background via-brand-surface/35 to-background pb-20 pt-10 md:pt-14">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/3 top-10 h-72 w-72 rounded-full bg-brand-glow-primary blur-3xl" />
        <div className="absolute bottom-8 right-1/4 h-80 w-80 rounded-full bg-brand-glow-secondary blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto space-y-8 px-3 md:space-y-10 md:px-6">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-brand-surface/85 via-card/85 to-brand-surface-2/85 p-5 backdrop-blur-sm sm:p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0">
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.5, 0.35] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-brand-glow-primary blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.12, 1, 1.12], opacity: [0.2, 0.38, 0.2] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-brand-glow-secondary blur-3xl"
            />
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-7"
            >
              <div className="space-y-4">
                <p className="text-xs uppercase font-bold tracking-[0.28em] text-brand-secondary">
                  Full Stack developer
                </p>
                <h1 className="text-4xl leading-tight text-foreground md:text-6xl">
                  Daniel Kroupa
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-brand-text-soft md:text-lg">
                  Jsem člověk se širokým technickým a kreativním přesahem.
                  Věnuji se vývoji webových řešení, UX designu, práci s
                  technologiemi a řešením technických problémů. Nejvíce mě baví
                  kombinovat kreativitu, funkčnost a praktické myšlení do
                  reálných výsledků.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {HIGHLIGHTS.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.1 + i * 0.06 }}
                      whileHover={{ y: -4 }}
                      className="group rounded-2xl border border-border/80 bg-card/70 px-4 py-3 shadow-sm shadow-black/5 transition-colors hover:border-brand-secondary/45"
                    >
                      <div className="mb-2 inline-flex rounded-full bg-brand-primary/15 p-2 text-brand-primary transition-colors group-hover:bg-brand-secondary/20 group-hover:text-brand-secondary">
                        <Icon size={16} />
                      </div>
                      <p className="text-sm font-medium text-foreground">
                        {item.title}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
              <div>
                <p>Můj stack se kterým pracuji nejčastěji:</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {TECH_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brand-primary/15 px-3 py-1.5 text-xs font-medium text-brand-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex items-center justify-center"
            >
              <div className="w-full max-w-xs">
                <Image
                  src="/img/danielkroupa.webp"
                  width={500}
                  height={500}
                  alt="Profile Image"
                  className="relative mx-auto mb-5 flex h-72 w-72 items-center justify-center rounded-full border border-brand-secondary/35 bg-linear-to-br from-brand-primary/25 via-brand-secondary/20 to-brand-primary/10 object-cover"
                />

                <div className="grid grid-cols-2 gap-3">
                  {HERO_CONTACT_LINKS.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        aria-label={item.label}
                        title={item.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.3 + i * 0.06 }}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="group flex h-14 items-center justify-center rounded-2xl border border-border/80 bg-card/70 text-brand-primary shadow-sm shadow-black/5 transition-colors hover:border-brand-secondary/45 hover:text-brand-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary/60"
                      >
                        <Icon size={20} />
                        <span className="sr-only">{item.label}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Accordion ── */}
        <section className="rounded-3xl border border-border bg-card/65 p-5 backdrop-blur-sm sm:p-8 md:p-10">
          <div className="mb-8 space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-brand-secondary">
              Detail oblasti
            </p>
            <h2 className="text-3xl text-foreground md:text-5xl">
              Zkušenosti a přesah
            </h2>
          </div>

          <div className="space-y-4">
            {SECTIONS.map((sec, i) => {
              const Icon = sec.icon;
              const isOpen = openId === sec.id;
              return (
                <motion.div
                  key={sec.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="overflow-hidden rounded-2xl border border-border bg-linear-to-br from-brand-surface/65 to-card/85"
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? "" : sec.id)}
                    className="group flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-background/35 sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${sec.id}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex rounded-full bg-brand-primary/15 p-2 text-brand-primary transition-colors group-hover:bg-brand-secondary/20 group-hover:text-brand-secondary">
                        <Icon size={17} />
                      </span>
                      <span>
                        <span className="block text-lg font-semibold text-foreground sm:text-xl">
                          {sec.title}
                        </span>
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-brand-secondary"
                    >
                      <ChevronDown size={22} />
                    </motion.span>
                  </button>

                  <motion.div
                    id={`panel-${sec.id}`}
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-5 border-t border-border/80 px-4 py-5 sm:px-6 sm:py-6">
                      {sec.tags ? (
                        <div className="flex flex-wrap gap-2">
                          {sec.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1 text-xs font-medium text-brand-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      {sec.levels ? (
                        <div className="grid gap-2 rounded-2xl border border-border bg-background/45 p-4 sm:grid-cols-2">
                          {sec.levels.map((lv) => (
                            <div
                              key={lv.technology}
                              className="flex items-center justify-between rounded-xl bg-card/75 px-3 py-2"
                            >
                              <span className="text-sm font-medium text-foreground">
                                {lv.technology}
                              </span>
                              <span className="text-xs uppercase tracking-wide text-brand-secondary">
                                {lv.level}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      <div className="grid gap-2 sm:grid-cols-2">
                        {sec.points.map((pt) => (
                          <div
                            key={`${sec.id}-${pt}`}
                            className="flex items-start gap-2 rounded-xl bg-background/40 p-3"
                          >
                            <CheckCircle2
                              size={15}
                              className="mt-0.5 shrink-0 text-brand-primary"
                            />
                            <span className="text-sm text-brand-text-soft">
                              {pt}
                            </span>
                          </div>
                        ))}
                      </div>

                      {sec.id === "hudba" ? (
                        <motion.div
                          animate={{ opacity: [0.45, 0.7, 0.45] }}
                          transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="relative overflow-hidden rounded-2xl border border-brand-secondary/35 bg-linear-to-r from-brand-primary/12 via-brand-secondary/12 to-brand-primary/12 p-4"
                        >
                          <div className="pointer-events-none absolute -top-6 right-4 text-brand-secondary/35">
                            <Music4 size={44} />
                          </div>
                          <p className="max-w-2xl text-sm leading-relaxed text-brand-text-soft">
                            Hudební část je záměrně osobnější. Vedle techniky
                            drží rovnováhu i cit, atmosféra a schopnost
                            improvizovat v reálném čase.
                          </p>
                        </motion.div>
                      ) : null}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── Konicky ── */}
        <section className="rounded-3xl border border-border bg-card/65 p-5 backdrop-blur-sm sm:p-8 md:p-10">
          <div className="mb-8 space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-brand-secondary">
              Koníčky
            </p>
            <h2 className="text-3xl text-foreground md:text-5xl">
              Co mě baví mimo projekty
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {HOBBIES.map((hobby, i) => {
              const Icon = hobby.icon;
              return (
                <motion.div
                  key={hobby.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl border border-border bg-linear-to-br from-brand-surface/70 to-card/85 p-4 transition-colors hover:border-brand-secondary/45"
                >
                  <div className="mb-3 inline-flex rounded-full bg-brand-primary/15 p-2 text-brand-primary transition-colors group-hover:bg-brand-secondary/20 group-hover:text-brand-secondary">
                    <Icon size={18} />
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {hobby.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
