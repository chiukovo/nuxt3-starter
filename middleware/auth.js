import { useLocalStorageStore } from '@/stores/localStorage'

export default defineNuxtRouteMiddleware(() => {
    if (process.client) {
        const localStorageStore = useLocalStorageStore()
    } else {
        return navigateTo('/')
    }
})