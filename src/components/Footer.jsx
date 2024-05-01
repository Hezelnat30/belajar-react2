export default function Footer() {
  const waktuBuka = {
    hariKerja: "Senin - Jumat",
    jam: "08:00 - 22:00",
  };

  const waktuTutup = {
    hariKerja: "Sabtu - Minggu",
    jam: "09:00 - 20:00",
  };

  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto text-center text-white">
        <div className="grid grid-cols-2 gap-10 my-4">
          <div className="justify-self-end text-2xl">
            <p className="font-bold uppercase">Jam Buka</p>
            <p className="text-base">
              {waktuBuka.hariKerja}, {waktuBuka.jam}
            </p>
          </div>
          <div className="justify-self-start text-2xl">
            <p className="font-bold uppercase">Jam Tutup</p>
            <p className="text-base">
              {waktuTutup.hariKerja}, {waktuTutup.jam}
            </p>
          </div>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Resto Hezelnat. Seluruh hak cipta
          dilindungi.
        </p>
      </div>
    </footer>
  );
}
