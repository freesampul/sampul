import depicto from './depicto.webp'

const Project = ({ id }) => {
    return (
      <div className="display-flex h-screen grid grid-cols-1 md:grid-cols-7 px-4 grid-rows-auto gap-4">
        <div className="flex border-4 border-white rounded-lg w-full h-[500px] md:w-[500px] md:h-[500px] md:col-start-2 md:col-span-1 md:row-start-2">
          {id === 1 && (
            <img src={depicto} alt="Depicto" className="w-full h-full object-cover" />
          )}
        </div>
        <div className="flex rounded-lg w-full h-[500px] md:w-[500px] md:h-[500px] md:col-start-5 md:col-span-1 md:row-start-2">
          <p className="text-white text-center">
            Depicto started out as a hackathon project. After winning the hackathon and building a prototype, we took it to investments and got funded. Depicto is now on the appstore! Check it out at depicto.ai
          </p>
        </div>
      </div>
    );
  };
  
  export default Project;
  