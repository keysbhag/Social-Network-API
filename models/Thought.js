const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
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
    get: () => {
      const date = new Date();
      return date.toLocaleString();
    },
  },
});

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
      get:() => {
        const date = new Date();
        return date.toLocaleString();
      }
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});


const Thought = model("thought", thoughtSchema);

module.exports = Thought;
