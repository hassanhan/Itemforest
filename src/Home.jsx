import React from 'react'

function Nav()
{
    return(
<>
<h1>Item forest</h1>
<button type="button" className="btn ">Servisies</button>
<button type="button" className="btn ">Main page</button>
<button type="button" className="btn ">Main servies</button>
<button type="button" className="btn ">Apply for coding</button>
<button type="button" className="btn ">Apply for adding Products</button>
<button type="button" className="btn ">Apply for shiping</button>
<button type="button" className="btn ">Apply for owner</button>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://ev6.perigonlive.com/ContentLibrary/Redirect/0c4a75d7-af81-416c-906d-a3a895828285" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://s3-us-west-2.amazonaws.com/tokyofotoawards/uploads/96568/23-20124-19/full/07918070553d5ccf25a7be1a8e60bb76.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypy2MZV0KDoGQKMNMzp1qd-318PwnF-4QSg&usqp=CAU" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</>
 
    )
}

export default Nav