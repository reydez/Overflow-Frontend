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

import { Chip, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Avatars from "../Avatars/Avatars";

import PaginationComponent from "../../paginationComponents/PaginationComponent";
import Footer from "../../../views/Footer";


const MainContainer = styled.div`
  width: 100%;
  display: flex;
`;

const SideBar = styled.div`
  background-color: #392e57;
  height: 60px;
  margin-left: 30px;
  width: 15%;
`;

const CardQuestionContainer = styled.div`
  color: #a8a3b5;

  height: 60px;
  width: 80%;
  background-color: #392e57;
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
  background-color: #392e57;
`;

export const Questions = () => {
  const dispatch = useDispatch();
  const [loading, setLoadin] = useState(false);
  const questions = useSelector((state) => state.questionsReducer.questions);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  useEffect(() => {
    const loadQuestions = async () => {
      setLoadin(true);
      await dispatch(getQuestions());
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



  return (
    <div>
      <MainContainer>
        <CardQuestionContainer>
          <div className="CardQuestionTitle">
            <Avatars orderByModule={handleOrderByModule} />
            <Button className="buttonFilter" onClick={refreshPage}>
              Refresh
            </Button>
            <Button className="buttonFilter" onClick={orderByDateHandler}>
              Nuevas
            </Button>
            <Button className="buttonFilter">Mas Visitas</Button>
            <Button className="buttonFilter">Mejores Calificadas</Button>
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
              currentItems.map((question, index) => (
                <QuestionCard question={question} key={index} />
              ))
            )}
          </CardQuestion>

          <Box>
            <Footer />
          </Box>
        </CardQuestionContainer>
        <SideBar>
          <CounterSideBar>
            <div className="nums"></div>
            <p>Respuestas Online</p>
            <h4>TAGS MAS USADOS</h4>
          </CounterSideBar>
          <Stack
            direction="column"
            spacing={2}
            sx={{ width: "fit-content", marginTop: "30px" }}
          >
            {allTags.map((tag) => {
              let upperCase = tag.toUpperCase();
              return (
                <Chip
                  label={<Box sx={{ color: "white" }}>{tag}</Box>}
                  variant="outlined"
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
  p {
    color: #a8a3b5;
    text-align: center;
  }
  H4 {
    color: white;
    text-align: center;
  }
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
    color: #a8a3b5;
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
    color: #a8a3b5;
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
