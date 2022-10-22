import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons,
} from "../components";
import {products} from "../data/products";

export const ShoppingPage = () => {

    const product = products[0];

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr/>

            {/* State Initializer Pattern */}
            {/* Consiste en poder establecer el valor inicial y resetearlo */}

            <ProductCard
                key={product.id}
                product={product}
                initialValues={{
                    count: 4,
                    maxCount: 10,
                }}
            >
                {
                    ({ reset, isMaxCountReached, count, increaseBy }) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />
                        </>
                    )
                }
            </ProductCard>
        </div>
    );
};
