import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductButtonsProps } from '../components/ProductButtons';

export interface ProductContextProps {
	counter: number;
	product: Product;
	increaseBy: (value: number) => void;
}

export interface Product {
	id: string;
	img?: string;
	title: string;
}

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): JSX.Element;
	Buttons: (Props: ProductButtonsProps) => JSX.Element;
	Image: (props: ProductImageProps) => JSX.Element;
	Title: (props: ProductTitleProps) => JSX.Element;
}

export interface onChangeArgs {
	product: Product;
	count: number;
}

export interface ProductInCart extends Product {
	count: number;
}