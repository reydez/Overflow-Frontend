import React, { useState, useEffect } from "react";
import { Box, Pagination } from "@mui/material";


const pageSize = 3;

const PaginationProfile = ({ posts, setQuestionsProfile }) => {


  const QuestionsPerProfile = posts;



  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  const service = {
    getData: ({ from, to }) => {
      return new Promise((resolve, reject) => {
        const data = QuestionsPerProfile.slice(from, to);

        resolve({
          count: QuestionsPerProfile.length,
          data: data,
        });
      });
    },
  };


  useEffect(() => {
    service
      .getData({ from: pagination.from, to: pagination.to })
      .then((response) => {
        setPagination({ ...pagination, count: response.count });
        setQuestionsProfile(response.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.from, pagination.to]);

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        marginTop: "230px",
        marginLeft: "450px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pagination
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handlePageChange}
      />
    </Box>
  );
};

export default PaginationProfile;
