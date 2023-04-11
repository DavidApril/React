import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../Assets/Logo.png';

import { About, GraphicsResources, Home, Reels } from '../Lazyload/Pages';

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className='main-layout'>
				<nav>
					<img
						src={logo}
						alt='Logo de Alerón producciones'
					/>
					<ul>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}
							>
								Inicio
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/reels'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}
							>
								Reels
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/nosotros'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}
							>
								Nosotros
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/recursos'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}
							>
								Recursos gráficos
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route
						path='/reels'
						element={<Reels />}
					/>
					<Route
						path='/nosotros'
						element={<About />}
					/>
					<Route
						path='/recursos'
						element={<GraphicsResources />}
					/>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/*'
						element={
							<Navigate
								to='/home'
								replace
							/>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};
