import showToggle from "../../ShowToggle"

const Components = () => {
  return (
    <div className="container">
      <h2 className="fontSize-lg text-color3 padding-3 textAlign-center">Components</h2>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">
        Button
      </h3>
      <div style={{display: 'none'}} >
        <div className="display-flex flexDirection-column align-center container">
          <button className="btn-md btn-color3 margin-1">btn-md  btn-color3 </button>
          <button className="btn-lg btn-hoverOutlined-color3 margin-1">btn-lg btn-hoverOutlined-color3</button>
          <button className="btn-xl btn-outlined-color3 margin-1"  style={{width:'100%'}}>btn-xl btn-outlined-color3</button>
          <button className="btn-complement-color3 margin-1">btn-complement-color3</button>
        </div>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">
        Badge
      </h3>
       <div style={{display: 'none'}}>
        <div className="display-flex flexDirection-column align-center container">
          <p className="badge-sm-color3 margin-1">badge-sm-color3</p>
          <p className="badge-md-color3 margin-1">badge-md-color3</p>
          <p className="badge-lg-color3 margin-1">badge-lg-color3</p>
          <p className="badge-xl-color3 margin-1">badge-xl-color3</p>
          <p className="badge-sm-pill-color3 margin-1">badge-sm-pill-color3</p>
          <p className="badge-md-pill-color3 margin-1">badge-md-pill-color3</p>
          <p className="badge-lg-pill-color3 margin-1">badge-lg-pill-color3</p>
          <p className="badge-xl-pill-color3 margin-1">badge-xl-pill-color3</p>
        </div>
       </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">
        Card
      </h3>
       <div style={{display: 'none'}}>
        <div className="display-flex  justify-center container">
          <div className="card1-vertical-sm">
            <h2 className="cardTitle">card1-vertical-sm</h2>
            <div className="cardContent">
              <img src="/foto.png" alt="foto"/>
              <p className="cardTopic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad magni doloremque voluptas fugit, saepe repudiandae veritatis dolore nulla ullam.</p>
            </div>
          </div>
          <div className="card1-vertical-md">
            <h2 className="cardTitle">card1-vertical-md</h2>
            <div className="cardContent">
              <img src="/foto.png" alt="foto"/>
              <p className="cardTopic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad magni doloremque voluptas fugit, saepe repudiandae veritatis dolore nulla ullam.</p>
            </div>
          </div>
          <div className="card1-vertical-lg">
            <h2 className="cardTitle">card1-vertical-lg</h2>
            <div className="cardContent">
              <img src="/foto.png" alt="foto"/>
              <p className="cardTopic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad magni doloremque voluptas fugit, saepe repudiandae veritatis dolore nulla ullam.</p>
            </div>
          </div>
          <div className="card1-vertical-xl">
            <h2 className="cardTitle">card1-vertical-xl</h2>
            <div className="cardContent">
              <img src="/foto.png" alt="foto"/>
              <p className="cardTopic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad magni doloremque voluptas fugit, saepe repudiandae veritatis dolore nulla ullam.</p>
            </div>
          </div>
        </div>
        <br />
        <div className="display-flex  justify-space-evenly container">
          <div className="card1-horizontal-sm">
            <h2 className="cardTitle">card1-horizontal-sm</h2>
            <div className="cardBody">
              <img src="/foto.png" alt="foto"/>
              <p className="cardTopic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad magni doloremque voluptas fugit, saepe repudiandae veritatis dolore nulla ullam.</p>
            </div>
          </div>
          <div className="card1-horizontal-md">
            <h2 className="cardTitle">card1-horizontal-md</h2>
            <div className="cardBody">
              <img src="/foto.png" alt="foto"/>
              <p className="cardTopic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad magni doloremque voluptas fugit, saepe repudiandae veritatis dolore nulla ullam.</p>
            </div>
          </div>
        </div>
        <div className="display-flex  justify-space-evenly container">
          <div className="card1-horizontal-lg">
            <h2 className="cardTitle">card1-horizontal-lg</h2>
            <div className="cardBody">
              <img src="/foto.png" alt="foto"/>
              <p className="cardTopic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad magni doloremque voluptas fugit, saepe repudiandae veritatis dolore nulla ullam.</p>
            </div>
          </div>
          <div className="card1-horizontal-xl">
            <h2 className="cardTitle">card1-horizontal-xl</h2>
            <div className="cardBody">
              <img src="/foto.png" alt="foto"/>
              <p className="cardTopic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad magni doloremque voluptas fugit, saepe repudiandae veritatis dolore nulla ullam.</p>
            </div>
          </div>
        </div>
        <br />
        <div className="display-flex  justify-center container">
          <div className="card2-vertical-sm">
            <h2 className="cardTitle">card2-vertical-sm</h2>
            <div className="cardBody">
              <img src="/foto.png" alt="foto"/>
              <div className="cardContent">
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card2-vertical-md">
            <h2 className="cardTitle">card2-vertical-md</h2>
            <div className="cardBody">
              <img src="/foto.png" alt="foto"/>
              <div className="cardContent">
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card2-vertical-lg">
            <h2 className="cardTitle">card2-vertical-lg</h2>
            <div className="cardBody">
              <img src="/foto.png" alt="foto"/>
              <div className="cardContent">
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card2-vertical-xl">
            <h2 className="cardTitle">card2-vertical-xl</h2>
            <div className="cardBody">
              <img src="/foto.png" alt="foto"/>
              <div className="cardContent">
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="display-flex  justify-space-evenly container">
          <div className="card2-horizontal-sm">
            <h2 className="cardTitle">card2-horizontal-sm</h2>
            <div className="cardBody">
              <img src="/foto.png" alt="foto"/>
              <div className="cardContent">
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card2-horizontal-md">
            <h2 className="cardTitle">card2-horizontal-md</h2>
            <div className="cardBody">
              <img src="/foto.png" alt="foto"/>
              <div className="cardContent">
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="display-flex  justify-space-evenly container">
          <div className="card2-horizontal-lg">
            <h2 className="cardTitle">card2-horizontal-lg</h2>
            <div className="cardBody">
              <img src="/foto.png" alt="foto"/>
              <div className="cardContent">
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card2-horizontal-xl">
            <h2 className="cardTitle">card2-horizontal-xl</h2>
            <div className="cardBody">
              <img src="/foto.png" alt="foto"/>
              <div className="cardContent">
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
                <div className="cardTopic">
                  <h3>cardTopic:</h3>
                  <p>cardTopic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="display-flex justify-space-around">
          <div>
            <h2>card1-vertical:</h2>
            <p><span className="fontWeight-lg">div:</span> card1-vertical-sm</p>
            <p className="paddingLeft-1"><span className="fontWeight-lg">h2:</span> cardTitle</p>
            <p className="paddingLeft-1"><span className="fontWeight-lg">div:</span> cardContent</p>
            <p className="paddingLeft-2"><span className="fontWeight-lg">img</span></p>
            <p className="paddingLeft-2"><span className="fontWeight-lg">p:</span> cardTopic</p>
          </div>
          <div>
            <h2>card1-horizontal:</h2>
            <p><span className="fontWeight-lg">div:</span> card1-horizontal-sm</p>
            <p className="paddingLeft-1"><span className="fontWeight-lg">h2:</span> cardTitle</p>
            <p className="paddingLeft-1"><span className="fontWeight-lg">div:</span> cardBody</p>
            <p className="paddingLeft-2"><span className="fontWeight-lg">img</span></p>
            <p className="paddingLeft-2"><span className="fontWeight-lg">p:</span> cardTopic</p>
          </div>
        </div>
        <br />
        <div className="display-flex justify-space-around">
          <div>
            <h2>card2-vertical:</h2>
            <p><span className="fontWeight-lg">div:</span> card2-vertical-sm</p>
            <p className="paddingLeft-1"><span className="fontWeight-lg">h2:</span> cardTitle</p>
            <p className="paddingLeft-1"><span className="fontWeight-lg">div:</span> cardBody</p>
            <p className="paddingLeft-2"><span className="fontWeight-lg">img</span></p>
            <p className="paddingLeft-2"><span className="fontWeight-lg">div:</span> cardContent</p>
            <p className="paddingLeft-3"><span className="fontWeight-lg">div:</span> cardTopic</p>
            <p className="paddingLeft-4"><span className="fontWeight-lg">h3</span></p>
            <p className="paddingLeft-4"><span className="fontWeight-lg">p</span></p>
          </div>
          <div>
            <h2>card2-horizontal:</h2>
            <p><span className="fontWeight-lg">div:</span> card2-horizontal-sm</p>
            <p className="paddingLeft-1"><span className="fontWeight-lg">h2:</span> cardTitle</p>
            <p className="paddingLeft-1"><span className="fontWeight-lg">div:</span> cardBody</p>
            <p className="paddingLeft-2"><span className="fontWeight-lg">img</span></p>
            <p className="paddingLeft-2"><span className="fontWeight-lg">div:</span> cardContent</p>
            <p className="paddingLeft-3"><span className="fontWeight-lg">div:</span> cardTopic</p>
            <p className="paddingLeft-4"><span className="fontWeight-lg">h3</span></p>
            <p className="paddingLeft-4"><span className="fontWeight-lg">p</span></p>
          </div>
        </div>
        <br />

       </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">
        Form
      </h3>
      <div style={{display: 'none'}}>
        <div className="container">
            <form className="form-sm">
              <label>form-sm</label>
              <input type="text" />
            </form>
            <form className="form-md">
              <label>form-md</label>
              <input type="text" />
            </form>
            <form className="form-lg">
              <label>form-lg</label>
              <input type="text" />
            </form>
            <form className="form-xl">
              <label>form-xl</label>
              <input type="text" />
            </form>
            <form>
              <div className="formRow">
                <div className="inputRow">
                  <label>label</label>
                  <input type="checkbox" name="" id="" />
                </div>
                <div className="inputRow">
                  <label>label</label>
                  <input type="radio" name="" id="" />
                </div>
              </div>
            </form>
            <br />
            <div>
            <h2>form horizontal:</h2>
            <p><span className="fontWeight-lg">div:</span> formRow</p>
            <p className="paddingLeft-1"><span className="fontWeight-lg">div:</span> inputRow</p>
            <p className="paddingLeft-2"><span className="fontWeight-lg">label</span></p>
            <p className="paddingLeft-2"><span className="fontWeight-lg">input</span></p>
            <br />
          </div>
        </div>
      </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">
        Link
      </h3>
       <div style={{display: 'none'}}>
        <div className="display-flex flexDirection-column align-center container">
          <p className="link-color3 margin-1">link-color3</p>
          <p className="link-underline-color3 margin-1">link-underline-color3</p>
          <p className="link-bg-color3 margin-1">link-bg-color3 </p>
        </div>
       </div>
      <h3 onClick={showToggle} className="bg-colorGrey-light-7 text-color3 textAlign-center borderRadius-2 margin-2 padding-2 pointer">
        Navbar
      </h3>
       <div style={{display: 'none'}}>
        <div className="navbar-sm navbar1-color3">
          <h1 className="siteTitle-md">siteTitle-md</h1>
          <p>navbar-sm navbar1-color3</p>
        </div>
        <br />
        <div className="navbar2 navbar-sm bg-color3">
          <h1 className="siteTitle fontSize-lg">siteTitle fontSize-lg</h1>
          <div className="navbar-row">
            <p>navbar2</p>
            <p>navbar-sm</p>
            <p>bg-color3</p>
            <p>navbar-row</p>
          </div>
        </div>
        <br /><br /><br />
       </div>
    </div>
  )
}

export default Components