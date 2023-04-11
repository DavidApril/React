import { Component, lazy, LazyExoticComponent } from "react";
// import { Home, GraphicsResources, About, Reels } from "../Lazyload/Pages";

type JSXComponent = () => JSX.Element;

interface Route{
  to: string
  path: string
  Component:LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}

const Home = lazy(() => import('../Lazyload/Pages/Home'));
const Reels = lazy(() => import('../Lazyload/Pages/Reels'));
const About = lazy(() => import('../Lazyload/Pages/About'));
const GraphicsResources = lazy(() => import('../Lazyload/Pages/GraphicsResources'));

export const routes: Route[] = [
  {
    to: '/',
    path: '/',
    Component: Home,
    name: 'Inicio'
  },
  {
    to: '/reels',
    path: '/reels',
    Component: Reels,
    name: 'Reels'
  },
  {
    to: '/nosotros',
    path: '/nosotros',
    Component: About,
    name: 'Nosotros'
  },
  {
    to: '/recursos',
    path: '/recursos',
    Component: GraphicsResources,
    name: 'Recursos gráficos'
  },
]