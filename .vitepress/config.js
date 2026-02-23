export default {
  // title: "Time4o Documentation",
  // description: "Time4o Documentation",
  cleanUrls: true,

  locales: {
    root: {
      title: "Time4o Dokumentasjon",
      description: "Time4o Dokumentasjon",
      label: 'Norsk',
      lang: 'nb',
      link: '/',
      dir: '/nb',
      head: [
        ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"}],
        ['link', { rel: "manifest", href: "/favicons/site.webmanifest"}],
        ['link', { rel: "mask-icon", href: "/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
        ['link', { rel: "shortcut icon", href: "/favicons/favicon.ico"}],
        ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
        ['meta', { name: "msapplication-config", content: "/favicons/browserconfig.xml"}],
        ['meta', { name: "theme-color", content: "#ffffff"}],
      ],
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        outlineTitle: "Innhold",
        editLink: {
          pattern: 'https://github.com/time4o/time4o-docs/edit/main/:path',
          text: 'Editér denne siden på GitHub'
        },
        docFooter: {
          prev: 'Forrige side',
          next: 'Neste side'
        },
        notFound: {
          code: '',
          title: 'Denne siden finnes ikke',
          quote: 'Ta kontakt med Time4o support hvis det burde være noe her :-)',
          linkText: 'Hjem'
        },
        sidebar: {
          '/' : [
            {
              text: 'Guide',
              collapsed: false,
              items: [
                { text: 'Kom i gang', link: '/nb/guide/get-started' },
                { text: 'Systemkrav', link: '/nb/guide/requirements' },
                { text: 'Oppgaver', link: '/nb/tasks' },
                { text: 'Tidtaking', link: '/nb/guide/timing' },
                { text: 'Stasjonstyper', link: '/nb/guide/station-types' },
                { text: 'Direktepåmelding', link: '/nb/guide/direct-entry' },
                { text: 'Jukselappen', link: '/nb/guide/cheat-sheet' },
              ],
            },
            {
              text: 'Løpskonsepter',
              collapsed: false,
              items: [
                {
                  text: 'Individuelt',
                  items: [
                    { text: 'Enkelt o-løp', link: '/nb/guide/tutorials/simple-race' },
                    { text: 'Fellestart', link: '/nb/guide/tutorials/mass-start' },
                    { text: 'Jaktstart', link: '/nb/guide/tutorials/chasing-start' },
                  ],
                },
                { text: 'Stafett', link: '/nb/guide/tutorials/relay' },
                { text: 'Flerdagersløp', link: '/nb/guide/tutorials/multiday' },
                { text: 'Knock-out sprint', link: '/nb/guide/tutorials/knock-out' },
                { text: 'Poengløp', link: '/nb/guide/tutorials/point-race' },
                { text: 'Runder', link: '/nb/guide/tutorials/loops' },
              ],
            },
            {
              text: 'Veiledninger',
              collapsed: false,
              items: [
                { text: 'Brikkesjekk', link: '/nb/guide/tutorials/card-check' },
                { text: 'Startsjekk', link: '/nb/guide/tutorials/start-check' },
                { text: 'Mellomtider', link: '/nb/guide/tutorials/intermediate-times' },
                { text: 'Stemplingsfri målgang', link: '/nb/guide/tutorials/touch-free-finish' },
                { text: 'Speaker', link: '/nb/guide/tutorials/speaker' },
                { text: 'TV-grafikk', link: '/nb/guide/tutorials/tv-graphics' },
                { text: 'E-post til påmeldte', link: '/nb/guide/tutorials/entry-email' },
                { text: 'Fakturering', link: '/nb/guide/tutorials/invoicing' },
              ],
            },
            {
              text: 'Ressurser',
              collapsed: false,
              items: [
                {
                  text: 'Time4o Hub',
                  link: '/nb/resources/hub',
                  items: [
                    { text: 'Arrangement', link: '/nb/resources/hub/event' },
                    { text: 'Klienter', link: '/nb/resources/hub/clients' },
                    { text: 'Kunder', link: '/nb/resources/hub/customers' },
                    { text: 'Time4o Center / LiveRes', link: '/nb/resources/hub/centers' },
                    { text: 'Filer', link: '/nb/resources/hub/files' },
                  ]
                },
                {
                  text: 'Arrangement',
                  link: '/nb/resources/event',
                  items: [
                    { text: 'Løp', link: '/nb/resources/event/races' },
                    { text: 'Stasjoner', link: '/nb/resources/event/stations' },
                    { text: 'Infoskjermer', link: '/nb/resources/event/info-screens' },
                    { text: 'Påmeldinger', link: '/nb/resources/event/entries' },
                    { text: 'Starter', link: '/nb/resources/event/starts' },
                    { text: 'Klasser', link: '/nb/resources/event/classes' },
                    { text: 'Løyper og poster', link: '/nb/resources/event/courses_controls' },
                    { text: 'Personer', link: '/nb/resources/event/persons' },
                    { text: 'Organisasjoner', link: '/nb/resources/event/organisations' },
                    { text: 'Brikker og brikketyper', link: '/nb/resources/event/cards' },
                  ]
                },
              ],
            },
          ],
        }
      }
    },
// en: {
//   label: 'English',
//   lang: 'en',
//   link: '/en',
//   dir: '/en',
// }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Jukselappen', link: '/nb/guide/cheat-sheet' },
      { text: 'Hjem', link: '/' },
    ],
    search: {
      provider: 'local',
      options: {
        // TODO Update this to async when upgrading to vitepress v2
        // https://dev.to/ahandsel/vitepress-debug-frontmattertitle-is-appearing-in-search-results-k60
        _render(src, env, md) {
          // First pass: render to populate env.frontmatter and other metadata
          md.render(src, env)

          // Use empty object as fallback if frontmatter is undefined
          const fm = env.frontmatter ?? {}

          // Honor per-page opt out: `search: false` in frontmatter
          // if (fm.search === false) {
          //   return ''
          // }

          let rewritten = src

          // Replace headings like "{{ $frontmatter.title }}" with a concrete title
          if (typeof fm.title === 'string' && fm.title.trim().length > 0) {
            rewritten = rewritten.replace(
                /\{\{\s*\$frontmatter\.title\s*}}/m,
                `${fm.title}`
            )
          }

          // Strip any remaining $frontmatter interpolations from indexable text
          rewritten = rewritten.replace(/\(?\{\{\s*\$frontmatter\.[^}]*}}\)?/g, '')

          // Final render used for indexing
          return md.render(rewritten, env)
        },
      }
    },
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
}
