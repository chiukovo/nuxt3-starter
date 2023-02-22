import { defineStore } from 'pinia'

export const useLocalStorageStore = defineStore('localStorage', {
    state: () => ({
        user: '',
        token: '',
        lang: 'zh-TW',
    }),
    actions: {

    },
    persist: {
        enabled: true,
        strategies: [{
            key: 'localStorage',
            storage: process.client ? localStorage : null
        }]
    }
})