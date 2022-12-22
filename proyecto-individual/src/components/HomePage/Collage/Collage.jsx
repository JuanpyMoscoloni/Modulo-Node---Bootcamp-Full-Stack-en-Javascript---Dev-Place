export default function Collage() {
  return (
    <>
    <div className="flex justify-center m-2 mb-5">
       <h1 className=" text-4xl font-extralight">Nuestros</h1> 
       <h1 className=" text-4xl font-medium text-blue-600 ml-2">Productos</h1> 

    </div>
      <div className="flex gap-2">
        <div className="">
          <img
          className="w-auto h-auto"
            src="https://www.kickz.com/on/demandware.static/-/Library-Sites-kickz-content-global/default/images/HOME/KW50/kickz-ibam.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <img
            src="https://www.kickz.com/on/demandware.static/-/Library-Sites-kickz-content-global/default/images/HOME/KW50/kickz-adidas.jpg"
            alt=""
          />
          <img
            src="https://www.kickz.com/on/demandware.static/-/Library-Sites-kickz-content-global/default/images/HOME/KW50/kickz-converse.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
