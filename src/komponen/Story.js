import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "../komponen/toolbar.css";
import "swiper/css/pagination";

const Story = () => {
  const data = [
    { url: "https://st2.depositphotos.com/1005818/5700/i/600/depositphotos_57004203-stock-photo-asian-beauty-face.jpg", name: "Azwar" },
    { url: "https://st2.depositphotos.com/1005818/5700/i/600/depositphotos_57004203-stock-photo-asian-beauty-face.jpg", name: "Yusuf" },
    { url: "https://ath2.unileverservices.com/wp-content/uploads/sites/10/2022/04/28141035/clean-hijab-diantyy.a-1024x1024.jpg", name: "Okos" },
    { url: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//103/MTA-31974754/no-brand_no-brand_full06.jpg", name: "Subhan" },
    { url: "https://lzd-img-global.slatic.net/g/p/ce9b5b563687aa8727c7eb049295b614.jpg_720x720q80.jpg_.webp", name: "Desi" },
    { url: "https://cf.shopee.co.id/file/85a9216ed0df22e91d05e0b42e23e494", name: "Fazril" },
    { url: "https://s4.bukalapak.com/img/9039561178/large/0_1967da12_e0f7_45de_931f_dd81c4701c16_720_728.jpg", name: "Yusdi" },
  ];
  return (
    <>
      <div style={{ height: "70px" }} />
      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {data.map((list, index) => (
          <SwiperSlide style={{ width: "15%", padding: "0px" }}>
            <img
              style={{
                padding: "2px",
                width: "100%",
                border: "1px solid #774BBD",
                borderRadius: "50%",
              }}
              src={list.url}
            />
            <div style={{ textAlign: "center", opacity: "0.6" }}>{list.name}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{ background: "#EBEBEB", marginTop: "15px", height: "1px" }}></div>
    </>
  );
};

export default Story;
