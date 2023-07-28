
import React from "react";
import { Pictures } from "../utils/images";
import "./SwipperStyle.css";
import { useState } from "react";

function Swipper() {
  const CardData = [
    {
      name: "Georgia Darcy",
      agency: "The agency founder",
      title:
        "with over twenty years of industry experience Darcys insurance products has learned a lot. The only thing we do for sure is what we all know about",
      photo: Pictures.Emiko,
    },
    {
      name: "Toke Many",
      agency: "The agency founder",
      title:
        "with over twenty years of industry experience Darcys insurance products has learned a lot. The only thing we do for sure is what we all know about",
      photo: Pictures.Georgia,
    },
    {
      name: "Darken Jesy Many",
      agency: "The agency founder",
      title:
        "Over twenty years of industry experience Darcys insurance products has learned a lot. The only thing we do for sure is what we all know about",
      photo: Pictures.Emiko,
    },
    {
      name: "Jesy Many",
      agency: "The agency founder",
      title:
        "Twenty years of industry experience Darcys insurance products has learned a lot. The only thing we do for sure is what we all know about",
      photo: Pictures.Emiko,
    },
    {
      name: "Darken Many",
      agency: "The agency founder",
      title:
        "Years of industry experience Darcys insurance products has learned a lot. The only thing we do for sure is what we all know about",
      photo: Pictures.Emiko,
    },
  ];

  const [dataShown, setDataShown] = useState(0);

  return (
    <div style={{ marginTop: "70px", marginLeft: "70px" }}>
      <div className="container1">
        {CardData.map((each, index) => (
          <div key={index}>
            {index === dataShown && (
              <div className="bigbox">
                <div className="content-contain">
                  <div className="image-containerSlide">
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "80px",
                      }}
                      src={each.photo}
                    />
                  </div>
                  <div className="text-containerNew">
                    <h1>{each.name}</h1>
                    <p>{each.agency}</p>
                    <div
                      style={{
                        width: "100%",
                        padding: "5px 0px",
                        background: "var(--navyblue)",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      {each.title}
                    </div>
                    <button
                      style={{
                        width: "300px",
                        height: "40px",
                        backgroundColor:"#84d7e9",
                        borderRadius: "50px",
                        alignItems: 'center',
                        marginTop: "50px",
                      }}
                    >
                      Get a consutant
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="selectSlideContainer">
          {[...Array(CardData.length)].map((each, index) => (
            <div
              key={index}
              className={
                dataShown === index ? "current-indicator" : "indicators"
              }
              onClick={() => setDataShown(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Swipper;
