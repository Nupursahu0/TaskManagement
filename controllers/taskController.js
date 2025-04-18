const Task = require('../models/task');
const { taskValidationSchema } = require('../validations/taskValidation')

exports.createTask = async (req, res) => {
  try {
    console.log(req.body);
    const { error } = taskValidationSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const { status, sort } = req.query;
    const filter = status ? { status } : {};

    let query = Task.find(filter);
    if (sort === 'dueDate') {
      query = query.sort({ dueDate: 1 });
    }

    const tasks = await query;
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getStats = async (req, res) => {
  try {
    const stats = await Task.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } }
    ]);
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
