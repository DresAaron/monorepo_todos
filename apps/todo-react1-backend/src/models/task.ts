import { Schema, model, Document } from 'mongoose';

interface ITask extends Document {
    user_id: Schema.Types.ObjectId;
    title: string;
    description?: string;
    priority: 'low' | 'medium' | 'high';
    due_date?: Date;
    status: 'pending' | 'in_progress' | 'completed';
}

const taskSchema = new Schema<ITask>({
    user_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    due_date: { type: Date },
    status: { type: String, enum: ['pending', 'in_progress', 'completed'], default: 'pending' }
}, {
    timestamps: true
});

const TaskModel = model<ITask>('Task', taskSchema);

export default TaskModel;