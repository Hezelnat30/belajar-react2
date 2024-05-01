import data from "../data.js";
import Food from "./Food.jsx";

export default function Menu() {
  const numData = data;
  return (
    <div className="container mt-10">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl text-center font-bold uppercase">Our Menu</h2>
        <p className="text-center italic font-light">
          Nikmati suasana yang hangat dan ramah sambil menikmati hidangan lezat
          yang menggabungkan bumbu tradisional Indonesia dengan teknik masak
          Eropa yang inovatif.
        </p>
      </div>
      {numData.length > 0 ? (
        <ul className="flex w-full gap-8 mt-8 flex-wrap justify-center">
          {data.map((food) => (
            <li key={food.id}>
              <Food data={food} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex justify-center">
          <p className="text-center font-bold text-2xl bg-sky-300 p-4 my-4">
            Sedang kosong bro, kembali besok!
          </p>
        </div>
      )}
    </div>
  );
}
