import Button from "./Button";
import "./QuestionCard.css"

//replace HTMI entities with normal text
function cleanText(text) {
    if (!text) return "";
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
}

function QuestionCard({ question, answers, onSelectAnswer }) {
    return (
        <div className="question-card">
            <h2 className="question-text">{cleanText(question)}</h2>
            <div className="answers-container">
                {answers.map((ans, i) => (
                    <Button key={i} onClick={() => onSelectAnswer(ans)} className="answer-btn">
                        {cleanText(ans)}
                    </Button>
                ))}
            </div>
        </div>
  );
}

export default QuestionCard;