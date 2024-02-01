import { useEffect, useState } from 'react';

function FallingDots() {
  const [dots, setDots] = useState([]);

  // Function to generate a random number within a range
  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  // Function to create a falling dot
  const createDot = () => {
    return {
      id: Date.now(),
      top: -5, // Start dot above the viewport
      left: `${getRandomNumber(0, window.innerWidth)}px`, // Randomize starting horizontal position
      duration: `${getRandomNumber(5, 10)}s`, // Randomize animation duration
    };
  };

  useEffect(() => {
    const initialDots = Array.from({ length: 50 }, () => createDot());
    setDots(initialDots);

    // const cleanupDots = () => {
    //   setDots((prevDots) =>
    //     prevDots.filter((dot) => !document.getElementById(dot.id))
    //   );
    // };

    // Interval to periodically add new dots
    const interval = setInterval(() => {
      const newDot = createDot();
      setDots((prevDots) => [...prevDots, newDot]);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='top-0 left-0 fixed '>
      {dots.map((dot) => (
        <div
          key={dot.id}
          id={dot.id}
          className='dot'
          style={{
            top: `${dot.top}px`,
            left: dot.left,
            animationDuration: dot.duration,
            bottom: 0,
            zIndex: 10,
          }}
          onAnimationEnd={() => document.getElementById(dot.id).remove()}
        ></div>
      ))}
    </div>
  );
}

export default FallingDots;
