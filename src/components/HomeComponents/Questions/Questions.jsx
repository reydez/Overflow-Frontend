import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions, orderByDate } from "../../../redux/actions";

const CardQuestionContainer = styled.div`
  color: pink;
  height: 60px;
  width: 70%;
  background-color: #392e57;
  margin-left: 30px;
  margin-bottom: 10px;
  .CardQuestionTitle {
    color: #a8a3b5;
    padding-top: 16px;
    span {
      padding-left: 100px;
    }
  }
`;

const CardQuestion = styled.div`
  margin-top: 25px;
  width: 100%;
  background-color: #392e57;
`;

export const Questions = () => {
  const dispatch = useDispatch();
  const [loading, setLoadin] = useState(false);
  const questions = useSelector((state) => state.questions);
  console.log(questions);

  useEffect(() => {
    const loadQuestions = async () => {
      setLoadin(true);
      await dispatch(getQuestions());
      setLoadin(false);
    };

    loadQuestions();
  }, [dispatch]);

  const orderByDateHandler = () => {
    dispatch(orderByDate());
  };

  return (
    <div>
      <CardQuestionContainer>
        <div className="CardQuestionTitle">
          <Button onClick={orderByDateHandler}>Nuevas</Button>
          <Button>Mas Visitas</Button>
          <Button>Mejores Calificadas</Button>
        </div>
        <CardQuestion>
          <div className="seperator">
            {loading ? (
              <h4>Loading Questions...</h4>
            ) : (
              questions.map((question, index) => (
                <QuestionCard question={question} key={index} />
              ))
            )}
          </div>
        </CardQuestion>
      </CardQuestionContainer>
    </div>
  );
};
