import mongoose from 'mongoose';

// Declare the Schema of the Mongo model
var todoSchema = new mongoose.Schema({
    task: String,
    complete: Boolean
});

//Export the model
export default mongoose.model('tasks', todoSchema);
