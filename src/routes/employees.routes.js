import { Router } from "express";
import { getEmployees, postEmployees,updateEmployee,getEmployee, deleteEmployee } from "../controllers/employe.controller.js";


const router = Router();

router.get('/employees',getEmployees  );

router.get('/employees/:id', getEmployee);

router.post('/employees',postEmployees );

router.delete('/employees/:id', deleteEmployee);

router.patch('/employees/:id',updateEmployee);







    
export default router