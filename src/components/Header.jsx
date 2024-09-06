function Header() {
  return (
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
  );
}

export default Header;
