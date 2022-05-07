import React from 'react'

function Coloumns() {
    const items = []
  return (
    <React.Fragment>
        {
            items.map(items => (
                <React.Fragment key={items.id}>
                    <h1>title</h1>
                    <p>{items.title}</p>
                    </React.Fragment>
            ))
        }
        <td>Name</td>
        <td>madhu</td>
    </React.Fragment>
  )
}

export default Coloumns