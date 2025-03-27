import React from "react";
import { FaPowerOff } from "react-icons/fa";
import "./navbar.css";
import { Link } from "react-router-dom";
import Home from "../../Home/Home";

const Navbar = () => {
  return (
    <nav>
      <h2>Notepad Manager</h2>
      <div className="links">
        <Link className="pages" to={"/"}>
          Início
        </Link>
        <Link className="pages" to={"/minhas-anotacoes"}>
          Minhas anotações
        </Link>
        <Link className="pages" to={"/nova-anotacao"}>
          Nova anotação
        </Link>
        <Link className="pages" to={"/minha-conta"}>
          Minha Conta
        </Link>
        <Link className="pages" to={"/sobre"}>
          Sobre
        </Link>
        <FaPowerOff className="pages" />
      </div>
    </nav>
  );
};

export default Navbar;
