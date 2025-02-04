import express from 'express'
import { studentControllers } from './student.controller'
const router = express.Router()
// will call controller function
router.post('/create-student', studentControllers.createStudent)
router.get('/', studentControllers.getAllStudents)
router.get('/:studentId', studentControllers.getSingleStudent)
export const StudentRoutes = router
