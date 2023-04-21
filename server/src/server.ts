import app from "./app";
import config from "config";

const port = config.get("port") as number;
const host = config.get("host") as string;

app.listen(port, host, () => {
  console.log(`Server listening at http://${host}:${port}`);
});
