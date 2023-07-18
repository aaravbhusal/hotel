import React, { createContext } from 'react'
import ChildC from './ChildC';
const data=createContext();
const data2=createContext();


const ChildA = () => {
    

    //consumer, provider , data
    const name="nabin"
    const title="dancer"
  return (
    <div>
        <data.Provider value={name}>
        <data2.Provider value={title}>

            
            

            <ChildC/>
            </data2.Provider>
        </data.Provider>

        {/* <ChildB name="name"></ChildB> */}
    </div>
  )
}
export {data}
export {data2}

export default ChildA