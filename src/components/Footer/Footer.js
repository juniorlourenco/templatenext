
import styled from "styled-components";

const FooterCard = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #1e1f1e;
    color: #e5e5e5;
    text-align: center;
    border-radius: 10px;
}`

export default function Footer() {
    return ( 
    <FooterCard>
        <p>Todos os direitos reservados, Junior Lourenço, © 2023</p>
        <p>Endereço: Av. Castelo Branco, 2500 - Centro Sul, Várzea Gande - MT, 78125-700 </p>
    </FooterCard>)
  }