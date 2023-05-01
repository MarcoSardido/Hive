// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Hive',
            link: [
                { rel: 'icon', type: 'image/png', href: '/Brand.png' }
            ]
        }
    },
    alias: {
        assets: '/<rootDir>/assets'
    },
    modules: ['@nuxtjs/tailwindcss']
})
