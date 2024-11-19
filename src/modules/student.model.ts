import { model, Schema } from "mongoose";
import { Guardian, Student,  UserName } from "./student/student.interface";


const guardianSchema = new Schema<Guardian>({
    fathersName: {type: String, required: true},
    fatherOccupation: {type: String, required: true},
    mothersName: {type: String, required: true},
    motherOccupation: {type: String, required: true},

})

const userNameSchema = new Schema<UserName>({
    
        firstName: {type: String, required: true},
        middleName: {type: String},
        
        lastName: {type: String, required: true},
    
})
const studentSchema = new Schema<Student>({

    id: {type: String, required: true, unique: true},
    name: userNameSchema,
    cGPA: {type: Number, required: true},
    gender: {type: String, 
        enum: ["Male", "Female", "other"],
       
    },
    age: {type: Number, required: true},
    presentAddress: {type: String, required: true},
    permanentAddress: {type: String, required: true},
    contactNo: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    dateOfBirth: {type: String },
    bloodGroup: {type: String, 
        enum:["A+" , "A-" , "B+" , "B-" , "AB+" , "AB-" , "O+" , "O-"],
        },
    guardian: guardianSchema,
    profileImage: String,
    isActive: {type: String, 
        enum:["Active", "Block"]
    }


})

export const StudentModel = model<Student>('student', studentSchema);