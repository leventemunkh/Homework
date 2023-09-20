import React from "react";
import styles from "./Cards.module.css";

const Cards = ({ results }) => {
  let display;
  console.log(results);

  if (results) {
    display = results.map((x) => {
      let { id, name, image, species, status } = x;
      return (
        <div key={id} className="col-3 mb-5 position-relative">
          <div className={styles.cards}>
            <img src={image} alt="" className={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-5 fw-bolder mb-3">{name}</div>
              <div className="">
                <div className="fs-6 fw-bold">Species</div>
                <div className="fst-italic">{species}</div>
              </div>
              <div className="fs-6 fw-bold">Status</div>
              {(() => {
                let badgeClass;
                switch (status) {
                  case "Dead":
                    badgeClass = "text-bg-danger";
                    break;
                  case "Alive":
                    badgeClass = "text-bg-success";
                    break;
                  default:
                    badgeClass = "text-bg-warning";
                }

                return (
                  <div
                    className={`${styles.badge} badge rounded-pill  ${badgeClass}`}
                  >
                    {status}
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "No matching characters";
  }

  return <>{display}</>;
};

export default Cards;
