import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import './TinderCards.css';

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: "Steve Jobs",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg/411px-Steve_Jobs_Headshot_2010-CROP.jpg"
        },
        {
            name: "Mark Zuckerberg",
            url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401"
        },
        {
            name:"Jeff Bezos",
            url:"https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1597932630&w=1400&h=950"
        },
        {
            name:"Tim Cook",
            url:"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU1MzM0OTc5MDg3/tim-cook-20967297-1-402.jpg"
        },
        {
            name:"Elon Musk",
            url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg"
        },
        {
            name:"Sonny Sangha",
            url:"https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
        }
    ]);

    return (
        <div>
            <div className="tinderCards_cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="Swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>

                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>



    );

}

export default TinderCards