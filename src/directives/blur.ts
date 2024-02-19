import type { Plugin } from "vue";

const install: Plugin = app => {
  app.directive('blur', {
    mounted(el) {
      el.addEventListener('focus', () => el.blur())
    },
    unmounted(el) {
      el.addEventListener('focus', () => el.blur())
    }
  })
}

export default install
