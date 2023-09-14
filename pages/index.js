import { useRouter } from "next/router";

import Footer from "@/components//footer/footer";

// ini adalah route yang akan pertama kali diakses ketika request ke http://localhost:3000. karena file index yang extensinya js dianggap sebagai sebuah route utama
function Home() {
  const router = useRouter();

  return (
    <div className="bg-[#FFF5EF]">
      <Footer />
    </div>
  );
}
export default Home;
