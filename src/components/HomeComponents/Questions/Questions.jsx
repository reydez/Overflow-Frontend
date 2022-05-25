import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../../redux/actions";

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

/* const posts = [
  {
    id: 1,
    id_user: 8,
    title: "Bracco Diagnostics Inc",
    message:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elem ligula vehicula consequat. ",
    rating: 66.19,
    comments: [],
    category: "M1",
    tags: ["JavaScript", "Closures", "Lógica"],
    answerQty: 4,
    user_name: "Juan Fakeface",
  },
  {
    id: 2,
    id_user: 8,
    title: "Arbor Pharmaceuticals, Inc.",
    message:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. ",
    rating: 63.52,
    comments: [],
    category: "M3",
    tags: ["Backend", "Promesas", "Async-Await"],
    answerQty: 1,
    user_name: "Juan Fakeface",
  },
  {
    id: 3,
    id_user: 7,
    title: "Nelco Laboratories, Inc.",
    message:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    rating: 3.48,
    comments: [],
    category: "M4",
    tags: ["psql", "Backend", "Sequelize"],
    answerQty: 5,
    user_name: "Juan Fakeface",
  },
  {
    id: 4,
    id_user: 9,
    title: "Apotheca Company",
    message: "Proin eu mi.",
    rating: 14.89,
    comments: [],
    category: "M2",
    tags: ["Redux", "Frontend", "Reducer"],
    answerQty: 8,
    user_name: "Juan Fakeface",
  },
  {
    id: 5,
    id_user: 10,
    title: "Wakefern Food Corp",
    message: "Proin at turpis a pede posuere nonummy. Integer non velit.",
    rating: 38.39,
    comments: [],
    category: "M3",
    tags: ["Middleware", "Backend", "Router"],
    answerQty: 3,
    user_name: "Juan Fakeface",
  },
  {
    id: 6,
    id_user: 3,
    title: "ARSOA USA INC.",
    message:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    rating: 25.72,
    comments: [],
    category: "M1",
    tags: ["JavaScript", "Recursivo", "Fundamentos"],
    answerQty: 2,
    user_name: "Juan Fakeface",
  },
]; */

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

  return (
    <div>
      <CardQuestionContainer>
        <div className="CardQuestionTitle">
          <Button>Nuevas</Button>
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
