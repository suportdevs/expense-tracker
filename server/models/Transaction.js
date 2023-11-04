const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
    amount: {
      type: Number,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
