import { useEffect, useState } from 'react';

function Hello() {
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubtitle(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-1/3 w-full mt-[80px] mb-[60px]">
      <div className="w-full grid grid-cols-7">
        <h1 className="col-start-3 text-4xl md:text-6xl font-bold">Hello</h1>
      </div>
      <div className="h-8 md:h-10 w-full grid grid-cols-7">
        {showSubtitle && (
          <p className="col-start-3 text-xl md:text-2xl mt-2 opacity-0 animate-fadeIn mb-[60px]">Welcome</p>
        )}
      </div>
    </div>
  );
}

export default Hello;
