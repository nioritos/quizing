import { useState } from 'react'
import './App.css';

import {BsFillPlayFill} from 'react-icons/bs';

function App() {
  const [count, setCount] = useState(0)

  const onClickHandler = async () => {
    
  }

  return (
    <div className="App">
      <header>
        <h1>QUIZ</h1>

         <a href="https://github.com/nioritos">
          <img src="https://github.com/nioritos.png" alt="nioritos's photo" />
         </a>
      </header>

      <main className="container">
        <section className="content">
          <img src="https://safdarjamal.github.io/quiz-app/static/media/mind.525a3ae0.svg" alt="quiz icon" />

          <form action="" method="get">
            <fieldset>
              <legend>
                <h1>The Ultimate Trivia Quiz</h1>
              </legend>
              <select name="categories" id="categories" placeholder='Select your category'>
                <optgroup>
                  <option value="Any Category">Any Category</option>
                  <option value="Any Category">Any Category</option>
                  <option value="Any Category">Any Category</option>
                </optgroup>
              </select>
            </fieldset>
            <button type="submit" onClick={onClickHandler}>
              <BsFillPlayFill size={20} color={"fff"}/>
              Play
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default App
