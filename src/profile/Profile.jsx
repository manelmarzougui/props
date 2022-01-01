import React from "react";
import propTypes from "prop-types";
const Profile = (props) => {
  return (
    <div>
      <h1
        onClick={() => {
          props.handlname(props.personne.fullname);
        }}
      >
        Fullname:{props.personne.fullname}
      </h1>
      <h3>Bio:{props.personne.bio}</h3>
      <h5>Profession:{props.personne.profession}</h5>
      {props.children}
    </div>
  );
};
Profile.defaultProps = {};
Profile.propTypes = {
  fullname: propTypes.string,
  bio: propTypes.string,
  profession: propTypes.string,
  handlname: propTypes.func,
};

export default Profile;
