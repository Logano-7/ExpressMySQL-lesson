import express from "express";
import config from "./config";
// TODO: import router from routes/
import emloyeeRouter from "./routes/employeeRouter";

const app = express();

app.use(express.json());
app.use('/employees', emloyeeRouter);

// TODO: use the imported router to handle all requests

app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
