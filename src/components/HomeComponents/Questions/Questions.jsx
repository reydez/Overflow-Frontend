import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions, orderByDate } from "../../../redux/actions";
import { Chip, Stack } from "@mui/material";
import { Box } from "@mui/system";


const MainContainer = styled.div`
color: pink;
width: 100%;
display: flex;
`

const SideBar = styled.div`
background-color: #392e57;
height: 60px;
margin-left: 30px;
width:15%;
`

const CardQuestionContainer = styled.div`
  color: pink;
  height: 60px;
  width: 80%;
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

const handleClick = () => {
  console.info("Clickeaste el tag...");
};

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

  const allTags = [
    "JavaScript",
    "CSS",
    "AJAX",
    "DOM",
    "Webpack",
    "React",
    "Redux",
    "NodeJS",
    "Express",
    "Testing",
    "SQL",
    "Sequelize",
  ];

  return (
    <div>
      <MainContainer>

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
        <SideBar>
          <CounterSideBar>
            <div className="nums"></div>
            <p>Respuestas Online</p>
            <h4>TAGS MAS USADOS</h4>
          </CounterSideBar>
            <Stack direction="column" spacing={2} sx={{  width:'fit-content', marginTop:'30px'  }}>
              {allTags.map((tag) => (
                <Chip
                  label={<Box sx={{ color: "white" }}>{tag}</Box>}
                  variant="outlined"
                  onClick={ handleClick }
                />
              ))}
              </Stack>
        </SideBar>
      </MainContainer>
    </div>
  );
};

const CounterSideBar = styled.div`
p{
  color: #a8a3b5;
  text-align: center;
}
H4{
  color: white;
  text-align: center;
  }
/*COUNTER              CHEQUAR ESTE PROPERTY*/
@property --num {
  syntax: '<integer>';
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
`