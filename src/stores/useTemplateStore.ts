import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTemplateStore = defineStore('templateStore',
  () => {
    const templates = ref<GlobalApp.TemplateType[]>([])

    return {
      templates
    }
  }
)
