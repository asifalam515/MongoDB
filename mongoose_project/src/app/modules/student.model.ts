// schema and model will be here
import { Schema, model, connect } from 'mongoose'
import { Student } from './student/student.interface'
const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    firstName: {
      type: String,
      require: true,
    },
    middleName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
  },
})
