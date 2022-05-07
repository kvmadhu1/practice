import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>
    //             hello madhu , its a function with jsx
    //         </h1>
    //     </div>
    // )

    return React.createElement('div',{id: 'mad', className: 'h'}, React.createElement("h1", {id:'f', className:'d'}, "without jsx"))
}

export default Hello