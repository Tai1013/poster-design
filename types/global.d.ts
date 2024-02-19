/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace GlobalApp {
  type GeometricType = {
    w: number
    h: number
    x: number
    y: number
    rotate: number
  }

  type TemplateType = {
    type: string
    data: Record<string, any>
    geometric: GeometricType
  }

  type IconType = import('@/components/basic/Icon.vue').HeroiconsIconType
}
