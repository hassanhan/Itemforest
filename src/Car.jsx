import React from 'react'
function Car(){
    return(
        <>
       
      <div className="bg-secondary">
        <h1>Why choose us?</h1>
       We here this website care about customers not money ,we would rather have 100mill customers than 100bill dollors.<br/>
      </div>
      
      <div class="jumbotron text-center">
<h1>Subscribe For daily offers!</h1>
  <p>Subscribe to get notifications of the best offers in your likings!</p>
  <form className="form-inline">
    <div className="input-group">
      <input type="email" class="form-control" size="50" placeholder="Email Address" required/>
      <div className="input-group-btn">
        <button type="button" class="btn btn-danger">Subscribe(only costs 21.99$ a month)</button>
      </div>
    </div>
  </form>
</div>
        </>
        
    )
}
export default Car