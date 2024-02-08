import React from 'react'

interface Props {
    node: any
    updateNode: Function
}

const NodeForm = (props: Props) => {

  const renderFields = (node:any) => {
    
  }

  return (
    <>
        {renderFields(props.node)}
    </>
  )
}

export default NodeForm