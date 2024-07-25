import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
     <div className="container">
        <div className="row">
          <nav class="navbar navbar-expand-lg bg-body">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/008/212/813/small_2x/cooking-logo-design-vector.jpg"
                  alt=""
                  width="180"
                  height="100"
                  class="d-inline-block align-text-top"
                />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item n1">
                    <a class="nav-link " aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item n1">
                    <a class="nav-link " href="#">
                      Recipie Overview
                    </a>
                  </li>
                  <li class="nav-item n1">
                    <a class="nav-link " href="#">
                      Design Recipie
                    </a>
                  </li>
                  <li class="nav-item n1">
                    <a class="nav-link " href="#">
                      Design Recipie
                    </a>
                  </li>
                </ul>
                {/* <form class="d-flex" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form> */}
                <i class="fa-solid fa-circle-user fa-2xl"></i>
              </div>
            </div>
          </nav>
        </div>

        <div className="row mt-5 ">
          <h2 className="d-flex justify-content-center c1">
            Good Food. Equals Good Mood. <br />
          </h2>
          <h5 className="d-flex justify-content-center mt-2 c2">
            Cooking Is a Foundation Of Genuine Happiness
          </h5>
        </div>

        <div className="row">
          <div class="container-fluid m-4">
            <form class="d-flex s1" role="search">
              <input
                class="form-control me-2 input1"
                type="search"
                placeholder="Eat, Love, Cook...."
                aria-label="Search"
              />
              <button class="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="row mt-2">
          <div class="l1" style={{ width: "22rem" }}>
            <div class="card-body" 
             style={{ position: "relative" }}>
            <img
                src="https://cdn.gencraft.com/prod/user/015dbbbe-6167-4278-998f-d85a824526ce/8fd58f0a-2076-4435-a112-17f239335d1c/image/image1_0.jpg?Expires=1721928010&Signature=nXILlblqXF81NDrjzWNA5QUNOD4uW0NyOncsxKm~zBYM-bfxgF6abT-L0TgMBHagzUii2~2RzS5luCA6AiouLwqsrQuEllCpIGWF51-GR4BIR8tbr1nCSH2DsDfGMTwqEz3J8khuPRQQr3uQ6jvXC5worl9gFYqRQRf9UXtjlymQNqLiCpw16F-DtuccRTBxH0lUXME5b1o2afrAR3gkO4pOPm3hMQ8Tvq9C25RauMkdoJPqJutMOMUdKGaTemWLTR-iIZEiOP1LBm7VXHantLcDPHY~bg9gk0g~KEDtB-seRuyG3gruoZneMpzki7rCVrqrsWm~b2KVMXSyOgoY4w__&Key-Pair-Id=K3RDDB1TZ8BHT8"
                alt=""
                height={"300px"}
                width={"300px"}
                className="rounded op"
              />
              <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-80%, -80%)",
                  color: "black",
                  textAlign: "left",
                }}>
              <h4 class="card-title">My Recipies</h4>
              <p class="card-text ">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              </div>
              
            </div>
          </div>

          <div className="l2" style={{ width: "45rem" }}>
            <div className="card-body" 
            style={{ position: "relative" }}>
              <img
                src="https://cdn.gencraft.com/prod/user/015dbbbe-6167-4278-998f-d85a824526ce/d5a9cc3f-6d33-491b-b725-6d70b1c2bba3/image/image0_0.jpg?Expires=1721928393&Signature=DlybBCyqsUAJW8v5EpK7ekg1sFgACZKQF1JGFYtfTyWmrpMxBjbg-TD3P6jc5bgsMDBrdSxFQOdVEhnWFN5oxwNatpkTlq9iX-5k4JbHZxyfp0B06O3CdGQ5dI5IgL37gSTJB9Vn5zWN-q4DybSEUX0WXACd356GHgWyK3Jgo4BsRmc6w2ZTUY8LhiwNkX2Ocl4p389~bhf8XT4BoK7jnTSAiNwVRvoGr~9ACzjPr4c4ePFkRN7sqNwtxXu9DSUECbN63mGI6tzPL5ptYVI4VvKvyhbLRyW6L9fraIec609zTZz1Wr5yZCqW39hSFjJnm~TinWwuLiLhLzWZnfN15Q__&Key-Pair-Id=K3RDDB1TZ8BHT8"
                alt=""
                height="300px"
                width="500px"
                className="rounded op"
                style={{ display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-80%, -130%)",
                  color: "black",
                  textAlign: "left",
                }}
              >
                <h4 className="card-title">Cook Book</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
