<script setup lang="ts">
import type { PropType } from 'vue'
import type { ButtonType, ComponentSize } from 'element-plus'
import type { HeroiconsIconType } from './Icon.vue'
import { ElButton } from 'element-plus'
import PosterIcon from './Icon.vue'

defineProps({
  type: {
    type: String as PropType<Exclude<ButtonType, 'text'>>,
    default: ''
  },
  size: {
    type: String as PropType<ComponentSize>,
    default: ''
  },
  icon: {
    type: String as PropType<HeroiconsIconType>,
    default: undefined
  },
  iconSize: {
    type: [String, Number],
    default: 'auto'
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type : Boolean,
    default: false
  }
})
</script>

<template lang="pug">
ElButton(
  v-bind="$attrs"
  v-blur
  :type="type"
  :size="size"
  :loading="loading"
  :disabled="disabled"
)
  slot(name="icon")
    PosterIcon(v-if="icon" :class="{ 'mr-1': $slots.default }" :icon="icon" :size="iconSize")
  slot
</template>
