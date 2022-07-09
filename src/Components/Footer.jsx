function Footer(){
    return(
        <div className="container-footer">
            <svg className="svg-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fbfcff" fill-opacity="1" d="M0,32L48,48C96,64,192,96,288,117.3C384,139,480,149,576,149.3C672,149,768,139,864,154.7C960,171,1056,213,1152,192C1248,171,1344,85,1392,42.7L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <footer>
                <div className="content">
                    <figure><img src={require('../Images/logo.png')} width="300"/></figure>
                   <h1>LOGO</h1> 
                </div>      
            </footer>
         
        </div>
    );
}

export default Footer;