import React, {useEffect} from 'react';
import {Badge, Box, Button, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {logout} from "../Features/usersSlice";

const TopBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)
    const currentUser = useSelector(state => state.users.currentUser)
    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }
    useEffect(() => {
        if(currentUser === ""){
            navigate("/")
        }
    }, []);
    return (
        <div style={styles.topBarMain}>
            <Typography>Welcome {currentUser} </Typography>
            <Box display="flex">
                <Badge color="primary" overlap="circular" badgeContent={cart.cart.length} onClick={() => navigate("/cart")}>
                    <ShoppingCartIcon style={{marginTop:"10px",marginRight:"10px"}} />
                </Badge>
                <Button style={{marginLeft: "15px"}} onClick={handleLogout} variant="contained">
                    Logout
                </Button>
            </Box>


        </div>
    );
};

export default TopBar;

const styles = {
    topBarMain:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 40px',
        height: '70px',
        background: 'black',
        color: 'white',
    }
}