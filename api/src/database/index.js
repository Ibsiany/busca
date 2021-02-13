import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import Search from '../app/models/Busca';

const models = [
    Search,
];

class Database{
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
}
export default new Database();