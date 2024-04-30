/* eslint-disable react/prop-types */
function Food(props) {
  return (
    <div className="p-4 mx-auto">
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img
          className="w-full h-80 object-cover"
          src={props.foto}
          alt={props.nama}
        />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2 uppercase">{props.nama}</h2>
          <p className="text-gray-700 text-base mb-1">{props.deskripsi}</p>
          <p className="text-gray-700 text-base">Harga: Rp {props.harga}</p>
          <button className="mx-auto block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-full mt-4">
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

export default Food;
