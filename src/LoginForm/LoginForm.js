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

  return (<div>
    {reqInput("Username")}
    <br/><br/>
    {reqInput("Password")}
    <br/><br/>
    <input type="checkbox"></input>
    <label> Remember Me?</label>
    <br/><br/>
    <Button
    text="Submit"
    />
  </div>)
};

export default LoginForm;
