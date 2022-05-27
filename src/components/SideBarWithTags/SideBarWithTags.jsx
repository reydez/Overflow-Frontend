import React from 'react'

export const SideBarWithTags = () => {
  return (
    <div>SideBarWithTags</div>
  )
}



/*COUNTER*/
// @property --num {
//   syntax: '<integer>';
//   inherits: false;
//   initial-value: 0;
// }

// .nums {
//   position: relative;
//   animation-name: counter;
//   animation-duration: 5s;
//   animation-timing-function: ease-in-out;
//   animation-fill-mode: forwards;
//   counter-reset: num var(--num);
//   margin-bottom: 25px;
// }

// .nums::before {
//   width: 3em;
//   font: 800 2.5em system-ui;
//   content: counter(num);
//   color: var(--dark-gray);
//   border: 2px solid var(--dark-gray);
//   padding: 10px 20px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   margin: 4px 2px;
//   cursor: pointer;
//   border-radius: 10%;
//   transition-duration: 0.4s;
// }

// .nums:hover::before {
//   color: #fdfcfa;
//   background-color: var(--dark-gray);
// }

// .nums::after {
//   position: absolute;
//   content: ' Puppies to collect, or create yours!';
//   color: var(--dark-gray);
//   font-weight: 600;
//   padding-left: 10px;
//   margin-left: 2px;
//   font-size: 1.3em;
//   max-width: 240px;
//   top: 50%;
//   transform: translateY(-50%);
// }

// @keyframes counter {
//   from {
//     --num: 0;
//   }
//   to {
//     --num: 174;
//   }
// }