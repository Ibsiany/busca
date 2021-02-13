import { Router } from 'express';
import SearchControllers from '../app/controllers/SearchController';
const routes = new Router();

routes.get('/search', SearchControllers.index);
routes.post('/cadastrar', SearchControllers.create);


export default routes;