import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons,
} from "../components";
import "../styles/custon-styles.css";
import {useShoppingCart} from "../hooks/useShoppingCart";
import {products} from "../data/products";

export const ShoppingPage = () => {

    const {shoppingCart, onProductCountChange} = useShoppingCart();

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr/>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
        {/* Compound Component Pattern */}
        {/* Permite crear componentes hijos y establecer relacion directa entre ellos */}
        {/* Las propiedades internas son heredadas desde el padre y se pueden sobreescribir en cada componente */}

        {/* Extensible Styles Pattern */}
        {/* Permite usar className y Styles solo o en conjunto */}

        {/* Control Props Pattern */}
        {/* Permite controlar el estado interno y la emisión de valores */}
        {/*
        Ej. sincronizar el estado entre instancias de un componente,
        un carrito de compras, debe permitir elegir la cantidad desde el carrito
        o desde el catalogo y sincronizar la cantidad de elementos
        */}

        {/* <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="bold-text" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard> */}

                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        className="bg-dark text-white"
                        onChange={onProductCountChange}
                        value={shoppingCart[product.id]?.count || 0}
                    >
                        <ProductImage className="custom-image"/>
                        <ProductTitle title={"Cafe"} className="bold-text"/>
                        <ProductButtons className="custom-buttons"/>
                    </ProductCard>
                ))}
            </div>

            <div className="shopping-cart">
                {Object.entries(shoppingCart).map(([key, product]) => (
                    <ProductCard
                        key={key}
                        product={product}
                        className="bg-dark text-white"
                        style={{width: "100px"}}
                        value={product.count}
                        onChange={onProductCountChange}
                    >
                        <ProductImage className="custom-image"/>
                        <ProductTitle title={"Cafe"}/>
                        <ProductButtons
                            className="custom-buttons"
                            style={{display: "flex", justifyContent: "center"}}
                        />
                    </ProductCard>
                ))}
            </div>
        </div>
    );
};
