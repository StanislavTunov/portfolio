import ContactMe from "../ContactMe/ContactMe";
import { SocialIcon } from "react-social-icons";

const Home = () => {
  return (
    <>
      <h2>Нещо интересно за мен</h2>
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
        <p>
          Казвам се Бисер Петров Лилов. Роден съм на 26 Октомври 1971г. в гр.
          Враца. Завършил съм Математическа гимназия в гр.Враца през 1989г. През
          1995г. завършвам „УНСС“ гр. София, специалност „Икономика и управление
          на индустрията“, степен „Магистър“. Започвам професионалния си опит в
          ОББ АД клон Враца същата година. След 10 години опит банковата сфера
          съм назначен в мениджърския състав на банката на Мениджър екип
          Банкиране на дребно в ОББ АД клон Враца (през периода 2006г.-2011г.).
          Пет години по-късно съм назначен за Директор ОББ АД клон Враца (през
          периода 2011г.-2017г.). След това съм бил Директор Общинска банка ФЦ
          Враца (през периода 2018г.-2021г.). През годините в банките придобивам
          много сертификати за успешно преминати обучения, като най-съществените
          от тях са:
        </p>
        <p>
          Сертификат от JA Bulgaria за ментор в иновационен лагер през Global
          Money Week. Сертификат от Вижън Т ЕООД за преминато обучение на тема:
          Менидърски умения. Сертификат за успешно преминато обучение на тема:
          Умения за провеждане на високоефективни срещи с бизнес клиенти.
          Успешно завършен курс на Дейл Карнеги на тема: Умения за постигане на
          успех. Най-внушителното признание за работата ме е Благодарствено
          писмо от ОД на МВР Враца за подаден сигнал и задържани лица, част от
          престъпна схема за ало измама.
          <p>
            <SocialIcon url="http://medianews.bg/bg/a/direktor-na-banka-vv-vratsa-sdeystval-na-mvr-da-khvanat-aloizmamnik" />
          </p>
          <p>
            През последните 5 месеца усилено уча Front-end разработване с
            JavaScript и Front-end разработване с React във Враца Софтуер
            Общество. Подробна програма на курса е описана в страницата
            "Front-end разработване с JavaScript".
          </p>
          <p>
            Моето хоби е футбола. Фен съм на Ботев Враца, а любим футболист ми е
            Мартин Петров.
          </p>
        </p>
      </p>
      <ContactMe />
    </>
  );
};

export default Home;