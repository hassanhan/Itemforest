import React from 'react'
import logo from './logo.png'
console.log(logo); 
const r={
    marginTop:'40px',
    marginLeft:'100px'
}
const y={
    width:'300px',
    marginLeft:'300px',
    border:'black 3px solid',
    marginTop:'20px'
}
const r5={
    width:'200px',
    marginLeft:'650px',
    border:'black 3px solid',
    marginTop:'-94px',
    backgroundColor:'#6F4827'
}
const w3={
    marginLeft:'250px',
    marginTop:'-250px',
}
const w4={
    marginLeft:'180px',
    marginTop:'-30px',
    fontSize:'50px',
    fontFamily:'Baskerville Old Face'
}
function Items()
{
    return(
        <><br/>
        <h1>items</h1>

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
        <h1>Laptops</h1>
        <div class="card-group">
  <div class="card">
  <img src={logo} alt="Logo" />
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">200dhm.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSMfhltCPjp2ebXdeQOLtXwhTOAUT9kGPMsw&usqp=CAU" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">9000dhm.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">900dhm.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<h1> Mobiles</h1>
        <div class="card-group">
  <div class="card">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM3kUKD2WPT-i9g8gWhlcd_iCGsK9MCq6K7Q&usqp=CAU" alt="Logo" width="450" height="300"/>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">2453dhm.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlkE1CjcDYzcO9JksNFYy1Qrt9fWxGJ5Y2HQ&usqp=CAU" alt="Card image cap" width="450" height="300"/>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">2842dhm.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBdu1VqO4tSJm-Bx7VSssfQ2Dsmi_PoiPCuA&usqp=CAU" width="450" height="300"/>
    <div class="card-body">

      <h5 class="card-title"></h5>
      <p class="card-text">5092dhm.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div> 
<h1>Pcs</h1>
<div class="card-group">
  <div class="card">
  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhURFRUYEhgYGBgSGBgYGBgSERgRGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHDUrJCsxNDE0NDU2NDQ0NDQ0NDQ0NDExPTQ0NDExND00MTQ0MTQ0MTQ0NDQ0MTQ2Pz00NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAUGAAIHAQj/xABJEAACAgECAgUIBAsFBwUAAAABAgADEQQhEjEFBhNBUSJSYXGBkZKhMkKx0QcUI1NygrLBwtLwFUNiorMWJDM0Y3PhVIOTw/H/xAAaAQACAwEBAAAAAAAAAAAAAAABAgADBAUG/8QAJxEAAgICAgIBBAIDAAAAAAAAAAECEQMhEjEEUUETYXGRMoEiobH/2gAMAwEAAhEDEQA/AKWqQqpPUWGRJaY0zxUhUSbokMiSDpmipDIkIiQ6VwDJgVrhUqjCVw6VSFkRVKoVao2tMMtMBbETWqaumJJdjBW1QMtSKNd1trV2Q1v5LFdivccTwdcKPzdn+U/vlZ6e0bU6mxG84sDyyrHiB+cRsqZcBlK5AYZBGQeR37opVyaOk9HdNC9C6UWuobhJAQkNgHkW9Ijw6QQfSS1PXWzfs5nMNJ0nfSCK7HQE5IViAT44jqdZ9cvLUP8AI/aJB1NfJ0UdI6fvsVP0w1Z/zgTy7W0KpftqyoGSQ6tt6gd/VOXa3pG25zZY3ExABbABOOWcAZPpirOTzOYKJ9T7HRf9ptGf7wj9R/um69ZdH+e/yWfyzmsySgfUZ1FesOkP9+vucfaIyOltKdhfXnwLhP2sTk4EsPWnpKq1NNTWuDShSxuFV4rPJB3G7AcPM+MFBWRl9WwN9Ehv0SG+ye7+E49GE1tq/RsdfUzD7DJxJ9T7HW1hQkoHVvrGyWcF7s6PgcTMWKN3HJ+r4++dBrgaosjJS6POCeFIyEmFIo1CTJBskfZIJkksVoj2SCdI+6QLpJYrQg6QTJHnSAdIQCbJBMsbZYF1gFFWWaYh3WCxIAIiw6JNUWMIs2HNTNkSMJXPESM1pAOmYlcZSue1pG0rgLIsGlUYSqFrrjSVRS2IBKYdKY0lUOlUhdEQaraV7XdZNJXZ2TPuDh2BUojd4O+SR34BxLhqwtdb2PsqKXPqAz75w+7oN7HZxZw8TM2CDsWJOMg78+cA0pV0T/4QNZT+L1qprtaw8SsvC5WtdyQw5ZJA98qN/ROpOmXWMCa8itSxJbhGwIB+rnIEer6uandc1sux3YjJ9BxkH5euC1nQOqqRiWAThzjtNiRuEA728B3423gpiPe2ivzJhnv9emAU8mTCJutZOSATjc4GcD0yENJgmYmSEDoRg7zbXY7V/wBNvtm2lprZXLuUIXKYTjDtxAFScjh2JOd+U2oQOuD3HAPeBge/l8oACUySbdGO3EyAsoBc4GSiDclu8AePKItSRCSwUvPUrrAPJ0tp9FTH9gn7Pd4Sj4m1SMSAoJPdjnmBqx4y4uzuiJC9nILqV0o+q05493rbs2J5nbIY+nmPZLNwytmqLTVijJAtXHWWDcQEaEXSAdI84i7yCNCLpAOkdcRdxIK0JOkA6xxxF3EgBRxBYjDiC4YRQ6LGUSaIsaRJto5KZtWkbrSDrSOVJJQ8WErSN11zWpI5UkVl0T2quN11zKkjlaRGXxNa640lU2rrjSJAWopvX/V9nSmnHOxuJv8Atpg/NuH3GUihJLdZtZ+Max3Byqns08OFNifa3EfbFtPVCkTthdPXPel9SlGmsd1Vxw8IVgGVnP0QQee+D7I5WgAydsb+jErVaHpTVAD/AJag5J7rH/8APyHrkY4x1e6ERtOtl1Fd7OOJg+Ufg+pw2LhkOMb7j0d4T6xdWtEW09Wj7Xt9QQRSzqRUoJDdpsSCCGH0vqk+uW6V6fax/wAT0K9pafJawf8ADrHeQeW3jyHpMtX4Peha9NZYLMWagVo3bH6RrLNxqM+DYyeZDLnlFYKXSOV9Zep9nR7Vrbaj9pxEBOLiCKcBmyMDOfHx5wNGku7MW1UWtUCV7REZlDDGcso5798t3T+hs6RTW9LqTw02LVQNiG09RIsb0jLcXsaZ1R68fiWju0y1flSWspbi/Jta2AQ4PLGM89+W0plTe+i/GmlcFspltCPnYK2d2UKd/wDEvL3YPrkdqtKyjdQR3Ouceoju9oBh9fx8QsXIPZq7kbY8rgyfbw++G6P6SYsBghuWV5EekeECcoq1tBlHHOTT0/8ATIdVJIA3ycD1naN6UYLLkHB5g5HeNiOcltWGcHhbh8QcPWf1SDw+zb0CRtVDox4lxkbEAcJxzwRseYlkZxl0ZsuGUO1/Y1S5UhgSpHIg4O+xnl6MQCrFTjgxxHgKnmB5o9HLbumqwgMeigjm1dmQTk8I4RkAjhHcdt+UFXaVfj4e/OMYHqxGFXb2mYRBQbLf+DLVr+M31AYDoLAD3Ojch6MO3unTCk5F1Es4ektP4MXT4q2A+eJ2dkiSWzXhdxEHSBdI+yQTpELSOdIs6SSdItYkAGiNdYs4kjYkUsSQraELIvZHLFi1iwisVYzSEcQMgpJVrG61gq1jVazecRMNUsbqSBrWO1LIWxDVJHakgKljlSxWaYBq0jlawNYjdYiMviFrWKdYNd+L6WywHDY4E/7j7A+zc+yPVymde9Zx2JpwdkHaN+m2yj2L+1FrZYVOiqSenqgtPVJOmqMGKKt1l1L22L0fScM44rW7kqxk5PcMAk+jA74DSVvq/wDcdETVpq9rbuTWH62PHPh39+20i9RY5GscHD36ldHk/VqJckeo8Kj1AzqnQ/RqaapaEGAgx6S3ex9JMAYrkwfQnQdOkrFdS485juzt4se/7BEetetars6aWCajUJbQhOw7N18rJ7ssEwe4gSb1HSFFRC2W11kjIDuqEjxwTOO9besBv6QN9bcS1EJWQfJKIdz6mOfYYH0NNpKkdx1dOm6L6KNTobKq6uyZVC8dnEMOcEgEnLMfRmcBFeDjnjv8R3H2jB9sZ6W6Y1A1Yay6zUJxCxFd2dTTYoIwGOM8Llc+uZbpSmcsWwxqzgDZQpQ7cwVII9R8JXljyhyXwHxstZeD6fX5MBUgBkV8KyrxDPDxqQcjvAJ4h4HcEb5jdQWpUBVIB5vzJPgD3SVRZjJsRgEHmDupHpH9Ed0xwy1p9HQng5JtafsrlOoZTkHHj3g+sSzWvxaGs7bahs/r0oef6hkTq+jObV5PeU5sB/hP1h8x6ecf0I4tDZ/hspb39rWf2hL5OLqS9mNRnFThL1YohBGQczYyJosZScHHfg8jju9ckqL+MbjhPPHo8RNNmFxfZrWnkj+u+a8Mc09fkL7ftmr1RQBOr1hTW6Z/C+rP6JdQ3yJnenSfPqsa2Fg5oQ49anP7p9EPvuO/f3xWasD00KMkC6R5kgXSIaBB0i1iSQdItYkUDI2xIlask7ViVqyCNEfYsUsEetWKWCERiVggCI1YIuZBSYrWNVrAViNIs6JwIsPWI5UItWI5UIGXwGqhHKhFqhG6orNUBmsRpBF6xGkERmiJ5qLezRnwTwqWwOZwM4HunBtV15eyxrTSpLksRxttucLnG+BifQCrOWdL9D01am2s1IRxllyi/Qfyl7vA49kVJ2O+iqU9ewOen91n3rJCj8IVI+lQ/sZT9sl6+g9I3Oiv4APsjVfVXQtz06ezI+ww0wxUvg5x1h6Upud3o461tIexHC47VeTKwJ8W8OZ8ZN9G/hH1NaBLK0vIGA5JRzjzsZBPulzXqR0c3OgD1O4/fK5146v9H6OtFrofjsyQ5dyiKuM7E7scjaLTBJOKcrKf1g6bs19va2KiEDhAQEErnYEkksRI2vTsylwGKqQCQCQM5xn3RizRYUnBHkll8CFOG+RzJivo5TRWC7KpDWMRy4iSB7cKAIJJqhca+pbT6VkTqPL09b/WrY0NvvwnL1n/AFB+qJtptbYx4SSyngDbZxwKVQ5xtgMRG+j9MC7abJxchC7D/ip5afNSv60a0els0tnZN2gD1ntVotUWhQpbDtjhXA3I8M5POK63F6sVSepxVtbNqobhientVt1zwknGdyBnYE95jymczInFnocclKKaAlIxUvFTqh/00sPdkpfWST6cE7+meMsLoxntk8/T3r7RWzj5qJIyqv6Jljyg/wAMrVGic3gAcySM7g43xy5yS7ZDWyFcWKw9B4cniz4nPjF9BqbV1Sis+VxBlyOIA8ORt4SR6T1CuWZqwj57uQB+l6x4TbNt5Ejn4ZJeNP4u1b+fsgekTNa+r95nj1xro+vNSH0fvMyyuXnKvZGOk730NZ2ml09nn1Vv7WRTOGuk7V1Lfj6O0x8ENfwOyfwwM0YHtkiyQTpGnWCcRWbBF1i1ix+xYpYIrIR9qxG1ZJ2jMRvWKKyNtERtEkLhEbYUVMSsEXMYsi5kFZYESNVpBVrGq1nTPPRYWtI3WsBWsbrEVmmAasRuuAQRlBEZrghmuMpFkjCRGaYjCSn9e9Jiyq8D6SmtvWp4l+Rb3S4JI3rVpe00j45pi0fq/S/yloFpj0UXTGS2nkPpzJbTGWUPFEtQJB/hD6M7fQs4+lSwtH6H0X+Rz7JN6cx3slsRq23V1KH9Fhg/bEaDOPKLRw+qkNpw5AzSwJHPNb+S33wXSFjUomndeF0JXJzgofKRsDmMNn2iSuksXRW2reMohellIB4sEgDB55x85UtXq2di5z6AeSg74Ge7whnxcU/lHH8d5VOca/x/7fx+zV9Qy2h1OGRlIOcgMhGCPRkZj3WChVtNq7V3A3VnOV4X3ZBjvViykZ7vTunrdWbCvkhQqhVVRsB3nPMknfJ3mlOpZQV2ZCcsjboTyzjuP+IYPplUkr07Ni06T0e9H6oL5JOBnIPd7ZOVWg98gn0yuC9ROwJatvpqoGSVPJlHsI8O+Bo1TIcjfvweUz5cKltdm/B5XBKL6LUDGeiMfjNYP1mNfxqyfxSL013EoP78/ONaK7huqfzbEb2BgZh4tOjq8k1ZDaO016rTvyOaifeAc/OXLrdq67EUBFVw30hz5HiHq3HylL6d05W0jH0Xsrx3+TYwG0eF4bKOxaxVXcY4Mcmyeefo/ObZYuc45L6OTDNGGKeJrb6+xN9GV/kE9R+0z22uN9D1/wC7Vn0H9oza6qaTm3shXSdX/BzZnQKvmWOnvIf+OczsTedD/Bk/5C9PCwP8SAfwQMvwv/ItriBcRlhF3EVm9ClgitojlkUtisIhbErjHbohdFFYnaMyPvWO2mI3tIVSErYq/ONWmKkwiMtlaxlFgkEYQTos87AOgjNYgEEZrgZrgMIIwkAkOkRmyAwkOkXSHQxWaIjCGF4QwKncEEEeIPOAQw6GKyxI5g9Bqses80Yp6wDgH2jB9sf0zRjrhpuDVBxysQN+unkt8uD3xHTtLVtFkETWnaOnUJWjOzBEQFmYnCqoGSSZDNrUqTjsZUUc2YhV39JlT689b6mpOk07rYXXy3XDIEP1FPex29Q9MV0gzkoptlb6y9Ipq9ZbqSvZ1DhIU/Sc8ICsR3FgASO4Y9MrmpuLsXO2e4cgO4QvSGr7Z+PhCbLlR9HiAAJA7v3covVWzMFVSxOwVQWYn0AbmCbX8Y9X+zJOS3GPV2OaXQGyi65Tk08BYf8ATYleL2MViCgkgAZJOABuTnkAO8yTpuv0rW0DgzdX2DqSlg4SysBkEqrgqvPdd+U9Gt1Oia3TgLTYGKO4CnUKRlWVbRkqD38J38YGlS1XsVpa0LrquyZFapUZGPGSrLYVbmrAnuBYcuWJmt1CKz1ipUwxGQXIOCcEqSQfb4yNc5PjJF8syPth0GS3LiXyW/ZB9sRQTkkhlt0jfR6hmzk5Oe4ADGPAbd0c4jjPtkZVd+UO+RkgH0Dl8hJANMmeCUnR1fGncEvWh7rA6Lfe5AJFjOmfGwBxj48+yRGgyz8ZwMhs47yMEn25+2SfTtXaMN8F6tPYM8uLslTHvUzautBpKzyZXZSMb77k57xkd0sjKox/Rj+gpyy76TZbOg686Ws+g/ttNra4Tq4mdHSfQ37bQmoQS45r7IexN5cfwaNh9SnnJW3wlx/GJVbl3li/B+/Dq2HnVOPaGRv3GQtxOpI6E4gHEZeLvA0dGIpZE7Y5ZErjEZZQhfI+6P3mR95iiSEL4haY9cYhdIUyFLItD2RcmERl1QRhBApDrOgzz0EFSMVwCw6mBmvGMoYZDFkMMrRTZAaQw6GKI0YRoGaYoaUwqGLoYZDFaLUiE66UBtOtnejj4X8kj38PulT0zy0dd7+HTInn2KPYoZvtAlR0zR4dDQQp10qZtGWVSzVstoIIHAEzljnmME7CcuLZG43yST45nbFQOrIeTKUPqYYP2ziutoamx6W+kjFD7DjMTIqdlPkxdpg0IzvnHo2PvjH444Uon5NSMMF2LDwZubD0Zx6IS+nTCoslxL4QhGRgQSp7QFgMHDYx6Img4iABxEnAA3JPgAOcVNrSM+10a5xy2jfSus7ew278TBS3pcKAxHummq0llTGuxWR1xlWHCwyARsfQRBYEik6a+Acmk0LNzjXHxU8PmPn2MMfavzi1vONaEcQZPOBA/SxlfmBEbodCtbYIktW20iG5x+hthvnulOVWrNniyptEn00eKmlvGgD4L7V+wie6dGbSrbxlvLKOp7m+qR47TzUZfTVeOdRWPdU4+bNFNKwCmriyRliPq8RwDj1YEkU+Kr2Jlko5J2u1+DpXVof7lT6m/baFvXnNOq//ACNPqf8AbaMuoJVSSS78CKiNY7tjJCqvgOZOAPGWt0c+rZE3JJLqi/Drqf8AFxqfaj4+eIHXaR68cSsmdwHU12YyRkqe7O016Ffg1dDf9VAfUzBT9siafQY2pKzqziLPG7BFLIWdOAnbErzG7TEbzEaLqEbzI68x68yOvaKLISuMRtMbuMRtMhnkLWGLkw1hi5kK2XtIZYJIVZ0TgxQVIZDArCLFZrggytDIYuDCqYDZBDKNDo0UQw6GA1QQ2jRhTE0aHRorRckQPXmomhHHJH39TAjPvAHtlT07TovSul7aiyvvZDw/pjdfmBObaY8o0SLsl6DK9rNRXpekCba1sr1CqR+TWxxeuFwvFyBGM+scpPUGQPX3SK1C34YtW2CV4s9kwKsMjZdyDvz5R5/xsbInxtfGyw9F6/o++t7glNaK5q4nWtPKGMcxjfORucj3SSbU0VJY9K12uqlhXVwm0nHkgBd98iVnofq5ZRp6q1ast5b2dpWbUL2KigouRuqArvz4jHNP0LfWyWI1CtXkLit1XyhZxO2G3YlwcbDyPcu66IuVLRyzp+zVWXNfqVZXfyvKUqOHkoUHcKAMD1RE0NyxnlnG+MgHu9cvXXnot9LpaFLq6K/AMKy2MQmFZySQSAuNh9kpI1OMkA5xzzybAHtmdqmc7InGVNBdJ0X2lZs4uHDcOOHPcDzyPH5Ta+oU1qRzySTyyy2MBt3bKNpFsdo32panhPJNl8d2LHPtMAEL6gYdgOROR6juPkZ7p27o9otc3k1gjGNxmuvccjxupxsF90Vo0zsSUUke/aK1aLccuMkyWqfOmx5t491lTj/6xIvS1lH3HccHmI9pT+QvU7FWptwdj5LMh/1IDiiw6obyHck/aOo9WBnQ0+p/9R49W5WxHDvWUbjygDOy8JygB55PCcd5UDBiPVb/AJCj1P8A6jxhkJJzHasx3UrHOnNZ21a2Fy3FwpWhTsylSZ4mPlEsWbh32/4fKV6tuB1fzSG9xzH7Ezz/AK7oBqwe7n/+QRSiqROVuzrbxO0Qmks46q385Eb3qDNLY508ZHXyOvaSWokVqYrNKEL2kde0bvaR1zxWVyFrjErDGbWilhimZi9hi5MM5gCZCtnQVSEVZFL1t0PnP8BhB1r0Pnv8DTbzj7OTHDL0SqiEUSIHWrQ+e/wNPR1p0Xnt8D/dJyj7NEISXwTIhFkKOtGi/OH4H+6EXrPovzv+R/uk5R9mqESbQwymQK9ZtF+d/wAj/dCp1n0X54fC/wB0nJezVGifQxhDK8vWfRfn19zfdDJ1m0X59Pn90FovTRYkac66Y05p1NyAZGTYo8VYcYA9pI9ktS9Y9Hz/ABhPeZB9NDS6qztzrxQEThwgTJAJbLMwOwyffInQrXyjmFfXXVZxisePkn+aCs60athcrOHW1SjKwyigjGUAPkn+t4p1h6T7W48LmxEyqMyIjle8kKANz7cYkP2h8TKnJ+zHKc7pPRL/ANvazl+M2jG2O0cAAbcsz3+3tZ/6q3/5X++Xf8HX9namk16pVa2o4BtdmU1H6PCrHhGNwQB4eMvidDdEDlVpfhr+6Mk2rssWKTSakzgms6SvuAW257QDkB3ZwCdsgExNsdxz7J9BdYOm9D0dpGdUqbOVStFQBmIOxAH0fH0TgGr1TW2NYxJZjk5JJz4ZOSfDeLJV8lWSFPbtgGMaZ0FfCA3EwBzxApz38nhz3eMTjOt7MNiosVwN3wGyRvy7u72RRUtBNNrbFBTiPC2Ay9zDuBHhJ3o3rJZUMIgP/sBv45Vcy9dQ+idHrQ6X6i+ixMMoWxUras7ZHEpIIPP9IYgSsKi26RBa9tRe7OtNnljDBKmRWAIYbDi71B9kANJqPzF2P0GJz8InXU/B/o8bdIar2ahP5ZW+sXUq+puLTa7ir4cntryrhhz3A4SO/O0bi0O8U66GOgul0q0lVL13q6BwcUWEbu7Dfh8CIPU9btKjcLcanwZGRvWQROdW6/UKzKL7GwSOIWMVODjIOeUUuudzxMzOeWWJY49ZilHBHV+iOmK9ZYldXHlyUDMrLXxgcXCWwQDj7ZaP9mNRj6nxn7pzv8GFmnN47R2V6ybK1L8OnIICklcbsM+O+eW07TTrq8fTT4h98ZI0Q8dONhNBW1dNdbYyiBNjkYUYHyAm1jwD66r84nxL98Xs11X5xPjX75Ga4RpHt5kVqTGLddV+cT4l++R9+rrP10+IRGWCGpMjLmj2ovr89fiEjb7U89fiEUpkxexoq5hbLE85feIs9iecvvEhRJg3MDN2dfOHvEEXXzh7xAIRKpnzfn98IK/0f69syZCKjYUnxH9e2bCk+I/r2zJkA6SNhT/X9Gbin1/L75kyQKNlrPp+X3wgQjuPy++ZMgtjo3CnwPuWbKW839mZMg5MZDCFvMz7FMJWLNwK+YI5IOe3jMmSuU5FiRGaroFn/um9hH88WPVQ+ZYPUU/mmTJneedheKI50Z1datuNW1FTYK5XgBweY57iSbdHaru1Op9wP2GZMjrPMaOONArejNayle3vYeDrlc+kYMhrOr2sJyBW3p7Fc+3NcyZFfkzQJYYvsDb1e1xUjslbu8mqtWx6Dwg+6R1nV7VL/cv7vuMyZJHy5v0Vvx40APQ+pH90/wAMNoadTp7FtFbjhO/knBXkQfWMzJktXkS9Ff0knpl3TptAoOG3GcdlbkbcjtjPqyJE9PdIjUV9mrGvfJ8iwBhtgNhScDw/8TJk0c2PPJJoq39nHz1+G7+SZ+If4x8Fv8k8mSObMqiOaLQsrhlswwOR+Tt9x8nkZab2cD6DDl9U4mTIHJmjF0xJ2fwb3QTcfpmTIExmDbi8YF1bxmTIRWCZH8YJkbxmTJBGaNWfGDNR8f698yZCKaGozXsjMmSAP//Z" alt="Logo" width="450" height="300"/>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">2453dhm.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWzA4O02kpbmgFAGZCpLt9og5OdFECwzWHA&usqp=CAU" alt="Card image cap" width="450" height="300"/>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">2842dhm.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXr8iESpParxUp55j5ovBHIbtki322yx4YA&usqp=CAU" width="450" height="300"/>
    <div class="card-body">

      <h5 class="card-title"></h5>
      <p class="card-text">5092dhm.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div> 
<img src="https://k.nooncdn.com/cms/pages/20210222/80952aac892ba531a3c2d6e26f53fe7a/en_thin.gif"/>

<img style={r} src="https://i.pinimg.com/originals/95/f2/51/95f251dc546d705152a8eaac4867bbb4.jpg" width="1100px" height="200px"/>
   <form>
  <div className="form-group">
    <input style={y} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>  </div>
  <button style={r5} type="submit" className="btn btn-primary">Submit</button>
  <p style={w3} className="display-4 text-white">JOIN OUR NEWSLETTERING!</p>
  <p style={w4} className="text-white">Sign up and get 15% off your first purchase</p>
</form>
        </>
    )
}
export default Items