import QuestionComp from "./QuestionComp";
import AnswerComp from "./AnswerComp";
const OutputScreen = ({ question, answer }) => {
    return (
        <div className="bg-light mt-5 row" style={{ height: "20vh", padding: "2.2rem" }}>
            <QuestionComp question={question} />
            <AnswerComp answer={answer} />
        </div>
    )
}
export default OutputScreen;