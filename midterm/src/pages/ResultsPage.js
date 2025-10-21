import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function ResultsPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const { score, total } = location.state || { score: 0, total: 0 };

    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <h1>Results</h1>
            <h2>You scored {score} out of {total}</h2>
            
            <p>{score / total >= 0.5 ? "Great Job! Want to try again?" : "So Close! Want to try again? "}</p>

            <div style={{ marginTop: "2rem" }}>
                <Button onClick={() => navigate("/")}>Play Again</Button>
            </div>
        </div>
    );
}

export default ResultsPage;