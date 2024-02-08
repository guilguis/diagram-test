import React from "react"
import { ElementDataType } from "./types"
import logo from '../../../static/images/Logo.jpg'

export const TextInputNode : ElementDataType = {
    x: 50,
    y: 50,
    width: 200,
    height: 200,
    type: 'text-input',
    value: 'Test 1'
}

export const ImgCardNode : ElementDataType = {
    x: 50,
    y: 50,
    width: 200,
    height: 200,
    type: 'img-card',
    imgSrc: logo,
    title: 'Image Card'
}

export const TestElementNode : ElementDataType = {
    x: 50,
    y: 50,
    width: 200,
    height: 200,
    type: 'test',
    title: 'Test 1'
}