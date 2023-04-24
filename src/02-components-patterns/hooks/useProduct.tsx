import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs } from '../interfaces/interface';

interface useProductArgs {
	product: Product;
	onChange?: (Args: onChangeArgs) => void;
	value?: number;
}

export const useProduct = ({ product, value = 0 }: useProductArgs) => {
	const [counter, setCounter] = useState(value);

	const increaseBy = (value: number) => {
		const newValue = Math.max(counter + value, 0);
		setCounter(newValue);

	};

	useEffect(() => {
		setCounter(value);
	}, [value]);

	return {
		counter,
		increaseBy,
	};
};
