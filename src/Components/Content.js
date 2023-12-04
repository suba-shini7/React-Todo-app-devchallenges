import '../Css/Task.css'
// import { useState } from "react"

export const Content =({display,getData,item})=>{
 
    return(
        <div>
            <div>
                <form onSubmit={display}>
                <input 
                className='input-field'
            autoFocus
            onChange={getData}
            placeholder="add detials"
            value={item}
            required>
            </input>
            <button className='add' onClick={display}>Add
            </button>
                </form>
            </div>
           
        </div>
    )
} 