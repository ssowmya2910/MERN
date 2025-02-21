import React from 'react'
import ButtonComp from './ButtonComp'
import Button from "./Button"
const HoC = () => {
    const ButtonTrack=ButtonComp(Button)
  return (
    <div><h1>Higher Order Components(Hoc)</h1>
    <Button value={"Login"}/>
    <ButtonTrack value={"Login"} trackingInfo={{"CustID":"Hello","password":"password"}}/>
    </div>
  )
}

export default HoC