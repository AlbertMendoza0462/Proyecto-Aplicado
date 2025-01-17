import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ButtonGroup from '@mui/material/ButtonGroup';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import styles from './ShoppingCart.module.css'


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ComplexGrid({ product, FullPayment, setFullPayment, shoppingCart, setShoppingCart, setsuma}) {

  const handleChange = (event) => {
    setCant(event.target.value);
  };

  const [itemCount, setItemCount] = useState(1);
  const [Total, setTotal] = useState([product.Precio]);
  const TotalP = 0;

 const [productDelete, setproductDelete] = useState([product])
 const [Product2, setProduct2] = useState([product]);
 const prod = [product]








// useEffect(() => setTotalProduct(current => current + 10))
let Preciofinal = 0
let PrecioTotalFinal = 0



useEffect(()=> {
  setFullPayment(product)
},[product])


 function deleteCarProduct (indice) {
  const newProduct = shoppingCart.filter(function (element){
    return element.index !== indice
  });
    console.log(newProduct);
    setShoppingCart(newProduct);
 }


 
  useEffect(() => {

    setsuma(product.price * itemCount)
    
  }, [Preciofinal]);


  return (
  
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 450,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
      
    >
      {productDelete.map((productRemove)=>
       <Grid key={Math.random() * (1 - 1000)} container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img className={styles.image} alt={product.imageAlt} src={product.Image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {product.Description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: {product.ProductId}
              </Typography>
            </Grid>

            <Grid item>
              <Box >
                <ButtonGroup size='small'>
                  <Button
                    onClick={() => {

                      setItemCount(Math.max(itemCount - 1, 0));


                    }}
                    disabled = {itemCount <= 0 && true}
                  >


                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Button key={product.ProductoId}>
                    {itemCount}
                  </Button>
                  <Button
                    onClick={() => {

                      setItemCount(itemCount + 1);
                    }}
                    disabled={itemCount == product.Stock && true}
                    >
                    {" "}
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
            
            <Grid item>
               <Button sx={{ cursor: 'pointer' }} variant="body2"  onClick={deleteCarProduct.bind(productRemove, productRemove.index)}>
               Remove
             </Button>
            </Grid>
          </Grid>
          <Grid item>

          </Grid>
          <Grid item>
            <Typography variant="body2" component="div"  >
              <br />
              {product.Discount == 0 && <div>${Preciofinal =  product.Price * itemCount}</div>}
              <br />
              {product.Discount > 0 && <div style={{ textDecoration: 'line-through' }}>${Preciofinal =  product.Price * itemCount}</div>}
              <br />
              {product.Discount > 0 &&
                <div style={{ color: 'red' }}>
                  ${ Preciofinal = (product.Price - ((product.Discount / 100) * product.Price)) * itemCount}
                </div>
              }
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      )}
     
    </Paper>

  );
}

 // function calc(){

  //   setTotal(itemCount * product.Precio)
  //   setProductPayment(Total)

  // }
  
  // const oldtotal = ProductPayment;
  // const newtotal = (itemCount * product.Precio) + oldtotal

  // useEffect(() => {

  //   setProductPayment(Total)
    
    
  // }, [itemCount]);