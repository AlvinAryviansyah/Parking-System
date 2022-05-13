import express from "express"
import config from "config"
import log from "./logger"
import router from "./routes";

const port = 4000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use("/", router)

app.listen(port, () => {
   log.info(`This app running on port: ${port}`);
});


