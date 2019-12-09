import React from "react";
import {
  AnswerContainer,
  AnswerBody,
  Divider,
  Tags,
  RemoveIcon,
  Text
} from "./style";
import { Author, AuthorName, TicketDate, Header, Img } from "../Open/style";
const tags = ["REACT", "NODE.JS", "JAVA", "BOOTCAMP"];
export default ({ ticket }) => {
  return (
    <AnswerContainer>
      <Header>
        <Img src="/images/perfil.jpeg" alt="foto asistente" />
        <Author>
          <AuthorName>
            {ticket.author.name} {ticket.author.lastname}
          </AuthorName>
          <TicketDate>Respondió esta pregunta</TicketDate>
        </Author>
      </Header>
      <AnswerBody>{ticket.comment.description}</AnswerBody>
      {/* <Divider></Divider> */}
      {/* {tags.map(tag => (
        <Tags>
          {tag}
        </Tags>
      ))} */}
    </AnswerContainer>
  );
};
