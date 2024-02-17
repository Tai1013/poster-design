<script setup lang="ts">
import { ref } from 'vue'
import { ElTabs, ElTabPane } from 'element-plus'
import SidebarComp from './Sidebar.vue'
import ViewprotComp from './Viewprot.vue'
import AttributesComp from './Attributes.vue'
import LayerComp from './Layer.vue'

defineOptions({ name: "PosterHome" })

const activeTab = ref("attributes")
</script>

<template lang="pug">
.poster-layout
  header
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
  @apply bg-primary-400 top-0;
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
