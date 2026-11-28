# CMS for YoungVision.org - Built with Payload CMS

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

This is the content management system (CMS) for [youngvision.org](https://www.youngvision.org/) ([repository](https://github.com/YoungVision-eV/website)), built using [Payload CMS](https://payloadcms.com/) 3 (on top of [Next.js](https://nextjs.org/)). It is currently used to create and manage the events displayed on our website.

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (^22.23.4 or >=24.22.1)
- pnpm
- docker / podman

## 🏃 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/YoungVision-eV/website-cms.git
   cd website-cms
   ```

1. **Install dependencies**

   ```bash
   pnpm install
   ```

1. **Environment Setup**

   - Copy the `.env.example` file to `.env`

1. **MongoDB Setup**

   - Start MongoDB for example with Docker:
     ```bash
     docker run --name mongodb-website-cms -p 27017:27017 mongo:latest
     ```
   - If needed update the `DATABASE_URI` in the `.env` file

1. **Development**

   - Start the development server:
     ```bash
     pnpm dev
     ```
   - The CMS will be available at `http://localhost:3000/admin`

1. **Build for Production**

   ```bash
   pnpm build
   ```

1. **Start Production Server**
   ```bash
   pnpm start
   ```

## 📂 Folder Structure

- `src/app/` - Next.js app serving the admin panel and API routes
- `src/collections/` - Collection definitions
- `src/components/` - Custom admin components
- `src/migrations/` - Database migrations
- `src/seed/` - Script and media for seeding sample data
- `src/payload.config.ts` - Payload configuration

## 📜 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm generate:types` - Generate TypeScript types (which are used in the [Frontend](https://github.com/YoungVision-eV/website/blob/main/src/data/payload-types.ts))
- `pnpm payload` - Payload CLI (e.g. `pnpm payload migrate` to run database migrations)

## ✨ Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Han2-Ro"><img src="https://avatars.githubusercontent.com/u/127860003?v=4?s=100" width="100px;" alt="Hannes"/><br /><sub><b>Hannes</b></sub></a><br /><a href="https://github.com/YoungVision-eV/website-cms/commits?author=Han2-Ro" title="Code">💻</a> <a href="https://github.com/YoungVision-eV/website-cms/commits?author=Han2-Ro" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://bulik.dev"><img src="https://avatars.githubusercontent.com/u/9407731?v=4?s=100" width="100px;" alt="Jonas"/><br /><sub><b>Jonas</b></sub></a><br /><a href="#infra-MrGreenTea" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/YoungVision-eV/website-cms/commits?author=MrGreenTea" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/aprevrah"><img src="https://avatars.githubusercontent.com/u/119614085?v=4?s=100" width="100px;" alt="ap"/><br /><sub><b>ap</b></sub></a><br /><a href="https://github.com/YoungVision-eV/website-cms/commits?author=aprevrah" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
