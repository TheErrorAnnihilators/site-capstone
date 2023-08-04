require("dotenv").config();
const secretKey = `${process.env.SECRET_KEY}`;

const PORT = process.env.PORT ? Number(process.env.PORT) : 3008;

function getDatabaseUri() {
    const dbUser = process.env.DATABASE_USER || "nomadia";
    const dbPass = process.env.DATABASE_PASS ? encodeURIComponent(process.env.DATABASE_PASS) : "";
    const dbHost = process.env.DATABASE_HOST || "nomadia";
    const dbPort = process.env.DATABASE_PORT || 5432;
    const dbName = process.env.DATABASE_NAME || "nomadia";

    return process.env.DATABASE_URL || `postgres://nomadia:j7ydH66LdLocVy1iLxiR4QxOhLKsB7Eo@dpg-cj5bpjqcn0vc73a04ii0-a/nomadia`;
//     `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
}
const BCRYPT_WORK_FACTOR = 13
// console.log("process.env", Object.keys(process.env));
console.log("App Config");
console.log("PORT:", PORT);
console.log("Database URI:", getDatabaseUri());
console.log("---");
 

module.exports = {
    PORT,
    BCRYPT_WORK_FACTOR,
    getDatabaseUri,
    secretKey
};

