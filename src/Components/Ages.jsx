function Ages() {
    return (
      <div className="container-ages">
        <div className="contents">
                       
                <div className="title">
                <h2>BEST CHILDCARE TECHNIQUES</h2>
                <figure><img src={require('../Images/divider.png')} width="500" /></figure>
                <h1>Welcome to "LOGO"!</h1>
            </div>
            <div className="ages">
                <figure>
                    <img src={require('../Images/child1.png')} width="300" height="300"/>
                    <figcaption>
                        <h3 className="color4">Young Toddlers</h3>
                        <h4>(12 months - 23 months)</h4>
                    </figcaption>
                </figure>
                <figure>
                    <img src={require('../Images/child2.png')} width="300" height="300"/>
                    <figcaption>
                        <h3 className="color3">Toddlers</h3>        
                        <h4>(2 years old)</h4>
                    </figcaption>
                </figure>
                <figure>
                    <img src={require('../Images/child3.png')} width="300" height="300"/>
                    <figcaption>
                        <h3 className="color1">Preschoolers</h3>
                        <h4>(3 years old)</h4>
                    </figcaption>
                </figure>
                <figure>
                    <img src={require('../Images/child4.png')} width="300" height="300"/>
                    <figcaption>
                        <h3 className="color2">Pre-k</h3>
                        <h4>(Pre-K For All)</h4>
                    </figcaption>
                </figure>    
            </div>       
          </div>
      </div>
    );
  }
  
  export default Ages;