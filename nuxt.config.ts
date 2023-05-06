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
    modules: ['@nuxtjs/tailwindcss'],
    runtimeConfig: {
        jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
        jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET
    }
})
