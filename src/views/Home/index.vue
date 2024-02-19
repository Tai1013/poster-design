<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElTabs, ElTabPane } from 'element-plus'
import { PosterButton } from '@/components/basic'
import { storeToRefs, useHistoryStore } from '@/stores'
import SidebarComp from './Sidebar.vue'
import ViewprotComp from './Viewprot.vue'
import AttributesComp from './Attributes.vue'
import LayerComp from './Layer.vue'

type HeaderButtonType = {
  icon: GlobalApp.IconType
  label?: string
  disabled?: boolean
  onClick: () => void
}

defineOptions({ name: "PosterHome" })

const { undoable, redoable } = storeToRefs(useHistoryStore())
const { handleHistory } = useHistoryStore()

const activeTab = ref("attributes")

const headerLeftButtons = computed((): HeaderButtonType[] => [
  {
    icon: 'Bars3Icon',
    onClick: () => {}
  },
  {
    icon: 'ArrowUturnLeftIcon',
    disabled: !undoable.value,
    onClick: () => handleHistory('undo')
  },
  {
    icon: 'ArrowUturnRightIcon',
    disabled: !redoable.value,
    onClick: () => handleHistory('redo')
  }
])

const headerRightButtons = computed((): HeaderButtonType[] => [
  {
    label: '重置',
    icon: 'ArrowPathIcon',
    onClick: () => {}
  },
  {
    label: '預覽',
    icon: 'EyeIcon',
    onClick: () => {}
  },
  {
    label: '保存',
    icon: 'DocumentPlusIcon',
    onClick: () => {}
  }
])
</script>

<template lang="pug">
.poster-layout
  header
    div
      PosterButton(
        v-for="button in headerLeftButtons"
        :key="button.icon"
        type="primary"
        size="small"
        :icon="button.icon"
        icon-size="16"
        :disabled="button.disabled"
        @click="button.onClick"
      )
    div
      PosterButton(
        v-for="button in headerRightButtons"
        :key="button.icon"
        type="primary"
        size="small"
        :icon="button.icon"
        icon-size="16"
        :disabled="button.disabled"
        @click="button.onClick"
      ) {{ button.label }}
  .poster-content
    SidebarComp(class="flex-shrink-0 shadow")
    ViewprotComp(class="flex-auto")
    ElTabs(v-model="activeTab" stretch)
      ElTabPane(label="配置" name="attributes")
        AttributesComp
      ElTabPane(label="圖層" name="layers")
        LayerComp
  footer
</template>

<style scoped lang="scss">
.poster-content {
  @apply py-10 flex;
}

header, footer {
  @apply absolute w-full h-10 shadow;
}

header {
  @apply flex justify-between items-center bg-primary-400 top-0;

  > div {
    @apply flex items-center;
  }

  .el-button {
    @apply m-0 h-10 text-black disabled:border-none disabled:bg-transparent disabled:opacity-60 disabled:hover:text-black;
  }
}

footer {
  @apply text-white bg-black bottom-0;
}

.el-tabs {
  @apply w-[280px] shadow flex flex-col;

  :deep(.el-tabs__header) {
    @apply m-0 flex-shrink-0;
  }

  :deep(.el-tabs__content) {
    @apply p-2 flex-auto overflow-y-auto;
  }

  :deep(.el-tabs__item) {
    @apply p-0;
  }
}

</style>
