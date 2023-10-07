

const Banner = () => {
    return (
        <div className=" bg-blend-multiply bg-gray-600  bg-[url('https://rb.gy/4y7zh')] bg-cover">
         
         <div className="flex text-white flex-col  justify-center items-center">
         <img className="mt-20" src="https://i.ibb.co/qg1sCqX/2113513887-removebg-preview.png" alt="" />
         <h3 className="text-2xl uppercase ">welcome to dream</h3>
         <h1 className="text-5xl uppercase font-semibold mt-5">Plan The perfect wedding</h1>
         <p className="text-gray-300 w-[70%] text-center mt-4">
            A wedding is a beautiful union of two hearts, where love, promises, and dreams are shared in the presence of loved ones. It&apos;s a day filled with laughter, tears of joy, and the beginning of a lifelong adventure together. From the exchange of vows to the first dance, weddings are a magical celebration of love.</p>
         </div>
               <div>
               <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff"  d="M0,192L120,213.3C240,235,480,277,720,272C960,267,1200,213,1320,186.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
               </div>
        </div>
    );
};

export default Banner;