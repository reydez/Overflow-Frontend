import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsComponent from "../components/DetailsComponent/DetailsComponent";
import { getQuestionDetails } from "../redux/actions/questionsActions";

export default function VisualizeQuestion() {
  const { questionId } = useParams();
  const dispatch = useDispatch();
  const question = useSelector((state) => state.questionsReducer.question);
  const [loading, setLoadin] = useState(false);

  useEffect(() => {
    const loadQuestionDetails = async () => {
      setLoadin(true);
      await dispatch(getQuestionDetails(questionId));
      setLoadin(false);
    };

    loadQuestionDetails();
  }, [dispatch, questionId, question]);

  return <DetailsComponent question={question} loading={loading} />;
}
