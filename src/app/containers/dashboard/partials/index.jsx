import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MakeQuestion from "../../../components/makeQuestion";

import Open from "../../../components/Open";
import {
  Container,
  Title,
  OpenDiv,
  ProcessSection,
  ProcessTitle,
  OpenSection,
  ProcessTicket,
  QuestionSection,
  ProcessDiv
} from "../style";

export default ({
  open,
  handleAdd,
  handleRemove,
  ticket,
  individual,
  setIndividual,
  getTicket
}) => {
  return (
    <OpenDiv>
      {!individual ? (
        <>
          <QuestionSection>
            <Title color={"white"} width={"426px"} opacity={"0.9"}>
              HACÉ UNA PREGUNTA
            </Title>
            <MakeQuestion />
          </QuestionSection>
          <OpenSection>
            <Title color={"white"} width={"426px"} opacity={"0.9"}>
              PREGUNTAS PENDIENTES ({open.length})
            </Title>
            {open.map((ticket, index) => (
              <div key={ticket.id}>
                <Open
                  ticket={ticket}
                  index={index + 1}
                  handleAdd={handleAdd}
                  handleRemove={handleRemove}
                  getTicket={getTicket}
                  setIndividual={setIndividual}
                  individual={individual}
                />
                <br />
              </div>
            ))}
          </OpenSection>
        </>
      ) : (
        <>
          <QuestionSection>
            <Title
              color={"white"}
              width={"426px"}
              opacity={"0.9"}
              onClick={() => setIndividual(false)}
            >
              VOLVER
            </Title>
          </QuestionSection>
          <OpenSection>
            <Open
              ticket={ticket}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
              getTicket={getTicket}
              setIndividual={setIndividual}
              individual={individual}
            />
            <br />
          </OpenSection>
        </>
      )}
    </OpenDiv>
  );
};
