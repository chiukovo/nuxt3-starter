<template>
  <div>
    <h1>Home page</h1>
    <NuxtLink to="/test">test page</NuxtLink>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
import { useLocalStorageStore } from '@/stores/localStorage'

const mainStore = useMainStore()
const localStorageStore = useLocalStorageStore()
</script>