import React, { useEffect, useState } from "react";

type clubType = {
  name: string;
  imageUrl: string;
};

interface IClub {
  favorites: clubType[];
  current: clubType;
}

const ClubBlock: React.FC = () => {
  const [clubs, setClubs] = useState<IClub>();

  const fetchItems = () => {
    try {
      fetch("https://fervent-archimedes-4fab00.netlify.app/db.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setClubs(data.v1.clubs);
          return clubs;
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="club">
      <p className="club__title">Текущий клуб</p>
      <div className="club__logo">
        <img src={clubs?.current.imageUrl} alt="club logo" />
      </div>
      <h3 className="club__name">
        <p>{clubs?.current.name}</p>
      </h3>
      <div className="club__block block-club">
        <p className="block-club__title">
          <span>Избранные клубы</span>
        </p>
        <ul className="club__list">
          {clubs?.favorites.map((item) => (
            <li className="club__item" key={item.imageUrl}>
              <img src={item.imageUrl} alt="footbal club logo" />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <a href="" className="club__change">
        <span>Выбрать другой клуб</span>
      </a>
    </div>
  );
};

export default ClubBlock;
