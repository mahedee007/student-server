import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoutes } from './modules/student/student.route';
const app: Application = express()
 
app.use(express.json())
app.use(cors())


app.use('/api/v1/students', studentRoutes)




export default app;
