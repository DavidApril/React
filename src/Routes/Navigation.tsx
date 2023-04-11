import { Component, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { routes } from './routes';
import logo from '../Assets/Logo.png';
// import { About, GraphicsResources, Home, Reels } from '../Lazyload/Pages';

export const Navigation = () => {
	return (

		<Suspense fallback={null}> {/* Replace null for loader component !!! */}
			<BrowserRouter>
				<div className='main-layout'>
					<nav>
						<img
							src={logo}
							alt='Logo de Alerón producciones'
						/>
						<ul>
							{routes.map(({ to, name }) => (
								<li key={to}>
									<NavLink
										to={to}
										className={({ isActive }) =>
											isActive ? 'nav-active' : ''
										}
									>
										{name}
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
