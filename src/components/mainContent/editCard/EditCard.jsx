import React from "react";
import classes from "./EditCard.css";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import MyButton from "../../common/MyButton/MyButton";

const EditCard = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Form className={classes.aboutMe} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <b>Full name: </b>
        <Form.Control
          type={"text"}
          placeholder={"Full name"}
          name={"FullName"}
          {...register("FullName", { required: false, maxLength: 40 })}
        />
        {errors?.fullName?.type === "maxLength" && (
          <span>Cannot exceed 20 characters</span>
        )}
      </div>

      <div>
        <b>About me: </b>{" "}
        <Form.Control
          type={"textarea"}
          placeholder={"About me"}
          name={"AboutMe"}
          {...register("AboutMe", { required: false, maxLength: 400 })}
        />
      </div>

      <div>
        <b>Looking for a job: </b>
        <Form.Check
          type={"checkbox"}
          label={"Check me out"}
          name={"LookingForAJob"}
          {...register("LookingForAJob", { required: false })}
        />
      </div>

      <div>
        <b>My professional skills: </b>
        <Form.Control
          type={"textarea"}
          placeholder={"My professional skills"}
          name={"LookingForAJobDescription"}
          {...register("LookingForAJobDescription", {
            required: false,
            maxLength: 400,
          })}
        />
      </div>

      <b>Contacts:</b>
      {/* {Object.keys(profile.contacts).map((key) => {
        return (
          <div key={key}>
            <b>
              {key}:{" "}
              <Form.Control
                type={"text"}
                placeholder={key}
                name={"contacts"}
                {...register("contacts." + key, {
                  required: false,
                  maxLength: 40,
                })}
              />{" "}
            </b>
          </div>
        );
      })} */}

      <div className={classes.btnProfile}>
        <MyButton variant="success" type="submit">
          save
        </MyButton>
      </div>
    </Form>
  );
};
export default EditCard;
