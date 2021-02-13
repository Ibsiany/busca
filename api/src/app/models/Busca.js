import Sequelize, {Model} from 'sequelize';

class Busca extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        url: Sequelize.STRING,
        about: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default Busca;