import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CartHeader from '../CartHeader';
import Product from '../Product';
import CartFooter from '../CartFooter';
import {
    addProduct,
    removeProduct
  } from '../../flux/actions';

const Cart = ({product, removeProduct, addProduct}) => {
    const {products=[]} = product
    const getTotalPrice = () => {
        let total = 0;

        products.forEach((i) => {
            total = total +i.price;
        });

        return total;
    };

    return (
    <div>
        <CartHeader 
            title="Carrinho"
            total={getTotalPrice()}
        />
        {products.map((product) => (
            <Product 
                key={product.id}
                name={product.name}
                price={product.price}
                onDelete={() => removeProduct(product.id)}
            />
        ))}
        < CartFooter 
            onAddProduct={addProduct}
        />
        
    </div>
    )
};

Cart.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string,
            price: PropTypes.number
        })
    )
}

Cart.defaultProps = {
    products: []
}

const mapStateToProps = (state) => ({
    product: state.product
  });
const mapActionsToProps = (dispatch) => ({
addProduct: (product) => dispatch(addProduct(product)),
removeProduct: (productId) => dispatch(removeProduct(productId))
});

export default connect(mapStateToProps, mapActionsToProps)(Cart);

