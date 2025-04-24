import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type AccountProps = {
	currentUser: User | null;
};

function Account({ currentUser }: AccountProps) {
  const [user, setUser] = useState<User | null>(null);
  const userID = currentUser!.ID;

  useEffect(() => {  
	const fetchUserInfo = async () => {
	  try {
		const res = await fetch(`https://localhost:7096/api/User/${userID}`);
		const data = await res.json();
		console.log("Fetched user data:", data);
		setUser(data);
	  } catch (error) {
		console.error("Error fetching user info:", error);
	  }
	};
  
	fetchUserInfo();
  }, [currentUser]);
	
	return(
		<>
		<div>
			<br></br>
			<br></br>
			<div className="container py-5">
				<div>
					<h1>Account</h1>
				</div>
				<br></br>
				<div className="container">
          		  <h5>Name:</h5>
          		  <p>{user?.userName || "Failed to load"}</p>

				  <h5>Phone number:</h5>
          		  <p>{user?.phoneNumber || "Failed to load"}</p>

				  <h5>Address:</h5>
          		  <p>{user?.address || "Failed to load"}</p>

				  <h5>Email:</h5>
          		  <p>{user?.email || "Failed to load"}</p>
			
          		  <h5>Balance:</h5>
          		  <p>{user?.funds || 0}</p>
          		</div>
			</div>
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-9">
				
				<strong className="d-block py-2">Previous Orders: </strong>

				<div className="row">
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <div className="card-body d-flex flex-column">
		                <div className="d-flex flex-row">
		                  <h5 className="mb-1 me-1">$34.50</h5>
		                  <span className="text-danger"><s>$49.99</s></span>
		                </div>
		                <p className="card-text">T-shirts with multiple colors, for men and lady</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$120.00</h5>
		                <p className="card-text">Winter Jacket for Men and Women, All sizes</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$120.00</h5>
		                <p className="card-text">T-shirts with multiple colors, for men and lady</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$120.00</h5>
		                <p className="card-text">Blazer Suit Dress Jacket for Men, Blue color</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$510.00</h5>
		                <p className="card-text">Slim sleeve wallet Italian leather - multiple colors</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$79.99</h5>
		                <p className="card-text">T-shirts with multiple colors, for men and lady</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$120.00</h5>
		                <p className="card-text">Winter Jacket for Men and Women, All sizes</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$120.00</h5>
		                <p className="card-text">T-shirts with multiple colors, for men and lady</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
		            <div className="card w-100 my-2 shadow-2-strong">
		              <div className="card-body d-flex flex-column">
		                <h5 className="card-title">$43.50</h5>
		                <p className="card-text">Summer New Men's Denim Jeans Shorts</p>
		                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
		                  <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		        <hr/>
		      </div>
		    </div>
		  </div>
		</div>
		</>
	);
}

export default Account;