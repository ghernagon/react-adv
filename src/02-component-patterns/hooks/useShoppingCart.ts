import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

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
            if (count === 0) {
              delete oldShoppingCartState[product.id];
              return { ...oldShoppingCartState };
            }

            return {
              ...oldShoppingCartState,
              [product.id]: { ...product, count },
            };
        });
    };

    return {
        shoppingCart,
        onProductCountChange
    }
}