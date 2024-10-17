import React from 'react';
import {Box, Card, Container, Typography} from "@mui/material";
import product from "../Images/product.png";
import users from "../Images/users.jpeg";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Container>
                <h1>Dashboard</h1>
                <Box style={styles.container}>
                    <Card style={styles.card} onClick={() => navigate("/products")}>
                        <Box p={2} gap="2">
                            <img src={product} alt="product" style={{width: '100px'}} />
                            <Typography style={{textAlign:"center"}}>Products</Typography>
                        </Box>
                    </Card>
                    <Card style={styles.card} onClick={() => navigate("/users")}>
                        <Box p={2} gap="2">
                            <img src={users} alt="product" style={{width: '100px'}} />
                            <Typography style={{textAlign:"center"}}>Users</Typography>
                        </Box>
                    </Card>
                </Box>

            </Container>
        </div>
    );
};

export default Dashboard;

const styles={
    container:{
        display: 'flex',
        alignItems: 'center',
        gap:"20px",
    },
    card:{
        padding: '20px',
        width: '300px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
        borderRadius: '10px'
    }
}