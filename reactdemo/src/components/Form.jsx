import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState,useEffect } from 'react';
import "./Form.css"
import MyTable from './Table';

const MyForm = () => {
    const getData = async () => {
        const response = await axios.get("http://localhost:8080/student/get")
        setdata(response.data)
    }

    useEffect(() => {
        getData();
    })
    const [mydata, setdata] = useState([])
    const [details, setDetails] = useState()
    // axios.get("http://localhost:8080/student/get")

    const handlechange = (e) => {
        const { value, name } = e.target
        setDetails({ ...details, [name]: value })
        console.log(details);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(details);
        const response = axios.post("http://localhost:8080/student", details)
        console.log("response :"+response);
    }
 
    return (
        <div className="MyForm">
            <Box
                className='box'
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <h1>Form Input</h1>
                <TextField
                    id="outlined-error-helper-text"
                    label="Name"
                    name='name'
                    onChange={handlechange}
                />
                <TextField
                    id="outlined-error-helper-text"
                    label="Register no"
                    name='regNo'
                    onChange={handlechange}
                />
                <TextField
                    id="outlined-error-helper-text"
                    label="Contact Number"
                    name='contact'
                    onChange={handlechange}
                />
                <TextField
                    id="outlined-error-helper-text"
                    label="Date of birth"
                    name='dob'
                    onChange={handlechange}
                />
                <Button variant="contained" color="success" onClick={handleSubmit}>Submit</Button>
            </Box>
                <MyTable value={mydata}/>
        </div>
    )
}

export default MyForm;

