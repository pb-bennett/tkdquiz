import { useState } from 'react';

import Header from './components/Header';
import ActionButtons from './components/ActionButtons';
import Quiz from './components/quiz/Quiz';

import dummyQuiz from './dev-data/quizData';

function App() {
  const [mainState, setMainState] = useState('actionButtons');
  const handleStartQuiz = () => {
    // console.log('StartQuiz');
    setMainState('quizActive');
  };
  const handleExitQuiz = () => {
    setMainState('actionButtons');
  };
  return (
    <div className="flex flex-col min-h-screen items-center justify-start bg-slate-100 sm:max-w-2xl mx-auto ">
      <Header />

      <main className="flex flex-col justify-center items-center border-y border-black p-3 mt-2 gap-2 w-full">
        {mainState === 'actionButtons' ? (
          <ActionButtons handleStartQuiz={handleStartQuiz} />
        ) : mainState === 'quizOptions' ? (
          <div>NEW QUIZ</div>
        ) : mainState === 'quizActive' ? (
          <Quiz
            quizData={dummyQuiz}
            handleExitQuiz={handleExitQuiz}
          />
        ) : null}
      </main>
    </div>
  );
}

export default App;
