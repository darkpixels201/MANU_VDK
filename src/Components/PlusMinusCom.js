import React, { useState } from 'react'
import { noUnderline, row } from '../utils/CommonStyles'
import CustomText from './CustomText'
import Spacer from './Spacer'

const PlusMinusCom = () => {
  const [counter, setCounter] = useState(1);
  const addOne = (counter, setCounter) => {
    setCounter(counter + 1);
  };
  const minusOne = (counter, setCounter) => {
    if (counter > 1) setCounter(counter - 1);
  };
  return (
    <div style={{ ...row, alignItems: "center" }}>
              <div
                style={{
                  cursor: "pointer",
                  height: 10,
                  width: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CustomText
                  title="-"
                  fontSize={20}
                  onClick={() => minusOne(counter, setCounter)}
                />
              </div>
              <Spacer width={20} />
              <CustomText title={counter} fontSize={20} />

              <Spacer width={20} />
              <div
                style={{
                  cursor: "pointer",
                  height: 10,
                  width: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => addOne(counter, setCounter)}
              >
                <CustomText title="+" fontSize={20} />
              </div>
            </div>
  )
}

export default PlusMinusCom