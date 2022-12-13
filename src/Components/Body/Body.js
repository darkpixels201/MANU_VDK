import React from 'react'
import BodyMobile from './BodyMobile'
import BodyWeb from './BodyWeb'

const Body = () => {
  return (
    <div>{window.innerWidth <= 951 ? <BodyMobile/> : <BodyWeb />}</div>
  )
}

export default Body