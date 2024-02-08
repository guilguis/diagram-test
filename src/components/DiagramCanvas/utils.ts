import { ElementDataType } from "./Elements/types";
import TestElement from "./Elements/testElement";
import React, { ReactElement } from "react";
import ImgCard from "./Elements/ImgCard/ImgCard";
import TextInputElement from "./Elements/TextInput/TextInputElement";


export function getDiagramElement(data:ElementDataType, handleSelect:any, handleRemove:any) : ReactElement {
    
    switch (data.type) {
        case 'text-input':
            return TextInputElement({node: data, handleSelect:handleSelect, handleRemove:handleRemove, selected:false})
            break;
        case 'img-card':
            return ImgCard({node: data, handleSelect:handleSelect, handleRemove:handleRemove, selected:false})
            break;
        default:
            return TestElement({node: data, handleSelect:handleSelect, handleRemove:handleRemove, selected:false})
            break;
    }
}
