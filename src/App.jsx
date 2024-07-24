import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <div className='container-fuild'>
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand" href="index.html">
              <i class="bi-back"></i>
              <span>Topic</span>
            </a>

            <div class="d-lg-none ms-auto me-4">
              <a href="#top" class="navbar-icon bi-person smoothscroll"></a>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-lg-5 me-lg-auto">
                <li class="nav-item">
                  <a class="nav-link click-scroll" href="#section_1">Home</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link click-scroll" href="#section_2">Browse Topics</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link click-scroll" href="#section_3">How it works</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link click-scroll" href="#section_4">FAQs</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link click-scroll" href="#section_5">Contact</a>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>

                  <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                    <li><a class="dropdown-item" href="topics-listing.html">Topics Listing</a></li>

                    <li><a class="dropdown-item" href="contact.html">Contact Form</a></li>
                  </ul>
                </li>
              </ul>

              <div class="d-none d-lg-block">
                <a href="#top" class="navbar-icon bi-person smoothscroll"></a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div>
      <section class="hero-section d-flex justify-content-center align-items-center" id="section_1">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-8 col-12 mx-auto">
                            <h1 class="text-white text-center">Discover. Learn. Enjoy</h1>

                            <h6 class="text-center">platform for creatives around the world</h6>

                            <form method="get" class="custom-form mt-4 pt-2 mb-lg-0 mb-5" role="search">
                                <div class="input-group input-group-lg">
                                    <span class="input-group-text bi-search" id="basic-addon1">
                                        
                                    </span>

                                    <input name="keyword" type="search" class="form-control" id="keyword" placeholder="Design, Code, Marketing, Finance ..." aria-label="Search"/>

                                    <button type="submit" class="form-control">Search</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
      </div>

    </>
  );
}

export default App;
