import Home from './components/Main/Home.vue';
import Evaluation from './components/Main/Evaluation.vue';
import Quiz from './components/Quiz/Quiz.vue';
import Results from './components/Main/Results.vue';


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
  }
];
