import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/Products';
import '../styles/custom-style.css';

const product = products[0];

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<ProductCard
				product={product}
				className='bg-dark text-white'
				initialValues={{
					count: 4,
					maxCount: 10,
				}}>
				{({ reset, increaseBy, count, maxCount, isMaxCountReached }) => (
					<>
						<ProductImage className='custom-image' />
						<ProductTitle />
						<ProductButtons className='custom-button' />
						<button onClick={reset}>Reset</button>
						<button onClick={() => increaseBy(-2)}>-2</button>
						{!isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button>}
						<span>
							{count} - {maxCount}
						</span>
					</>
				)}
			</ProductCard>
		</div>
	);
};
