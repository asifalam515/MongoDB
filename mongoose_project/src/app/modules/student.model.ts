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
  gender: ['Male', 'Female'],
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
  },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  pernamentAddress: { type: String, required: true },
  gurdian: {
    fatherName: String,
    fatherOccupation: String,
    fatherContactNo: String,
    motherName: String,
    motherOccupation: String,
    motherContactNo: String,
  },
  localGurdian: {
    name: String,
    occupation: String,
    contactNo: String,
    address: String,
  },

  profileImg: String,
  isActive: ['ACTIVE', 'BLOCKED'],
})
