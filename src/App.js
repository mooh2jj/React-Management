import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name' : '도성곤',
  'birthday' : '911114',
  'gender' : '남자',
  'job' : '개발자'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name' : '홍길동',
    'birthday' : '834514',
    'gender' : '남자',
    'job' : '난민'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name' : '남경필',
    'birthday' : '9678814',
    'gender' : '여자',
    'job' : '정치인'
    }
]

function App() {
  return (
    <div className="App">
      {
        customers.map(c =>{
          return (
            <Customer 
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
