import React from 'react'

function Group(){
  return (
    <div className="w-[50%]   h-2/5 ">
      <div className="contiener flex flex-col gap-10">
        <div className="w-[300px] h-[300px]">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9T2Gkd0idnM?si=WQMyQZhmpR5KhtmO"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-[300px] h-[300px]">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9T2Gkd0idnM?si=WQMyQZhmpR5KhtmO"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Group
