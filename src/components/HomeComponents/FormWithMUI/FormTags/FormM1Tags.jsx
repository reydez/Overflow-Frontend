import * as React from "react";
import { useEffect, useState } from "react";
import { getTags } from "../../../../redux/actions/tags";
import { useDispatch, useSelector } from "react-redux";
import Classes from "./FormM1Tags.module.css";
import styled from "styled-components";

const FormM1Tags = ({ setTag, tag, moduleSelected, checked, setChecked }) => {
  const dispatch = useDispatch();
  const allModules = useSelector((state) => state.modulesReducer.modules);

  const tags = allModules
    .find((module) => module.name === moduleSelected)
    ?.tags.sort((a, b) => b.usado - a.usado);

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  const checkChange = (e, value, tagInfo) => {
    if (checked.indexOf(value) !== -1) {
      setChecked(checked.filter((checkBox) => checkBox !== value));
      setTag({
        ...tag,
        tags: tag.tags.filter((p) => p.name !== e.target.value),
      });
    } else {
      setChecked([...checked, value]);
      setTag({
        ...tag,
        tags: [...tag.tags, { name: e.target.value, id: tagInfo.id }],
      });
    }
  };

  return (
    <React.Fragment>
      <div className={Classes.tags}>
        {tags?.map((g, index) => (
          <div key={g.id}>
            <input
              type="checkbox"
              value={g.name}
              name="tags"
              key={g.id}
              onChange={(e) => checkChange(e, index, g)}
              checked={checked.includes(index)}
              disabled={!checked.includes(index) && checked.length > 1}
            />
            {g.name} - {`(${g.usado})`}
          </div>
        ))}
      </div>
      {tag.tags.length > 1 && (
        <Success>Sólo puedes escoger dos tags :D</Success>
      )}
    </React.Fragment>
  );
};
export default FormM1Tags;

const colores = {
  inputPurple: "#413A66",
  error: "#f66060",
  succes: "#ae4aff64",
};

const Success = styled.p`
  transition: 2000ms;
  font-size: 15px;
  background: ${colores.succes};
  color: #141414;
  padding: 15px 30px;
  font-weight: bold;
  border-radius: 5px;
`;
