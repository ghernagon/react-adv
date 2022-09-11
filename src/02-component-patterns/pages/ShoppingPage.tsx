import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"


const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        {/* Compound Component Pattern */}
        {/* Permite crear componentes hijos y establecer relacion directa entre ellos */}
        {/* Las propiedades internas son heredadas desde el padre y se pueden sobreescribir en cada componente */}
        
        <ProductCard product={product} >
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product} >
          <ProductImage />
          <ProductTitle title={'Cafe'} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}