import 'intersection-observer';

/**
 * Directive "Observer" (для проверки элемента в поле зрения) ----------------
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('observe', {
    mounted(el, binding) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            binding.value(entry.target);
          }
        });
      }, options);

      observer.observe(el);
    },

    getSSRProps(binding, vnode) {
      return {};
    },
  });
});
