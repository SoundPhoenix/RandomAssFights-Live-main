import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Preloader from "../Components/Preloader";
import CountdownTimer from "../Components/Timer";
import copy from "clipboard-copy";
import "../Assets/CSS/input.css";

function Random() {
  const targetDate = new Date("2024-02-29 03:44:20");
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
    "https://cdn.randomassfights.live/Static/Videos/Random/VxALlH.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/XOfKzH.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/DjfgTz.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/GJh5DX.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/Ufdzj4.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/dWrE2P.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/bVh71w.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/aYq5Ta.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/5FD4Q8.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/UJ9aZS.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/LKOAs5.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/Gf4HaZ.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/VGf23Z.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/LK5AZ.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/HyF4Rz.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/LkO6Hz.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/SBX3A15.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/F9ex00.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/Vyva9B.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/46kmDx.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/ga3Qhq.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/ZAGx1h.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/s8zCVA.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/Y1x6bv.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/XxfZzH.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/1MqnAe.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/3mEVZg.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/6uNpx0.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/7zWBHv.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/9t8EGT.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/E7zhJw.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/Fd9dpW.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/Tf9dRR.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/f2fdJM.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/jbKxq1.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/nTVzb6.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/qC4yvD.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/HKVRN.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/RYALrB.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/XSZSik.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/gBWNCC.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/JZFCtr.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/9BtAvE.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/6kUsuZ.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/2z9XYA.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/5grB7t.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/p9pkYW.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/4rAmfD.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/nJgd9T.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/t53zQN.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/w1N4Jq.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/2f6ECU.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/3EQgc2.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/5Cmedn.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/68zUat.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/C1vNad.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/dTnqx6.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/FUV2gD.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/k0BkwK.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/M0qBmC.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/mtrQK8.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/Nxm0H4.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/rv8TPe.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/RyqzX6.mp4",
    "https://cdn.randomassfights.live/Static/Videos/Random/ZqxV93.mp4",
    
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

export default Random;
//Code made by Josh Severo me@joshsevero.dev