import Button from "../../UI/Button/Button";

function MainHeader() {
    let nameButton = 'Разработать систему'
    return (
        <div className="main-inner">
            <div className="main-header-content">
                <div className="main-header-bottom-content">
                    <div className="main-header-bottom-content-title">Разработка программных<br/> решений и информационных <br/> систем</div>
                    <Button props={nameButton}/>
                </div>
            </div>
        </div>
    );
  }
  
  export default MainHeader;