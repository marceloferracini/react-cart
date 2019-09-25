import {
    CREATE_PRODUCT,
    REMOVE_PRODUCT
} from './actionTypes';

export const addProduct = (product) => ({
    type: CREATE_PRODUCT,
    payload: product
});

export const removeProduct = (productId) => ({
    type: REMOVE_PRODUCT,
    payload: productId
});