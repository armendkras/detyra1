import React, { useState } from "react";
import Backdrop from "../../../../UI/Backdrop/Backdrop";
import Close from "../../../../assets/icons/close.svg";
import Visibility from "../../../../assets/icons/visibility.svg";
import { useDispatch } from "react-redux";
import * as actions from "../../../../store/actions/users";

const Sidedrawer = (props) => {
  const dispatch = useDispatch();
  const [name, setname] = useState();
  const [company, setcompany] = useState();
  const [email, setemail] = useState();
  const [country, setcountry] = useState();
  const [phone, setphone] = useState();

  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  //onClick={props.closed}

  const AddSubmit = (event) => {
    event.preventDefault();

    dispatch(actions.add(name, company, email, country, phone));
    console.log(name);
    setname("");
    setcompany("");
    setcountry("");
    setemail("");
    setphone("");
  };
  console.log(name);
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className="sidedrawer-container">
          <div className="sidedrawer-container__header padding">
            <h1>Add new user</h1>
            <img src={Close} onClick={props.closed} />
          </div>
        </div>
        <form
          className="sidedrawer-container__form padding "
          onSubmit={AddSubmit}
        >
          <input
            className="sidedrawer-container__form-input"
            placeholder="Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            className="sidedrawer-container__form-input"
            placeholder="Company"
            value={company}
            onChange={(e) => setcompany(e.target.value)}
          />
          <input
            className="sidedrawer-container__form-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            className="sidedrawer-container__form-input"
            placeholder="Country"
            value={country}
            onChange={(e) => setcountry(e.target.value)}
          />
          <input
            className="sidedrawer-container__form-input"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />

          <div className="sidedrawer-container__footer">
            <div className="sidedrawer-container__footer-left padding">
              <img src={Visibility} />
              <p>Preview</p>
            </div>
            <div className="sidedrawer-container__footer-right padding">
              <button type="submit" onClick={props.closed}>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Sidedrawer;
