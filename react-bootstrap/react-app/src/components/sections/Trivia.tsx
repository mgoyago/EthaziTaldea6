import { useState, useEffect } from "react";
import HeaderImage from "../../assets/img/Header.webp";
import lol from "../../assets/img/jokoak/lol.png";
import valorant from "../../assets/img/jokoak/valorant.png";
import fifa from "../../assets/img/jokoak/fifa.png";
import csgo from "../../assets/img/jokoak/csgo.png";
import dota from "../../assets/img/jokoak/dota.png";
import rocket from "../../assets/img/jokoak/rocket.png";
import axios from 'axios';
// @ts-ignore
import translations from "../../assets/translate/translations";

interface Question {
  id: number;
  game: string;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  correct_answer: string;
}

interface TrivialProps {
  loged: string;
  currentRol: string;
  currentLanguage: string;
  setCurrentSection: (section: string) => void;
  setuserScore: (section: string) => void;
}

const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5);

const gameImages: Record<string, string> = {
  lol,
  valorant,
  fifa,
  csgo,
  dota,
  rocket,
};

const Trivial: React.FC<TrivialProps> = ({ loged, currentRol, currentLanguage, setCurrentSection, setuserScore }) => {
  const language = translations[currentLanguage].trivial;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(loged === "bai");
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [newQuestion, setNewQuestion] = useState<Question>({
    id: 0,
    game: "",
    question: "",
    option_a: "",
    option_b: "",
    option_c: "",
    correct_answer: "",
  });

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/trivialRandom");
        const data = await response.json();
        if (data.length < 5) {
          setQuestions(shuffleArray(data));
        } else {
          setQuestions(shuffleArray(data).slice(0, 5));
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);
  const handleInsertQuestion = () => {
    
  }

  const handleStartQuiz = () => {
    if (loged === "ez") {
      setIsLoggedIn(false);
    } else if (loged === "bai") {
      setShowQuiz(true);
    }
  };

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestionIndex].correct_answer;
    setIsCorrect(correct);
    if (correct) {
      setScore((prevScore) => prevScore + 1);
    }
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
    setScore(0);
    setCurrentSection("home");
  };

  const handleGoToLogin = () => {
    setCurrentSection("signIn");
  };
  const handleAddPoints = () => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      console.log("No estás autenticado.");
      alert("Debes estar logueado para agregar puntos.");
      return;
    }
    axios
      .post(
        "/api/users/add-points",
        { points: score },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Puntos añadidos exitosamente", response);
        setuserScore(response.data.new_points);
        handleGoHome();
      })
      .catch((error) => {
        console.error("Error al agregar puntos:", error);
        handleGoHome();
      });
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (loading) {
    return <div>{language[14]}</div>;
  }

  return (
    <div className="trivial-container bg-black text-white container-fluid position-relative w-100 p-5" style={{ minHeight: "93vh" }}>
      {!showQuiz ? (
        <div className="menu-container text-center p-5">
          <img src={HeaderImage} alt="Quiz Intro" className="img-fluid mb-4" style={{ maxHeight: "400px", borderRadius: "100px" }} />
          <h1>{language[0]}</h1>
          <button className="btn btn-primary mt-4" onClick={handleStartQuiz}>{language[1]}</button>

          {!isLoggedIn && (
            <div className="mt-4 text-danger">
              <p>{language[2]}</p>
              <button className="btn btn-warning" onClick={handleGoToLogin}>{language[3]}</button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="question-container text-center">
            <h2>{language[6]}</h2>
            {currentQuestion?.game && (
              <div className="d-flex justify-content-center align-items-center mt-3">
                <img src={gameImages[currentQuestion.game]} alt={currentQuestion.game} className="img-fluid" style={{ maxHeight: "150px" }} />
              </div>
            )}
            <p className="mt-3">{currentQuestion?.question}</p>
          </div>
          <div className="options-container mt-4">
            {["option_a", "option_b", "option_c", "correct_answer"].map((optionKey, index) => {
              const option = currentQuestion?.[optionKey as keyof Question];
              return (
                <button
                  key={index}
                  className={`btn btn-outline-light w-100 mb-3 ${selectedAnswer === option ? (isCorrect ? "btn-success" : "btn-danger") : ""}`}
                  onClick={() => handleAnswerClick(String(option!))}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {selectedAnswer && (
            <div className="feedback-container mt-4 text-center">
              {isCorrect ? <p className="text-success">{language[7]}</p> : <p className="text-danger">{language[9]}</p>}
              {currentQuestionIndex < questions.length - 1 && (
                <button className="btn btn-primary mt-3" onClick={handleNextQuestion}>{language[10]}</button>
              )}
            </div>
          )}

          {currentQuestionIndex === questions.length - 1 && selectedAnswer && (
            <div className="results-container mt-4 text-center">
              <p>{language[11]}</p>
              <p>{language[12]}: <strong>{score}</strong></p>
              <button className="btn btn-success mt-3" onClick={handleAddPoints}>{language[13]}</button>
            </div>
          )}
        </div>
      )}
      {currentRol === "admin" && (
        <div className="admin-form-container mt-5 p-4 border border-light rounded">
          <h3 className="text-center">{language[15]}</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">{language[16]}</label>
              <select 
                className="form-select" 
                value={newQuestion.game} 
                onChange={(e) => setNewQuestion({ ...newQuestion, game: e.target.value })}
              >
                <option value="">{language[17]}</option>
                {Object.keys(gameImages).map((game) => (
                  <option key={game} value={game}>{game}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">{language[18]}</label>
              <input type="text" className="form-control" value={newQuestion.question} onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })} required />
            </div>
            <div className="mb-3">
              <label className="form-label">{language[19]}</label>
              <input type="text" className="form-control" value={newQuestion.option_a} onChange={(e) => setNewQuestion({ ...newQuestion, option_a: e.target.value })} required />
            </div>
            <div className="mb-3">
              <label className="form-label">{language[20]}</label>
              <input type="text" className="form-control" value={newQuestion.option_b} onChange={(e) => setNewQuestion({ ...newQuestion, option_b: e.target.value })} required />
            </div>
            <div className="mb-3">
              <label className="form-label">{language[21]}</label>
              <input type="text" className="form-control" value={newQuestion.option_c} onChange={(e) => setNewQuestion({ ...newQuestion, option_c: e.target.value })} required />
            </div>
            <div className="mb-3">
              <label className="form-label">{language[22]}</label>
              <input type="text" className="form-control" value={newQuestion.correct_answer} onChange={(e) => setNewQuestion({ ...newQuestion, correct_answer: e.target.value })} required />
            </div>
            <button type="submit" className="btn btn-primary">{language[23]}</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Trivial;
