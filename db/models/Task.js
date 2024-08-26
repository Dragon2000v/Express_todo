import mongoose, { model } from "mongoose";
import { mongoSaveError, setMongoUpdateSettings } from "./hooks.js";

const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    isCompleted: { type: Boolean, default: false },
}, { timestamps: true });


TaskSchema.post("save", mongoSaveError);
TaskSchema.pre("findOneAndUpdate", setMongoUpdateSettings);
TaskSchema.post("findOneAndUpdate", mongoSaveError);

export default model("Task", TaskSchema, "tasks");