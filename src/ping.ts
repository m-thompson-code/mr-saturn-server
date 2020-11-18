import * as express from 'express';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';

export const runPingServer = () => {
    const app = express();

    // Automatically allow cross-origin requests
    app.use(cors({ origin: true }));
    app.use(cookieParser());
    
    app.get('/ping', async (req: express.Request, res: express.Response) => {
        const message = "app - ping";
        console.log(message);
        return res.status(200).type('json').send({
            message: message
        });
    });

    // listen for requests
    const listener = app.listen(process.env.PORT, () => {
        let port;
        const address = listener.address();

        if (typeof address !== 'string') {
            port = address.port;
        } else {
            port = address;
        }

        console.log("Your app is listening on " + port);
    });
}
