import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import { kernel } from './src/config/KernelConf';

// load all injectable entities.
// the @provide() annotation will then automatically register them.
import './src/config/loader';
import { Request,Response,NextFunction } from 'express';



// start the server
let server = new InversifyExpressServer(kernel);

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(helmet.noCache());
});

server.setErrorConfig((app) => {
    app.use((err:Request, req:Request, res:Response, next:NextFunction) => {
        console.error(err);
        res.status(500).send('Something broke!');
    });
});

let app = server.build();
app.listen(3000);
console.log('Server started on port 3000 :)');

exports = module.exports = app;