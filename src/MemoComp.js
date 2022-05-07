import React from 'react'

function MemoComp(prop) {
    console.log('renderning Memo comp')
  return (
    <div>MemoComp {prop.name} </div>
  )
}

export default React.memo(MemoComp) 