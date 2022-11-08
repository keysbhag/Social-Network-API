const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema(
  {
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        format: Date,
    },
  }
);

const thoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      format: Date,
    },
    username: {
      type: String,
      required: true,
    },
    reactionSchema: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model("thoughts", thoughtSchema);

module.exports = Thought;
