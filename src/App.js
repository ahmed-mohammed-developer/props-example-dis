// استيراد ملف التنسيقات CSS
import './App.css';
// استيراد مكون CardCity
import CardCity from './CardCity';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* عنوان الصفحة */}
        <h1>Names of cities</h1>
        <div className="row">
          {/* عمود يحتوي على مكون CardCity مع تمرير props */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            {/* تمرير props: region و city إلى مكون CardCity */}
            <CardCity region="Riyadh" city="Riyadh"/>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <CardCity region="Asir" city="Abha "/>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <CardCity region="Jazan" city="Abu Arish"/>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <CardCity region="Hail " city="Hail "/>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <CardCity region="Najran" city="Najran"/>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <CardCity region="Dammam" city="Dammam"/>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <CardCity region="Medina" city="Medina"/>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <CardCity region="Mecca" city="Jeddah"/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
