export default function Card() {
  return (
    <>
      <div className="border w-52 h-auto p-2">
        <div>
          <img
            className=" hover:transform hover:scale-105 hover:transition duration-100 "
            src="../public/img/nike-ZOOM_FREAK_4-LASER_BLUE_LILAC_LIGHT_MENTA-1.jpg"
          ></img>
        </div>
        <div className="w-full h-auto ">
          <h1 className="font-black">NIKE</h1>
          <h2 className=" font-extralight"> ZOOM FREAK 4</h2>
          <h2 className=" font-medium font">130$</h2>
        </div>
      </div>
    </>
  );
}
