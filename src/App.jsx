import { useState } from 'react'
import './App.css';
import {BsFillPlayFill} from 'react-icons/bs';
import { getQuiz } from './api/api';

function App() {
  const [renderQuests, setRenderQuests] = useState([])
  const [difficulty, setDifficulty] = useState("");
  const [categories, setCategories] = useState("");
  const [indexQuest, setIndexQuest] = useState(0)
  const [questions, setQuestions] = useState(0);
  const [canRender, setCanRender] = useState(false)
  const [types, setTypes] = useState("");

  function verify() {

  }

  const onClickHandler = async () => {
    if(questions === 0) {
      alert("the amount area doesn't has a value more than 1, please check the area.")
    }else {
      const fields = await getQuiz(questions, types, categories, difficulty);
      console.log(fields);
      setRenderQuests(fields.data.results);
      setCanRender(true)
    }
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
          <form action="" method='get'>
            <fieldset>
              <legend>
                <h1>The Ultimate Trivia Quiz</h1>
              </legend>
              <input type="number" name="questions" id="" placeholder='1,2,3,4...' onChange={e => {
                setQuestions(e.target.value)
              }}/>
              <select onClick={e => {
                setCategories(e.target.value)
                }} name="categories" id="categories" placeholder='Select your category'>
                <optgroup>
                  <option disabled>SELECT A CATEGORY</option>
                  <option value=" ">Any Category</option>
                  <option value="9">General Knowleadge</option>
                  <option value="10">Books</option>
                  <option value="11">Films</option>
                  <option value="12">Musics</option>
                  <option value="13">Musical & Theatres</option>
                  <option value="14">Television</option>
                  <option value="15">Video Games</option>
                  <option value="16">Board Games</option>
                  <option value="17">Science & Nature</option>
                  <option value="18">Computers</option>
                  <option value="19">Matematics</option>
                  <option value="20">Mythology</option>
                  <option value="21">Sports</option>
                  <option value="22">Geography</option>
                  <option value="23">History</option>
                  <option value="24">Politics</option>
                  <option value="25">Arts</option>
                  <option value="26">Celebrities</option>
                  <option value="27">Animals</option>
                  <option value="28">Vehicles</option>
                  <option value="29">Comics</option>
                  <option value="30">Gadgets</option>
                  <option value="31">Japanese Anime & Manga</option>
                  <option value="32">Cartoons & Animations</option>
                
                </optgroup>
              </select>

              <select onClick={e => {
                setDifficulty(e.target.value)
              }} name="difficulty" id="difficulty">
                  <option disabled>SELECT A DIFFICULTY</option>
                  <option value=" ">Any Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
              </select>
              <select onClick={e => {
                setTypes(e.target.value)
              }} name="types" id="types">
                  <option disabled>SELECT A TYPE</option>
                  <option value="">Any Type</option>
                  <option value="multiple">Multiple Choice</option>
                  <option value="boolean">True / False</option>
              </select>
              <button type="button" onClick={onClickHandler}>
              <BsFillPlayFill size={20} color={"fff"}/>
              Play
            </button>
            </fieldset>
          </form>
        </section>

        {
          canRender ? (
              <>
              <h1>{renderQuests[indexQuest].question}</h1>
              </>
            ) : false
        }
      </main>
      
    </div>

  )
}

export default App
