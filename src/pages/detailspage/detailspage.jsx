import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopActors from "../../components/detailsActors/detailsActors";
import DetailsHero from "../../components/detailsHero/detailsHero";

// import { connect } from "react-redux";

// const mapStateToProps = (state) => {
//   return {
//     id: state.setId.id,
//   };
// };

const Details = () => {
  const [detailsInfo, setDetailsInfo] = useState("");
  const [creditInfo, setCreditInfo] = useState("");

  let { details } = useParams();
  useEffect(() => {
    Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/${details}?api_key=b7be0351bf3b452a41f66ab64454e67c&language=en-US`
      ),
      fetch(`https://api.themoviedb.org/3/movie/${details}/credits?api_key=b7be0351bf3b452a41f66ab64454e67c&language=en-US
    `),
    ])
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => {
        setDetailsInfo(data[0]);
        setCreditInfo(data[1]);
      });
    // fetch(
    //   `https://api.themoviedb.org/3/movie/${details}?api_key=b7be0351bf3b452a41f66ab64454e67c&language=en-US`
    // )
    //   .then((response) => response.json())
    //   .then((data) => setDetailsInfo(data));
  }, [details]);
  console.log(detailsInfo);

  return (
    <div className="mt-10">
      <DetailsHero movie={detailsInfo} />
      <TopActors peoples={creditInfo} />
    </div>
  );
};

export default Details;
