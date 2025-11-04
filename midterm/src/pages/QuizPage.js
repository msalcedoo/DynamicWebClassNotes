import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import QuestionCard from "../components/QuestionCard";

function QuizPage() {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPoints, setCurrentPoints] = useState(0);
    // flag used as API data is being retrieved
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // function to make sure HTML entities are displayed normally
    
    
    // API fetching takes times, use async/await
    async function getTriviaData() {
        setLoading(true);
        try {
            // fetch a batch of 10 questions from Trivia API
            const questions = await axios.get(
                "https://opentdb.com/api.php?amount=10&type=multiple"
            );
            setQuestions(questions.data.results);
        //error handling
        } catch (err) {
            console.error("Trivia API error", err);
        }
        setLoading(false);
    }

    // run only on the first render
    useEffect(() => {
        getTriviaData();
    }, []);

    // API request time handling
    if (loading) return <p>Loading trivia questions...</p>;


    // grabs the question based on index + all answers and randomizes their order
    const currentQ = questions[currentIndex];
    const allAnswers = [...currentQ.incorrect_answers, currentQ.correct_answer].sort(
        () => Math.random() - 0.5
    );

    // evaluate answer and adjust points
    function handleAnswer(selectedAnswer) {
        let updatedPoints = currentPoints;

        if (selectedAnswer === currentQ.correct_answer) {
            updatedPoints += 1;
            setCurrentPoints(updatedPoints);
        }

        // check to see if questions are over
        if (currentIndex < questions.length - 1) {
            setCurrentIndex((prev) => prev + 1);
            } else {
                navigate("/results", {
                state: {
                    score: updatedPoints,
                    total: questions.length,
                },
            });
            }
    }

    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <h1>Trivia Quiz</h1>
            {/* hand off to QuestionCard component */}
            <QuestionCard
                question={currentQ.question}
                answers={allAnswers}
                onSelectAnswer={handleAnswer}
            />
        </div>
    );
}

export default QuizPage;