import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Impor gaya Carousel
import { Carousel } from "react-responsive-carousel";
import styles from "./style.module.css";

const ImageSlider = () => {
  return (
    <Carousel
      className="flex flex-shrink "
      autoPlay={true} // Untuk mengaktifkan putaran otomatis
      showArrows={false} // Sembunyikan tombol panah
      showStatus={false} // Sembunyikan status slide
      showThumbs={false} // Sembunyikan thumbnail
      infiniteLoop={true} // Mengaktifkan perulangan tak terbatas
      interval={2000} // Interval slide dalam milidetik (misalnya, 5 detik)
      transitionTime={500} // Waktu transisi antar slide (0 untuk transform tanpa animasi)
    >
      <div className="w-w-slide h-h-slide">
        <div>
          <img src="/images/image1.png" alt="Image 1" />
        </div>
        <div>
          <img src="/images/image2.jpg" alt="Image 2" className={styles.img} />
        </div>
        <div>
          <img src="/images/image3.jpg" alt="Image 3" className={styles.img} />
        </div>
        {/* Tambahkan slide gambar lainnya di sini */}
      </div>
    </Carousel>
  );
};

export default ImageSlider;
