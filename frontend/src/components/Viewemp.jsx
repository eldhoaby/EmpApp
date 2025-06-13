import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Viewemp = () => {
  var[user,setval]=useState([])
  var navigate = useNavigate();
  useEffect(()=>{
    axios.get("http://localhost:3000")
    .then((res)=>{
      console.log(res);
      setval(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
},[]);
const dltBtn=(id) =>{
  console.log("Dlt btn clicked",id);
  axios.delete(`http://localhost:3000/${id}`)
  .then((res)=>{
    console.log(res)
    alert(res.data)
    window.location.reload()

  })
}
const UpdBtn=(val) =>{
  console.log("Upd btn clicked",val);
  navigate('/a',{state:val})
}

  return (
    <div>
      <TableContainer>

        <Table>

            <TableHead>

                <TableRow>

                    <TableCell>NAME</TableCell>

                    <TableCell>AGE</TableCell>

                    <TableCell>SALARY</TableCell>

                    <TableCell>DEPARTMENT</TableCell>
                    <TableCell>ACTIONS</TableCell>

                </TableRow>

            </TableHead>

            <TableBody>

                {user.map((val,i)=>{

                    return(

                        <TableRow key={i}>

                            <TableCell>{val.name}</TableCell>
                             <TableCell>{val.age}</TableCell>
                              <TableCell>{val.salary}</TableCell>
                               <TableCell>{val.dep}</TableCell>
                               <TableCell>
                                <Button variant="contained" color="error" onClick={() =>{dltBtn(val._id)}}>Delete</Button> &nbsp;
                                <Button variant="contained" color="success" onClick={() =>{UpdBtn(val)}}>Update</Button> &nbsp;
                               </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Viewemp


   