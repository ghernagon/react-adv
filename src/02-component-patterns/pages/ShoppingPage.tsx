import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons,
} from "../components";
import "../styles/custon-styles.css";
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
                className="bg-dark text-white"
                initialValues={{
                    count: 4,
                    maxCount: 10,
                }}
            >
                {
                    ({ reset, isMaxCountReached, count, increaseBy }) => (
                        <>
                            <ProductImage className="custom-image"/>
                            <ProductTitle title={"Cafe"} className="bold-text"/>
                            <ProductButtons className="custom-buttons"/>

                            <button onClick={ reset }>Reset</button>
                            <button onClick={ () => increaseBy(-2) }>-2</button>
                            {
                                (!isMaxCountReached && <button onClick={ () => increaseBy(2) }>+2</button>)
                            }
                            <span>{count}</span>
                        </>
                    )
                }
            </ProductCard>
        </div>
    );
};
