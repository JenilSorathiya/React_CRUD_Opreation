import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Faculty = () => {
  const [Faculty, setFaculty] = useState([]);
  useEffect(() => {
    fetch("https://64e5743c09e64530d17e8e7a.mockapi.io/Faculty")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return setFaculty(res);
      });
  });
  const FormatedFaculty = Faculty.map((Fac) => {
    return (
      <>
        <div class="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={Fac.FacultyImage}
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">{Fac.FacultyName}</h5>
            <p class="card-text">{Fac.FacultyAge}</p>
            <Link to={"/faculty/" + Fac.id} class="btn btn-primary">
              View
            </Link>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="container">
        <div className="row">{FormatedFaculty}</div>
      </div>
      <Link to="/Form/0">Insert</Link>
    </>
  );
};
export default Faculty;
