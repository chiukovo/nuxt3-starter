import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        appVersion: process.env.APP_VERSION,
    }),
    actions: {

    },
})