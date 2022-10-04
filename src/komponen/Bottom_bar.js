const Bottom_bar = () => {
  const data = [
    { url: "https://cdn-icons-png.flaticon.com/512/1946/1946436.png" },
    { url: "https://cdn-icons-png.flaticon.com/512/151/151773.png" },
    { url: "https://cdn-icons-png.flaticon.com/512/3601/3601317.png" },
    { url: "https://cdn-icons-png.flaticon.com/512/6594/6594831.png" },
    { url: "https://cdn-icons-png.flaticon.com/512/1077/1077063.png" },
  ];
  return (
    <>
      <div
        style={{
          background: "#FFF",
          width: "100%",
          paddingBottom: "10px",
          position: "fixed",
          bottom: "0px",
          borderTop: "1px solid #dfdfdf",
          paddingTop: "20px",
        }}
      >
        <table
          style={{
            width: "100%",
          }}
        >
          <tr>
            {data.map((list, index) => (
              <td style={{ width: "20%", textAlign: "center" }}>
                <img
                  style={{
                    width: "35%",
                  }}
                  src={list.url}
                />
              </td>
            ))}
          </tr>
        </table>
      </div>
    </>
  );
};

export default Bottom_bar;
