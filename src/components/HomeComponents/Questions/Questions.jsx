import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getQuestions,
  getQuestionsByName,
  orderByMasComentadas,
  orderByModule,
  orderByTag,
} from "../../../redux/actions/questions";
import { getTags } from "../../../redux/actions/tags";
import { Chip, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Avatars from "../Avatars/Avatars";
import PaginationComponent from "../../paginationComponents/PaginationComponent";
import Footer from "../../../views/Footer";
import { getTagColor } from "../../../Controllers/Helpers/colorsQuestion";
import { getUserProfile } from "../../../redux/actions/user";
import { userInbox } from "../../../redux/actions/inboxes";
import "./scrollBar.css";

export const Questions = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.userReducer.user);
  const userDetail = useSelector((state) => state.userReducer.userDetail);
  const questions = useSelector((state) => state.questionsReducer.questions);
  const tags = useSelector((state) => state.tagsReducer.tags);
  const dinamix = useSelector((state) => state.userReducer.dinamix);

  tags.sort((a, b) => b.usado - a.usado);

  const respuestas = [];

  for (let i = 0; i < questions.length; i++) {
    if (questions[i].comments.length > 0) {
      for (let j = 0; j < questions[i].comments.length; j++) {
        respuestas.push(questions[i].comments[j]);
      }
    }
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  useEffect(() => {
    const createUserFromDispatch = () => {
      if (user.id !== undefined) {
        dispatch(getUserProfile(user.id));
        dispatch(userInbox(user.id));
        dispatch(getQuestions());
      }
    };
    createUserFromDispatch();
  }, [dispatch, user, dinamix]);

  useEffect(() => {
    const loadQuestions = () => {
      setLoading(true);
      dispatch(getTags());
      setLoading(false);
    };
    loadQuestions();
  }, [dispatch]);

  if (questions.error) {
    alert(questions.error);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = questions.slice(indexOfFirstItem, indexOfLastItem);

  const refreshPage = () => {
    dispatch(getQuestionsByName(""));
    setCurrentPage(1);
    setPageNumberLimit(5);
    setMaxPageNumberLimit(5);
    setMinPageNumberLimit(0);
  };

  const orderByTagHandler = (tag) => {
    dispatch(orderByTag(tag));
    setCurrentPage(1);
    setPageNumberLimit(5);
    setMaxPageNumberLimit(5);
    setMinPageNumberLimit(0);
  };

  const handleOrderByModule = (e) => {
    dispatch(orderByModule(e.target.innerText));
    setCurrentPage(1);
    setPageNumberLimit(5);
    setMaxPageNumberLimit(5);
    setMinPageNumberLimit(0);
  };

  const handleOrderByMasComentadas = () => {
    dispatch(orderByMasComentadas());
    setCurrentPage(1);
    setPageNumberLimit(5);
    setMaxPageNumberLimit(5);
    setMinPageNumberLimit(0);
  };

  return (
    <div>
      <MainContainer>
        <CardQuestionContainer>
          <div className="CardQuestionTitle">
            <Avatars orderByModule={handleOrderByModule} />
            <Button
              sx={{
                color: "color.filters",
                "&:hover": { color: "#F50057" },
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 4px 8px",
                borderRadius: "10px",
              }}
              className="buttonFilter"
              onClick={refreshPage}
            >
              Refresh preguntas
            </Button>

            <Button
              sx={{
                color: "color.filters",
                "&:hover": { color: "#F50057" },
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 4px 8px",
                borderRadius: "10px",
              }}
              className="buttonFilter"
              onClick={handleOrderByMasComentadas}
            >
              Mas Comentadas ASC/DSC
            </Button>
          </div>

          <PaginationComponent
            questions={questions}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageNumberLimit={pageNumberLimit}
            setPageNumberLimit={setPageNumberLimit}
            maxPageNumberLimit={maxPageNumberLimit}
            setMaxPageNumberLimit={setMaxPageNumberLimit}
            minPageNumberLimit={minPageNumberLimit}
            setMinPageNumberLimit={setMinPageNumberLimit}
            currentItems={currentItems}
          />

          <CardQuestion>
            {loading ? (
              <h4>Loading Questions...</h4>
            ) : (
              currentItems.map((question) => (
                <QuestionCard
                  question={question}
                  reportUser={userDetail.reports}
                  key={question.id}
                />
              ))
            )}
          </CardQuestion>

          <Box>
            <Footer />
          </Box>
        </CardQuestionContainer>
        <SideBar>
          <CounterSideBar>
            <Box
              sx={{
                bgcolor: "background.white",
                color: "#a8a3b5",
                width: "130px",
                borderRadius: 1,
              }}
              className="nums"
            >
              <div style={{ fontSize: "40px" }}>{respuestas.length}</div>
            </Box>
            <Box
              sx={{
                color: "#A8A3B5",
                marginTop: 0.5,
                display: "flex",
                justifyContent: "center",
              }}
            >
              Respuestas
            </Box>
            <Box sx={{ marginTop: 3, marginLeft: 0, textAlign: "center" }}>
              Tags mas usados
            </Box>
          </CounterSideBar>
          <Stack
            direction="column"
            spacing={2}
            sx={{
              width: "fit-content",
              marginTop: "30px",
              maxHeight: "450px",
              overflow: "auto",
              padding: "5px",
            }}
          >
            {tags.map((tag) => {
              let upperCase = tag.name.toUpperCase();
              return (
                <Chip
                  sx={{
                    color: 'text-primary',
                    borderColor: getTagColor(tag.name),
                  }}
                  variant="outlined"
                  key={tag.id}
                  // backgroundcolor={getTagColor(tag.name)}
                  label={
                    <Box>
                      {tag.name} {`(${tag.usado})`}
                    </Box>
                  }
                  onClick={() => orderByTagHandler(upperCase)}
                />
              );
            })}
          </Stack>
        </SideBar>
      </MainContainer>
    </div>
  );
};

const CounterSideBar = styled.div`
  /*COUNTER              CHEQUAR ESTE PROPERTY*/

  .nums {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    margin: 0 auto;
    text-size: 50px

    text-align: center;
    animation-name: counter;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    counter-reset: num var(--num);
    /* margin-bottom: 25px; */
  }

  .nums::before {
    width: 2em;
    font: 400 2.5em system-ui;

    display: flex;
    margin: 0 auto;
    text-align: center;
    text-align: center;
    text-decoration: none;
    /* cursor: pointer; */
    transition-duration: 0.4s;
    margin: 0 auto;
  }

  .nums::after {
    position: absolute;
    /* content: 'Preguntas'; */

    font-weight: 400;
    text-align: center;
    padding-left: 28px;
    /* /* margin-left: 2px; */
    margin-top: 30px;
    font-size: 1.3em;
    max-width: 100px;
    top: 80%;
    transform: translateY(-50%);
  }
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
`;

const SideBar = styled.div`
  height: 60px;
  margin-left: 30px;
  width: 15%;
`;

const CardQuestionContainer = styled.div`
  height: 60px;
  width: 80%;

  margin-left: 30px;
  margin-bottom: 10px;
  .CardQuestionTitle {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .CardQuestionTitle button {
    text-decoration: none;
    padding-top: 10px;

    span {
      padding-left: 100px;
    }
  }

  .buttonFilter:hover {
  }

  @media (max-width: 1050px) {
    .CardQuestionTitle {
      flex-direction: column;
    }
  }
`;

const CardQuestion = styled.div`
  margin-top: 25px;
  width: 100%;
`;
