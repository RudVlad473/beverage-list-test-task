export type TTag = {
  id?: string
  tag: string
  onClick?: (id: string) => void
  isFeatured?: boolean
}

export type TTags = TTag[]