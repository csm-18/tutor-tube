function GitGithub() {
  return (
    <div className="flex min-h-screen">
      <div className="w-[5rem] p-[10rem] bg-slate-500">
        <p>Index and Progress</p>
      </div>
      <div className="p-[2rem] pt-6 flex flex-col flex-1 items-center">
        <h1 className="text-[4.2rem]">Git and Github</h1>
        <p className="text-[1.7rem]">The Essentials</p>
        <iframe
          className="h-[26rem] w-[46rem] mt-[4rem] rounded-md"
          // width="1424"
          // height="801"
          src="https://www.youtube.com/embed/apGV9Kg7ics"
          title="Complete Git and GitHub Tutorial"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default GitGithub;
