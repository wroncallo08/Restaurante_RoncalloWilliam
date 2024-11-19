import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/Inicio";
import { MenuCrear } from "../../componentes/menu/MenuCrear";
import { MenuListar } from "../../componentes/menu/MenuListar";
import { MenuAdmin } from "../../componentes/menu/MenuAdmin";
import { MenuActualizar } from "../../componentes/menu/MenuActualizar";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/mencre" element={<MenuCrear />} />
      <Route path="/menlis" element={<MenuListar />} />
      <Route path="/menadmin" element={<MenuAdmin />} />

      <Route path="/menactu/:codigo" element={<MenuActualizar />} />

      <Route path="/menacer" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
