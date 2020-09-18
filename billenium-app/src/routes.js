import Home from './components/Main/Home.vue';
import Evaluation from './components/Evaluation/Evaluation.vue';

import Quiz from './components/Quiz/Quiz.vue';
import Results from './components/Main/Results.vue';
import Thanks from './components/Main/Thanks.vue';
import Invalid from './components/Main/Invalid.vue';



export const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/evaluation',
    component: Evaluation
  },
  {
    path: '/quiz',
    component: Quiz
  },
  {
    path: '/results',
    component: Results
  },
  {
    path: '/thankyou',
    component: Thanks
  },
  {
    path: '/invalid',
    component: Invalid
  }
];
