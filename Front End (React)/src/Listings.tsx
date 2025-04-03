function Listings(){
	return(
		<div className="position-absolute top-50 start-50 translate-middle">
			<h1>Listings</h1>
			<div className="mb-3">
  				<label className="form-label"></label>
  				<input type="email" className="form-control" placeholder="Search..."></input>
			</div>
		    <ul className="list-group list-group-horizontal">
			  <li className="list-group-item">Item #1</li>
			  <li className="list-group-item">Item #2</li>
			  <li className="list-group-item">Item #3</li>
			</ul>
			<ul className="list-group list-group-horizontal-sm">
			  <li className="list-group-item">Item #4</li>
			  <li className="list-group-item">Item #5</li>
			  <li className="list-group-item">Item #6</li>
			</ul>
			<ul className="list-group list-group-horizontal-sm">
			  <li className="list-group-item">Item #7</li>
			  <li className="list-group-item">Item #8</li>
			  <li className="list-group-item">Item #9</li>
			</ul>
		</div>
	);
}

export default Listings;