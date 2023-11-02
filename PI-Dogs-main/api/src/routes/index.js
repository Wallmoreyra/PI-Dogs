const { Router } = require('express');
const dogsRouter = require('./dogsRoutes');
const tempRouter = require('./temperamentsRoutes');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

//ruta dogs
router.use("/dogs", dogsRouter);

//ruta temperamets
router.use("/temps", tempRouter);



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//export de las rutas
module.exports = router;
