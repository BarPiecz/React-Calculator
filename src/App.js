import React, { useState } from "react";
import "./App.css";

import KeyPad from "./components/KeyPad/keyPad";
import Screen from "./components/Screen/screen";

function App() {
   const calcState = useState({ computed: "0", edited: false });
   const clickHandler = (e) => {
      let clickedValue = e.target.innerHTML;
      if (calcState[0].edited) {
        if(clickedValue === 'X' && !isNaN(calcState[0].computed.slice(-1))) {
          calcState[1]({ computed: calcState[0].computed + '*', edited: calcState[0].edited });
        }
        if (clickedValue === "C") {
          calcState[1]({ computed: "0", edited: false});
        }
        if(clickedValue === '÷' && !isNaN(calcState[0].computed.slice(-1))) {
          calcState[1]({ computed: calcState[0].computed + '/', edited: calcState[0].edited });
        }
        if (clickedValue === "=" && calcState[0].computed !== '-' && !isNaN(calcState[0].computed.slice(-1))) {
          const computedValue = eval(calcState[0].computed)
          calcState[1]({ computed: computedValue.toString(), edited: calcState[0].edited });
        }
        if (clickedValue >= 1 && clickedValue <= 9) {
          calcState[1]({ computed: calcState[0].computed + clickedValue, edited: calcState[0].edited });
        }
        if ((clickedValue === '-' || clickedValue === '+') && !isNaN(calcState[0].computed.slice(-1))) {
            calcState[1]({ computed: calcState[0].computed + clickedValue, edited: calcState[0].edited });
        }
        if (clickedValue === '0' && !isNaN(calcState[0].computed.slice(-1))) {
            calcState[1]({ computed: calcState[0].computed + clickedValue, edited: calcState[0].edited });
        }
      } else {
        if (!isNaN(clickedValue) || clickedValue === '-') {
            calcState[1]({ computed: clickedValue, edited: true });
          }
      }
   };

   return (
      <div className="App">
         <Screen value={calcState[0].computed}></Screen>
         <KeyPad clickHandler={(e) => clickHandler(e)}></KeyPad>
      </div>
   );
}

export default App;
