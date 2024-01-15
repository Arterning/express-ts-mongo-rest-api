import { createRole, getRoles } from "../db/roles";

(async () => {
    console.log("Seeding roles");
    await createRole({ name: "admin" , permissions: ["*"]});
    await createRole({ name: "user" , permissions: ["users.read", "users.write"]});
    console.log("Seeded roles");
    await getRoles().then(roles => console.log(roles));
})();