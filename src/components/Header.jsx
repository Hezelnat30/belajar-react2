export default function Header() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl text-white font-extrabold">
          Selamat Datang di{" "}
          <span className="text-transparent bg-gradient-to-r from-yellow-200 to-orange-300 bg-clip-text">
            Resto Hezelnat
          </span>
        </h1>

        <p className="text-lg text-gray-200 mt-4">
          Jelajahi pengalaman kuliner terbaik di kota
        </p>
        {/* <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 mt-6 rounded-full transition duration-300 ease-in-out">
          Lihat Menu
        </button> */}
      </div>
    </div>
  );
}
