import { NavLink, Route, Routes } from 'react-router-dom';
import { Videoclips, Publicity, Cine, Tv } from '../Pages';

export const Reels = () => {
	return (
		<>
			<ul>
				<li>
					<NavLink
						to='videoclips'
						className={({ isActive }) =>
							isActive ? 'nav-active' : ''
						}
					>
						Videoclips
					</NavLink>
				</li>
				<li>
					<NavLink
						to='publicidad'
						className={({ isActive }) =>
							isActive ? 'nav-active' : ''
						}
					>
						Publicidad
					</NavLink>
				</li>
				<li>
					<NavLink
						to='cine'
						className={({ isActive }) =>
							isActive ? 'nav-active' : ''
						}
					>
						Cine
					</NavLink>
				</li>
				<li>
					<NavLink
						to='tv'
						className={({ isActive }) =>
							isActive ? 'nav-active' : ''
						}
					>
						TV
					</NavLink>
				</li>
			</ul>
			<Routes>
				<Route
					path='/videoclips'
					element={<Videoclips />}
				/>
				<Route
					path='/publicidad'
					element={<Publicity />}
				/>
				<Route
					path='/cine'
					element={<Cine />}
				/>
				<Route
					path='/tv'
					element={<Tv />}
				/>
				<Route
					path='/reels/*'
					element={
						<h1>404 Not Found</h1> // Create 404NotFound Page !!
					}
				/>
			</Routes>
		</>
	);
};

export default Reels;
