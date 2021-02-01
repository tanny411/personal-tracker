const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ExpenseSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  saving: [
    {
      title: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
      },
      total_amount: {
        type: Number,
        required: true,
      },
      saved: {
        type: Number,
        default: 0,
      },
    },
  ],
  expense: [
    {
      is_expense: {
        type: Boolean,
        required: true,
      },
      amount: {
        type: Number,
        require: true,
      },
      date: {
        type: Date,
        require: true,
      },
      comment: {
        type: String,
      },
      category: {
        type: String,
      },
      subcategory: {
        type: String,
      },
    },
  ],
});

module.exports = Expense = mongoose.model("expense", ExpenseSchema);
