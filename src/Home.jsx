import { Link } from "react-router-dom";
import React from "react";
import "./App.css";
import logo from "./assets/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Home() {
  return (
    <>
      <div className="container bl">
        <div className="row">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img
                  src={logo}
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
          <div className="container-fluid my-4">
            <div className="d-flex justify-content-center">
              <form className="input-group search-bar" role="search">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text bg-white border-right-0"
                    style={{ height: "42px" }}
                  >
                    <i className="fas fa-search"></i>
                  </span>
                </div>
                <input
                  className="form-control border-left-0"
                  type="search"
                  placeholder="Eat, Love, Cook...."
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <Link class="l1" style={{ width: "24rem" }} to="/menu">
            <div class="card-body" style={{ position: "relative" }}>
              <img
                src="https://img.freepik.com/free-photo/view-cartoon-man-with-delicious-3d-pizza_23-2151017567.jpg?ga=GA1.1.591406262.1711514535&semt=ais_user"
                alt=""
                height={"300px"}
                width={"300px"}
                className="rounded op"
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-80%, -124%)",
                  color: "black",
                  textAlign: "left",
                }}
              >
                <h4 class="card-title myrecipe">
                  My Recipes <i class="fa-solid fa-angles-right fa-fade fa"></i>
                </h4>
                <p class="card-text mt-2 recipetext">
                  Taste the passion in every dish.
                </p>
              </div>
            </div>
          </Link>

          <Link className="l2" style={{ width: "45rem" }} to={"/create"}>
            <div className="card-body" style={{ position: "relative" }}>
              <img
                src="https://img.freepik.com/free-photo/view-cartoon-chef-with-delicious-3d-pizza_23-2151017552.jpg?ga=GA1.1.591406262.1711514535&semt=ais_user"
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
                <h4 className="card-title myrecipe">
                  Cook Book <i class="fa-solid fa-angles-right fa-fade fa"></i>
                </h4>

                <p className="card-text mt-2 recipetext">
                  Kitchen magic happens, when love is the ingredient.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
