import Student from "../models/studentsModel";
import factory from "./handleFactory";


const createStudent = factory.createOne(Student);
const getAllStudent = factory.getAll(Student);
const getSingleStudent = factory.getOne(Student);
const updateStudent = factory.updateOne(Student);
const deleteStudent = factory.deleteOne(Student);

// Export
const studentsController = { createStudent, getAllStudent, getSingleStudent,updateStudent, deleteStudent };
export = studentsController;
