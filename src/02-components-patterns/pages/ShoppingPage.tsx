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

export const ShoppingPage = () => {
	
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
						className='bg-dark text-white'>
						<ProductImage className='custom-image' />
						<ProductTitle />
						<ProductButtons className='custom-button' />
					</ProductCard>
				))}
			</div>
			<div className='shopping-cart'>
					<ProductCard
						product={product1}
						className='bg-dark text-white'
						style={{ width: '100px' }}>
						<ProductImage className='custom-image' />
						<ProductButtons
							className='custom-button'
							style={{
								display: 'flex',
								justifyContent: 'center',
							}}
						/>
					</ProductCard>
			</div>
		</div>
	);
};
