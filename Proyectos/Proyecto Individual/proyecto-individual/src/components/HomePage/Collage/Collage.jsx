import { Link } from "react-router-dom";
export default function Collage() {
  return (
    <>
      <div className="flex flex-row justify-center m-2 mb-5 ">
    
        <h1 className=" text-3xl font-black text-green-800 m-3"> <a class="">PRODUCTS</a></h1>
      </div>
      <div className="flex flex-row gap-4 m-3 max-lg:flex-col">
        <div className="flex justify-center items-center">
          <h1 className="z-20 absolute text-2xl font-medium text-white shadow-outline">
            ADIDAS
          </h1>
          <img
            className="w-auto h-auto hover:blur-sm hover: transition delay-100"
            src="https://www.kickz.com/on/demandware.static/-/Library-Sites-kickz-content-global/default/images/HOME/KW50/kickz-ibam.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <Link rel="stylesheet" to="/sneakers">
          <div className="flex justify-center items-center">
            <h1 className="z-20 absolute text-2xl font-medium text-white shadow-outline ">
              SNEAKERS
            </h1>
            <img
              className="w-auto h-auto hover:blur-sm hover: transition delay-100"
              src="https://www.kickz.com/on/demandware.static/-/Library-Sites-kickz-content-global/default/images/HOME/KW50/kickz-adidas.jpg"
              alt=""
            />
              
            </div>
            </Link>
            <Link rel="stylesheet" to="/sneakers">
            <div className="flex justify-center items-center">
            <h1 className="z-20 absolute text-2xl font-medium text-white shadow-outline ">
              SNEAKERS
            </h1>
            <img
              className="w-auto h-auto hover:blur-sm hover: transition delay-100"
              src="https://www.kickz.com/on/demandware.static/-/Library-Sites-kickz-content-global/default/images/HOME/KW50/kickz-converse.jpg"
              alt=""
            />
            </div>
            </Link>
          </div>
        </div>
    </>
  );
}
