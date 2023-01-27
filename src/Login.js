import { useState } from "react";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    let inputVal = e.target.value;
    setEmail(inputVal);
  };

  const onChangePassword = (e) => {
    let inputVal = e.target.value;
    setPassword(inputVal);
  };

  const onSubmitHandler = () => {
    alert("Thanks for submitting");
    alert(email);
    alert(password);
  };

  return (
    <div>
      <p>Email</p>
      <input type="email" value={email} onChange={onChangeEmail} />
      <p>Password</p>
      <input type="password" value={password} onChange={onChangePassword} />
      <br />
      <br />
      <button onClick={onSubmitHandler}>Submit</button>
    </div>
  );
}
