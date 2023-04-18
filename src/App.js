import 'bulma/css/bulma.css';
import './App.css';
import Course  from './Course';
import Angular from './images/angular.jpg';  //İmage leri App.js den Course.js e prop olarak geçeceğimiz için App.js e import ediyoruz
import Bootstarp from './images/bootstrap5.png';
import Csharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.jpg';

function App() {
  return (                         //Kapsayıcı component App.js child componentim Course.js oluyor
    <div className="App">           
      <Course
        image={Angular}                     //Course componentine title ve description adında iki tane prop yolladım
        title="Angular"
        description="blablabla"     //prop isimleri title ve description // App.js in içerisinde 4 tane course componenti var
        />                           
      <Course
      image={Bootstarp}  
      title="Bootstarp"
      description="blablabla"
      />
      <Course
      image={Csharp}  
      title="frontend"
      description="blablabla"
      />
      <Course
      image={KompleWeb}  
      title="C#"
      description="blablabla"
      />  
    </div>
  );
}

export default App;
