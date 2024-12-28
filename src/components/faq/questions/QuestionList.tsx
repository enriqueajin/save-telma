import { questionList } from "../../../utils/questionList";
import { Question } from "./Question";

export function QuestionList () {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12'>
      {
        questionList.map(({question, answer}) => {
          return (
            <Question question={question} answer={answer} />
          )
        })
      }
    </div>
  )
}