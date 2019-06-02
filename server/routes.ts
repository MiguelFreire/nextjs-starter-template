const nextRoutes = require('next-routes');
const routes = nextRoutes()
    .add('index', '/');

export const Link = routes.Link;
export default routes;
