import styled from "styled-components";

const HeaderTile = styled.div`
color: #3c3c3c;
width: 100%;
height: 80px;
border: 1px solid #c3c3c3;
display: flex;
}`

const List = styled.ul`
display: flex;
padding: 10px;
justify-content: space-between;
}`

const ListItem = styled.li`

list-style-type: none;
flex-direction: row;
padding: 20px;
text-align: center;
font-size: 18px;
}`

export default function Header() {
    return ( 
    <HeaderTile>
        <List>
            <ListItem> (65) Telefone</ListItem>
            <ListItem> (65) Whatsapp</ListItem>
            <ListItem> Email@email.com.br</ListItem>
        </List>
        <List>
            <ListItem>Nossas Redes Sociais</ListItem>
            <ListItem>Facebook</ListItem>
            <ListItem>Instagram</ListItem>
        </List>
    </HeaderTile>)
}