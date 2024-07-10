const db = require('./src/database/models');

const dbCheck = async () => {
    try {
        await db.sequelize.authenticate();
        console.log(`Successfully connected to database.`);
    } catch (error) {
        console.log(`Cannot connect to database ${process.env.DB_NAME}. Error message is: ${error.message}.`);
    }
};

dbCheck();

const dropTable = async (table) => {
    try {
        if (db[table]) {
            await db[table].drop();
            console.log(`Table ${table} has been dropped.`);
        } else {
            console.log(`Table ${table} does not exist.`);
        }
    } catch (error) {
        console.log(error.message);
    }
};

// dropTable('Order');

const syncTable = async (table) => {
    try {
        if (db[table]) {
            await db[table].sync();
            console.log(`Table ${table} has been sync.`);
        } else {
            console.log(`Table ${table} does not exist.`);
        }
    } catch (error) {
        console.log(error.message);
    }
};

// syncTable('Order')