import { useAppState } from "../state";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, Form, Section, SectionRow } from "../Forms";

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

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <h1 className="mb-4">Confirm</h1>
      <Section title="Personal info" url="/">
        <SectionRow>
          <div>First name</div>
          <div>{state.firstName}</div>
        </SectionRow>
        <SectionRow>
          <div>Last name</div>
          <div>{state.lastName}</div>
        </SectionRow>
        <SectionRow>
          <div>Email</div>
          <div>{state.email}</div>
        </SectionRow>
      </Section>
      <Section title="Education" url="/education">
        <SectionRow>
          <div>University</div>
          <div>{state.university}</div>
        </SectionRow>
        <SectionRow>
          <div>Degree</div>
          <div>{state.degree}</div>
        </SectionRow>
      </Section>
      <Section title="About" url="/about">
        <SectionRow>
          <div>About me</div>
          <div>{state.about}</div>
        </SectionRow>
      </Section>
      <div className="clo-md-12 d-flex justify-content-start">
        <Button>Submit</Button>
      </div>
    </Form>
  );
};
