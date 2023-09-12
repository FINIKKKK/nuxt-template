import {useUserStore} from '~/stores/UserController';

/**
 * Plugin (Получение значения языка и изменяем его в хранилище) ----------------
 */
export default defineNuxtPlugin(() => {
    const userController = useUserStore();
    const lang = useCookie<'ru' | 'en'>('lang');

    lang.value && userController.changeLang(lang.value);
});
