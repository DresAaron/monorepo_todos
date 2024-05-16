import { Request, Response } from "express";
import TaskModel from "../models/task";

class TaskController {
  static createTask = async (req: Request, res: Response) => {
    const { user_id, title, description, priority, due_date } = req.body;

    try {
      const newTask = new TaskModel({
        user_id: req.user.userId,
        title,
        description,
        priority,
        due_date,
        status: "pending",
      });
      await newTask.save();

      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ error: "Error creating task" });
    }
  };

  static getTasks = async (req: Request, res: Response) => {
    try {
      const tasks = await TaskModel.find({ user_id: req.user.userId });
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: "Error fetching tasks" });
    }
  };

  static updateTask = async (req: Request, res: Response) => {
    const { taskId } = req.params;
    const updates = req.body;

    try {
      const task = await TaskModel.findByIdAndUpdate(taskId, updates, {
        new: true,
      });
      if (task) {
        res.json(task);
      } else {
        res.status(404).json({ error: "Task not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error updating task" });
    }
  };

  static deleteTask = async (req: Request, res: Response) => {
    const { taskId } = req.params;

    try {
      await TaskModel.findByIdAndDelete(taskId);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Error deleting task" });
    }
  };
}

export default TaskController;