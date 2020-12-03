import React from "react";
import { FaUsers, FaRegBuilding, FaChalkboardTeacher } from "react-icons/fa";
import { Container } from "../../utilities/GlobalStyles";
import { Numbers, NumbersTitle, List, ListItem, ListItemIcon, ListItemHeader, ListItemSubHeader } from "./InNumbers.elements";

function InNumbers () {
    return (
        <Numbers>
            <Container>
                <NumbersTitle>PTS Schools In Number</NumbersTitle>
                <List>
                    <ListItem>
                        <ListItemIcon><FaUsers /></ListItemIcon>
                        <ListItemHeader>258</ListItemHeader>
                        <ListItemSubHeader>Students</ListItemSubHeader>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><FaRegBuilding /></ListItemIcon>
                        <ListItemHeader>9</ListItemHeader>
                        <ListItemSubHeader>Branches</ListItemSubHeader>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><FaChalkboardTeacher /></ListItemIcon>
                        <ListItemHeader>16</ListItemHeader>
                        <ListItemSubHeader>Teachers</ListItemSubHeader>
                    </ListItem>
                </List>
            </Container>
        </Numbers>
    )
}

export default InNumbers;
