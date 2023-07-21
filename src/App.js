import { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import Category from "./pages/Category";
import Basket from "./pages/Basket";
import { Route, Routes } from "react-router-dom";
import Conutries from "./pages/Countries";
import DetailCard from "./Components/DetailCard";
import AboutUs from "./pages/AboutUs";
import FilterByCategory from "./pages/FilterByCategory";
import Search from "./pages/Search";

function App(props) {
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("dataLocal")) || []
  );

  useEffect(() => {
    localStorage.setItem("dataLocal", JSON.stringify(basket));
  }, [basket]);

  return (
    <>
      <Nav basket={basket} />
      <Routes>
        <Route
          path={"/"}
          element={<Category basket={basket} setBasket={setBasket} />}
        />
        <Route
          path={"/basket"}
          element={<Basket basket={basket} setBasket={setBasket} />}
        />
        <Route path={"/aboutUs"} element={<AboutUs />} />
        <Route
          path={"/area/:name"}
          element={<Conutries basket={basket} setBasket={setBasket} />}
        />
        <Route path={"/product/:id"} element={<DetailCard />} />
        <Route
          path={"/filter/:filter"}
          element={<FilterByCategory basket={basket} setBasket={setBasket} />}
        />
        <Route
          path={"/search/:val"}
          element={<Search basket={basket} setBasket={setBasket} />}
        />
      </Routes>
    </>
  );
}

export default App;
