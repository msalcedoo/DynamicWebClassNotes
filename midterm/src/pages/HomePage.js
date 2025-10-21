import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function HomePage() {
    const [name, setName] = useState("");
    const navigate = useNavigate();
  
    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleStart = () => {
        navigate("/quiz");
    };

    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
        
        <h1>Trivial Time</h1>
        <p>Enter your name to get started:</p>
       
        <input
            placeholder = "Enter name..."
            onChange = {handleChange}
        />
        <Button onClick={handleStart}>Start Game</Button>
        </div>
    );
}

export default HomePage;