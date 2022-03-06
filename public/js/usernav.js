const createNav = () => {
    let nav = document.querySelector(".navbar");
  
    nav.innerHTML = `
    <div class="container">
    <button
      class="navbar-toggler collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#navbarDefault"
      aria-controls="navbarDefault"
      aria-expanded="true"
      aria-label="Toggle navigation"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <a class="navbar-brand text-brand" href="#"
      >Yours<span class="color-b">Property</span></a
    >
    <div
      class="navbar-collapse collapse justify-content-center"
      id="navbarDefault"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="profile.html">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="buy.html">Buy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sell.html">Sell</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="rent.html">Rent</a>
        </li>
        <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  My List
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item contacted-properties" href="">Contacted Properties</a>
                  <a class="dropdown-item sell-properties" href="">Posted Properties</a>
                </div>
              </li>
      </ul>
    </div>
    <button
      type="button"
      class="btn btn-link nav-search navbar-toggle-box-collapse d-md-block"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo01"
      aria-expanded="false"
      onclick="window.location.href='login.html'"
    >
      <span class="fa fa-sign-out" aria-hidden="true"></span>
    </button>
  </div>
      `;
  };
  
  createNav();
  