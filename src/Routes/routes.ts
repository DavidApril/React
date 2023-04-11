import { lazy, LazyExoticComponent } from "react";
import { DashBoard } from "../Lazyload/Layout/DashBoard";
import {GraphicsResources, About, Contact} from "../Lazyload/Pages";

type JSXComponent = () => JSX.Element;

interface Route{
  to: string
  path: string
  Component:LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}

// const About = lazy(() => import('../Lazyload/Pages/About'));
// const GraphicsResources = lazy(() => import('../Lazyload/Pages/GraphicsResources'));

const Reels = lazy(() => import('../Lazyload/Pages/Reels')); // Lazy

export const routes: Route[] = [
  {
    to: '/inicio', 
    path: 'inicio',
    Component: DashBoard,
    name: 'Inicio'
  },
  {
    to: '/reels',
    path: '/reels/*',
    Component: Reels,
    name: 'Reels'
  },
    {
    to: '/nosotros',
    path: 'nosotros',
    Component: About,
    name: 'Nosotros'
  },
  {
    to: '/recursos',
    path: 'recursos',
    Component: GraphicsResources,
    name: 'Recursos gráficos'
  },
  {
    to: '/contacto',
    path: 'contacto',
    Component: Contact,
    name: 'Contáctanos',
  }
]