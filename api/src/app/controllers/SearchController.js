import Busca from '../models/Busca';

class SearchControllers {
    async index(req, res) {
      const search = await Busca.findAll();
      return res.status(200).json(search);
    }
    async create(req, res) {
      const add = await Busca.create(req.body);
      res.status(200).json(add);
   }
}

export default new SearchControllers();
