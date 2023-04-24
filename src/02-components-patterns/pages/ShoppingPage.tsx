import { useState } from 'react';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { Product } from '../interfaces/interface';

import '../styles/custom-style.css';

const product1 = {
	id: '1',
	title: 'Coffee Mug - type1',
	img: './coffee-mug.png',
};

const product2 = {
	id: '2',
	title: 'Coffee Mug - type2',
	img: './coffee-mug2.png',
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
	count: number;
}

export const ShoppingPage = () => {
	const [shoppingCart, setShoppingCart] = useState<{
		[key: string]: ProductInCart;
	}>({});

	const onProductHandleChange = ({ count, product }: { count: number; product: Product }) => {
		setShoppingCart((oldShoppingCart) => {
			if (count === 0) {
				const { [product.id]: toDelete, ...rest } = oldShoppingCart;

				return rest;
			}

			return {
				...oldShoppingCart,
				[product.id]: { ...product, count },
			};
		});
	};

	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
				}}>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						className='bg-dark text-white'
						onChange={onProductHandleChange}
						value={shoppingCart[product.id]?.count || 0}>
						<ProductImage className='custom-image' />
						<ProductTitle />
						<ProductButtons className='custom-button' />
					</ProductCard>
				))}
			</div>
			<div className='shopping-cart'>
				{Object.entries(shoppingCart).map(([key, product]) => (
					<ProductCard
						key={key}
						product={product}
						className='bg-dark text-white'
						style={{ width: '100px' }}
						onChange={onProductHandleChange}
						value={product.count}>
						<ProductImage className='custom-image' />
						<ProductButtons
							className='custom-button'
							style={{
								display: 'flex',
								justifyContent: 'center',
							}}
						/>
					</ProductCard>
				))}
			</div>

			<div>
				<code>{JSON.stringify(shoppingCart, null, 5)}</code>
			</div>
		</div>
	);
};
