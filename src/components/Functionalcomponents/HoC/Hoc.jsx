import React from 'react'
import Button from "./Button"
import trackingButtonComponent from './TrackingButtonComponent';

const Hoc = () => {
    const ButtonWithTracking = trackingButtonComponent(Button);

  return (
    <div>
      <h2>This is an example for higher order components</h2>
      <ButtonWithTracking name="login" trackingInfo={{customerId:"23345656",password:"hello@sece"}}/>
    </div>
  )
}

export default Hoc