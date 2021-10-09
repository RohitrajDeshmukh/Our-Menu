import "./styles.css";
import React, { useState } from "react";

const ourMenu = {
  Starter: [
    {
      Image:
        "https://b.zmtcdn.com/data/dish_photos/67a/c0dccee8c93eb1b67f165acb5868367a.jpg?fit=around|130:130&crop=130:130;*,*",
      Title: "Paneer Chilli Dry",
      Price: "₹200",
      Description:
        "Popular Indo Chinese starter made by seasoning fried Indian cottage cheese aka paneer in chilli sauce."
    },
    {
      Image:
        "https://b.zmtcdn.com/data/dish_photos/860/f745b4e307e22fe15dc4a1cab0d31860.jpg?fit=around|130:130&crop=130:130;*,*",
      Title: "Veg Manchurian",
      Price: "₹220",
      Description:
        "It is an exotic dish made of mixed vegetable steamed formed into dumplings deep fried and cooked in a tangy sauce."
    },
    {
      Image:
        "https://b.zmtcdn.com/data/dish_photos/b03/454fdaaffb7d59885a7e8384b1d97b03.jpg?fit=around|130:130&crop=130:130;*,*",
      Title: "Veg Crispy",
      Price: "₹250",
      Description:
        "Veg crispy mixed vegetables fried to a crisp and tossed in a delicious Indo-Chinese sweet chilli sauce."
    }
  ],
  MainCourse: [
    {
      Image:
        "https://b.zmtcdn.com/data/dish_photos/ee9/c86cb865ffa051a0235c04b0ca9f1ee9.jpg?fit=around|130:130&crop=130:130;*,*",
      Title: "Veg Kadhai",
      Price: "₹300",
      Description:
        "Selected vegetable and cottage cheese prepared in onion gravy along with Indian spices."
    },
    {
      Image:
        "https://b.zmtcdn.com/data/dish_photos/279/4b2d7c08c44e9a1bea1511502f868279.jpg?fit=around|130:130&crop=130:130;*,*",
      Title: "Paneer Waradi",
      Price: "₹320",
      Description:
        "Paneer waradi is an Indian dish of marinated paneer cheese served in a spiced gravy."
    },
    {
      Image:
        "https://b.zmtcdn.com/data/dish_photos/767/ec4dc057f7612ec5b78ea2a854785767.jpg?fit=around|130:130&crop=130:130;*,*",
      Title: "Cheese Butter Masala",
      Price: "₹350",
      Description:
        "This rich and creamy dish has pieces of paneer tossed in a tomato and cashew based curry."
    }
  ],
  Breads: [
    {
      Image:
        "https://b.zmtcdn.com/data/dish_photos/a4d/dcf0039733e055f0d538a10d97951a4d.jpg?fit=around|130:130&crop=130:130;*,*",
      Title: "Tandoori Roti",
      Price: "₹50",
      Description:
        "Roti is a leavened, tandoor baked flatbread.Super-thin and fluffy wheat flour rotis."
    },
    {
      Image:
        "https://b.zmtcdn.com/data/dish_photos/073/0bd25ad39c2df2a43bfe4a8442645073.jpg?fit=around|130:130&crop=130:130;*,*",
      Title: "Tava butter Roti",
      Price: "₹100",
      Description:
        "Roti is a leavened, oven-baked flatbread mixed with the exciting mixture of Potato, atta, maida, butter or ghee"
    },
    {
      Image:
        "https://b.zmtcdn.com/data/dish_photos/786/70ebc8ffd1a2acbec4d2190985125786.jpg?fit=around|130:130&crop=130:130;*,*",
      Title: "Garlic Naan",
      Price: "₹150",
      Description:
        "Naan is a leavened, oven-baked flatbread mixed with the exciting flavour of garlic and green chillies."
    }
  ]
};

const menu = Object.keys(ourMenu);

export default function App() {
  const [menulist, setMenuList] = useState(ourMenu.Starter);

  function menuClickHandler(menu) {
    const displayMenu = ourMenu[menu];
    setMenuList(displayMenu);
  }

  function getMenu(menuItem) {
    const imageUrl = menuItem.Image;
    const title = menuItem.Title;
    const price = menuItem.Price;
    const description = menuItem.Description;

    const menuData = (
      <li>
        <img alt="Poster" src={imageUrl} />
        <div style={{ padding: "0rem 1rem" }}>
          <h3>{title}</h3>
          <p>{price}</p>
          <p>{description}</p>
        </div>
      </li>
    );
    return menuData;
  }
  return (
    <div className="App">
      <div className="title">
        <h2>🍽️Our Menu🍽️</h2>
      </div>
      <div className="btn-container">
        {menu.map((menu) => {
          return (
            <button
              className="btn"
              key={menu}
              onClick={() => menuClickHandler(menu)}
            >
              {menu}
            </button>
          );
        })}
      </div>

      <ul>
        {menulist.map((item) => {
          return getMenu(item);
        })}
      </ul>
    </div>
  );
}
