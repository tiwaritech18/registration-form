import { useRef, useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
  const [values,setValues]=useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
  });
 
  const input=[
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"username",
      errorMessage:"Username should be 3-16 characters long",
      label:"username",
      pattern:"^[a-zA-Z0-9]{3,16}$",
      required:true
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",errorMessage:"it should be valid email address",
      label:"Email"
    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder:"Birthday",
      label:"Birthday"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",errorMessage:"password should be 8-20 character",
      label:"Password",
      pattern:"^[a-zA-Z0-9]",
      required:true
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Password",errorMessage:"password don't match",
      label:"Password",
      pattern:values.password,
      required:true
    },
  ]
 const handleSubmit=(e) => {
  e.preventDefault();
  console.log(values)
 }
 const onChange=(e) =>{
  setValues({...values,[e.target.name]: e.target.value})

}
  return (
    <div className="App">
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          {input.map(input => <FormInput key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}/>)}
        
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
