import { useState } from "react";
import { Link } from "react-router-dom";

function Cart(){
	const [cartItems, setCartItems] = useState([
		{
		  id: 1,
		  name: "Winter jacket for men and lady",
		  description: "Yellow, Jeans",
		  price: 460,
		  quantity: 1,
		},
		{
		  id: 2,
		  name: "Mens T-shirt Cotton Base",
		  description: "Blue, Medium",
		  price: 12.2,
		  quantity: 2,
		},
		{
		  id: 3,
		  name: "Blazer Suit Dress Jacket for Men",
		  description: "XL size, Jeans, Blue",
		  price: 460,
		  quantity: 1,
		},
	]);
	const updateQuantity = (id: number, quantity: any) => {
		setCartItems(prev =>
		  prev.map(item => item.id === id ? { ...item, quantity: Number(quantity) } : item)
		);
	};
	
	const removeItem = (id: number) => {
		setCartItems(prev => prev.filter(item => item.id !== id));
	};
	
	const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
	const tax = Math.round(totalPrice * 0.05 * 100) / 100;
	const grandTotal = totalPrice + tax;
	
	return(
		<><header>
		<div className="p-3 text-center bg-white border-bottom">
		  <div className="container">
			<div className="row gy-3">
			  <div className="col-lg-2 col-sm-4 col-4">
				<a href="https://mdbootstrap.com/" target="_blank" className="float-start">
				  <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="35" />
				</a>
			  </div>
			  <div className="col-lg-5 col-md-12 col-12">
				<div className="input-group float-center position-absolute top-0 start-50">
				  <div className="form-outline">
					<input type="search" id="form1" className="form-control" placeholder="Search"/>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </header>
	  <section className="bg-light my-5">
  		<div className="container">
  		  <div className="row">
  		    <div className="col-lg-9">
  		      <div className="card border shadow-0">
  		        <div className="m-4">
  		          <h4 className="card-title mb-4">Cart</h4>
  		          {cartItems.map(item => (
  		            <div className="row gy-3 mb-4" key={item.id}>
  		              <div className="col-lg-5">
  		                <div className="me-lg-5">
  		                  <div className="d-flex">
  		                    <div>
  		                      <span className="nav-link">{item.name}</span>
  		                      <p className="text-muted">{item.description}</p>
  		                    </div>
  		                  </div>
  		                </div>
  		              </div>
  		              <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
  		                <div>
  		                  	<select className="form-select me-4" value={item.quantity} onChange={(e) => updateQuantity(item.id, e.target.value)}>
  		                    	{[1, 2, 3, 4].map(q => (<option key={q}>{q}</option>))}
  		                  	</select>
  		                </div>
  		                <div>
  		                  <p className="h6">${(item.price * item.quantity).toFixed(2)}</p>
  		                  <small className="text-muted"> ${item.price.toFixed(2)} / per item </small>
  		                </div>
  		              </div>
  		              <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
  		                <div className="float-md-end">
  		                  <button onClick={() => removeItem(item.id)} className="btn btn-light border text-danger">
  		                    Remove
  		                  </button>
  		                </div>
  		              </div>
  		            </div>
  		          ))}
  		        </div>
  		      </div>
  		    </div>

  		    <div className="col-lg-3">
  		      <div className="card shadow-0 border">
  		        <div className="card-body">
  		          <div className="d-flex justify-content-between">
  		            <p className="mb-2">Total price:</p>
  		            <p className="mb-2">${totalPrice.toFixed(2)}</p>
  		          </div>
  		          <div className="d-flex justify-content-between">
  		            <p className="mb-2">TAX:</p>
  		            <p className="mb-2">${tax.toFixed(2)}</p>
  		          </div>
  		          <hr />
  		          <div className="d-flex justify-content-between">
  		            <p className="mb-2">Total price:</p>
  		            <p className="mb-2 fw-bold">${grandTotal.toFixed(2)}</p>
  		          </div>
			  
  		          <div className="mt-3">
  		            <Link to="/checkout" className="btn btn-success w-100 shadow-0 mb-2">Make Purchase</Link>
  		            <Link to="/listings" className="btn btn-light w-100 border mt-2">Back to shop</Link>
  		          </div>
  		        </div>
  		      </div>
  		    </div>
  		  </div>
  		</div>
	  </section>
	  <section>
		<div className="container my-5">
		  <header className="mb-4">
			<h3>Recommended items</h3>
		  </header>
	  
		  <div className="row">
			<div className="col-lg-3 col-md-6 col-sm-6">
			  <div className="card px-4 border shadow-0 mb-4 mb-lg-0">
				<div className="mask px-2" >
				  <div className="d-flex justify-content-between">
					<h6><span className="badge bg-danger pt-1 mt-3 ms-2">New</span></h6>
					<a href="#"><i className="fas fa-heart text-primary fa-lg float-end pt-3 m-2"></i></a>
				  </div>
				</div>
				<a href="#" className="">
				</a>
				<div className="card-body d-flex flex-column pt-3 border-top">
				  <a href="#" className="nav-link">Gaming Headset with Mic</a>
				  <div className="price-wrap mb-2">
					<strong className="">$18.95</strong>
					<del className="">$24.99</del>
				  </div>
				  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
					<a href="#" className="btn btn-outline-primary w-100">Add to cart</a>
				  </div>
				</div>
			  </div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
			  <div className="card px-4 border shadow-0 mb-4 mb-lg-0">
				<div className="mask px-2" >
				  <a href="#"><i className="fas fa-heart text-primary fa-lg float-end pt-3 m-2"></i></a>
				</div>
				<a href="#" className="">
				</a>
				<div className="card-body d-flex flex-column pt-3 border-top">
				  <a href="#" className="nav-link">Apple Watch Series 1 Sport </a>
				  <div className="price-wrap mb-2">
					<strong className="">$120.00</strong>
				  </div>
				  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
					<a href="#" className="btn btn-outline-primary w-100">Add to cart</a>
				  </div>
				</div>
			  </div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
			  <div className="card px-4 border shadow-0">
				<div className="mask px-2" >
				  <a href="#"><i className="fas fa-heart text-primary fa-lg float-end pt-3 m-2"></i></a>
				</div>
				<a href="#" className="">
				</a>
				<div className="card-body d-flex flex-column pt-3 border-top">
				  <a href="#" className="nav-link">Men's Denim Jeans Shorts</a>
				  <div className="price-wrap mb-2">
					<strong className="">$80.50</strong>
				  </div>
				  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
					<a href="#" className="btn btn-outline-primary w-100">Add to cart</a>
				  </div>
				</div>
			  </div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
			  <div className="card px-4 border shadow-0">
				<div className="mask px-2">
				  <a href="#"><i className="fas fa-heart text-primary fa-lg float-end pt-3 m-2"></i></a>
				</div>
				<a href="#" className="">
				</a>
				<div className="card-body d-flex flex-column pt-3 border-top">
				  <a href="#" className="nav-link">Mens T-shirt Cotton Base Layer Slim fit </a>
				  <div className="price-wrap mb-2">
					<strong className="">$13.90</strong>
				  </div>
				  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
					<a href="#" className="btn btn-outline-primary w-100">Add to cart</a>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </section>
	  </>
	);
}

export default Cart;