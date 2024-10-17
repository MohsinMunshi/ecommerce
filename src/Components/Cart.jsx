import React, {useEffect, useState} from 'react';
import {Card, Container, Typography, Box, IconButton, Button} from "@mui/material";
import {useSelector,useDispatch} from "react-redux";
import {removeFromCart,countIncrement,countDecrement} from "../Features/CartSlice";
import {Link} from "react-router-dom";
const Cart = () => {
    const cartList = useSelector(state => state.cart.cart)
    const [totalAmount, setTotalAmount] = useState(0)
    useEffect(() => {
        let total = 0
        cartList.forEach((item) => {
            total += item.price * item.count
        })
        setTotalAmount(total)
    }, [cartList]);
    return (
        <Container style={{marginTop:"50px"}}>
            <Typography variant={"h4"}>Cart List</Typography>
            {
                cartList.map((item)=> {
                    return(
                        <CartItem item={item} key={item.id} />
                    )
                })
            }
            {
                cartList.length === 0 &&
                <Box>
                    <Typography style={{marginLeft:"2px",textAlign:"center"}}>Your Cart is Empty</Typography>
                    <Typography style={{marginLeft:"2px",textAlign:"center"}}><Link to={"/products"}>Click Here</Link> for Go to Product Page to add Items</Typography>
                </Box>
            }
            <Box style={styles.totalAmountBox}>
                <Box>
                <Typography variant="subtitle2" color="textSecondary">Total Amount</Typography>
                <Typography>{totalAmount}/-</Typography>
            </Box>
            </Box>
        </Container>
    );
};

const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const [count, setCount] = useState(item.count)
    const increseProduct = () => {
        setCount(count+1)
        dispatch(countIncrement(item.id))
    }
    const descreseProduct = () => {
        if(count === 1){
            return
        }
        setCount(count-1)
        dispatch(countDecrement(item.id))
    }

    const removeItem = () => {
        dispatch(removeFromCart(item.id))
    }

    return(
        <Card style={styles.cartCard}>
            <Box style={{width:"200px"}}>
                <Typography variant="subtitle2" color="textSecondary">Item Name</Typography>
                <Typography>{item.title}</Typography>
            </Box>
            <Box>
                <Typography variant="subtitle2" color="textSecondary">Item Const</Typography>
                <Typography>{item.price}/-</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="10px">
                <IconButton onClick={descreseProduct}>-</IconButton>
                <Typography>{count}</Typography>
                <IconButton onClick={increseProduct}>+</IconButton>
            </Box>
            <Box>
                <Typography variant="subtitle2" color="textSecondary">Total Const</Typography>
                <Typography>{item.price * count}/-</Typography>
            </Box>
            <Box>
                <Button onClick={removeItem} color="error" variant="contained">Remove Item</Button>
            </Box>
        </Card>
    )
}
export default Cart;

const styles = {
    cartCard:{
        padding: '20px',
        marginBottom:"20px",
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
        borderRadius: '10px'
    },
    totalAmountBox:{
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop:"20px"
    }
}