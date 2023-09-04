import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const FacultyDetail = () => {
  const [Faculty, setFaculty] = useState({});
  const params = useParams();
  const naviagate = useNavigate();
  useEffect(() => {
    fetch("https://64e5743c09e64530d17e8e7a.mockapi.io/Faculty/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return setFaculty(res);
      });
  });
  // const FormatedFaculty = Faculty.map((Fac) => {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={Faculty.FacultyImage}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{Faculty.FacultyName}</h5>
          <p class="card-text">{Faculty.FacultyAge}</p>
          {/* <Link to="/" class="btn btn-primary"> */}
          {/* {Fac.id}abc */}
          {/* </Link> */}
        </div>
        <button
          onClick={() => {
            fetch(
              "https://64e5743c09e64530d17e8e7a.mockapi.io/Faculty/" +
                params.id,
              { method: "DELETE" }
            ).then((res) => {
              naviagate("/faculty");
            });
          }}
        >
          Delete
        </button>
        <Link className="btn btn-grey" to={"/Form/" + params.id}>
          Update
        </Link>
        <button
          onClick={() => {
            naviagate("/faculty");
          }}
        >
          BACK
        </button>
      </div>
    </>
  );
  // });
  // return (
  //   <>
  //     <div className="container">
  //       <div className="row">{FormatedFaculty}</div>
  //     </div>
  //   </>
  // );
};
export default FacultyDetail;
