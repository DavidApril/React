import { createContext } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interface';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
	product: Product;
	children?: React.ReactElement | React.ReactElement[];
	className?: string;
	style?: React.CSSProperties;
	onChange?: (Args: onChangeArgs) => void;
	value?: number;
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {
	const { counter, increaseBy } = useProduct({ onChange, product, value });
	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product,
			}}>
			<div
				className={`${styles.productCard} ${className} ${style}`}
				style={style}>
				{children}
			</div>
		</Provider>
	);
};
