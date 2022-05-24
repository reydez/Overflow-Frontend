import styled from "@emotion/styled";
import React from "react";
import QuestionCard from "../QuestionCard/QuestionCard";

const CardQuestionContainer = styled.div`
  color: pink;
  height: 60px;
  width: 70%;
  background-color: #392e57;
  margin-left: 30px;
  margin-bottom: 10px;
  /* border: 1px solid pink; */
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
  height: 500px;
  width: 100%;
  background-color: #392e57;
  /* border: 1px solid cyan; */
`;

const posts = [
  {
    id: 1,
    id_user: 8,
    title: "Bracco Diagnostics Inc",
    message:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    rating: 66.19,
    comments: [],
    tags: [],
  },
  {
    id: 2,
    id_user: 8,
    title: "Arbor Pharmaceuticals, Inc.",
    message:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    rating: 63.52,
    comments: [],
    tags: [],
  },
  {
    id: 3,
    id_user: 7,
    title: "Nelco Laboratories, Inc.",
    message:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    rating: 3.48,
    comments: [],
    tags: [],
  },
  {
    id: 4,
    id_user: 9,
    title: "Apotheca Company",
    message: "Proin eu mi.",
    rating: 14.89,
    comments: [],
    tags: [],
  },
  {
    id: 5,
    id_user: 10,
    title: "Wakefern Food Corp",
    message: "Proin at turpis a pede posuere nonummy. Integer non velit.",
    rating: 38.39,
    comments: [],
    tags: [],
  },
  {
    id: 6,
    id_user: 3,
    title: "ARSOA USA INC.",
    message:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    rating: 25.72,
    comments: [],
    tags: [],
  },
  {
    id: 7,
    id_user: 9,
    title: "MWI/Vet One",
    message:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    rating: 9.34,
    comments: [],
    tags: [],
  },
  {
    id: 8,
    id_user: 10,
    title: "Revlon Consumer Products Corp",
    message:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    rating: 31.83,
    comments: [],
    tags: [],
  },
  {
    id: 9,
    id_user: 2,
    title: "KTAIGA CO., LTD.",
    message:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    rating: 55.96,
    comments: [],
    tags: [],
  },
  {
    id: 10,
    id_user: 9,
    title: "Mylan Pharmaceuticals Inc.",
    message:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    rating: 7.45,
    comments: [],
    tags: [],
  },
  {
    id: 11,
    id_user: 7,
    title: "H and P Industries, Inc. dba Triad Group",
    message:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    rating: 16.1,
    comments: [],
    tags: [],
  },
  {
    id: 12,
    id_user: 4,
    title: "ZION SYNTHETIC FIBER CO., LTD.",
    message:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    rating: 36.12,
    comments: [],
    tags: [],
  },
  {
    id: 13,
    id_user: 3,
    title: "REMEDYREPACK INC.",
    message:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    rating: 95.9,
    comments: [],
    tags: [],
  },
  {
    id: 14,
    id_user: 9,
    title: "REMEDYREPACK INC.",
    message: "In blandit ultrices enim.",
    rating: 5.14,
    comments: [],
    tags: [],
  },
  {
    id: 15,
    id_user: 1,
    title: "Epic Pharma, LLC",
    message:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    rating: 65.26,
    comments: [],
    tags: [],
  },
  {
    id: 16,
    id_user: 7,
    title: "Sandoz Inc",
    message:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    rating: 41.23,
    comments: [],
    tags: [],
  },
  {
    id: 17,
    id_user: 3,
    title: "Heritage Pharmaceuticals Inc.",
    message:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    rating: 76.66,
    comments: [],
    tags: [],
  },
  {
    id: 18,
    id_user: 5,
    title: "Lake Erie Medical & Surgical Supply DBA Quality Care Produtcs LLC",
    message:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    rating: 22.74,
    comments: [],
    tags: [],
  },
  {
    id: 19,
    id_user: 2,
    title: "DAVA Pharmaceuticals, Inc.",
    message: "Maecenas rhoncus aliquam lacus.",
    rating: 36.4,
    comments: [],
    tags: [],
  },
  {
    id: 20,
    id_user: 3,
    title: "Parfums Christian Dior",
    message:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    rating: 29.87,
    comments: [],
    tags: [],
  },
];

export const Questions = () => {
  return (
    <div>
      <CardQuestionContainer>
        <div className="CardQuestionTitle">
          <span>Nuevas</span>
          <span>Mas Visitados</span>
          <span>Mejores Calificadas</span>
        </div>
        <CardQuestion>
          {posts.map((post) => (
            <QuestionCard post={post} />
          ))}
        </CardQuestion>
      </CardQuestionContainer>
    </div>
  );
};
