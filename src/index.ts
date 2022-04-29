import "dotenv/config";
import app from "./app";

declare module "express-session" {
  interface SessionData {
    user: { account: string };
  }
}

app.listen(process.env.PORT, () => {
  console.log(new Date(), `env: ${process.env.NODE_ENV}`);
  console.log(new Date(), `version: ${process.env.VERSION}`);
  console.log(new Date(), `server listening on ${process.env.PORT}`);
});
