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
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Resto Hezelnat. Seluruh hak cipta
          dilindungi.
        </p>
        <div className="grid grid-cols-2 gap-10 my-2">
          <div className="justify-self-end">
            <p className="text-sm font-semibold">Jam Buka:</p>
            <p className="text-sm">
              {waktuBuka.hariKerja}, {waktuBuka.jam}
            </p>
          </div>
          <div className="justify-self-start">
            <p className="text-sm font-semibold">Jam Tutup:</p>
            <p className="text-sm">
              {waktuTutup.hariKerja}, {waktuTutup.jam}
            </p>
          </div>
        </div>
        <p className="text-sm mt-2">
          Desain dan pengembangan oleh Justin Hezelnat
        </p>
      </div>
    </footer>
  );
}
