import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTitle,
} from '../components';

import '../styles/custom-style.css';
const product = {
	id: '1',
	title: 'Coffee Mug - Card',
	img: './coffee-mug.png',
};

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
				}}
			>
				<ProductCard
					product={product}
					className='bg-dark text-white'
				>
					<ProductCard.Image />
					<ProductCard.Title title={'Hola Mundo'} />
					<ProductCard.Buttons className='custom-button' />
				</ProductCard>
				<ProductCard
					product={product}
					className='bg-dark text-white'
				>
					<ProductImage className='custom-image' />
					<ProductTitle />
					<ProductButtons className='custom-button' />
				</ProductCard>

				<ProductCard
					product={product}
					style={{
						backgroundColor: '#70d1f8',
					}}
				>
					<ProductImage />
					<ProductTitle />
					<ProductButtons />
				</ProductCard>
			</div>
		</div>
	);
};
