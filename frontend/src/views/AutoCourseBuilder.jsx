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
    return (data.items || []).map(it => ({
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
    const links = course.module.videos.map(v => v.url).join("\n");
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
    <div className="min-h-screen bg-gray-50 dark:bg-black flex flex-col justify-between">
      <Nav theme={theme} setTheme={setTheme} />

      {/* Header */}
      <header className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 flex items-center p-3">
        <h1 className="font-bold text-lg mr-auto">
          AutoCourse Builder · YouTube
        </h1>
        <input
          className="border rounded p-2 ml-4 w-60 text-black"
          placeholder="Paste your YouTube Data API key"
          value={apiKey}
          onChange={e => setApiKey(e.target.value)}
        />
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto p-5 flex-1 w-full">
        {/* Controls */}
        <div className="grid sm:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm mb-1">Topic</label>
            <input
              className="border rounded p-2 w-full text-black"
              placeholder="e.g. React hooks, Python DS, Linear Algebra"
              value={topic}
              onChange={e => setTopic(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Level</label>
            <select
              className="border rounded p-2 w-full text-black"
              value={level}
              onChange={e => setLevel(e.target.value)}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Language bias</label>
            <input
              className="border rounded p-2 w-full text-black"
              value={language}
              onChange={e => setLanguage(e.target.value)}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-5">
          <button
            className="bg-black text-white px-4 py-2 rounded"
            onClick={generate}
          >
            Generate Course
          </button>
          <button
            className="bg-gray-200 text-black px-4 py-2 rounded"
            onClick={copyLinks}
          >
            Copy all links
          </button>
          <button
            className="bg-gray-200 text-black px-4 py-2 rounded"
            onClick={downloadJSON}
          >
            Download JSON
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-3">
            {error}
          </div>
        )}

        {/* Course */}
        {course && (
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Course: {course.topic} ({course.level})
            </h2>
            <div className="bg-white dark:bg-gray-800 border rounded p-4">
              <h3 className="text-lg font-semibold">{course.module.stage}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                <b>Queries:</b> {course.module.queries.join(", ")}
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {course.module.videos.map(v => (
                  <a
                    key={v.id}
                    href={v.url}
                    target="_blank"
                    rel="noreferrer"
                    className="border rounded overflow-hidden bg-white dark:bg-gray-700 hover:shadow"
                  >
                    <img
                      src={v.thumbnail}
                      alt={v.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-2 text-sm">
                      <div>{v.title}</div>
                      <div className="text-xs text-gray-500">{v.channel}</div>
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
