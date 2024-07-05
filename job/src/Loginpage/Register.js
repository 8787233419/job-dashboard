import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Register = (props) => {
  const [nameinput, setnameinput] = useState('');
  const [useridinput, setuseridinput] = useState('');
  const [pswdinput, setpswdinput] = useState('');
  const [mobileinput, setmobileinput] = useState('');
  const [useriderror, setuseriderror] = useState('');
  const [passworderror, setpassworderror] = useState('');

  const onButtonClick = async () => {
    setuseriderror('');
    setpassworderror('');

    if (useridinput === '') {
      setuseriderror('Please enter UserID');
      return;
    }
    if (pswdinput === '') {
      setpassworderror('Please enter a password');
      return;
    }

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    }
    
    let data={ userid:useridinput , name:nameinput,pswd:pswdinput,mobile:mobileinput}
      axios({ method:'post',
        url:'http://127.0.0.1:8000/api/register/',
        data:data,
        headers:{
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',        
        }})
      .then(res => {
        if (res.status==201){
            props.setuseridinput(res.data.userid)
            props.setnameinput(res.data.name)
            props.setpswdinput(res.data.pswd)
            props.setmobileinput(res.data.mobile)
            localStorage.setItem('aromas_session_key',res.data.session_key);
            // navigate('/');            
        }
      })
    //   .catch(err => 
    //     {
          
    //         setuseriderror('User with this ID already exists');
          
    //     });      

    // Additional logic for registration, API calls, etc.
  };

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>Register</div>
      </div>
      <br />
      <div className="inputContainer">
        <input
          value={useridinput}
          placeholder="Enter your UserID here"
          onChange={(ev) => setuseridinput(ev.target.value)}
          type="text"
          className="inputbox"
          required
        />
        <label htmlFor="" className="errorlabel">{useriderror}</label>
      </div>
      <div className="inputContainer">
        <input
          type="password"
          className="inputbox"
          value={pswdinput}
          onChange={(ev) => setpswdinput(ev.target.value)}
          placeholder="Enter your password"
          required
        />
        <label htmlFor="" className="errorlabel">{passworderror}</label>
      </div>
      <div className="inputContainer">
        <input
          type="text"
          className="inputbox"
          value={nameinput}
          onChange={(ev) => setnameinput(ev.target.value)}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="inputContainer">
        <input
          type="text"
          className="inputbox"
          value={mobileinput}
          onChange={(ev) => setmobileinput(ev.target.value)}
          placeholder="Enter your mobile number"
          pattern="[0-9]{10}"
          title="Please enter a 10-digit mobile number"
          required
        />
      </div>
      <br />
      <div className="inputContainer">
        <button className="inputButton" onClick={onButtonClick} type="submit">
          Register
        </button>
      </div>
      <br />
      <div className="noaccount">
        Already have an account?
        {/* <Link to="/login">Login Now!</Link> */}
      </div>
    </div>
  );
};

export default Register;
