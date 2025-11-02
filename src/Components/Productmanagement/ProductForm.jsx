import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {

    const [error, setError] = useState('')

 const handleProductSubmit = event =>
        {
            event.preventDefault();
            const name = event.target.name.value;
            const price = event.target.price.value;
            const quantity = event.target.quantity.value;

            // console.log(name,price,quantity)
            // Validation

            if (name.length === 0)
            {
setError('Please provide a product Name')
return;
            }

            else if(price.length===0)
            {
setError('Please Provide a price')
return;
            }
            else if (price<0) {
                setError('Price cant be negative')
return;
            }

             else if(quantity.length===0)
            {
setError('Please select atleast one!')
return;
            }

             else if(quantity<0)
            {
setError('lease select atleast one!')
return;
            }

            else  {
setError('');
            }

            const  newProduct = {
                name,
                price,
                quantity
            }

handleAddProduct(newProduct);

            
        }

    return (

       
        <div>
            <h3>Add a Product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product name' />
                <br />
                <input type="text" name='price' placeholder='Product price' />
                <br />
                <input type="text" name='quantity' placeholder='Product Quantity' />
                <br />

                <input type="Submit" />
            </form>

            <p style={{color: 'red'}}><small>{error}</small></p>
            
        </div>
    );
};

export default ProductForm;