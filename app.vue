<script setup>
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from './composables/locale'
import { SpeedInsights } from '@vercel/speed-insights/vue';
const { locale } = useI18n({ useScope: 'global' })
const cookieLocale = useLocaleStore()

locale.value = cookieLocale.getLocale || 'en'

const loadingPage = ref()

onBeforeMount(() => {
  loadingPage.value = false
})

onMounted(() => {
  setTimeout(() => {
    loadingPage.value = true
  }, 1000)
})
</script>

<template>
  <LoadingPage v-show="!loadingPage" />
  <NuxtLayout>
    <VitePwaManifest />
    <NuxtPage transition />
      <SpeedInsights />
  </NuxtLayout>
</template>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>
