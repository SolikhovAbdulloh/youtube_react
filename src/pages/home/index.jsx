import React from "react";
function Home() {
  return (
    <div>
      <div className="flex justify-center items-center mt-30px">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CjVBN45qBBw?si=J_wz5UYpvfMKnUQL"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
