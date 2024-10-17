import React, {useState} from 'react';
import {
    Box,
    Button,
    Container, Grid,
    Grid2,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow, TextField,
    Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {register, updateUser,removeUser,removeAllUser} from "../Features/usersSlice";
const Users = () => {
    const dispatch = useDispatch()
    const userList = useSelector(state => state.users.userList)
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [isEdit, setIsEdit] = useState(false)
    const handleAddUser = () => {
        const newUser = {
            ...user,
            id:userList.length + 1
        }
        dispatch(register(newUser))
    }
    const handleEditUser = (user) => {
        setUser(user)
        setIsEdit(true)
    }

    const handleEditUserCall = () => {
        setIsEdit(false)
        dispatch(updateUser(user))
        setUser({
            name: "",
            email: "",
            password: ""
        })
    }

    const handleRemoveUser = (id) => {
        dispatch(removeUser(id))
    }

    const handleRemoveAllUser = () => {
        dispatch(removeAllUser())
    }
    return (
        <Container style={{marginTop:"50px"}}>
            <Grid container spacing={2} style={{width:"100%"}}>
                <Grid item xs={12} sm={8}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="h3">
                            User List
                        </Typography>
                        <Button onClick={() => handleRemoveAllUser()} variant="contained" color="error">Remove All User</Button>
                    </Box>
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                userList.map((user, index) => {
                                    return(
                                        <TableRow>
                                            <TableCell>{user.id}</TableCell>
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell >
                                                <Button style={{marginRight:"10px"}} variant="contained" color="error" onClick={() => handleRemoveUser(user.id)}>Remove User</Button>
                                                <Button variant="contained" color="info" onClick={() => handleEditUser(user)}>Edit User</Button>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h5" style={{textAlign:"center",width:"100%",marginTop:"80px"}}>
                        {isEdit ? "Edit User" :"Add User"}
                    </Typography>
                    <Box gap="10px">
                        <TextField value={user.name} onChange={(e)=> setUser({...user,name:e.target.value})} fullWidth placeholder="Name" style={{marginBottom:"10px"}}/>
                        <TextField value={user.email} onChange={(e)=> setUser({...user,email:e.target.value})} fullWidth placeholder="Email ID" style={{marginBottom:"10px"}}/>
                        <TextField type="password" onChange={(e)=> setUser({...user,password:e.target.value})} value={user.password} fullWidth placeholder="Password" style={{marginBottom:"10px"}}/>
                        <Button variant="contained" onClick={isEdit ? handleEditUserCall : handleAddUser} fullWidth>  {isEdit ? "Edit User" :"Add User"}</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Users;