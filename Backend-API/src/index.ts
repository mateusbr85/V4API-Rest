import './config/moduleAlias';
import cluster from "node:cluster";
import doteEnvConfig from "@config/doteEnv";
import app from "@config/server";
doteEnvConfig;


if (cluster.isPrimary) {
    console.log(`Server started primary process: ${process.pid}`);
    const CPUS = 3;

    for (let i = 0; i < CPUS; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker: any, code: string, signal: string | number) => {
        console.log(
            `Server process dead: ${worker.process.pid} with code: ${code}`
        );
        console.log(`[New process started...... ]`);
        cluster.fork();
    });
} else {
    try {
        const port = Number(process.env.PORT); 
        app.listen({ port });
        console.log(`Server started on port ${port}`);
    }
    catch(err) {
        console.error(`Error starting server: ${err}`);
    }
}