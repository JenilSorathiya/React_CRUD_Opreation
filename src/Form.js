import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Form() {
  const [Faculty, setFaculty] = useState({});
  const params = useParams();
  const naviagate = useNavigate();
  useEffect(() => {
    if (params.id > 0) {
      fetch("https://64e5743c09e64530d17e8e7a.mockapi.io/Faculty/" + params.id)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          return setFaculty(res);
        });
    } else {
      setFaculty({});
    }
  }, [params.id]);

  return (
    <>
      <table>
        <tr>
          <td>Faculty-Name</td>
          <td>:</td>
          <td>
            <input
              type="text"
              value={Faculty.FacultyName}
              onChange={(e) => {
                setFaculty({ ...Faculty, FacultyName: e.target.value });
              }}
            />
          </td>
        </tr>
        <br />
        <tr>
          <td>Faculty-Age</td>
          <td>:</td>
          <td>
            <input
              type="text"
              value={Faculty.FacultyAge}
              onChange={(e) => {
                setFaculty({ ...Faculty, FacultyAge: e.target.value });
              }}
            />
          </td>
        </tr>
        <br />
        <tr>
          <td>Faculty-Image</td>
          <td>:</td>
          <td>
            <input
              type="text"
              value={Faculty.FacultyImage}
              onChange={(e) => {
                setFaculty({ ...Faculty, FacultyImage: e.target.value });
              }}
            />
          </td>
        </tr>
        <button
          onClick={() => {
            if (params.id > 0) {
              fetch(
                "https://64e5743c09e64530d17e8e7a.mockapi.io/Faculty/" +
                  params.id,
                {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(Faculty)
                }
              ).then((res) => {
                naviagate("/faculty");
              });
            } else {
              fetch("https://64e5743c09e64530d17e8e7a.mockapi.io/Faculty", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Faculty)
              }).then((res) => {
                naviagate("/faculty");
              });
            }
          }}
        >
          Save
        </button>
      </table>
    </>
  );
}
