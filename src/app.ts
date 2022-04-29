import express from "express";
import morgan from "morgan";
import session from "express-session";
import { backendSession } from "./middleware/session";
import { model } from "./routers/value";

try {
  (async () => {})();
} catch (err: any) {
  console.error("Unable to connect to the database: ", err);
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/api/echo", (req, res) => {
  res.json({ env: process.env.NODE_ENV, echo: "echo" });
});

const admin = express.Router();
admin.use(
  session({
    secret: process.env.SESSION_KEY || "32970dafd91350b91f34376e88531f86",
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 },
  })
);
const checkSession = express.Router();
checkSession.use(backendSession);
checkSession.use(model);

admin.use(checkSession);
app.use("/api", admin);

export default app;
