import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./General/Header";
import Slider from "./componentsAccomodation/Slider";
import Footer from "./General/Footer";
import Collapse from './componentsAccomodation/Collapse.js';
import greyStar from '../assets/grey_star.png';
import redStar from '../assets/red_star.png';

export default function Accomodation() {
  const [imageSlider, setImageSlider] = useState([]);
  const [datas, setDatas] = useState([]);
  const [currentAccomodationData, setCurrentAccomodationData] = useState(null);

  const { id } = useParams();
  
  useEffect(() => {
    const port = window.location.port;
    const url = `http://localhost:${port}/data.js?id=${id}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setDatas(data);
        const dataCurrentAccomodation = data.filter(data => data.id === id);
        setCurrentAccomodationData(dataCurrentAccomodation[0]);
      });
  }, [id]);


  useEffect(() => {
    if (currentAccomodationData) {
      setImageSlider(currentAccomodationData.pictures);
    }
  }, [currentAccomodationData]);

  if (!currentAccomodationData) return null;

  const { title, location, tags, host: { name: hostName }, rating, host: { picture: hostPicture }, description, equipments } = currentAccomodationData;

  return (
    <>
      <Header />
      <Slider imageSlider={imageSlider} />
      <main className="accommodation">
        <div className="accommodation_content">
          <div className="accommodation_content_infos">
            <h1>{title}</h1>
            <p>{location}</p>
            <div>
              {tags.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </div>
          </div>
          <div className="accommodation_content_host">
            <div>
              <div className='accommodation_content_host_name'>
                {hostName.split(' ').map((namePart, index) => (
                  <span key={index}>{namePart}</span>
                ))}
              </div>
              {/* Remplacer l'image ci-dessous par l'image de l'hôte */}
              <img src={hostPicture} alt="host of this accommodation" />
            </div>

            <div className="accommodation_content_host_stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
                )
              })}
            </div>
          </div>
        </div>
		<div className="accomodation_collapse">
		<div className="accomodation_collapse_item">
			<Collapse title={'Description'} content={description} />
			</div>
			<div className="accomodation_collapse_item">
			<Collapse title={'Équipements'} content={equipments} />
			</div>
		</div>
      </main>
      <Footer />
    </>
  );
}