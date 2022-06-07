import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsComponent from "../components/DetailsComponent/DetailsComponent";
import { getQuestionDetails } from "../redux/actions/questionsActions";

export default function VisualizeQuestion() {
  const { questionId } = useParams();
  const dispatch = useDispatch();
  const question = useSelector((state) => state.questionsReducer.question);
  const [loading, setLoadin] = useState(false);
  const [comments, setComments] = useState([]);
  const dummy = useRef(null);

  useEffect(() => {
    const loadQuestionDetails = async () => {
      setLoadin(true);
      await dispatch(getQuestionDetails(questionId));
      setLoadin(false);
    };

    loadQuestionDetails();
  }, [dispatch, questionId]);

  useEffect(() => {
    setComments(question.comments);
  }, [question.comments]);

  let comentsARenderizar = comments?.sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  return (
    <DetailsComponent
      question={question}
      commentsARenderizar={comentsARenderizar}
      setComments={setComments}
      loading={loading}
      dummy={dummy}
    />
  );
}
