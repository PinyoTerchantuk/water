import React, { useState } from "react";
import Button from "../components/Button";
function Login() {
  const [username,setUsername]  = useState <string>("");
  const [password,setPassword]  = useState <string>("");
  const [weight,setWeight]  = useState <number>(0);
  const [height,setHeight]  = useState <number>(0);
  const [bmi,setBmi]  = useState <number>(0);

  const onChangeUsername = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setUsername(event.target.value)
    console.log(username);
  };

  const onChangePassword = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setPassword(event.target.value)
    console.log(password);
  };

  const onChangeHeight = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setHeight(parseFloat(event.target.value))
    console.log(height);
  };

  const onChangeWeight = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setWeight(parseFloat(event.target.value))
    console.log(weight);
  };

  

  const onSubmit = (event:React.FormEvent<HTMLInputElement>) =>{
    event.preventDefault();
    console.log(username);
    console.log(password);
    const bmi = weight/(height/100)**2;
    console.log(bmi);
    setBmi(bmi.toFixed(2));

    
  };

  return (
  <>
  <h1>{bmi}</h1>
    <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="username"><b>Username</b></label>
            <input type="text" id="username" name="username" onChange={onChangeUsername} />
    </div>
    <div>
        <label htmlFor="password"><b>Password</b></label>
        <input type="password"  id="password" name="password" onChange={onChangePassword} />
    </div>
    

    <div>
            <label htmlFor="weight"><b>Weight</b></label>
            <input type="text" id="weight" name="weight" onChange={onChangeWeight} />
    </div>
    <div>
        <label htmlFor="height"><b>Height</b></label>
        <input type="height"  id="height" name="height" onChange={onChangeHeight} />
    </div>

    <Button/>
    </form>
  </>
  );
}

export default Login
