import { useState } from "react";
export default function Calculator() {
  const [data, setdata] = useState("");
  const setBoxdata = (e) => {
    setdata(data + e.target.innerHTML);
  };
  return (
    <>
      <div className="">
        <div className="container border border-dark mt-5">
          <div className="container border p-3">
            <div className="row">
              <input type="text" className="col text-end p-3" value={data} />
            </div>
            <div className="row border">
              <div className="col border btn m-2" onClick={setBoxdata}>
                7
              </div>
              <div className="col border btn m-2" onClick={setBoxdata}>
                8
              </div>
              <div className="col border btn m-2" onClick={setBoxdata}>
                9
              </div>
              <div className="col border btn m-2" onClick={setBoxdata}>
                /
              </div>
            </div>
            <div className="row border">
              <div className="col border btn m-2" onClick={setBoxdata}>
                4
              </div>
              <div className="col border btn m-2" onClick={setBoxdata}>
                5
              </div>
              <div className="col border btn m-2" onClick={setBoxdata}>
                6
              </div>
              <div className="col border btn m-2" onClick={setBoxdata}>
                *
              </div>
            </div>
            <div className="row border">
              <div className="col border btn m-2" onClick={setBoxdata}>
                1
              </div>
              <div className="col border btn m-2" onClick={setBoxdata}>
                2
              </div>
              <div className="col border btn m-2" onClick={setBoxdata}>
                3
              </div>
              <div className="col border btn m-2" onClick={setBoxdata}>
                -
              </div>
            </div>
            <div className="row border">
              <div className="col border btn m-2" onClick={setBoxdata}>
                0
              </div>
              <div className="col border btn m-2" onClick={setBoxdata}>
                .
              </div>
              <div
                className="col border btn m-2"
                onClick={() => {
                  try {
                    setdata(eval(data));
                  } catch (exception) {
                    setdata("error");
                  }
                }}
              >
                =
              </div>
              <div className="col border btn m-2" onClick={setBoxdata}>
                +
              </div>
            </div>
            <div className="row border">
              <div className="col border btn m-2" onClick={setBoxdata}>
                00
              </div>
              <div className="col border btn m-2" onClick={setBoxdata}>
                %
              </div>
              <div
                className="col border btn m-2"
                onClick={(e) => {
                  let temp = data.toString();
                  temp = temp.slice(0, -1);
                  setdata(temp);
                }}
              >
                back
              </div>
              <div
                className="col border btn m-2"
                onClick={() => {
                  setdata("");
                }}
              >
                clear
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
