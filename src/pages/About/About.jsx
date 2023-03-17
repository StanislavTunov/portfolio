import { SocialIcon } from "react-social-icons";
const About = () => {
  return (
    <>
      <h2>Мартин Петров</h2>
      <p
        style={{
          width: "70%",
          maxWidth: "1080px",
          fontSize: "22px",
          textAlign: "justify",
          lineHeight: "40px",
          margin: "50px auto",
        }}
      >
        Мартин Петров е български футболист, роден на 15 януари 1979 г. във
        Враца. В близо 20-годишната си професионална кариера играе като крило и
        нападател за Ботев (Враца), ЦСКА (София), швейцарския Сервет, немския
        Волфсбург, испанския Атлетико Мадрид и английските Манчестър Сити и
        Болтън. Има 90 мача с 19 гола за националния отбор на България в периода
        от 1999 г. до 2011 г. Участник на Европейското първенство през 2004 г. в
        Португалия.
      </p>
      <b>
        <SocialIcon url="https://en.wikipedia.org/wiki/Martin_Petrov" />
        <SocialIcon url="https://www.facebook.com/martin.petrov.17.17/" />
      </b>
    </>
  );
};

export default About;
