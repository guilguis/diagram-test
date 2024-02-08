import { MouseEventHandler } from "react"

export interface DiagramElementType {
    handleSelect: any
    handleRemove: any
    selected: boolean
    node: ElementDataType
}
export interface ElementDataType {
    type: string
    x: number
    y: number
    width: number
    height: number
    title?: string
    imgSrc?: string
    value?: string
}