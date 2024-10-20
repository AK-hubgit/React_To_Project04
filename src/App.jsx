import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handlChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        /* (e.target.value) => [inputIdentifier]: `simply the + is 
        enough to convert the strings into numbers` +newValue, */
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handlChange} />
      {!inputIsValid && (
        <p className="center">Please enter a button greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
