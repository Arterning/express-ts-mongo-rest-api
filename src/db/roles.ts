import mongoose from 'mongoose';

const RoleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  permissions: [{ type: String }],
});

export const RoleModel = mongoose.model("Role", RoleSchema);


export const getRoles = () => RoleModel.find();
export const createRole = (values: Record<string, any>) => new RoleModel(values).save().then((role) => role.toObject());