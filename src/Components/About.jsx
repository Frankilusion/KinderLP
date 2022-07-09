function About() {
    return (
      <div className="container-about">
      <svg className="svg-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fbfcff" fill-opacity="1" d="M0,32L48,48C96,64,192,96,288,117.3C384,139,480,149,576,149.3C672,149,768,139,864,154.7C960,171,1056,213,1152,192C1248,171,1344,85,1392,42.7L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
       <div className="presentation">
          <div className="center">
              <div className="text-about">
                    <h1>A Little About Us</h1>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean 
                        sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
                        elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                        <br/><br/>  Morbi accumsan ipsum velit.
                        Nam nec tellus a odio tincidunt auctor a ornare odio.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
                    </p>
                    <div className="button">
                        <a href="#"><h6>LEARN MORE</h6></a>
                    </div>   
              </div>
              <figure className="photo-about">
              <img src={require('../Images/photoAbout1.jpg')} />
              </figure>                 
          </div> 
        </div>



        <svg className="svg-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fbfcff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>  
        </div>
    );
  }
  
  export default About;