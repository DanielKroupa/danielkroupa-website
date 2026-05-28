# Daniel Kroupa Web

![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A520.10.0-339933?logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-%E2%89%A510.0.0-CB3837?logo=npm&logoColor=white)
![TanStack Start](https://img.shields.io/badge/TanStack-Start-FF4154)
![TanStack Router](https://img.shields.io/badge/TanStack-Router-FF4154)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-3.x-6E9F18?logo=vitest&logoColor=white)

Produkční web postavený na frameworku TanStack Start pro prezentaci služeb a sběr poptávek přes kontaktní formulář.

## Přehled

Projekt slouží jako osobní/profesní web se zaměřením na:

- vývoj webu na míru,
- redesign webových stránek,
- SEO zlepšení,
- webovou analytiku,
- výkon a optimalizaci webu.

## Funkce

### Business funkce

- Landing page se sekcemi: hero, služby, proces spolupráce, projekty, ceník, o mně, kontakt.
- Detailní stránky služeb pod `/sluzby/*`.
- Samostatná profilová stránka `/profil`.
- Stránky s právním obsahem (`/privacy`, `/terms`) a FAQ (`/faq`).

### Technické funkce

- File-based routování pomocí TanStack Router.
- Server funkce (`createServerFn`) pro zpracování kontaktů.
- Validace formuláře přes Zod + React Hook Form.
- Cookie consent vrstva a podmíněné spouštění analytiky.
- SEO head metadata přes sdílenou utilitu.
- Testy pro klíčovou logiku (schema, e-mail client, šablony e-mailů, server function, cookies).

## Tech Stack

- Framework: TanStack Start
- Router: TanStack Router
- UI: React 19
- TypeScript
- Stylizace: Tailwind CSS 4
- Formy + validace: React Hook Form + Zod
- Server runtime/build: Nitro
- E-mail služba: Resend
- Testování: Vitest + Testing Library + jsdom
- Ikony: Lucide React, React Icons
- Obrázky: @unpic/react

## Getting Started

### Požadavky

- Node.js `>=20.10.0`
- npm `>=10.0.0`

### Instalace

```bash
npm install
```

### Lokální vývoj

```bash
npm run dev
```

Aplikace poběží ve vývojovém režimu.

## Scripts

Definováno v `package.json`:

- `npm run dev` - spuštění vývojového serveru
- `npm run start` - lokální preview produkčního buildu

## Environment Variables

Konfigurace je v souboru `.env.example`.

| Proměnná                 | Povinná | Účel                                                             |
| ------------------------ | ------- | ---------------------------------------------------------------- |
| `RESEND_API_KEY`         | Ano     | API klíč pro Resend (odesílání e-mailů z kontaktního formuláře). |
| `CONTACT_FROM_EMAIL`     | Ano     | Odesílatel e-mailů (musí být ověřený v Resend).                  |
| `CONTACT_TO_EMAIL`       | Ano     | Příjemce poptávek z kontaktního formuláře.                       |
| `VITE_GA_MEASUREMENT_ID` | Ne      | Google Analytics 4 Measurement ID (např. `G-XXXXXXXXXX`).        |

Ukázka:

```dotenv
RESEND_API_KEY="re_xxxxx..."
CONTACT_FROM_EMAIL="noreply@danielkroupa.cz"
CONTACT_TO_EMAIL="info@danielkroupa.cz"
VITE_GA_MEASUREMENT_ID=""
```

## Testování

Spuštění testů:

```bash
npm run test
```

Testy aktuálně pokrývají hlavně aplikační logiku v `src/lib`:

- validace kontaktního formuláře,
- práci s cookie consent daty,
- inicializaci Resend klienta,
- generování e-mailových šablon,
- server funkci pro odeslání kontaktu.

## Architektura (stručně)

- Routy jsou definované souborově v `src/routes`.
- Root layout (`__root.tsx`) skládá globální komponenty: header, footer, consent/privacy vrstvy a analytické vrstvy.
- UI komponenty v `src/components` jsou zaměřené na prezentaci.
- Server logika je oddělená v `src/lib/server`.
- Schémata a validace jsou umístěné v `src/lib/schemas`.
