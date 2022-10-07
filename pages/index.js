import { getAllQuestions } from "../services/questionService";
import QuestionCard from "../components/QuestionCard";

export async function getServerSideProps() {
  const questions = await getAllQuestions();

  return {
    props: { questions: questions },
  };
}
export default function Home({ questions }) {
  return (
    <main>
      <h1>All questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question.question}
            answer={question.answer}
            options={question.options}
          />
        ))}
      </ul>
    </main>
  );
}
