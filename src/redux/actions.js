import axios from "axios";

const questions = [
  {
    id: 15,
    id_user: 1,
    title: "Epic Pharma, LLC",
    message:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    rating: 65.26,
    comments: [
      {
        id: 8,
        id_user: 4,
        id_post: 15,
        message:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
        rating: 85.09,
      },
      {
        id: 9,
        id_user: 17,
        id_post: 15,
        message:
          "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
        rating: 84.21,
      },
      {
        id: 13,
        id_user: 18,
        id_post: 15,
        message:
          "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
        rating: 95.98,
      },
      {
        id: 46,
        id_user: 6,
        id_post: 15,
        message:
          "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
        rating: 79.12,
      },
    ],
    tags: [
      {
        id: 1,
        name: "Stringtough",
      },
      {
        id: 2,
        name: "Konklux",
      },
    ],
    date: new Date("2022-06-28"),
  },
  {
    id: 19,
    id_user: 2,
    title: "DAVA Pharmaceuticals, Inc.",
    message: "Maecenas rhoncus aliquam lacus.",
    rating: 36.4,
    comments: [
      {
        id: 32,
        id_user: 11,
        id_post: 19,
        message: "Nullam porttitor lacus at turpis.",
        rating: 90.51,
      },
      {
        id: 43,
        id_user: 1,
        id_post: 19,
        message:
          "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
        rating: 81.36,
      },
      {
        id: 49,
        id_user: 19,
        id_post: 19,
        message:
          "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        rating: 76.57,
      },
    ],
    tags: [
      {
        id: 3,
        name: "Veribet",
      },
      {
        id: 4,
        name: "Quo Lux",
      },
      {
        id: 5,
        name: "Bigtax",
      },
    ],
    date: new Date("2019-06-28"),
  },
  {
    id: 9,
    id_user: 2,
    title: "KTAIGA CO., LTD.",
    message:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    rating: 55.96,
    comments: [
      {
        id: 7,
        id_user: 9,
        id_post: 9,
        message:
          "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
        rating: 8.32,
      },
      {
        id: 23,
        id_user: 1,
        id_post: 9,
        message:
          "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
        rating: 32.0,
      },
      {
        id: 38,
        id_user: 4,
        id_post: 9,
        message:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        rating: 33.61,
      },
    ],
    tags: [
      {
        id: 6,
        name: "Fixflex",
      },
    ],
    date: new Date("2021-06-28"),
  },
  {
    id: 6,
    id_user: 3,
    title: "ARSOA USA INC.",
    message:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    rating: 25.72,
    comments: [
      {
        id: 3,
        id_user: 19,
        id_post: 6,
        message: "Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
        rating: 21.95,
      },
      {
        id: 16,
        id_user: 14,
        id_post: 6,
        message:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
        rating: 46.84,
      },
    ],
    tags: [
      {
        id: 4,
        name: "Quo Lux",
      },
      {
        id: 5,
        name: "Bigtax",
      },
      {
        id: 6,
        name: "Fixflex",
      },
    ],
    date: new Date("2018-06-28"),
  },
  {
    id: 13,
    id_user: 3,
    title: "REMEDYREPACK INC.",
    message:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    rating: 95.9,
    comments: [
      {
        id: 14,
        id_user: 10,
        id_post: 13,
        message: "Aliquam sit amet diam in magna bibendum imperdiet.",
        rating: 44.97,
      },
      {
        id: 34,
        id_user: 16,
        id_post: 13,
        message:
          "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
        rating: 83.86,
      },
    ],
    tags: [
      {
        id: 6,
        name: "Fixflex",
      },
      {
        id: 7,
        name: "Stim",
      },
    ],
    date: new Date("2019-06-28"),
  },
  {
    id: 17,
    id_user: 3,
    title: "Heritage Pharmaceuticals Inc.",
    message:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    rating: 76.66,
    comments: [],
    tags: [
      {
        id: 8,
        name: "Cardguard",
      },
      {
        id: 9,
        name: "Voyatouch",
      },
      {
        id: 10,
        name: "Zaam-Dox",
      },
    ],
    date: new Date("2015-06-28"),
  },
  {
    id: 20,
    id_user: 3,
    title: "Parfums Christian Dior",
    message:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    rating: 29.87,
    comments: [
      {
        id: 5,
        id_user: 15,
        id_post: 20,
        message:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
        rating: 86.72,
      },
      {
        id: 11,
        id_user: 4,
        id_post: 20,
        message:
          "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
        rating: 35.74,
      },
      {
        id: 31,
        id_user: 20,
        id_post: 20,
        message: "In hac habitasse platea dictumst.",
        rating: 4.07,
      },
      {
        id: 33,
        id_user: 7,
        id_post: 20,
        message:
          "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        rating: 35.65,
      },
    ],
    tags: [
      {
        id: 7,
        name: "Stim",
      },
    ],
    date: new Date("2022-06-28"),
  },
  {
    id: 12,
    id_user: 4,
    title: "ZION SYNTHETIC FIBER CO., LTD.",
    message:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    rating: 36.12,
    comments: [
      {
        id: 21,
        id_user: 3,
        id_post: 12,
        message:
          "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        rating: 63.3,
      },
      {
        id: 27,
        id_user: 9,
        id_post: 12,
        message:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
        rating: 52.85,
      },
      {
        id: 50,
        id_user: 15,
        id_post: 12,
        message:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
        rating: 14.57,
      },
    ],
    tags: [
      {
        id: 2,
        name: "Konklux",
      },
      {
        id: 3,
        name: "Veribet",
      },
    ],
    date: new Date("2019-06-28"),
  },
  {
    id: 18,
    id_user: 5,
    title: "Lake Erie Medical & Surgical Supply DBA Quality Care Produtcs LLC",
    message:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    rating: 22.74,
    comments: [
      {
        id: 1,
        id_user: 20,
        id_post: 18,
        message:
          "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
        rating: 71.93,
      },
      {
        id: 15,
        id_user: 8,
        id_post: 18,
        message:
          "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
        rating: 22.34,
      },
    ],
    tags: [
      {
        id: 4,
        name: "Quo Lux",
      },
      {
        id: 5,
        name: "Bigtax",
      },
      {
        id: 6,
        name: "Fixflex",
      },
    ],
    date: new Date("2011-06-28"),
  },
];

export const getQuestions = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_QUESTIONS", payload: questions });
  } catch (error) {
    console.log(error);
  }
};

export const getQuestionDetails = (id) => async (dispatch) => {
  const found = questions.find((question) => question.id === Number(id));

  try {
    dispatch({ type: "GET_QUESTION_DETAILS", payload: found });
  } catch (error) {
    console.log(error);
  }
};

export const getQuestionsByName = (name) => async (dispatch) => {
  try {
    const questionsByName = questions.filter((question) =>
      question.title.includes(name)
    );

    dispatch({ type: "GET_QUESTIONS_BY_NAME", payload: questionsByName });
  } catch (error) {
    console.log(error);
  }
};

export const orderByDate = () => {
  return {
    type: "ORDER_BY_DATE",
  };
};
