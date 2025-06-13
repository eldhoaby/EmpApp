import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Addemp = (props) => {
  var navigate = useNavigate();
  var location =useLocation();
  console.log("locat",location.state);

  var[emp,setEmp]=useState(
    { name:"",age:"",salary:"",dep: ""});
  
  const inputHandler = (e)=>{
    setEmp({...emp,[e.target.name]:e.target.value});
    console.log(emp);
  };
  
  useEffect(()=>{
    if(location.state!==null){
      setEmp({...emp,
        name:location.state.name,
        age:location.state.age,
        salary:location.state.salary,
        dep:location.state.dep,
    })
  }
  },[])

  const submitHandler=()=>{
    console.log("Button Clicked")
    if(location.state!==null){
      axios.put(`http://localhost:3000/${location.state._id}`,emp)
      .then((res)=>{
        console.log(res)
        alert(res.data)
        navigate('/')
    })}
    else{
       axios.post("http://localhost:3000",emp)
    .then((res)=>{
      console.log(res)
      alert(res.data)
      navigate('/')
    })
    .catch((err)=>{
      console.log(err)
    })
    }
  }

  // const submitHandler =() => {
  //   console.log("Button clicked");
  //   axios
  //    .post("http://localhost:3000",emp)
  //    .then((res) => {
  //     console.log(res);
  //     alert(res.data);
  //     navigate('/')
  //    })
  //    .catch((err) => {
  //     console.log(err)
  //    });
  // };


  return (
    <div>
      <br /><br />
      <Typography variant="h3">ENTER THE DETAILS</Typography><br /><br />
      {/* Name,age,department,salary */}
       <TextField label="Name" variant="outlined" name="name" value={emp.name} onChange={inputHandler}/><br /><br /><br />
       <TextField label="Age" variant="outlined" name="age" value={emp.age} onChange={inputHandler}/><br /><br /><br />
       <TextField label="Salary" variant="outlined" name="salary" value={emp.salary} onChange={inputHandler}/><br /><br /><br />
       <TextField label="Department" variant="outlined" name="dep" value={emp.dep} onChange={inputHandler}/><br /><br /><br />
       <Button variant="contained" onClick={submitHandler}>SUBMIT</Button><br /><br /><br />
    </div>
  )
}

export default Addemp
