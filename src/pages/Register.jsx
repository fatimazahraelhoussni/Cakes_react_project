import React, { useRef, useState, useEffect} from "react";

import { Link ,useNavigate } from "react-router-dom";
import { Container, Col, Row ,Spinner } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../firebase";  


const Register = () => {
  const signupFirstNameRef = useRef();
  const signupLastNameRef = useRef();
  const signupEmailRef = useRef();
  const signupPasswordRef = useRef(); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = signupEmailRef.current.value;
    const password = signupPasswordRef.current.value;
    const FirstName  = signupFirstNameRef.current.value;
    const LastName = signupLastNameRef.current.value;

    
      setLoading(true);

      auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          auth.currentUser.updateProfile({
            displayName: FirstName + " "+ LastName
          }); 
          navigate('/profil')
          // ...
        })
        .catch((error) => {

          toast.error(error.message);  
          // ..
        })
          setLoading(false);
      
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/");
        console.log(user);
      } else {
        // User is signed out
        console.log("user is logged out");
      }
    });
  
    // Cleanup function to unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <Helmet title="sign-up">
      <CommonSection title="sign-up" />
      <ToastContainer />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}> 
                <div className="form__group">
                  <input type="text" placeholder="First Name" required ref={signupFirstNameRef} />
                </div>
                <div className="form__group">
                  <input type="text" placeholder="Last Name" required ref={signupLastNameRef} />
                </div>
                <div className="form__group">
                  <input type="email" placeholder="Email" required ref={signupEmailRef} />
                </div>
                <div className="form__group">
                  <input type="password" placeholder="Password" required ref={signupPasswordRef} />
                </div>
                <button
                  type="submit"
                  className="addTOCart__btn"
                  disabled={loading}
                >
                  {loading && <Spinner size="sm" />}
                  {loading ? ' Signing up...' : 'Sign up'}
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
