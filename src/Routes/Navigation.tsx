import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import './Navigation.css';

import { routes } from './routes';
import logo from '../Assets/Logo.png';
import menuPoints from '../Assets/menu-points-h.png';
import { Loader } from '../Lazyload/Components/Loader';
// import { About, GraphicsResources, Home, Reels } from '../Lazyload/Pages';

export const Navigation = () => {
	return (
		<Suspense fallback={<Loader />}>
			<BrowserRouter>
				<div className='main-layout'>
					<nav>
						<img
							className='logo'
							src={logo}
							alt='Logo de Alerón producciones'
						/>
						<ul className='nav-menu'>
							{routes.map(({ to, name }) => (
								<li key={to}>
									<NavLink
										to={to}
										className={({ isActive }) =>
											isActive ? 'nav-active' : 'nav-link'
										}
									>
										{name}{' '}
										{name === 'Reels' ? (
											<img
												src={menuPoints}
												className='menu-btn'
											/>
										) : (
											''
										)}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>

					<Routes>
						{routes.map(({ path, Component }) => (
							<Route
								key={path}
								path={path}
								element={<Component />}
							/>
						))}
						<Route
							path='/*'
							element={
								<Navigate
									to={routes[0].to}
									replace
								/>
							}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</Suspense>
	);
};
