import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        appVersion: process.env.APP_VERSION
    }),
    actions: {
        async getAN() {
            const { data, error } = await useFetch('http://127.0.0.1:8000/api/getAN', {
                method: 'GET',
                onRequest({ request, options }) {
                    // Set the request headers
                    options.headers = options.headers || {}
                },
            })

            return {
                data,
                error
            }
        }
    },
})