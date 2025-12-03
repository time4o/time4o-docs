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
              ],
            },
            {
              text: 'Veiledninger',
              collapsed: false,
              items: [
                { text: 'Brikkesjekk', link: '/nb/guide/tutorials/card-check' },
                { text: 'Mellomtider', link: '/nb/guide/tutorials/intermediate-times' },
                { text: 'Stemplingsfri målgang', link: '/nb/guide/tutorials/touch-free-finish' },
                { text: 'Fellestart', link: '/nb/guide/tutorials/common-start' },
                { text: 'Stafett', link: '/nb/guide/tutorials/relay' },
                { text: 'Fakturering', link: '/nb/guide/tutorials/invoicing' },
                { text: 'Poengløp', link: '/nb/guide/tutorials/point-race' },
              ],
            },
            {
              text: 'Ressurser Hub',
              collapsed: false,
              items: [
                { text: 'Arrangement', link: '/nb/resources/hub/event' },
                { text: 'Klienter', link: '/nb/resources/hub/clients' },
                { text: 'Kunder', link: '/nb/resources/hub/customers' },
                { text: 'Time4o Center / LiveRes', link: '/nb/resources/hub/centers' },
                { text: 'Filer', link: '/nb/resources/hub/files' },
              ],
            },
            {
              text: 'Ressurser Arrangement',
              collapsed: false,
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
              ],
            }
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
      { text: 'Home', link: '/' },
    ],
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
}
