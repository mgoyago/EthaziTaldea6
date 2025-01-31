import { useState } from "react";
import LoLImage from "../../assets/img/Lol.png";
import ValorantImage from "../../assets/img/Valorant.png";
import FCImage from "../../assets/img/Mbappe.png";
import CSGOImage from "../../assets/img/CSGO.png";
import DotaImage from "../../assets/img/Dota.png";
import RocketImage from "../../assets/img/RLeague.png";
import HeaderImage from "../../assets/img/Header.webp";


interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  image?: string;
}

function Trivial() {
  const allQuestions: Question[] = [
    {
      question: "¿Cuál de estas posiciones no existe en LoL?",
      options: ["Mid", "Bot", "Jungla", "Explorador"],
      correctAnswer: "Explorador",
      image: LoLImage,
    },
    {
      question: "¿Cuantos jugadores hay en una partida de Valorant?",
      options: ["4v4", "5v5", "6v6", "3v3"],
      correctAnswer: "5v5",
      image: ValorantImage,
    },
    {
      question: "¿Cuál es la puntuación general de Kylian Mbappé en EAFC 25?",
      options: ["91", "92", "90", "93"],
      correctAnswer: "91",
      image: FCImage,
    },
    {
      question: "Cuál es el nombre del mapa más jugado y emblemático de la historia de CS:GO, famoso por su diseño en forma de letra 'A' y sus icónicos puntos de bomba?",
      options: ["Dust I", "Dust III", "Dust II", "Dust IV"],
      correctAnswer: "Dust II",
      image: CSGOImage,
    },
    {
      question: "¿Cuanta duracion tiene un partido en Rocket League?",
      options: ["10 Minutos", "7 Minutos", "4 Minutos", "5 Minutos"],
      correctAnswer: "5 Minutos",
      image: RocketImage,
    },
    {
      question: "¿Cuál es el nombre del evento anual de Dota 2 que cuenta con el mayor premio acumulado en los e-Sports?",
      options: ["The Finals", "The International", "Worlds", "Kings League"],
      correctAnswer: "The International",
      image: DotaImage,
    },
  ];

  const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const [questions, setQuestions] = useState<Question[]>(shuffleArray([...allQuestions]).slice(0, 5));
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleStartQuiz = () => {
    setQuestions(shuffleArray([...allQuestions]).slice(0, 5));
    setShowQuiz(true);
  };

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === questions[currentQuestionIndex].correctAnswer);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleGoHome = () => {
    setShowQuiz(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div
      className="trivial-container bg-black text-white container-fluid position-relative w-100 p-5"
      style={{ minHeight: "93vh" }}
    >
      {!showQuiz ? (
        <div className="menu-container text-center p-5">
          <img
            src={HeaderImage}
            alt="Quiz Intro"
            className="img-fluid mb-4"
            style={{ maxHeight: "400px", borderRadius: "100px" }}
          />
          <h1>Welcome to the daily Trivial</h1>
          <button className="btn btn-primary mt-4" onClick={handleStartQuiz}>
            Start Quiz
          </button>
        </div>
      ) : (
        <div>
          <div className="question-container text-center">
            <h2>Trivial Game</h2>
            <p>{currentQuestion.question}</p>
            {currentQuestion.image && (
              <div
                className="d-flex justify-content-center align-items-center mt-3"
                style={{ minHeight: "340px" }}
              >
                <img
                  src={currentQuestion.image}
                  alt="Question related"
                  className="img-fluid"
                  style={{ maxHeight: "350px" }}
                />
              </div>
            )}
          </div>  
          <div className="options-container mt-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`btn btn-outline-light w-100 mb-3 ${
                  selectedAnswer === option
                    ? isCorrect
                      ? "btn-success"
                      : "btn-danger"
                    : ""
                }`}
                onClick={() => handleAnswerClick(option)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>

          {selectedAnswer && (
            <div className="feedback-container mt-4 text-center">
              {isCorrect ? (
                <p className="text-success">Correct!</p>
              ) : (
                <p className="text-danger">Wrong answer.</p>
              )}

              {currentQuestionIndex < questions.length - 1 && (
                <button
                  className="btn btn-primary mt-3"
                  onClick={handleNextQuestion}
                >
                  Next question
                </button>
              )}
            </div>
          )}

          {currentQuestionIndex === questions.length - 1 && selectedAnswer && (
            <div className="results-container mt-4 text-center">
              <p>You've reached the end of the quiz.</p>
              <button className="btn btn-secondary mt-3" onClick={handleGoHome}>
                Repeat another quiz
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Trivial;
