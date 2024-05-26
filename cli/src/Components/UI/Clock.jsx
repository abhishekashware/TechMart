import React from 'react'
import Wireless03 from '../../assets/wireless-03.png'
const Clock = ({time}) => {
  return (
    <div
    className="flex clock"
    style={{ justifyContent: "space-between", width: "100%" }}
  >
    <div className="flex-column">
      <div className="flex" style={{ marginTop: "20px", gap: "20px" }}>
        <div className="flex" style={{ flexDirection: "column" }}>
          <b>{time.days}</b>
          <b>Days</b>
        </div>{" "}
        :
        <div className="flex" style={{ flexDirection: "column" }}>
          <b>{time.hours}</b>
          <b>Hours</b>
        </div>
        :
        <div className="flex" style={{ flexDirection: "column" }}>
          <b>{time.minutes}</b>
          <b>Minutes</b>
        </div>
        :
        <div className="flex" style={{ flexDirection: "column" }}>
          <b>{time.seconds}</b>
          <b>Seconds</b>
        </div>
      </div>
      <button>
        Visit Store
      </button>
    </div>
    <img
      src={Wireless03}
      className="product-image"
      style={{ width: "200px", height: "200px" }}
    />
  </div>
  )
}

export default Clock