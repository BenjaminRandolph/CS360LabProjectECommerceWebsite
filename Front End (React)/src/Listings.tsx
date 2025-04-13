function Listings(){
	return(
	<>
		<header>
			<div className="p-3 text-center bg-white border-bottom">
				<div className="container">
					<div className="row gy-3">
						<div className="col-lg-2 col-sm-4 col-4">
							<a href="https://mdbootstrap.com/" target="_blank" className="float-start">
								<img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="35" />
							</a>
						</div>
						<div className="order-lg-last col-lg-5 col-sm-8 col-8">
							<div className="d-flex float-end">
								<a href="https://github.com/mdbootstrap/bootstrap-material-design" className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank">
									<i className="fas fa-user-alt m-1 me-md-2"></i>
									<p className="d-none d-md-block mb-0">Sign in</p>
								</a>
								<a href="https://github.com/mdbootstrap/bootstrap-material-design" className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank">
									<i className="fas fa-heart m-1 me-md-2"></i>
									<p className="d-none d-md-block mb-0">Wishlist</p>
								</a>
								<a href="https://github.com/mdbootstrap/bootstrap-material-design" className="border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank">
									<i className="fas fa-shopping-cart m-1 me-md-2"></i>
									<p className="d-none d-md-block mb-0">My cart</p>
								</a>
							</div>
						</div>
						<div className="col-lg-5 col-md-12 col-12">
							<div className="input-group float-center">
								<div className="form-outline">
									<input type="search" id="form1" className="form-control" />
									<label className="form-label" htmlFor="form1">Search</label>
								</div>
								<button type="button" className="btn btn-primary shadow-0">
									<i className="fas fa-search"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-primary mb-4">
				<div className="container py-4">
					<h3 className="text-white mt-2">Men's wear</h3>
					<nav className="d-flex mb-2">
						<h6 className="mb-0">
							<a href="" className="text-white-50">Home</a>
							<span className="text-white-50 mx-2"> </span>
							<a href="" className="text-white-50">Library</a>
							<span className="text-white-50 mx-2"> </span>
							<a href="" className="text-white"><u>Data</u></a>
						</h6>
					</nav>
				</div>
			</div>
		</header>
		<section className="">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-3">
		        <button
		                className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
		                type="button"
		                data-mdb-toggle="collapse"
		                data-mdb-target="#navbarSupportedContent"
		                aria-controls="navbarSupportedContent"
		                aria-expanded="false"
		                aria-label="Toggle navigation"
		                >
		          <span>Show filter</span>
		        </button>
		        <div className="collapse card d-lg-block mb-5" id="navbarSupportedContent">
		          <div className="accordion" id="accordionPanelsStayOpenExample">
		            <div className="accordion-item">
		              <h2 className="accordion-header" id="headingOne">
		                <button
		                        className="accordion-button text-dark bg-light"
		                        type="button"
		                        data-mdb-toggle="collapse"
		                        data-mdb-target="#panelsStayOpen-collapseOne"
		                        aria-expanded="true"
		                        aria-controls="panelsStayOpen-collapseOne"
		                        >
		                  Related items
		                </button>
		              </h2>
		              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
		                <div className="accordion-body">
		                  <ul className="list-unstyled">
		                    <li><a href="#" className="text-dark">Electronics </a></li>
		                    <li><a href="#" className="text-dark">Home items </a></li>
		                    <li><a href="#" className="text-dark">Books, Magazines </a></li>
		                    <li><a href="#" className="text-dark">Men's clothing </a></li>
		                    <li><a href="#" className="text-dark">Interiors items </a></li>
		                    <li><a href="#" className="text-dark">Underwears </a></li>
		                    <li><a href="#" className="text-dark">Shoes for men </a></li>
		                    <li><a href="#" className="text-dark">Accessories </a></li>
		                  </ul>
		                </div>
		              </div>
		            </div>
		            <div className="accordion-item">
		              <h2 className="accordion-header" id="headingTwo">
		                <button
		                        className="accordion-button text-dark bg-light"
		                        type="button"
		                        data-mdb-toggle="collapse"
		                        data-mdb-target="#panelsStayOpen-collapseTwo"
		                        aria-expanded="true"
		                        aria-controls="panelsStayOpen-collapseTwo"
		                        >
		                  Brands
		                </button>
		              </h2>
		              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo">
		                <div className="accordion-body">
		                  <div>
		                    <div className="form-check">
		                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked1" checked />
		                      <label className="form-check-label" htmlFor="flexCheckChecked1">Mercedes</label>
		                      <span className="badge badge-secondary float-end">120</span>
		                    </div>
		                    <div className="form-check">
		                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
		                      <label className="form-check-label" htmlFor="flexCheckChecked2">Toyota</label>
		                      <span className="badge badge-secondary float-end">15</span>
		                    </div>
		                    <div className="form-check">
		                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked3" checked />
		                      <label className="form-check-label" htmlFor="flexCheckChecked3">Mitsubishi</label>
		                      <span className="badge badge-secondary float-end">35</span>
		                    </div>
		                    <div className="form-check">
		                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked4" checked />
		                      <label className="form-check-label" htmlFor="flexCheckChecked4">Nissan</label>
		                      <span className="badge badge-secondary float-end">89</span>
		                    </div>
		                    <div className="form-check">
		                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
		                      <label className="form-check-label" htmlFor="flexCheckDefault">Honda</label>
		                      <span className="badge badge-secondary float-end">30</span>
		                    </div>
		                    <div className="form-check">
		                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
		                      <label className="form-check-label" htmlFor="flexCheckDefault">Suzuki</label>
		                      <span className="badge badge-secondary float-end">30</span>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		            <div className="accordion-item">
		              <h2 className="accordion-header" id="headingThree">
		                <button
		                        className="accordion-button text-dark bg-light"
		                        type="button"
		                        data-mdb-toggle="collapse"
		                        data-mdb-target="#panelsStayOpen-collapseThree"
		                        aria-expanded="false"
		                        aria-controls="panelsStayOpen-collapseThree"
		                        >
		                  Price
		                </button>
		              </h2>
		              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree">
		                <div className="accordion-body">
		                  <div className="range">
		                    <input type="range" className="form-range" id="customRange1" />
		                  </div>
		                  <div className="row mb-3">
		                    <div className="col-6">
		                      <p className="mb-0">
		                        Min
		                      </p>
		                      <div className="form-outline">
		                        <input type="number" id="typeNumber" className="form-control" />
		                        <label className="form-label" htmlFor="typeNumber">$0</label>
		                      </div>
		                    </div>
		                    <div className="col-6">
		                      <p className="mb-0">
		                        Max
		                      </p>
		                      <div className="form-outline">
		                        <input type="number" id="typeNumber" className="form-control" />
		                        <label className="form-label" htmlFor="typeNumber">$1,0000</label>
		                      </div>
		                    </div>
		                  </div>
		                  <button type="button" className="btn btn-white w-100 border border-secondary">apply</button>
		                </div>
		              </div>
		            </div>
		            <div className="accordion-item">
		              <h2 className="accordion-header" id="headingThree">
		                <button
		                        className="accordion-button text-dark bg-light"
		                        type="button"
		                        data-mdb-toggle="collapse"
		                        data-mdb-target="#panelsStayOpen-collapseFour"
		                        aria-expanded="false"
		                        aria-controls="panelsStayOpen-collapseFour"
		                        >
		                  Size
		                </button>
		              </h2>
		              <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingThree">
		                <div className="accordion-body">
		                  <input type="checkbox" className="btn-check border justify-content-center" id="btn-check1" checked autoComplete="off" />
		                  <label className="btn btn-white mb-1 px-1"  htmlFor="btn-check1">XS</label>
		                  <input type="checkbox" className="btn-check border justify-content-center" id="btn-check2" checked autoComplete="off" />
		                  <label className="btn btn-white mb-1 px-1"  htmlFor="btn-check2">SM</label>
		                  <input type="checkbox" className="btn-check border justify-content-center" id="btn-check3" checked autoComplete="off" />
		                  <label className="btn btn-white mb-1 px-1"  htmlFor="btn-check3">LG</label>
		                  <input type="checkbox" className="btn-check border justify-content-center" id="btn-check4" checked autoComplete="off" />
		                  <label className="btn btn-white mb-1 px-1"  htmlFor="btn-check4">XXL</label>
		                </div>
		              </div>
		            </div>
		            <div className="accordion-item">
		              <h2 className="accordion-header" id="headingThree">
		                <button
		                        className="accordion-button text-dark bg-light"
		                        type="button"
		                        data-mdb-toggle="collapse"
		                        data-mdb-target="#panelsStayOpen-collapseFive"
		                        aria-expanded="false"
		                        aria-controls="panelsStayOpen-collapseFive"
		                        >
		                  Ratings
		                </button>
		              </h2>
		              <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingThree">
		                <div className="accordion-body">
		                  <div className="form-check">
		                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
		                    <label className="form-check-label" htmlFor="flexCheckDefault">
		                      <i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i>
		                      <i className="fas fa-star text-warning"></i>
		                    </label>
		                  </div>
		                  <div className="form-check">
		                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
		                    <label className="form-check-label" htmlFor="flexCheckDefault">
		                      <i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i>
		                      <i className="fas fa-star text-secondary"></i>
		                    </label>
		                  </div>
		                  <div className="form-check">
		                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
		                    <label className="form-check-label" htmlFor="flexCheckDefault">
		                      <i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-secondary"></i>
		                      <i className="fas fa-star text-secondary"></i>
		                    </label>
		                  </div>
		                  <div className="form-check">
		                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
		                    <label className="form-check-label" htmlFor="flexCheckDefault">
		                      <i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-secondary"></i><i className="fas fa-star text-secondary"></i>
		                      <i className="fas fa-star text-secondary"></i>
		                    </label>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-9">
		        <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
		          <strong className="d-block py-2">32 Items found </strong>
		          <div className="ms-auto">
		            <select className="form-select d-inline-block w-auto border pt-1">
		              <option value="0">Best match</option>
		              <option value="1">Recommended</option>
		              <option value="2">High rated</option>
		              <option value="3">Randomly</option>
		            </select>
		            <div className="btn-group shadow-0 border">
		              <a href="#" className="btn btn-light" title="List view">
		                <i className="fa fa-bars fa-lg"></i>
		              </a>
		              <a href="#" className="btn btn-light active" title="Grid view">
		                <i className="fa fa-th fa-lg"></i>
		              </a>
		            </div>
		          </div>
		        </header>

		        <div className="row">
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <img src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/10.webp" className="card-img-top" />
		              <div className="card-body d-flex flex-column">
		                <div className="d-flex flex-row">
		                  <h5 className="mb-1 me-1">$34,50</h5>
		                  <span className="text-danger"><s>$49.99</s></span>
		                </div>
		                <p className="card-text">T-shirts with multiple colors, for men and lady</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                  <a href="#!" className="btn btn-light border icon-hover px-2 pt-2"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <img src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/11.webp" className="card-img-top" />
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$120.00</h5>
		                <p className="card-text">Winter Jacket for Men and Women, All sizes</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                  <a href="#!" className="btn btn-light border icon-hover px-2 pt-2"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <img src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/12.webp" className="card-img-top" />
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$120.00</h5>
		                <p className="card-text">T-shirts with multiple colors, for men and lady</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                  <a href="#!" className="btn btn-light border icon-hover px-2 pt-2"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <img src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/13.webp" className="card-img-top" />
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$120.00</h5>
		                <p className="card-text">Blazer Suit Dress Jacket for Men, Blue color</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                  <a href="#!" className="btn btn-light border icon-hover px-2 pt-2"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <img src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/14.webp" className="card-img-top" />
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$510.00</h5>
		                <p className="card-text">Slim sleeve wallet Italian leather - multiple colors</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                  <a href="#!" className="btn btn-light border icon-hover px-2 pt-2"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <img src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/10.webp" className="card-img-top" />
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$79.99</h5>
		                <p className="card-text">T-shirts with multiple colors, for men and lady</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                  <a href="#!" className="btn btn-light border icon-hover px-2 pt-2"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <img src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/11.webp" className="card-img-top" />
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$120.00</h5>
		                <p className="card-text">Winter Jacket for Men and Women, All sizes</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                  <a href="#!" className="btn btn-light border icon-hover px-2 pt-2"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <img src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/12.webp" className="card-img-top" />
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$120.00</h5>
		                <p className="card-text">T-shirts with multiple colors, for men and lady</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                  <a href="#!" className="btn btn-light border icon-hover px-2 pt-2"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <img src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/9.webp" className="card-img-top" />
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$43.50</h5>
		                <p className="card-text">Summer New Men's Denim Jeans Shorts</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                  <a href="#!" className="btn btn-light border icon-hover px-2 pt-2"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>

		        <hr />
		        <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-3">
		          <ul className="pagination">
		            <li className="page-item disabled">
		              <a className="page-link" href="#" aria-label="Previous">
		                <span aria-hidden="true">&laquo;</span>
		              </a>
		            </li>
		            <li className="page-item active"><a className="page-link" href="#">1</a></li>
		            <li className="page-item"><a className="page-link" href="#">2</a></li>
		            <li className="page-item"><a className="page-link" href="#">3</a></li>
		            <li className="page-item"><a className="page-link" href="#">4</a></li>
		            <li className="page-item"><a className="page-link" href="#">5</a></li>
		            <li className="page-item">
		              <a className="page-link" href="#" aria-label="Next">
		                <span aria-hidden="true">&raquo;</span>
		              </a>
		            </li>
		          </ul>
		        </nav>
		      </div>
		    </div>
		  </div>            
		</section>
		<footer className="text-center text-lg-start text-muted bg-primary mt-3">
		  <section className="">
		    <div className="container text-center text-md-start pt-4 pb-4">
		      <div className="row mt-3">
		        <div className="col-12 col-lg-3 col-sm-12 mb-2">
		          <a href="https://mdbootstrap.com/" target="_blank" className="text-white h2">
		            MDB
		          </a>
		          <p className="mt-1 text-white">
		            © 2023 Copyright: MDBootstrap.com
		          </p>
		        </div>
		        <div className="col-6 col-sm-4 col-lg-2">
		          <h6 className="text-uppercase text-white fw-bold mb-2">
		            Store
		          </h6>
		          <ul className="list-unstyled mb-4">
		            <li><a className="text-white-50" href="#">About us</a></li>
		            <li><a className="text-white-50" href="#">Find store</a></li>
		            <li><a className="text-white-50" href="#">Categories</a></li>
		            <li><a className="text-white-50" href="#">Blogs</a></li>
		          </ul>
		        </div>
		        <div className="col-6 col-sm-4 col-lg-2">
		          <h6 className="text-uppercase text-white fw-bold mb-2">
		            Information
		          </h6>
		          <ul className="list-unstyled mb-4">
		            <li><a className="text-white-50" href="#">Help center</a></li>
		            <li><a className="text-white-50" href="#">Money refund</a></li>
		            <li><a className="text-white-50" href="#">Shipping info</a></li>
		            <li><a className="text-white-50" href="#">Refunds</a></li>
		          </ul>
		        </div>
		        <div className="col-6 col-sm-4 col-lg-2">
		          <h6 className="text-uppercase text-white fw-bold mb-2">
		            Support
		          </h6>
		          <ul className="list-unstyled mb-4">
		            <li><a className="text-white-50" href="#">Help center</a></li>
		            <li><a className="text-white-50" href="#">Documents</a></li>
		            <li><a className="text-white-50" href="#">Account restore</a></li>
		            <li><a className="text-white-50" href="#">My orders</a></li>
		          </ul>
		        </div>
		        <div className="col-12 col-sm-12 col-lg-3">
		          <h6 className="text-uppercase text-white fw-bold mb-2">Newsletter</h6>
		          <p className="text-white">Stay in touch with latest updates about our products and offers</p>
		          <div className="input-group mb-3">
		            <input type="email" className="form-control border" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
		            <button className="btn btn-light border shadow-0" type="button" id="button-addon2" data-mdb-ripple-color="dark">
		              Join
		            </button>
		          </div>
		        </div>
		      </div>
		    </div>
		  </section>

		  <div className="">
		    <div className="container">
		      <div className="d-flex justify-content-between py-4 border-top">
		        <div>
		          <i className="fab fa-lg fa-cc-visa text-white"></i>
		          <i className="fab fa-lg fa-cc-amex text-white"></i>
		          <i className="fab fa-lg fa-cc-mastercard text-white"></i>
		          <i className="fab fa-lg fa-cc-paypal text-white"></i>
		        </div>

		        <div className="dropdown dropup">
		          <a className="dropdown-toggle text-white" href="#" id="Dropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false"> <i className="flag-united-kingdom flag m-0 me-1"></i>English </a>

		          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="Dropdown">
		            <li>
		              <a className="dropdown-item" href="#"><i className="flag-united-kingdom flag"></i>English <i className="fa fa-check text-success ms-2"></i></a>
		            </li>
		            <li><hr className="dropdown-divider" /></li>
		            <li>
		              <a className="dropdown-item" href="#"><i className="flag-poland flag"></i>Polski</a>
		            </li>
		            <li>
		              <a className="dropdown-item" href="#"><i className="flag-china flag"></i>中文</a>
		            </li>
		            <li>
		              <a className="dropdown-item" href="#"><i className="flag-japan flag"></i>日本語</a>
		            </li>
		            <li>
		              <a className="dropdown-item" href="#"><i className="flag-germany flag"></i>Deutsch</a>
		            </li>
		            <li>
		              <a className="dropdown-item" href="#"><i className="flag-france flag"></i>Français</a>
		            </li>
		            <li>
		              <a className="dropdown-item" href="#"><i className="flag-spain flag"></i>Español</a>
		            </li>
		            <li>
		              <a className="dropdown-item" href="#"><i className="flag-russia flag"></i>Русский</a>
		            </li>
		            <li>
		              <a className="dropdown-item" href="#"><i className="flag-portugal flag"></i>Português</a>
		            </li>
		          </ul>
		        </div>
		      </div>
		    </div>
		  </div>
			</footer>
	</>
	)
};

export default Listings;