import dbConnect from "../lib/dbConnect";
import Question from "../models/Question";

export async function getAllQuestions() {
  await dbConnect();

  const questions = await Question.find();

  const sanitizedQuestions = questions.map((item) => ({
    id: item.id,
    question: item.question,
    answer: item.answer,
    options: item.options,
  }));

  return sanitizedQuestions;
}

export async function getQuestionById(id) {
  await dbConnect();

  const item = await Question.findById(id);

  const sanitizedQuestion = {
    id: item.id,
    question: item.question,
    answer: item.answer,
    options: item.options,
  };

  return sanitizedQuestion;
}
