<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'
import { ElIcon } from 'element-plus'
import * as HeroiconsSolid from '@heroicons/vue/24/solid'
import * as HeroiconsOutline from '@heroicons/vue/24/outline'

const heroiconsIcon = Object.keys(HeroiconsSolid || HeroiconsOutline)

export type HeroiconsIconType = keyof typeof HeroiconsSolid | keyof typeof HeroiconsOutline

const props = defineProps({
  icon: {
    type: String as PropType<HeroiconsIconType>,
    required: true
  },
  type: {
    type: String as PropType<"solid" | "outline">,
    default: "outline"
  },
  size: {
    type: [String, Number],
    default: 24
  },
  color: {
    type: String,
    default: undefined
  }
})

const iconComponent = computed(() => {
  const iconKey = props.icon.indexOf('El') === 0 ? props.icon.slice(2) : props.icon
  if (heroiconsIcon.includes(iconKey)) {
    if (props.type === 'outline') return HeroiconsOutline[iconKey as HeroiconsIconType]
    if (props.type === 'solid') return HeroiconsSolid[iconKey as HeroiconsIconType]
  }
  return undefined
})
</script>

<template lang="pug">
ElIcon(v-bind="$attrs" :color="color" :size="size")
  component(:is="iconComponent")
</template>

<style scoped lang="scss">
.el-icon svg {
  @apply stroke-2;
}
</style>
