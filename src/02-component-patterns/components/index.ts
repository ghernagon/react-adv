import { ProductCard as ProductCardCHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/products.interfaces';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

// export { ProductCard } from './ProductCard';
export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardCHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
} )

export default ProductCard;