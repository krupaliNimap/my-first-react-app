import React, { useEffect, useState } from 'react'

const TimerExample = () => {
    const [timer, setTimer] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setTimer((timer)=>timer + 1)}
            , 1000)
    }, [])
  return (
    <>
    <h1>I have rendered {timer} times.</h1>
    </>
  )
}

export default TimerExample

