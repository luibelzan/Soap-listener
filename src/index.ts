import config from "../configLoader";
import { AppDataSource, AppDataSource2 } from "./data-source"
import { listenToWebServices } from "./utils";

const PORT = config.listenPort;
const PORT2 = config.listenPort2;


listenToWebServices(PORT, AppDataSource);




