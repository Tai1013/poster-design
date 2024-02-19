import type { messageType } from 'element-plus'
import { defineStore, storeToRefs } from 'pinia'
import { reactive, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { useTemplateStore } from './useTemplateStore'
import { useArrayDifference, useCloned } from '@vueuse/core'

type HistoryAction = 'undo' | 'redo' | 'clear'

export const useHistoryStore = defineStore('historyStore',
  () => {
    const { templates } = storeToRefs(useTemplateStore())

    const histories = reactive<GlobalApp.TemplateType[][]>([])
    const historyParams = reactive({
      index: -1,
      length: 0,
      maxLength: 30
    })

    const undoable = computed(() => !(historyParams.index === -1 || historyParams.length === 0 && historyParams.length === historyParams.maxLength))
    const redoable = computed(() => !(historyParams.index === historyParams.length - 1))

    const saveHistory = (message?: string, type?: messageType) => {
      if (histories[historyParams.length - 1]) {
        const arrayDifference = useArrayDifference(histories[historyParams.length - 1], templates.value)
        if (arrayDifference.value.length > 0) return
      }

      if (historyParams.length === historyParams.maxLength) {
        histories.splice(1, historyParams.maxLength + 1, templates.value)
      } else {
        const { cloned } = useCloned(templates)
        histories.push(cloned.value)
        historyParams.index += 1
        historyParams.length = histories.length
      }

      if (message) ElMessage({ type, message })
    }

    const handleHistory = (action: HistoryAction) => {
      switch (action) {
        case 'undo':
          if (!undoable.value) return
          historyParams.index -= 1
          break;
        case 'redo':
          if (!redoable.value) return
          historyParams.index += 1
          break;
        case 'clear':
          histories.splice(0, historyParams.maxLength)
          historyParams.index = -1
          historyParams.length = histories.length
      }
    }

    return {
      undoable,
      redoable,

      saveHistory,
      handleHistory
    }
  }
)
