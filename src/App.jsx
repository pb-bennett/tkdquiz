import { useState } from 'react';

import ActionButtons from './components/ActionButtons';
function App() {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  return (
    <div className="flex flex-col min-h-screen items-center justify-start bg-slate-100">
      <header className="flex justify-center items-center p-2 gap-3 ">
        <img
          className="w-48"
          src="./itf-logo-2.svg"
          alt="ITF Taekwondo logo"
        />
        <div className="flex flex-col">
          <h1 className="text-4xl">TKDQuiz</h1>
          <h1 className="text-3xl">태권도 퀴즈</h1>
        </div>
      </header>

      <main className="flex flex-col justify-center items-center border-y border-black p-3 mt-2 gap-2 w-full">
        <ActionButtons />
      </main>
    </div>
  );
}

export default App;
