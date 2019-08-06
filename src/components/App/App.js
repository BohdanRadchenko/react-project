import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import Modal from '../Modal/ModalContainer';
// import headers from '../../assets/json/financeHeaders.json';

// const headers = {
//   'Content-Type': 'application/json',
//   Authorization:
//     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjOTk2MmQ0ZGVlOWJhNDAyYzJhODZmOSIsImVtYWlsIjoiM3YyaWt0bzN3d3I0QHRlc3R0a2hpcy5jb20iLCJuYW1lIjoiVGVzdCBTdXBlIiwiaWF0IjoxNTUzNTU3NzI0LCJleHAiOjE1NTM1Njc3MjR9.Yuqy_d1NheW5osTAdzjSUrgAurZtXIZMjQnpTTufzhs',
// };

const transactionToPost = {
  comments: 'test',
};
const id = '5d499640f32930053c65ee82';

axios
  .post(`https://mywallet.goit.co.ua/api/finance/${id}`, transactionToPost, {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjOTk2MmQ0ZGVlOWJhNDAyYzJhODZmOSIsImVtYWlsIjoiM3YyaWt0bzN3d3I0QHRlc3R0a2hpcy5jb20iLCJuYW1lIjoiVGVzdCBTdXBlIiwiaWF0IjoxNTUzNTU3NzI0LCJleHAiOjE1NTM1Njc3MjR9.Yuqy_d1NheW5osTAdzjSUrgAurZtXIZMjQnpTTufzhs',
    },
  })
  .then(console.log)
  .catch(error => console.error(error));

const App = () => (
  <>
    <header>
      <Header />
    </header>{' '}
    <Dashboard />
    <Modal />
  </>
);

export default App;
