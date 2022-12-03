import React from 'react';
import './style.scss';

const AboutComp = () => (
  <section className="about">
    <figure className="about__image">
      <img src="juan-pic.jpg" alt="" className="about__img" />
    </figure>
    <div className="about__caption">
      <h2>Juan Camilo Orjuela</h2>
      <p>Fullstack developer, publisher and designer</p>
      <p>Colombian developer. Founder of <a href="tanukilibros.com">Tanuki Libros</a>, independent publishing house.
        Lover of good design, colours and information. Currently part of Make It Real.
      </p>
      <p>What have I learned?</p>
      <ul>
        <li>React web development</li>
        <li>Sass</li>
        <li>HTTP API requests</li>
      </ul>
      <p><b>Email:</b> orjuela9@gmail.com</p>
      <p><b>GtHub:</b> <a href="https://github.com/NishiNegi">NishiNegi</a></p>
    </div>
  </section>
);

export default AboutComp;
