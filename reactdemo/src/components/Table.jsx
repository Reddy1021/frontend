import "./Table.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { useEffect, useState } from "react";

const MyTable = (props) => {

    const handleDelete = async (id) => {
        const response = await axios.delete("http://localhost:8080/student/" + id)
        handleClick({ vertical: 'top', horizontal: 'center' })
        console.log(response);
    }
    const [state, setState] = useState({
        vertical: 'top',
        horizontal: 'center',
    });

    const [open,setOpen] = useState(false)
    const { vertical, horizontal } = state;

    const handleClick= () => {
        setOpen(!open)
    };

    const handleClose = () => {
        setOpen(!open)
    };

    return (
        <div className="MyTable">
            {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
                    Top-Center
                </Button>
            </Box> */}
            
            <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Register No</TableCell>
                            <TableCell align="right">Contact</TableCell>
                            <TableCell align="right">Date of birth</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.value.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.regNo}</TableCell>
                                <TableCell align="right">{row.contact}</TableCell>
                                <TableCell align="right">{row.dob}</TableCell>
                                <TableCell align="right">
                                    <Button variant="contained">
                                        update
                                    </Button>
                                    <Button variant="contained" color="error" onClick={() => { handleDelete(row.id);  }}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Box sx={{ width: 500 }}>
                {/* {buttons} */}
                <Snackbar
                    anchorOrigin={{ vertical:"top", horizontal:"center" }}
                    open={open}
                    onClose={handleClose}
                    message="Details has deletes"
                    key={vertical + horizontal}
                />
            </Box>
            </TableContainer>
        </div>
    )
}
export default MyTable