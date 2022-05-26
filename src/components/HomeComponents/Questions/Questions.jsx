import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getQuestions,
  orderByDate,
} from "../../../redux/actions/questionsActions";
import PaginationComponent from "../../paginationComponents/PaginationComponent";
/* import ReactPaginate from "react-paginate"; */

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
  const questions = useSelector((state) => state.questionsReducer.questions);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const loadQuestions = async () => {
      setLoadin(true);
      await dispatch(getQuestions());
      setLoadin(false);
    };

    loadQuestions();
  }, [dispatch]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(questions.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(questions.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, questions]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % questions.length;
    setItemOffset(newOffset);
    window.scroll(0, 0);
  };

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
        <PaginationComponent
          pageCount={pageCount}
          onPageChange={handlePageClick}
        />
        {loading ? (
          <h4>Loading Questions...</h4>
        ) : (
          currentItems.map((question, index) => (
            <CardQuestion key={index}>
              <QuestionCard question={question} />
            </CardQuestion>
          ))
        )}

        <PaginationComponent
          pageCount={pageCount}
          onPageChange={handlePageClick}
        />
      </CardQuestionContainer>
    </div>
  );
};
