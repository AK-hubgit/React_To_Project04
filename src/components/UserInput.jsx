function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-groug">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => {
              /* the (e.target.value) will always retunrs a 
              the value as a string in javascript
              check the changes in handleChange function */
              onChange("initialInvestment", e.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => {
              onChange("annualInvestment", e.target.value);
            }}
          />
        </p>
        {/*       </div>
      <div className="input-groug"> */}
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => {
              onChange("expectedReturn", e.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => {
              onChange("duration", e.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
