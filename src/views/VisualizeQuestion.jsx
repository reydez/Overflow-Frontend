import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestionDetails } from "../redux/actions";

export default function VisualizeQuestion() {
  const param = useParams();
  const dispatch = useDispatch();
  const question = useSelector((state) => state.question);

  useEffect(() => {
    const loadQuestionDetails = async () => {
      dispatch(getQuestionDetails(param.questionId));
    };

    loadQuestionDetails();
  }, [dispatch, param]);
  return (
    <div>
      <h2>{question.title}</h2>
      <h4>{question.message}</h4>
      {question.comments.length > 0 ? (
        question.comments.map((comment, index) => (
          <div key={index}>
            <p>User id: {comment.id_user}</p>
            <p>User comment: {comment.message}</p>
          </div>
        ))
      ) : (
        <h3>esta pregunta no tiene comentarios</h3>
      )}
    </div>
  );
}
