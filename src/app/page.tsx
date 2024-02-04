import React from "react";

const Home = () => {
  const gridCells = Array.from({ length: 40 * 20 });

  return (
    <div>
      <h1 className='text-white font-serif text-6xl'>Your Edumate</h1>
      {/* 페이지 내용 */}
      <div
        className={`grid grid-cols-40 gap-1`}
        style={{
          width: "1596px",
          height: "796px",
          backgroundColor: "rgba(101, 67, 33, 0.4)",
        }}
      >
        {gridCells.map((_, i) => (
          <div
            key={i}
            className='w-[36px] h-[36px] bg-white bg-opacity-70'
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Home;
