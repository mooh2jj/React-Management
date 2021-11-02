import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customer = {
  'name' : '도성곤',
  'birthday' : '911114',
  'gender' : '남자',
  'job' : '개발자'
}

function App() {
  return (
    <div className="App">
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    </div>
  );
}

export default App;
