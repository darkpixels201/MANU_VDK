import React from 'react'
import BodyMobile from './BodyMobile'
import BodyWeb from './BodyWeb'

const Body = (props) => {
  return (
    <div>{window.innerWidth <= 951 ? <BodyMobile/> : <BodyWeb on={props.on} setOn={props.setOn} />}</div>
  )
}

export default Body