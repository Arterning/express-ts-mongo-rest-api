import mongoose from 'mongoose';
import { createRole, getRoles } from "../db/roles";

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/rest-api');
mongoose.connection.on('error', (error: Error) => console.log(error));


(async () => {
    console.log("Seeding roles");
    await createRole({ name: "admin" , permissions: ["*"]});
    await createRole({ name: "user" , permissions: ["users.read", "users.write"]});
    console.log("Seeded roles");
    await getRoles().then(roles => console.log(roles));
    //why we should exit here
    process.exit(0);
})();