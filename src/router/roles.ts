import { getAllRoles } from '../controllers/roles';
import express from 'express';


export default (router: express.Router) => {
    router.get('/roles', getAllRoles);
};