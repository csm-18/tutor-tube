import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function AutoCourseBuilder({ theme, setTheme }) {
  const [apiKey, setApiKey] = useState("");
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState("beginner");
  const [language, setLanguage] = useState("en");
  const [error, setError] = useState("");
  const [course, setCourse] = useState(null);

  async function youtubeSearch(apiKey, q, lang, maxResults = 5) {
    const url = new URL("https://www.googleapis.com/youtube/v3/search");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("type", "video");
    url.searchParams.set("maxResults", maxResults);
    url.searchParams.set("q", q);
    url.searchParams.set("key", apiKey);
    url.searchParams.set("videoDuration", "long");
    if (lang) url.searchParams.set("relevanceLanguage", lang);

    const r = await fetch(url);
    const data = await r.json();
    return (data.items || []).map((it) => ({
      id: it.id.videoId,
      title: it.snippet.title,
      channel: it.snippet.channelTitle,
      thumbnail: it.snippet.thumbnails.medium.url,
      url: "https://www.youtube.com/watch?v=" + it.id.videoId,
    }));
  }

  async function generate() {
    setError("");
    setCourse(null);

    if (!apiKey) {
      setError("Please enter your YouTube Data API key.");
      return;
    }
    if (!topic) {
      setError("Please enter a topic.");
      return;
    }

    const queries = [
      `${topic} tutorial ${level}`,
      `${topic} basics`,
      `${topic} project`,
    ];

    let videos = [];
    for (const q of queries) {
      const found = await youtubeSearch(apiKey, q, language, 6);
      videos = videos.concat(found);
    }

    const unique = [];
    const seen = new Set();
    for (const v of videos) {
      if (!seen.has(v.id)) {
        seen.add(v.id);
        unique.push(v);
      }
    }

    setCourse({
      topic,
      level,
      language,
      module: {
        stage: "Module 1",
        queries,
        videos: unique.slice(0, 6),
      },
    });
  }

  function copyLinks() {
    if (!course) return;
    const links = course.module.videos.map((v) => v.url).join("\n");
    navigator.clipboard.writeText(links);
    alert("Copied " + links.split("\n").length + " links!");
  }

  function downloadJSON() {
    if (!course) return;
    const blob = new Blob([JSON.stringify(course, null, 2)], {
      type: "application/json",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = course.topic.replace(/\s+/g, "_") + "_course.json";
    a.click();
  }

  return (
    <div className="min-h-screen bg-indigo-50 dark:bg-gradient-to-b dark:from-indigo-950 dark:via-neutral-950 dark:to-black flex flex-col justify-between">
      <Nav theme={theme} setTheme={setTheme} />

      {/* Header */}
      <header className="sticky top-0 bg-white dark:bg-neutral-950 border-b border-gray-300 dark:border-gray-800 flex items-center p-3">
        <h1 className="font-bold text-2xl mr-auto text-indigo-600 dark:text-indigo-400">
          AutoCourse Builder
        </h1>
        <input
          className="border rounded p-2 ml-4 w-72 text-black dark:text-white dark:bg-neutral-900 dark:border-gray-700"
          placeholder="Paste your YouTube Data API key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto p-8 flex-1 w-full">
        {/* Controls */}
        <div className="grid sm:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
              Topic
            </label>
            <input
              className="border rounded p-2 w-full text-black dark:text-white dark:bg-neutral-900 dark:border-gray-700"
              placeholder="e.g. React hooks, Python DS, Linear Algebra"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
              Level
            </label>
            <select
              className="border rounded p-2 w-full text-black dark:text-white dark:bg-neutral-900 dark:border-gray-700"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
              Language bias
            </label>
            <input
              className="border rounded p-2 w-full text-black dark:text-white dark:bg-neutral-900 dark:border-gray-700"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-8">
          <button
            className="px-5 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md dark:bg-indigo-500 dark:hover:bg-indigo-400"
            onClick={generate}
          >
            Generate Course
          </button>
          <button
            className="px-5 py-2 rounded bg-gray-200 hover:bg-gray-300 text-black dark:bg-neutral-800 dark:text-gray-200 dark:hover:bg-neutral-700"
            onClick={copyLinks}
          >
            Copy all links
          </button>
          <button
            className="px-5 py-2 rounded bg-gray-200 hover:bg-gray-300 text-black dark:bg-neutral-800 dark:text-gray-200 dark:hover:bg-neutral-700"
            onClick={downloadJSON}
          >
            Download JSON
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200 p-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Course */}
        {course && (
          <div>
            <h2 className="text-3xl font-bold mb-5 text-indigo-600 dark:text-indigo-400">
              Course: {course.topic} ({course.level})
            </h2>
            <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow">
              <h3 className="text-xl font-semibold text-indigo-500 dark:text-indigo-300 mb-2">
                {course.module.stage}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <b>Queries:</b> {course.module.queries.join(", ")}
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {course.module.videos.map((v) => (
                  <a
                    key={v.id}
                    href={v.url}
                    target="_blank"
                    rel="noreferrer"
                    className="border rounded-lg overflow-hidden bg-white dark:bg-neutral-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition transform hover:-translate-y-1"
                  >
                    <img
                      src={v.thumbnail}
                      alt={v.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-3 text-sm">
                      <div className="font-medium text-gray-800 dark:text-white">
                        {v.title}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {v.channel}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default AutoCourseBuilder;
