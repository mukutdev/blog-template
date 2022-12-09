import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { category_id, category_name } = category;

  // default category image added Here
  // https://i.ibb.co/sms65cJ/pexels-gianluca-grisenti-4215102.jpg

  return (
    <div className="col-md-3">
      <div className="cs-img"
        style={{
          backgroundImage: `url(https://i.ibb.co/sms65cJ/pexels-gianluca-grisenti-4215102.jpg`,
        }}
      >
       <div className="position-absolute bottom-0 end-0 d-block w-100 bg-danger text-center py-2">
       <Link className="text-white text-decoration-none fw-semibold fs-5" to={`/category/${category_id}`}>{category_name}</Link>
       </div>
      </div>
    </div>
  );
};

export default CategoryCard;
