import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestionDetails } from "../redux/actions";


export default function VisualizeQuestion() {
  const { questionId } = useParams();
  const dispatch = useDispatch();
  const question = useSelector((state) => state.question);
  const [loading, setLoadin] = useState(false);

  useEffect(() => {
    const loadQuestionDetails = async () => {
      setLoadin(true);
      await dispatch(getQuestionDetails(questionId));
      setLoadin(false);
    };

    loadQuestionDetails();
  }, [dispatch, questionId]);

  return (
    <div>
      <h2>{question.title}</h2>
      <h4>{question.message}</h4>
      {loading && <h3>Loading Question Details...</h3>}
      {question.comments?.length > 0 ? (
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
