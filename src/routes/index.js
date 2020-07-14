import React from 'react'
import HomePage from './home/HomePage'
import AboutPage from './AboutPage'
import NotFoundPage from './NotFoundPage'
import { Switch, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../styles/styles.scss'
export default function Routes() {

  const routes = [
    { path: '/', name: 'Home', Component: HomePage },
    { path: '/about', name: 'About', Component: AboutPage },
    { name: 'Contact', Component: NotFoundPage },
  ]
  let location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={200}
        classNames="pageWrapper"
      >
        <Switch location={location}>
          {routes.map(({ path, Component }) => (
            <Route key={location.key} exact path={path}>
              <Component />
            </Route>
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
