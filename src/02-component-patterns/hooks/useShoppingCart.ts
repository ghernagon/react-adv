import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/products.interfaces";

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
    }>({});

    const onProductCountChange = ({
        count,
        product,
    }: {
        count: number;
        product: Product;
    }) => {
        console.log("onProductCountChange", count, product);

        setShoppingCart((oldShoppingCartState) => {
            // v1
            // if (count === 0) {
            //   delete oldShoppingCartState[product.id];
            //   return { ...oldShoppingCartState };
            // }

            // return {
            //   ...oldShoppingCartState,
            //   [product.id]: { ...product, count },
            // };

            //v2
            const productInCart: ProductInCart = oldShoppingCartState[product.id] || {
                ...product,
                count: 0,
            };

            // Incrementar el producto
            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCartState,
                    [product.id]: productInCart,
                };
            }

            // Borrar el producto
            const { [product.id]: toDelete, ...rest } = oldShoppingCartState;
            return rest;
        });
    };

    return {
        shoppingCart,
        onProductCountChange
    }
}