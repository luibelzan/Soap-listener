import config from "../configLoader";
import { AppDataSource, AppDataSource2 } from "./data-source"
import { listenToWebServices } from "./utils";

const PORT = config.listenPort;
const PORT2 = 9090;


listenToWebServices(PORT, AppDataSource);




