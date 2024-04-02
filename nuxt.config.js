export default {
    head: {
        titleTemplate: 'ShopnShop by Sherylux',
        title: 'ShopnShop by Sherylux',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'ShopnShop by Sherylux',
            },
            {
                name: 'author',
                content: 'd-themes',
            },
            {
                name: 'keywords',
                content: 'ShopnShop by Sherylux',
            },
            {
                name: 'app-mobile-web-app-title',
                content: 'Porto',
            },
            {
                name: 'application-name',
                content: 'ShopnShop by Sherylux',
            },
            {
                name: 'msapplication-TileColor',
                content: '#cc9966',
            },
            {
                name: 'msapplication-config',
                content: '/images/icons/browserconfig.xml',
            },
        ],
        link: [
            {
                rel: 'dns-prefetch',
                href: '//fonts.googleapis.com',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: './images/icons/favicon-32x32.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: './images/icons/favicon.ico',
            },
            {
                rel: 'shortcut icon',
                href: './images/icons/favicon.ico',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: './images/icons/apple-touch-icon.png',
            },
            {
                rel: 'mask-icon',
                color: '#666666',
                href: './images/icons/safari-pinned-tab.svg',
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800,800italic%7CPoppins:300,400,500,600,700,800%7COswald:400,700',
            },
        ],
    },

    css: [
        'swiper/dist/css/swiper.css',
        '~/static/css/animate.min.css',
        '~/static/css/bootstrap.min.css',
        '~/static/css/porto-icons.min.css',
        '~/static/vendor/fontawesome-free/css/all.min.css',
        '~/static/vendor/simple-line-icons/css/simple-line-icons.min.css',
        '~/static/sass/style.scss',
        '@fortawesome/fontawesome-free/css/all.css',
    ],

    plugins: [
        { src: '~/plugins', ssr: false },
        { src: '~/plugins/localstorage.js', ssr: false },
        { src: '~/plugins/filters.js', ssr: false },
        { src: '~/plugins/directives/animate.js', ssr: false },
        { src: '~/plugins/directives/parallax.js', ssr: false },
        { src: '~/plugins/directives/sticky.js', ssr: false },
        { src: '~/plugins/vue2-slot-calendar.js', ssr: false },
        { src: '~/plugins/v-calendar.js', ssr: false },
        // { src: '~/plugins/antd.js', ssr: false },
        // '~/plugins/antd.js',
    ],

    buildModules: [
        '@nuxtjs/style-resources',
        'cookie-universal-nuxt',
        // '@nuxtjs/vuetify',
    ],

    modules: [
        '@nuxtjs/axios',
        [
            'primevue/nuxt',
            {
                theme: 'md-light-indigo',
                ripple: true,
                components: [
                    'InputText',
                    'Button',
                    'DataTable',
                    'Dialog',
                    'Calendar',
                    'Steps',
                    'Toast',
                    'Accordion',
                    'AccordionTab',
                ],
                directives: ['Tooltip', 'Badge'],
            },
        ],
        // '@nuxtjs-extra/ant-design-vue',
        // [
        //     '@nuxtjs-extra/ant-design-vue',
        //     {
        //         style: 'css', // available options: 'css', 'less'
        //         useDayJs: false, // replace moment.js with day.js internally within 'ant-design-vue' for reducing package size
        //     },
        // ],
    ],

    // css: ['ant-design-vue/dist/antd.css'],

    router: {
        base: '/',
        linkActiveClass: '',
        linkExactActiveClass: 'active',
    },

    build: {
        publicPath: 'http://d-themes.com/vue/porto/demo-36/',
    },

    generate: {
        subFolders: false,
        fallback: '404.html',
    },

    ssr: false,
    loading: false,
    loadingIndicator: false,

    pageTransition: 'page',

    server: {
        port: 4000,
        host: 'localhost',
    },
};
