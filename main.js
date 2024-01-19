import { Error404 } from './src/pages/404';
import { About } from './src/pages/about';
import { Home } from './src/pages/index';

const routes = {
  '/': () => {
    return Home();
  },
  '/about': () => {
    return About();
  },
};

function router(url) {
  if (routes[url]) document.querySelector('#app').innerHTML = routes[url]();
  else document.querySelector('#app').innerHTML = Error404();
}

window.addEventListener('hashchange', () => router(window.location.pathname));
router(window.location.pathname);
