const Project = () => {
    return (
        <div className="display-flex h-screen grid grid-cols-1 md:grid-cols-7 px-4 grid-rows-auto gap-4">
        <div className="flex border-4 border-white rounded-lg w-full h-[500px] md:w-[500px] md:h-[500px] md:col-start-2 md:col-span-1 md:row-start-2">
          <p className="text-white text-center">This is a responsive box</p>
        </div>
        <div className="flex rounded-lg w-full h-[500px] md:w-[500px] md:h-[500px] md:col-start-5 md:col-span-1 md:row-start-2">
          <p className="text-white text-center">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            odio et odio. Donec nec odio et odio. Donec nec odio et odio. Donec
            nec odio et odio. Donec nec odio et odio. Donec nec odio et odio.
            Donec nec odio et odio. Donec nec odio et odio. Donec nec odio et
            odio. Donec nec odio et odio. Donec nec odio et odio. Donec nec odio
            et odio. Donec nec odio et odio. Donec nec odio et
          </p>
        </div>
      </div>
    );
    }



    export default Project;
