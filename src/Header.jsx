import { useContext, useState } from "react";
import CardDetails from "./Cine/CardDetails";
import { MovieContext } from "./Context";
import moon from "./assets/icons/moon.svg";
import logo from "./assets/logo.svg";
import ring from "./assets/ring.svg";
import shoppingCart from "./assets/shopping-cart.svg";

const Header = () => {
  const [showCards, setShowCards] = useState(false);

  const { cardData } = useContext(MovieContext);
  console.log(cardData);

  const handeCartShow = () => {
    setShowCards(true);
  };
  const handelCartClose = () => {
    setShowCards(false);
  };
  return (
    <div>
      {showCards && <CardDetails onClose={handelCartClose} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={moon} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handeCartShow}
              >
                <img src={shoppingCart} width="24" height="24" alt="" />
                {cardData.length > 0 && (
                  <span className="rounded-full absolute bg-[#12CF6F] top-[-12px] left-[28px] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {cardData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
