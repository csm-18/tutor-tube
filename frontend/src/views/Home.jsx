function Home() {
  return (
    <div className="home">
      <div class="min-h-screen grid place-items-center bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
        <div class="max-w-2xl text-center">
          <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Welcome to{" "}
            <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Tutor Tube
            </span>
          </h1>
          <p class="mt-3 md:mt-4 text-base md:text-lg text-gray-600">
            Your go-to platform for learning and teaching.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
