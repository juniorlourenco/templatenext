import styled from "styled-components";

const MenuTile = styled.div`
color: #060606;
width: 100%;
height: 80px;
display: flex;
justify-content: center;
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

export default function Menu() {
    return ( 
    <MenuTile>
        <List>
            <ListItem> Home</ListItem>
            <ListItem> Empresa</ListItem>
            <ListItem> Serviços</ListItem>
            <ListItem> Blog</ListItem>
            <ListItem> Contato</ListItem>
        </List>
    </MenuTile>)
  }