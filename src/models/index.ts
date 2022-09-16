import { Sequelize, DataTypes } from 'sequelize';

const {
    DB_USER,
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_PASSWORD
} = process.env;

/*
  For Docker database access
*/
// const sequelize = new Sequelize(String(DB_DATABASE), String(DB_USER), String(DB_PASSWORD), {
//     host: DB_HOST,
//     port: Number(DB_PORT),
//     dialect: 'mysql'
// });


/*
  For local database access
*/
const {
    LOCAL_DB_USER,
    LOCAL_DB_DATABASE,
    LOCAL_DB_PASSWORD,
    LOCAL_HOST
} = process.env

const sequelize = new Sequelize(String(LOCAL_DB_DATABASE), String(LOCAL_DB_USER), String(LOCAL_DB_PASSWORD), {
    host: String(LOCAL_HOST),
    dialect: 'mysql'
});


const isConnected = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

isConnected();

export const ScanModel = sequelize.define('scans', {
    url: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    results: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, {
    timestamps: false
});


const synnScan = () => {
    sequelize.sync().then(() => {
        console.log('Scan table created successfully!');
    }).catch((error) => {
        console.error('Unable to create table : ', error);
    });
};

synnScan();