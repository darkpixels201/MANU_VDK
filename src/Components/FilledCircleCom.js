import React, { useState } from 'react'
import { colors } from '../utils/Colors';

export const FilledCircleCom = ({FilledCircle}) => {
  const [count, setCount] = useState(1);
  return (
    FilledCircle.map((circle, index) => (
        <div key={index} style={{ paddingLeft: 10 }}>
          {count == circle.id ? (
            <div
              style={{
                height: 22,
                width: 22,
                borderRadius: 50,
                borderColor: colors.black,
                border: "solid",
                borderWidth: 1,
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  height: 15,
                  width: 15,
                  borderRadius: 50,
                  border: "solid",
                  borderColor: colors.black,
                  borderWidth: 0.2,
                  backgroundColor: circle.bgcolor,
                }}
              ></div>
            </div>
          ) : (
            <div
              style={{
                height: 18,
                width: 18,
                borderRadius: 50,
                border: "solid",
                borderColor: colors.black,
                borderWidth: 0.2,
                backgroundColor: circle.bgcolor,
                marginTop: 3,
                cursor: "pointer",
              }}
              onClick={() => {
                setCount(circle.id);
              }}
            ></div>
          )}
        </div>
      ))
  )
}
