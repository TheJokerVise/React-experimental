export const StartScreen: React.FC<StartScreenProps> = ({
  numQuestions,
}): JSX.Element => {
  return (
    <div className="start-screen">
      <h2>Welcome to the React Quiz!</h2>
      <p>{numQuestions} questions to test your React mastery!</p>
      <button>Start Quiz</button>
    </div>
  );
};

interface StartScreenProps {
  numQuestions: number;
}
