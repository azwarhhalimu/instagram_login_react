import "../komponen/toolbar.css";
const Toolbar = () => {
  return (
    <>
      <div style={{ background: "#fff", padding: "10px", width: "100%", position: "fixed", width: "100%", top: "0px" }}>
        <table
          border={"0px"}
          style={{
            margin: "auto",
            width: "98%",
            marginRight: "10px",
          }}
        >
          <tr>
            <td width={"50%"}>
              <img
                style={{
                  width: "80%",
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
              />
            </td>
            <td style={{ textAlign: "right" }}>
              <button id="btn">
                <img style={{ width: "100%" }} src="https://cdn-icons-png.flaticon.com/512/2040/2040520.png" />
              </button>
              <button id="btn">
                <img style={{ width: "100%" }} src="https://cdn-icons-png.flaticon.com/512/1222/1222392.png" />
              </button>
              <button id="btn">
                <img style={{ width: "100%" }} src="https://cdn-icons-png.flaticon.com/512/4121/4121446.png" />
              </button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Toolbar;
