import CalculatorTitle from "./CalculatorTitle";
import OutputScreen from "./OutputScreen";
import Button from "./Button";
import { useState } from "react";

const Calculator = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('0');

    const handleChange = (e) => {
        switch (e.target.value) {
            case '=': {
                setAnswer(eval(question));
                break;
            }
            case 'Clear': {
                setQuestion('');
                break;
            }
            case 'Delete': {
                setQuestion((ques) => ques.slice(0, -1));
                break;
            }
            default: setQuestion((ques) => ques + e.target.value);
        }
    }
    return (
        <div className="text-center w-25 mx-auto">
            <CalculatorTitle title="Calculator Application" />
            <OutputScreen question={question} answer={answer} />
            <div className="row">
                <Button label="Clear" handleChange={handleChange} />
                <Button label="Delete" handleChange={handleChange} />
                <Button label="." handleChange={handleChange} />
                <Button label="/" handleChange={handleChange} />
            </div>
            <div className="row">
                <Button label="7" handleChange={handleChange} />
                <Button label="8" handleChange={handleChange} />
                <Button label="9" handleChange={handleChange} />
                <Button label="*" handleChange={handleChange} />
            </div>
            <div className="row">
                <Button label="4" handleChange={handleChange} />
                <Button label="5" handleChange={handleChange} />
                <Button label="6" handleChange={handleChange} />
                <Button label="-" handleChange={handleChange} />
            </div>
            <div className="row">
                <Button label="1" handleChange={handleChange} />
                <Button label="2" handleChange={handleChange} />
                <Button label="3" handleChange={handleChange} />
                <Button label="+" handleChange={handleChange} />
            </div>
            <div className="row">
                <Button label="0" handleChange={handleChange} />
                <Button label="=" handleChange={handleChange} />
            </div>
        </div>
    )
}
export default Calculator;