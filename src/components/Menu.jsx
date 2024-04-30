import Food from "./Food";

export default function Menu() {
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
      <div className="flex w-full flex-wrap">
        <Food
          nama="Nasi Goreng"
          foto="../public/food/nasi-goreng.jpg"
          deskripsi="Nasi goreng yang enak mantap jos dan lezat sekali."
          harga={25000}
          stok={Math.random() >= 0.5 ? true : false}
        />
        <Food
          nama="Sate Ayam"
          foto="../public/food/sate-ayam.jpg"
          deskripsi="Sate Ayam yang enak mantap jos dan lezat sekali."
          harga={17000}
          stok={Math.random() >= 0.5 ? true : false}
        />
        <Food
          nama="Martabak Manis"
          foto="../public/food/martabak-manis.jpg"
          deskripsi="Martabak Manis yang enak mantap jos dan lezat sekali."
          harga={25000}
          stok={Math.random() >= 0.5 ? true : false}
        />
        <Food
          nama="Rendang"
          foto="../public/food/rendang.jpg"
          deskripsi="Rendang daging yang enak mantap jos dan lezat sekali."
          harga={17000}
          stok={Math.random() >= 0.5 ? true : false}
        />
      </div>
    </div>
  );
}
