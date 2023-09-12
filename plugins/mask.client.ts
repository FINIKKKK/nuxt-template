import Inputmask from 'inputmask';

/**
 * Использование маски ----------------
 */
export default defineNuxtPlugin(() => {
    return {
        provide: {
            Inputmask
        }
    }
});
