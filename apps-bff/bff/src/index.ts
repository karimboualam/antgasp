import { createServer } from "./server.js";
const port = Number(process.env.PORT || 4000);
const app = createServer();
const server = app.listen(port, () => console.log(`[BFF] http://localhost:${port}`));
process.on("SIGTERM", () => server.close());
process.on("SIGINT", () => server.close());
