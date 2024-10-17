import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {login} from "../Features/usersSlice";
const LoginPage = () => {
    const dispatch = useDispatch()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const userList = useSelector(state => state.users.userList)
    const handleLogin = () => {
        const user = userList.find(user => user.email === userName && user.password === password)
        if(!user){
            alert("Invalid UserName or Password")
            return
        }else{
            dispatch(login(user))
        }
        navigate("/dashboard")
    }
    return (
        <Box display="flex" alignItems="center" justifyContent="center" height="100vh" >
            <Box display="flex" flexDirection={"column"} gap="10px">
                <Typography>E-Commerce Login Page</Typography>
                <TextField value={userName} onChange={(e) => setUserName(e.target.value) } placeholder="Enter your Email id"/>
                <TextField value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                <Button fullWidth onClick={handleLogin} variant="contained">Submit</Button>
            </Box>

        </Box>
    );
};

export default LoginPage;