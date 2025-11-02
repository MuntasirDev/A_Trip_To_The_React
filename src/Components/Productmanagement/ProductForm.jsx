import React from 'react';

const ProductForm = () => {

 const handleProductSubmit = event =>
        {
            event.preventDefault();
            const name = event.Target.name.value;
            const name = event.Target.price.value;
            const name = event.Target.quantity.value;

            // console.log(name,price,quantity)

            const  newProduct = {
                name,
                price,
                quantity
            }
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
        </div>
    );
};

export default ProductForm;