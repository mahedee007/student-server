import  express  from "express";
import { studentsController } from "./student.controller";

const router = express.Router();

router.post('/create-student', studentsController.createStudent);

export const studentRoutes = router;