import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/Products';
import '../styles/custom-style.css';

export const ShoppingPage = () => {
	
	const { onProductCountChange, shoppingCart } = useShoppingCart();

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
						onChange={onProductCountChange}
						value={shoppingCart[product.id]?.count || 0}
						className='bg-dark text-white'>
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
						onChange={onProductCountChange}
						value={product.count}
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
				))}
			</div>
		</div>
	);
};
