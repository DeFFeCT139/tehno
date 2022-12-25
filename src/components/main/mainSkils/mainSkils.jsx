import Typed from "typed.js";

function MainSkills() {
    //setTimeout(() => {
        //const typed = new Typed('#blockText',{
            //strings: ['/* Антивирусная диагностика, <br/>защита, ликвидация вирусов и угроз */'],
            //contentType: 'html',
            //typeSpeed: 20
        //})
    //}, 1000);
    return (
        <div className="main-skils">
            <div className="main-skils-item"> 
                <div className="main-skils-item-title">
                    <span id="blockText" className="main-skils-item-title-text">/* Антивирусная диагностика, <br/>защита, ликвидация вирусов и угроз */</span>  
                </div>
                <div className="main-skils-item-title">
                    <span id="blockText" className="main-skils-item-title-text">/* Обеспечение работоспособности <br/> компьютерной сети */</span>  
                </div>
                <div className="main-skils-item-title">
                    <span id="blockText" className="main-skils-item-title-text">/* Профилактические работы по <br/> обеспечению доступности серверов */</span>  
                </div>
                <div className="main-skils-item-title">
                    <span id="blockText" className="main-skils-item-title-text">/* Инсталляция программного обеспечения */</span>  
                </div>
                <div className="main-skils-item-title">
                    <span id="blockText" className="main-skils-item-title-text">/* Оптимизация функционирования <br/>рабочих станций организации */</span>
                </div>
            </div>
        </div>
    );
  }
  
  export default MainSkills;