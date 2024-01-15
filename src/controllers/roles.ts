import { getRoles } from '../db/roles';
import express from 'express';


export const getAllRoles = async (req: express.Request, res: express.Response) => {
    try {
        const roles = await getRoles();
        return res.status(200).json(roles);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}