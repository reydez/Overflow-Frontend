import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getQuestions,
  getQuestionsByName,
  orderByDate,
  orderByModule,
  orderByTag,
} from "../../../redux/actions/questionsActions";
import { getTags } from "../../../redux/actions/tags";
import { Chip, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Avatars from "../Avatars/Avatars";

import PaginationComponent from "../../paginationComponents/PaginationComponent";
import Footer from "../../../views/Footer";
import { getTagColor } from "../../../Controllers/Helpers/colorsQuestion";

export const Questions = () => {
  const dispatch = useDispatch();
  const [loading, setLoadin] = useState(false);
  const questions = useSelector((state) => state.questionsReducer.questions);
  const tags = useSelector((state) => state.tagsReducer.tags);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  useEffect(() => {
    const loadQuestions = () => {
      setLoadin(true);
      dispatch(getTags());
      dispatch(getQuestions());
      setLoadin(false);
    };

    loadQuestions();
  }, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = questions.slice(indexOfFirstItem, indexOfLastItem);

  const refreshPage = () => {
    dispatch(getQuestionsByName(""));
    setCurrentPage(1);
  };

  const orderByDateHandler = () => {
    dispatch(orderByDate());
    setCurrentPage(1);
  };

  const orderByTagHandler = (tag) => {
    dispatch(orderByTag(tag));
    setCurrentPage(1);
  };

  const handleOrderByModule = (e) => {
    dispatch(orderByModule(e.target.innerText));
    setCurrentPage(1);
  };

  const handleClickChip = (tagName) => {
    console.log("Identifica el chip para filtrado..." + tagName);
  };

  // Sacar el hardcodeo y traerlo de la API
  const allTags = [
    "JavaScript",
    "CSS",
    "AJAX",
    "DOM",
    "Webpack",
    "React",
    "Redux",
    "Thunk",
    "NodeJS",
    "Express",
    "Testing",
    "SQL",
    "Sequelize",
    "HTML",
  ];

  console.log(tags);
  return (
    <div>
      <MainContainer>
        <CardQuestionContainer>
          <div className="CardQuestionTitle">
            <Avatars orderByModule={handleOrderByModule} />
            <Button
              sx={{ color: "#a8a3b5", "&:hover": { color: "#F50057" } }}
              className="buttonFilter"
              onClick={refreshPage}
            >
              Refresh
            </Button>
            <Button
              sx={{ color: "#a8a3b5", "&:hover": { color: "#F50057" } }}
              className="buttonFilter"
              onClick={orderByDateHandler}
            >
              Nuevas
            </Button>
            <Button
              sx={{ color: "#a8a3b5", "&:hover": { color: "#F50057" } }}
              className="buttonFilter"
            >
              Mas Visitas
            </Button>
            <Button
              sx={{ color: "#a8a3b5", "&:hover": { color: "#F50057" } }}
              className="buttonFilter"
            >
              Mejores Calificadas
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

          <CardQuestion >
            {loading ? (
              <h4>Loading Questions...</h4>
            ) : (

              currentItems.map((question) => (
                <QuestionCard question={question} key={question.id} />

              ))
            )}
          </CardQuestion>

          <Box>
            <Footer />
          </Box>
        </CardQuestionContainer>
        <SideBar>
          <CounterSideBar >
            <Box sx={{bgcolor: 'background.white', color: "#a8a3b5", width:'130px', borderRadius:1}} className="nums" ></Box>
            <Box sx={{color: '#A8A3B5', marginTop: 1, marginLeft:4}}>Respuestas </Box>
            <Box sx={{marginTop: 3, marginLeft:0, textAlign: 'center'}}>Tags mas usados</Box>
          </CounterSideBar>
          <Stack
            direction="column"
            spacing={2}
            sx={{ width: "fit-content", marginTop: "30px"}}
          >
            {tags.map((tag) => {
              let upperCase = tag.name.toUpperCase();
              return (
                <Chip
                  sx={{
                    color: getTagColor(tag.name),
                  }}
                  variant="outlined"
                  key={tag.id}
                  // backgroundcolor={getTagColor(tag.name)}
                  label={<Box>{tag.name}</Box>}
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
  @property --num {
    syntax: "<integer>";
    inherits: false;
    initial-value: 0;
    
  }
  .nums {
    position: relative;
    display: flex;
    padding-top: 5px;
    margin: 0 auto;
    
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
    content: counter(num);

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

  @keyframes counter {
    from {
      --num: 0;
    }
    to {
      --num: 327;
    }
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
    justify-content: center;
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
