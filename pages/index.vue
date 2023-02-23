<template>
  <div>
    <h1>Home page</h1>
    <NuxtLink to="/test">test page</NuxtLink>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
import { useLocalStorageStore } from '@/stores/localStorage'

const datas = reactive({
    name: "test",
    form: {
      account: '',
      password: ''
    }
})

const mainStore = useMainStore()
const localStorageStore = useLocalStorageStore()
//const an = await mainStore.getAN()
</script>