import React, {useEffect, useState} from 'react';
import {Box, Button, Container, Grid2, IconButton, Typography} from "@mui/material";
import {useSelector,useDispatch} from "react-redux";
import {addToCart} from "../Features/CartSlice";

const Products = () => {
    const productList = useSelector(state => state.products.products)
    return (
        <Container style={{marginTop:"50px"}}>
            <Grid2 container spacing={3}>
                {
                    productList.map((product, index) =>{
                        return(
                            <ProductItem product={product} key={index} />
                        )
                    })
                }
            </Grid2>
        </Container>
    );
};

const ProductItem = ({product}) => {
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)
    const increseProduct = () => {
        setCount(count+1)
    }
    const descreseProduct = () => {
        if(count === 1){
            return
        }
        setCount(count-1)
    }

    const addToCartButton = () => {
        const cartData = {
            ...product,
            count: count,
            userId: "1"
        }
        dispatch(addToCart(cartData))
    }
    return(
        <Grid2 item style={styles.productCard}>
            <img src={product.image} alt="product" style={{height: '100px'}} />
            <Typography style={styles.productTitle}>{product.title}</Typography>
            <Typography>{product.price}/-</Typography>
            <Box display="flex" alignItems="center" gap="10px">
                <IconButton onClick={descreseProduct}>-</IconButton>
                <Typography>{count}</Typography>
                <IconButton onClick={increseProduct}>+</IconButton>
            </Box>
            <Button onClick={addToCartButton} variant={"contained"}>Add To Cart</Button>
        </Grid2>
    )
}

export default Products;

const styles={
    productCard:{
        padding: '20px 20px',
        width: '250px',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
        borderRadius: '10px'
    },
    productTitle:{
        fontSize: '18px',
        fontWeight: 'bold',
        marginTop: '10px',
        textAlign: 'center',
        height:"60px"
    },
    increseProduct:{
        width:"30px",
        height:"10px",
        padding:"0px",
        borderRadius: '50%',
    }
}