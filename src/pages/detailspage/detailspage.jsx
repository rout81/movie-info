import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsHero from "../../components/detailsHero/detailsHero";

// import { connect } from "react-redux";

// const mapStateToProps = (state) => {
//   return {
//     id: state.setId.id,
//   };
// };

const Details = () => {
  const [detailsInfo, setDetailsInfo] = useState({});

  let { details } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${details}?api_key=b7be0351bf3b452a41f66ab64454e67c&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setDetailsInfo(data));
  }, [details]);
  console.log(detailsInfo);

  return (
    <div className="mt-10">
      <DetailsHero movie={detailsInfo} />
    </div>
  );
};

export default Details;
