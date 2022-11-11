const mongoose =  require("mongoose")

const transactionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
    }
}, {timestamps: true});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;