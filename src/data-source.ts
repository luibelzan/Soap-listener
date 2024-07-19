import "reflect-metadata"
import config from "../configLoader"
import { DataSource } from "typeorm"
import { S13 } from "./entities/S13"
import { S15 } from "./entities/S15"
import { S31 } from "./entities/S31"
import { S63 } from "./entities/S63"
import { S65 } from "./entities/S65"
import { T_S02_TEMP } from "./entities/T_S02_TEMP"
import { T_S04_TEMP } from "./entities/T_S04_TEMP"
import { T_S09_TEMP } from "./entities/T_S09_TEMP"
import { T_S05_TEMP } from "./entities/T_S05_TEMP"
import { T_G01_TEMP } from "./entities/T_G01_TEMP"
import { T_G02_TEMP } from "./entities/T_G02_TEMP"
import { T_G03_TEMP } from "./entities/T_G03_TEMP"
import { T_G04_TEMP } from "./entities/T_G04_TEMP"
import { T_G05_TEMP } from "./entities/T_G05_TEMP"
import { T_G06_TEMP } from "./entities/T_G06_TEMP"
import { T_G07_TEMP } from "./entities/T_G07_TEMP"
import { T_G56 } from "./entities/T_G56"
import { T_G57 } from "./entities/T_G57"
import { T_G58 } from "./entities/T_G58"
import { T_S93 } from "./entities/T_S93"
import { T_S94 } from "./entities/T_S94"
import { T_S96 } from "./entities/T_S96"
import { T_S97 } from "./entities/T_S97"
import { T_S06 } from "./entities/T_S06"
import { T_S14 } from "./entities/T_S14"
import { T_S17 } from "./entities/T_S17"
import { T_S24 } from "./entities/T_S24"
import { T_S12 } from "./entities/T_S12"
import { T_CUPS } from "./entities/T_CUPS"
import { T_CT } from "./entities/T_CT"
import { T_CONCENTRADORES } from "./entities/T_CONCENTRADORES"

export const AppDataSource1 = new DataSource({
    type: "postgres",
    host: config.host,
    port: config.databasePort,
    username: config.username,
    password: config.password,
    database: config.database,
    synchronize: true,
    logging: false,
    entities: [T_S02_TEMP, S13, S15, S31, S63, S65, T_S04_TEMP, T_S09_TEMP, T_S05_TEMP, T_G01_TEMP, T_G02_TEMP, T_G03_TEMP, T_G04_TEMP, T_G05_TEMP, T_G06_TEMP, T_G07_TEMP,
        T_G56, T_G57, T_G58, T_S93, T_S94, T_S96, T_S97, T_S06, T_S12, T_S14, T_S17, T_S24, T_CUPS, T_CT, T_CONCENTRADORES
    ],
    migrations: [],
    subscribers: [],
})

export const AppDataSource2 = new DataSource({
    type: "postgres",
    host: config.host2,
    port: config.databasePort2,
    username: config.username2,
    password: config.password2,
    database: config.database2,
    synchronize: true,
    logging: false,
    entities: [T_S02_TEMP, S13, S15, S31, S63, S65, T_S04_TEMP, T_S09_TEMP, T_S05_TEMP, T_G01_TEMP, T_G02_TEMP, T_G03_TEMP, T_G04_TEMP, T_G05_TEMP, T_G06_TEMP, T_G07_TEMP,
        T_G56, T_G57, T_G58, T_S93, T_S94, T_S96, T_S97, T_S06, T_S12, T_S14, T_S17, T_S24, T_CUPS, T_CT, T_CONCENTRADORES
    ],
    migrations: [],
    subscribers: [],
})

export const AppDataSource3 = new DataSource({
    type: "postgres",
    host: config.host3,
    port: config.databasePort3,
    username: config.username3,
    password: config.password3,
    database: config.database3,
    synchronize: true,
    logging: false,
    entities: [T_S02_TEMP, S13, S15, S31, S63, S65, T_S04_TEMP, T_S09_TEMP, T_S05_TEMP, T_G01_TEMP, T_G02_TEMP, T_G03_TEMP, T_G04_TEMP, T_G05_TEMP, T_G06_TEMP, T_G07_TEMP,
        T_G56, T_G57, T_G58, T_S93, T_S94, T_S96, T_S97, T_S06, T_S12, T_S14, T_S17, T_S24, T_CUPS, T_CT, T_CONCENTRADORES
    ],
    migrations: [],
    subscribers: [],
})

export const AppDataSource4 = new DataSource({
    type: "postgres",
    host: config.host4,
    port: config.databasePort4,
    username: config.username4,
    password: config.password4,
    database: config.database4,
    synchronize: true,
    logging: false,
    entities: [T_S02_TEMP, S13, S15, S31, S63, S65, T_S04_TEMP, T_S09_TEMP, T_S05_TEMP, T_G01_TEMP, T_G02_TEMP, T_G03_TEMP, T_G04_TEMP, T_G05_TEMP, T_G06_TEMP, T_G07_TEMP,
        T_G56, T_G57, T_G58, T_S93, T_S94, T_S96, T_S97, T_S06, T_S12, T_S14, T_S17, T_S24, T_CUPS, T_CT, T_CONCENTRADORES
    ],
    migrations: [],
    subscribers: [],
})

export const AppDataSource5 = new DataSource({
    type: "postgres",
    host: config.host5,
    port: config.databasePort5,
    username: config.username5,
    password: config.password5,
    database: config.database5,
    synchronize: true,
    logging: false,
    entities: [T_S02_TEMP, S13, S15, S31, S63, S65, T_S04_TEMP, T_S09_TEMP, T_S05_TEMP, T_G01_TEMP, T_G02_TEMP, T_G03_TEMP, T_G04_TEMP, T_G05_TEMP, T_G06_TEMP, T_G07_TEMP,
        T_G56, T_G57, T_G58, T_S93, T_S94, T_S96, T_S97, T_S06, T_S12, T_S14, T_S17, T_S24, T_CUPS, T_CT, T_CONCENTRADORES
    ],
    migrations: [],
    subscribers: [],
})

export const AppDataSource6 = new DataSource({
    type: "postgres",
    host: config.host6,
    port: config.databasePort6,
    username: config.username6,
    password: config.password6,
    database: config.database6,
    synchronize: true,
    logging: false,
    entities: [T_S02_TEMP, S13, S15, S31, S63, S65, T_S04_TEMP, T_S09_TEMP, T_S05_TEMP, T_G01_TEMP, T_G02_TEMP, T_G03_TEMP, T_G04_TEMP, T_G05_TEMP, T_G06_TEMP, T_G07_TEMP,
        T_G56, T_G57, T_G58, T_S93, T_S94, T_S96, T_S97, T_S06, T_S12, T_S14, T_S17, T_S24, T_CUPS, T_CT, T_CONCENTRADORES
    ],
    migrations: [],
    subscribers: [],
})

export const AppDataSource7 = new DataSource({
    type: "postgres",
    host: config.host7,
    port: config.databasePort7,
    username: config.username7,
    password: config.password7,
    database: config.database7,
    synchronize: true,
    logging: false,
    entities: [T_S02_TEMP, S13, S15, S31, S63, S65, T_S04_TEMP, T_S09_TEMP, T_S05_TEMP, T_G01_TEMP, T_G02_TEMP, T_G03_TEMP, T_G04_TEMP, T_G05_TEMP, T_G06_TEMP, T_G07_TEMP,
        T_G56, T_G57, T_G58, T_S93, T_S94, T_S96, T_S97, T_S06, T_S12, T_S14, T_S17, T_S24, T_CUPS, T_CT, T_CONCENTRADORES
    ],
    migrations: [],
    subscribers: [],
})

export const AppDataSource8 = new DataSource({
    type: "postgres",
    host: config.host8,
    port: config.databasePort8,
    username: config.username8,
    password: config.password8,
    database: config.database8,
    synchronize: true,
    logging: false,
    entities: [T_S02_TEMP, S13, S15, S31, S63, S65, T_S04_TEMP, T_S09_TEMP, T_S05_TEMP, T_G01_TEMP, T_G02_TEMP, T_G03_TEMP, T_G04_TEMP, T_G05_TEMP, T_G06_TEMP, T_G07_TEMP,
        T_G56, T_G57, T_G58, T_S93, T_S94, T_S96, T_S97, T_S06, T_S12, T_S14, T_S17, T_S24, T_CUPS, T_CT, T_CONCENTRADORES
    ],
    migrations: [],
    subscribers: [],
})
