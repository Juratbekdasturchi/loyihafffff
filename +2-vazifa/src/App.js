// import logo from './logo.svg';
import monitor from './Monitor.svg'
import telefon from './Telefon.svg'
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <span> WIX </span>
        <div className="box">
          <img src={monitor} alt="" />
          <img src={telefon} alt="" />
        </div>
        <span>Нажмите «Редактировать», чтобы создать свой сайт</span>
        {/* <a href="#">Подробнее</a> */}
        <button>Редактировать </button>
      </header>
      <main>
        <div>
          <h1> Jur'atbek Abduraimov </h1>
          <ul>
            <li> Asosiy </li>
            <li> Men haqimda </li>
            <li> Aloqa uchun </li>
          </ul>
        </div>

{/* <div className="rasmlar">
          <img src="https://static.wixstatic.com/media/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg/v1/fill/w_526,h_526,al_c,lg_1,q_80,enc_auto/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg" alt="" />
          <img src="https://static.wixstatic.com/media/d78df6_9f4f79dd27814710b261e3acb931156e.jpg/v1/fill/w_351,h_526,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_9f4f79dd27814710b261e3acb931156e.jpg" alt="" />
          <img src="https://static.wixstatic.com/media/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg/v1/fill/w_526,h_526,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg" alt="" />
          <img src="https://static.wixstatic.com/media/d78df6_3eea4c192eed4667a602ead5652459c5.jpg/v1/fill/w_526,h_526,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_3eea4c192eed4667a602ead5652459c5.jpg" alt="" />
          <img src="https://static.wixstatic.com/media/d78df6_afe9335eb67640c988d648f7671308e5.jpg/v1/fill/w_526,h_526,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_afe9335eb67640c988d648f7671308e5.jpg" alt="" />
          <img src="https://static.wixstatic.com/media/d78df6_b572be78b8984e2db58978eb21e433d7.jpg/v1/fill/w_526,h_526,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_b572be78b8984e2db58978eb21e433d7.jpg" alt="" />
          <img src="https://static.wixstatic.com/media/d78df6_b9747effc3074458a295cf5674f8c73c.jpg/v1/fill/w_526,h_526,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_b9747effc3074458a295cf5674f8c73c.jpg" alt="" />
          <img src="https://static.wixstatic.com/media/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg/v1/fill/w_526,h_526,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg" alt="" />
          <img src="https://static.wixstatic.com/media/d78df6_394a136048754355ad8432b30522c761.jpg/v1/fill/w_526,h_526,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_394a136048754355ad8432b30522c761.jpg" alt="" />
</div> */}

      </main>
    </div>
  );
}

export default App;
