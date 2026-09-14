# GTNH Developer Handbook

Unofficial, developer-only documentation for contributors to
[GT New Horizons](https://github.com/GTNewHorizons). It complements rather than
replaces the [official GTNH wiki](https://wiki.gtnewhorizons.com/).

## Local setup

Requires Node.js 22.12 or newer and npm 10.8.2 or newer.

```sh
npm install
npm run dev
```

Run `npm run build` before opening a pull request. Documentation lives in
`src/content/docs/`; edit or add Markdown/MDX there and use the existing concise,
task-oriented style.

The `master` branch deploys with GitHub Actions to
<https://worive.github.io/gtnh-developer-handbook/>.

## License

Documentation content is licensed under CC BY-SA 4.0. Site code and
configuration are licensed under MIT. See [LICENSE](LICENSE).
