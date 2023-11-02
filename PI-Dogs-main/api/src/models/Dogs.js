const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // MODELO 1 | Dogs - ID.  Imagen.  Nombre.  Altura.  Peso.  Años de vida.*
  sequelize.define('dogs', {
    id: {
      type: DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  },
    {timestamps: false}
  );
};
