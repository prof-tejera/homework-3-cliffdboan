import Input from "components/Input/Input";
import Button from "components/Button/Button";
import "./LoginForm.css";

const reqInput = (formType) => {
  return <label className="req">{formType}: {Input({
    label:formType,
    class:"formInput",
    placeholder:formType,
    required: true,
    type:formType.toLowerCase()
  })}
  </label>
};

const LoginForm = () => {
  const btnStyle = {
    class: 'sbmtBtn',
    color: "black",
    backgroundColor: 'grey',
    padding: "12px 10px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "10px",
    margin: "4px 2px",
    cursor: "pointer",
    fontWeight: "bold",
    text: "Submit"
  };

  return (<div>
    {reqInput("Username")}
    <br/><br/>
    {reqInput("Password")}
    <br/><br/>
    <input type="checkbox"></input>
    <label> Remember Me?</label>
    <br/><br/>
    <Button
    style={btnStyle}
    text='Submit'
    />
  </div>)
};

export default LoginForm;
