import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg"; //İmage leri App.js den Course.js e prop olarak geçeceğimiz için App.js e import ediyoruz
import Bootstarp from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    //Kapsayıcı component App.js child componentim Course.js oluyor //div yapısana App css klasının özelliklerini atar.
     <div className="App">                    //JSX formatı içerisinde css tanımlarken class değil className olarak kullanırız
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <section className="section">   //kurs bilgilerinin olduğu div e section css classını uyguladık
        <div className="container">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular} //Course componentine title ve description adında iki tane prop yolladım
                title="Angular"
                description="Bu, React uygulamasında bir bileşenin başlangıç noktasıdır. className özelliği, bir elementin CSS sınıf adlarını belirler. Bu durumda, App adlı bir CSS sınıfı, div elementine atanır. App sınıfı, genellikle uygulamanın ana bileşeni olarak kullanılır ve uygulamanın ana bileşeninin özelliklerini içerir. Bu nedenle, App sınıfı, uygulamanın genel stili ve düzeni için kullanılan CSS özelliklerini içerir."    
              />                  //prop isimleri title ve description // App.js in içerisinde 4 tane course componenti var
            </div>
            <div className="column">
              <Course
                image={Bootstarp}
                title="Bootstarp"
                description="Bu kod parçası bir JSX (JavaScript XML) öğesi olarak tanımlanabilir. JSX, React tarafından kullanılan bir syntax uzantısıdır ve JavaScript'te HTML benzeri kod yazmayı sağlar. Bu belirli JSX öğesi bir section bileşenini tanımlar ve className özelliği kullanılarak bileşene bir CSS sınıfı atanır. Bu sınıf, stil sayfasında belirtilen özellikleri kullanarak bileşenin görünümünü özelleştirmek için kullanılabilir."
              />
            </div>
            <div className="column">
              <Course image={Csharp} title="frontend" description="Githistory, bir Github deposundaki değişiklikleri görselleştiren bir araçtır. Bu araç, bir Git deposunda yapılan değişiklikleri grafiksel bir şekilde gösterir ve tarihsel olarak geriye doğru giden bir zaman çizelgesi sunar. Bu sayede, bir proje üzerinde yapılan değişiklikleri ve gelişmeleri daha kolay takip etmenizi sağlar." />
            </div>
            <div className="column">
              <Course image={KompleWeb} title="C#" description="package.json, bir Node.js projesi veya bir JavaScript paketi için temel bir yapılandırma dosyasıdır. Bu dosya, projenin adı, sürümü, bağımlılıkları ve diğer konfigürasyon ayarları hakkında bilgiler içerir. Node.js paket yöneticisi olan NPM tarafından kullanılan bu dosya, projenin kolayca paylaşılmasına, sürdürülmesine ve tekrar kullanılmasına olanak tanır." />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
