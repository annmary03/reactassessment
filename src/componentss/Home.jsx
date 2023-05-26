import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useState,useEffect } from 'react'

const Home = () => {
    var[users,setusers]= useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
        setusers(response.data)
        console.log(users)
    })
    .catch(err=>console.log(err))
    },[])
  return (
    <div style={{paddingTop:"30px"}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color: "white", backgroundColor: "black",fontSize:"40px"}}>Id</TableCell>
                        <TableCell style={{color: "white", backgroundColor: "black", fontSize:"40px"}}>Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((value,index)=>{
                            return (
                    <TableRow>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.title}</TableCell>
                    </TableRow>
                )
            })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Home