import { CartProduct } from "src/app/models/cart-product.model";


export const calculateTotalQuantity = (cart: CartProduct[]) => {
    let totalQuantity = 0;

    cart.forEach((item) => {
        totalQuantity += item.quantity;
    });

    return totalQuantity;
};