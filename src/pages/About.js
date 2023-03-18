import { useEffect, useState } from "react";
import Header from "./General/Header";
import Footer from "./General/Footer";
import Collapse from './componentsAccomodation/Collapse.js';

export default function About() {
  const [aboutDatas, setAboutDatas] = useState([]);

  useEffect(() => {
    const port = window.location.port;
    const url = `http://localhost:${port}/about.js`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setAboutDatas(data);
      });
  }, []);

  return (
    <div>
      <Header />
      <section className='banner-image'>
      </section>
      <main className='about_main'>
        {aboutDatas.map(data => {
          return (
            <div key={data.id} className="about_main_collapse">
              <Collapse style={{ margin: '30px 0' }} title={data.title} content={data.content} />
            </div>
          )
        })}
      </main>
      <Footer />
    </div>
  );
}