import { useAppState } from "../state";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//import { Button, Form, section, div } from "../Forms";

export const Confirm = () => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = async (data, e) => {
    e.preventDefault();
    try {
      console.log(data)
      await axios.post("http://localhost:5000/users/signup", data, { headers: { 'Content-Type': 'application/json' }})

      navigate("/");
    } catch (error) {
      console.log(error);
    }
    
  };

  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <h1 className="mb-4">Confirm</h1>
      <section>
        <div className="section mb-4">
          <div className="title-row mb-4">
            <h4>Personal Info</h4>
            <button type="button" variant="secondary" onClick={() => navigate("/")}>
            Edit
            </button>
          </div>
          <div className="section-row">
            <div>First name</div>
            <div>{state.firstName}</div>
          </div>
          <div className="section-row">
            <div>Last name</div>
            <div>{state.lastName}</div>
          </div>
          <div className="section-row">
            <div>Email</div>
            <div>{state.email}</div>
          </div>
        </div>
      </section>

      <section>
        <div className="section mb-4">
          <div className="title-row mb-4">
            <h4>Academic Information</h4>
            <button type="button" variant="secondary" onClick={() => navigate("/education")}>
            Edit
            </button>
          </div>
          <div className="section-row">
            <div> University </div>
            <div>{state.university}</div>
          </div>
          <div className="section-row">
            <div> Degree </div>
            <div>{state.degre}</div>
          </div>
          <div className="section-row">
            <div>Institution Name</div>
            <div>{state.institutionName}</div>
          </div>
          <div className="section-row">
            <div>Course Name</div>
            <div>{state.courseName}</div>
          </div>
          <div className="section-row">
            <div>Specialization</div>
            <div>{state.specialization}</div>
          </div>
          <div className="section-row">
            <div>Award</div>
            <div>{state.award}</div>
          </div>
          <div className="section-row">
            <div>Grade</div>
            <div>{state.grade}</div>
          </div>
        </div>
        </section>
        <section>
        <div className="section mb-4">
          <div className="title-row mb-4">
            <h4>About</h4>
            <button type="button" variant="secondary" onClick={() => navigate("/about")}>
            Edit
            </button>
          </div>
          <div className="section-row">
            <div>About</div>
            <div>{state.about}</div>
          </div>
        </div>
      </section>

      <div className="clo-md-12 d-flex justify-content-start">
        <button>Submit</button >
      </div>
    </form>
    );
};


