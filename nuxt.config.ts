// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // DevTools
  devtools: { enabled: true },
  // Все глобальные стили
  css: ['@/assets/styles/style.scss'],
  // Дополниельные модули
  modules: ['@pinia/nuxt'],
  vite: {
    // Подключаем файл с переменными ко всем файлам стилей
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/assets/variables";',
        },
      },
    },
  },
  // SSR
  ssr: true,
  // Включаем TypeScript
  typescript: {
    typeCheck: true,
  },
  // Конфиг
  runtimeConfig: {
    public: {
      url: 'http://localhost:3000',
      apiUrl: '',
    },
  },
});
