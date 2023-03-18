import React,{useEffect,useState} from 'react';
import Card from './componentsKasa/Card';
import Header from './General/Header';
import Footer from './General/Footer';


function Kasa() {
  const [datas, setDatas] = useState([]); // Récupérer les datas de l'accomodation en fonction de l'id en fecth dans le public

	// Faire un useeffect pour récupérer les datas de l'accomodation en fonction de l'id en fecth dans le public

  useEffect(() => {
    const port = window.location.port;
    const url = `http://localhost:${port}/data.js`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setDatas(data);
      });
  }, []);
  return (

   

    <div>
     <Header/>
      <section className='banner'>
        <p>Chez vous, partout et ailleurs</p>
      </section>
      <main className='home-galleries'>
        {datas.map(data => {
          return (
            <Card
              key={data.id}
              id={data.id}
              title={data.title}
              cover={data.cover}
            />
          )
        })}
      </main>
     <Footer/>
    </div>
  );
}

export default Kasa;