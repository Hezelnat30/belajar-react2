/* eslint-disable react/prop-types */
function Food(props) {
  const { nama, deskripsi, harga, foto, stok } = props.data;
  return (
    <li
      className={`max-w-xs rounded overflow-hidden shadow-lg${
        !stok ? "filter grayscale" : ""
      }`}
    >
      <img className="w-full h-80 object-cover" src={foto} alt={nama} />
      <div className="px-6 py-4 h-56 justify-between flex flex-col">
        <div className="h-full flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-xl mb-2 uppercase">{nama}</h2>
            <p className="text-gray-700 text-base mb-1">{deskripsi}</p>
          </div>
          <p className="text-gray-700 text-base">
            Harga: Rp {stok ? harga : "-"}
          </p>
        </div>
        <button
          className={`mx-auto block bg-blue-500 text-white font-bold py-2 rounded w-full mt-4 ${
            !stok ? "" : "hover:bg-blue-700"
          } `}
          disabled={!stok}
        >
          {!stok ? "Stok habis" : "Beli Sekarang"}
        </button>
      </div>
    </li>
  );
}

export default Food;
