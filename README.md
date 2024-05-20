# Payload Blank Template
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

A blank template for [Payload](https://github.com/payloadcms/payload) to help you get up and running quickly. This repo may have been created by running `npx create-payload-app@latest` and selecting the "blank" template or by cloning this template on [Payload Cloud](https://payloadcms.com/new/clone/blank).

See the official [Examples Directory](https://github.com/payloadcms/payload/tree/main/examples) for details on how to use Payload in a variety of different ways.

## Development

To spin up the project locally, follow these steps:

1. First clone the repo
1. Then `cd website-cms && cp .env.example .env`
1. Next `pnpm install && pnpm run dev` (or `docker-compose up`, see [Docker](#docker))
1. Now `open http://localhost:3000/admin` to access the admin panel
1. Create your first admin user using the form on the page

That's it! Changes made in `./src` will be reflected in your app.

### Docker

Alternatively, you can use [Docker](https://www.docker.com) to spin up this project locally. To do so, follow these steps:

1. Follow [steps 1 and 2 from above](#development), the docker-compose file will automatically use the `.env` file in your project root
1. Next run `docker-compose up`
1. Follow [steps 4 and 5 from above](#development) to login and create your first admin user

That's it! The Docker instance will help you get up and running quickly while also standardizing the development environment across your teams.

## Production

To run Payload in production, you need to build and serve the Admin panel. To do so, follow these steps:

1. First invoke the `payload build` script by running `pnpm run build` in your project root. This creates a `./build` directory with a production-ready admin bundle.
1. Then run `pnpm run serve` to run Node in production and serve Payload from the `./build` directory.

### Deployment

The easiest way to deploy your project is to use [Payload Cloud](https://payloadcms.com/new/import), a one-click hosting solution to deploy production-ready instances of your Payload apps directly from your GitHub repo. You can also deploy your app manually, check out the [deployment documentation](https://payloadcms.com/docs/production/deployment) for full details.

## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Han2-Ro"><img src="https://avatars.githubusercontent.com/u/127860003?v=4?s=100" width="100px;" alt="Hannes"/><br /><sub><b>Hannes</b></sub></a><br /><a href="https://github.com/YoungVision-eV/website-cms/commits?author=Han2-Ro" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://bulik.dev"><img src="https://avatars.githubusercontent.com/u/9407731?v=4?s=100" width="100px;" alt="Jonas"/><br /><sub><b>Jonas</b></sub></a><br /><a href="#infra-MrGreenTea" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/YoungVision-eV/website-cms/commits?author=MrGreenTea" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/aprevrah"><img src="https://avatars.githubusercontent.com/u/119614085?v=4?s=100" width="100px;" alt="ap"/><br /><sub><b>ap</b></sub></a><br /><a href="https://github.com/YoungVision-eV/website-cms/commits?author=aprevrah" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!