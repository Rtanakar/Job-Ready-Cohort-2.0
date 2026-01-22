import express, { Request, Response, NextFunction } from "express";
import userRouter from "./routes/user.routes";

const app = express();

// app.use(express.json());
// global middleware - applies to all routes
const logReq = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method);
  next();
};
// app.use(logReq);

app.get("/home", (req, res) => {
  res.send("world🏠");
});

app.get(
  "/see",
  logReq,
  (req, res, next) => {
    console.log("This is a second middleware");
    next();
  },
  (req, res) => {
    res.send("You🧑‍💻");
  },
);

app.use("/api/v1/users", userRouter);

app.listen(3000, (err) => {
  console.log(`server is ready http://localhost:${3000} ❄️`);
});

// Use cases of middleware

// 1. auth
// 2. error;
// 3. protected
// 4. validation
// 5. parse
// 6. rate limiting
// 7. compression
// 8. cors
