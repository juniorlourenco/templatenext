import styled from "styled-components";
import Link from "next/link";
import NavItem from "./NavItem";
import React, { useState } from "react"; 

const MENU_LIST = [
    {text: "Home", href: "/"},
    {text:"Empresa", href: "/empresa"},
    {text:"Serviços", href: "/servicos"},
    {text: "Blog", href: "/blog"},
    {text: "Contato", href: "/contato"}
]

export default function Navbar() {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return ( 
    <header>
        <nav className={`nav`}>
            <Link legacyBehavior href={"/"}>
                <a>
                    <h1 className="logo">Empresa aqui</h1>
                </a>
            </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
            {
               MENU_LIST.map((menu, idx) => (
                <div
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}
                  key={menu.text}
                >
                  <NavItem active={activeIdx === idx} {...menu} />
                  </div>
                ))
            }
        </div > 
        </nav>
    </header>)
  }