import express from 'express';
import { router } from './routes';
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'
import "reflect-metadata";

import { createConnection } from "./database/";

createConnection() // Esse "then" você pode apagar, se quiser
  .then(() => console.log('connected to database')).catch(err => console.log(err));

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.use(router)

app.listen(3000, () => {
  console.log('Server is running on port 3000 teste');
})