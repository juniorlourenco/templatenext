import styled from "styled-components";
import Link from "next/link";
import NavItem from "./NavItem";

const MENU_LIST = [
    {
        text: "Home",
        href: "/"
    },{
        text:"Empresa",
        href: "/empresa"
    },{
        text:"Serviços",
        href: "/servicos"
    },{
        text: "Blog",
        href: "/blog"
    },{
        text: "Contato",
        href: "/contato"
    }

]

export default function Navbar() {
    return ( 
    <header>
        <div className="nav__menu-bar">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div className="nav__menu-list">
            {
                MENU_LIST.map((menu, idx) => {
                    return <div key={menu.text}>
                        <NavItem {...menu} />
                        </div>
                })
            }
        </div > 
    </header>)
  }