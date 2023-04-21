import React, { useState } from 'react'

const HookCounterThree = () => {
    const [Name, setName] = useState({firstName:"",lastName:""})
    const Hello1=()=>{
      alert("HI")
    }
  return (
    <form>
        {/* <input type='text' value = {Name.firstName} onMouseOut={e=> setName({firstName:e.target.value})}></input> */}
        <input type='text' value = {Name.firstName} onMouseOut= {Hello1} ></input>

        <input type='text' value = {Name.lastName} onChange = {e=>setName({lastName:e.target.value})}></input>
        <p>First Name is {Name.firstName}</p>
        <p>Last Name is {Name.lastName}</p>
    </form>
  )
}

export default HookCounterThree