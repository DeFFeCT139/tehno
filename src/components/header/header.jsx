import logo from '../../image/svg/logo.svg'

function Header() {
    return (
      <div className="header">  
        <div className='conteiner'>
            <div className="header-inner">
                <div className="header-top">
                    <div className="header-top-logo">
                        <img className="header-top-logo-svg" src={logo} alt="" />
                    </div>
                    <div className="header-top-links">
                        <div className="header-top-link">Главная</div>
                        <div className="header-top-link">Услуги</div>
                        <div className="header-top-link">Проекты</div> 
                        <div className="header-top-link">Системы</div> 
                        <div className="header-top-link">Контакты</div> 
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  