import MainHeade from './mainHeader/mainHeader';
import MainProject from './mainProject/mainProject';
import MainSkills from './mainSkils/mainSkils';

function Main() {
    return (
        <div className="main">
            <div className='conteiner'>
                <div className="main-animate">
                    <div className="main-text-animate">Начало</div>
                    <div className="main-crug"></div>
                    <div className="main-polos-animate"></div>
                </div>
                <div className="main-inner">
                    <MainHeade/>
                    <MainSkills/>
                    <MainProject/>
                </div>
            </div>
        </div>
    );
  }
  
  export default Main;