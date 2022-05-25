import "dotenv/config";
import createServer from "./server.js";
import { connectDatabase, seedDatabase } from "./database.js";

const appName = "Server API";
const port = process.env.PORT || 8084;

async function main() {
  try {
    await connectDatabase();
    await seedDatabase();
    const server = createServer();
    server.listen(port, () =>
      console.log(`${appName} running on port ${port}!`)
    );
  } catch (error) {
    console.error(error);
  }
}

main();