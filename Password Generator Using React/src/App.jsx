import { useState, useCallback, useEffect } from "react";
import "./App.css";
import CopyButton from "./components/Button";
import CheckBox from "./components/CheckBox";
import DSlider from "./components/Slider";
import PassField from "./components/PassField";
function App() {
  //States
  const [length, setlength] = useState(8);
  const [password, setPassword] = useState("");
  const [numAllowed, setNumAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);

  //Functions Used
  function spCharVal() {
    setSpecialCharAllowed((prev) => !prev);
  }
  function numVal() {
    setNumAllowed((prev) => !prev);
  }
  function passLength(val) {
    setlength(val);
  }
  function generatePassword() {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (specialCharAllowed) str += "~!@#$%^&*()_+|{}[]?";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }
  const newpassword = useCallback(generatePassword, [
    length,
    numAllowed,
    specialCharAllowed,
    setPassword,
  ]);

  useEffect(newpassword, [length, numAllowed, specialCharAllowed,newpassword]);

  return (
    <>
      <div className="inline boxPosition">
        <h1>Password Generator</h1>
        <div className="flex">
          <PassField password={password}/>
          <CopyButton />
        </div>
        <div>
          <DSlider onSliderChange={passLength} />
          <CheckBox Name={"Number"} HandelClick={numVal} />
          <CheckBox Name={"Special Characters"} HandelClick={spCharVal} />
        </div>
      </div>
    </>
  );
}

export default App;
