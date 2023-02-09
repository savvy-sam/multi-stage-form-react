import { useAppState } from "../state";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//import { Button, Form, section, div } from "../Forms";

export const Confirm = () => {
  const { userData, setStep } = useAppState();
  const { handleSubmit } = useForm({ defaultValues: userData });

  const submitData = async (data, e) => {
    e.preventDefault();
    try {
      console.log(data)
      await axios.post("http://localhost:5000/users/signup", data, { headers: { 'Content-Type': 'application/json' }})

      //navigate("/");

    } catch (error) {
      console.log(error);
    }
    
  };

  //const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <h1 className="mb-4">Confirm</h1>
      <section>
        <div className="section mb-4">
          <div className="title-row mb-4">
            <h4>Personal Info</h4>
            <button type="button" variant="secondary" onClick={() => setStep(1)}>
            Edit
            </button>
          </div>
          <div className="section-row">
            <div>First name</div>
            <div>{userData.firstName}</div>
          </div>
          <div className="section-row">
            <div>Last name</div>
            <div>{userData.lastName}</div>
          </div>
          <div className="section-row">
            <div>Email</div>
            <div>{userData.email}</div>
          </div>
        </div>
      </section>

      <section>
        <div className="section mb-4">
          <div className="title-row mb-4">
            <h4>Academic Information</h4>
            <button type="button" variant="secondary" onClick={() => setStep(2)}>
            Edit
            </button>
          </div>
          <div className="section-row">
            <div> University </div>
            <div>{userData.university}</div>
          </div>
          <div className="section-row">
            <div> Degree </div>
            <div>{userData.degre}</div>
          </div>
          <div className="section-row">
            <div>Institution Name</div>
            <div>{userData.institutionName}</div>
          </div>
          <div className="section-row">
            <div>Course Name</div>
            <div>{userData.courseName}</div>
          </div>
          <div className="section-row">
            <div>Specialization</div>
            <div>{userData.specialization}</div>
          </div>
          <div className="section-row">
            <div>Award</div>
            <div>{userData.award}</div>
          </div>
          <div className="section-row">
            <div>Grade</div>
            <div>{userData.grade}</div>
          </div>
        </div>
        </section>
        <section>
        <div className="section mb-4">
          <div className="title-row mb-4">
            <h4>About</h4>
            <button type="button" variant="secondary" onClick={() => setStep(3)}>
            Edit
            </button>
          </div>
          <div className="section-row">
            <div>About</div>
            <div>{userData.about}</div>
          </div>
        </div>
      </section>

      <div className="clo-md-12 d-flex justify-content-start">
        <button>Submit</button >
      </div>
    </form>
    );
};


