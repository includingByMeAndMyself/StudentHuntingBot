import Registration from './Components/Registration/Registration.jsx'
import s from './App.module.scss';

function App() {
  return (
      <div>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
        <div className={s.App}>
          <Registration/>
        </div>
      </div>
  );
}

export default App;
