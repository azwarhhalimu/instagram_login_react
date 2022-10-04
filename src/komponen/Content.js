const Content = () => {
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
      {data.map((list, index) => (
        <div>
          <table width={"100%"}>
            <tr>
              <td
                style={{
                  width: "90%",
                }}
              >
                <div style={{ fontWeight: "bold", padding: "10px" }}>
                  <table>
                    <tr>
                      <td>
                        <img
                          src={list.url}
                          style={{
                            width: "40px",
                            borderRadius: "50%",
                          }}
                        />
                      </td>
                      <td width={"10px"}></td>
                      <td>{list.name}</td>
                    </tr>
                  </table>
                </div>
              </td>
              <td>
                <img style={{ width: "20px" }} src="https://cdn-icons-png.flaticon.com/512/2089/2089792.png" />
              </td>
            </tr>
          </table>
          <div>
            <img
              style={{
                width: "100%",
              }}
              src={list.url}
            />
          </div>
          <div style={{ padding: "10px" }}>
            <table width={"100%"}>
              <tr>
                <td>
                  <button id="btn">
                    <img style={{ width: "25px" }} src="https://cdn-icons-png.flaticon.com/512/1222/1222392.png" />
                  </button>
                  <button id="btn">
                    <img style={{ width: "25px" }} src="https://cdn-icons-png.flaticon.com/512/1370/1370907.png" />
                  </button>
                  <button id="btn">
                    <img style={{ width: "25px" }} src="https://cdn-icons-png.flaticon.com/512/4121/4121446.png" />
                  </button>
                </td>
                <td style={{ textAlign: "right" }}>
                  <button id="btn">
                    <img style={{ width: "25px" }} src="https://cdn-icons-png.flaticon.com/512/709/709631.png" />
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      ))}
    </>
  );
};

export default Content;
