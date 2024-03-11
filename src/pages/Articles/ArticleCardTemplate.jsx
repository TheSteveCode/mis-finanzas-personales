/* eslint-disable react/prop-types */


function BlogsTemplates(props) {

    return (
        <>
        <div className="w3-card-4 w3-margin w3-white">
    
    <div className="w3-container">
      <h3><b>{props.title}</b></h3>
      <h5>{props.subtitle}, <span className="w3-opacity">April 7, 2014</span></h5>
    </div>

    <div className="w3-container">
      <p>{props.descrip}</p>
      <div className="w3-row">
        <div className="w3-col m8 s12">
          <p><button className="w3-button w3-padding-large w3-white w3-border"><b>LEER MÁS »</b></button></p>
        </div>

        <div className="w3-col m4 w3-hide-small">
          <p><span className="w3-padding-large w3-right"><b>Comments </b> <span className="w3-tag">0</span></span></p>
        </div>
        </div>
      </div>

      
    </div>
   
      </>
    )
  }
  
  export default BlogsTemplates