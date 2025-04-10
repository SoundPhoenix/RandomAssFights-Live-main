import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Preloader from "../Components/Preloader";
import CountdownTimer from "../Components/Timer";
import copy from "clipboard-copy";
import "../Assets/CSS/input.css";

function FHS() {
  const targetDate = new Date("2024-07-31 03:05:20");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get("page")) || 1;
    setCurrentPage(page);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [location.search]);

  const videoSources = [
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/3nO4nw.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/4fcgtw.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/6Aln0U.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/cqIvTk.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/FZ3zEZ.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/ifHS5j.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/ioIacB.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/lTvL0D.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/nuxA43.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/Ot8A25.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/vCveMp.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/VNnFxs.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/wg2gJN.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/wHiIbL.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/LoP45F.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/GhMk4.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/Jh92Lp.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/GH8SZ.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/PlO54z.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/5xHj5k.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/Gh532S.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/H53AS1.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/AfE3Q1.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/lOj92E.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/0hCePT.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/sFYa0x.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/vyWQ0p.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/CYYci2e0Wu.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Franklin%20High%20School/an4p0P.mp4",
  ];

  const copyToClipboard = (link) => {
    copy(link);
    alert("Copied to clipboard!");
  };

  const videosPerPage = 8;
  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;

  const paginatedVideos = videoSources.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(videoSources.length / videosPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <CountdownTimer targetDate={targetDate} />
          <div className="border border-transparent rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
              {paginatedVideos.map((source, index) => (
                <div key={index} className="text-center">
                  <div
                    className="relative overflow-hidden bg-black"
                    style={{ width: "200px", height: "400px", margin: "auto" }}
                  >
                    <video
                      className="w-full h-full"
                      src={source}
                      controls
                      style={{ objectFit: "contain" }}
                    ></video>
                  </div>
                  <button
                    onClick={() => copyToClipboard(source)}
                    className="bg-nav-black text-white px-4 py-2 rounded mt-2"
                  >
                    Share Video
                  </button>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="bg-nav-black text-white px-4 py-2 rounded mr-2"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Prev Page
              </button>
              {[
                ...Array(Math.ceil(videoSources.length / videosPerPage)).keys(),
              ].map((pageNumber) => (
                <Link
                  key={pageNumber}
                  to={`${location.pathname}?page=${pageNumber + 1}`}
                  className={
                    currentPage === pageNumber + 1
                      ? "mx-2 font-bold bg-blue-500 text-white px-4 py-2 rounded"
                      : "mx-2 bg-nav-black text-white px-4 py-2 rounded"
                  }
                >
                  {pageNumber + 1}
                </Link>
              ))}
              <button
                className="bg-nav-black text-white px-4 py-2 rounded ml-2"
                onClick={handleNextPage}
                disabled={
                  currentPage === Math.ceil(videoSources.length / videosPerPage)
                }
              >
                Next Page
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FHS;
//Code made by Josh Severo me@joshsevero.dev
