import { Request, Response } from 'express'
import { StudentServices } from './student.service'
import { createCipheriv } from 'crypto'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body
    // will call service function to send this data
    const result = await StudentServices.createStudentIntoDB(studentData)
    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created succcessfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB()
    res.status(200).json({
      success: true,
      message: 'Get all student  succcessfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.getSingleStudentFromDB(studentId)
    res.status(200).json({
      success: true,
      message: 'Get single student succcessfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
export const studentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
}
