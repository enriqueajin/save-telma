import { expensesList } from "../../utils/expensesList";
import { Expense } from "./Expense";

export function Expenses () {
  return (
    <section className='flex items-center justify-center bg-softBlue'>
      <div className='w-10/12 lg: 9/12 flex flex-col gap-y-16'>
        <h2 className='text-4xl text-darkBlue font-bold mt-10'>
          You're contributing to
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-20'>
          {
            expensesList.map((expense) => {
              return (
                <Expense 
                  name={expense.name}
                  description={expense.description}              
                  icon={expense.icon}
                /> 
              )
            })
          }
        </div>
      </div>
    </section>
  )
}