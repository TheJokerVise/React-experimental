import { useEffect, useReducer } from "react";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import "./css/app.scss";
import { Loader } from "./components/Loader";
import { Error } from "./components/Error";
import { StartScreen } from "./components/StartScreen";

const initialState = {
  questions: [],
  status: "loading", // loading, error, ready, active, finished
  currentQuestion: 0,
  score: 0,
  showScore: false,
};

const reducer = (
  state: {
    questions: [];
    status: string;
    currentQuestion: number;
    score: number;
    showScore: boolean;
  },
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "INCREMENT_SCORE":
      return {
        ...state,
        score: state.score + 1,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    case "SHOW_SCORE":
      return {
        ...state,
        showScore: true,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numQuestions = state.questions.length;

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "dataReceived", payload: data });
      })
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Content>
        {state.status === "loading" && <Loader></Loader>}
        {state.status === "error" && <Error></Error>}
        {state.status === "ready" && (
          <StartScreen numQuestions={numQuestions}></StartScreen>
        )}
      </Content>
    </div>
  );
}

export default App;
