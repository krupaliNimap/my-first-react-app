import React from 'react'

const Fruit = (props) => {
  console.log('props', props)
  return (
    <h1>Fruit name is {props?.color2?.fruitName}</h1>
  )
}

export default Fruit