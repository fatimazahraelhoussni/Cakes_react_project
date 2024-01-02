import React, { useRef, useState, useEffect} from "react";
import { Link , useNavigate} from "react-router-dom";
import { Container, Col, Row, Spinner } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { auth } from "../firebase"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef(); 
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
 
    const email = loginNameRef.current.value;
    const password = loginPasswordRef.current.value;

    setLoading(true); // Set loading to true when starting the login process
    await auth.signInWithEmailAndPassword( email, password)
        .then((userCredential) => {
          toast.success("Great You are account create successfuly ", {
            position: toast.POSITION.TOP_CENTER
          });
     
          navigate("/login");
        })
        .catch((error) => {
          toast.error(error.message); 
        }).finally(() => {
        setLoading(false); // Set loading to false when the login process is complete
      });
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/");
      } 
    });
    // Cleanup function to unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <ToastContainer />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center"> 
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input type="email" placeholder="Email" required ref={loginNameRef} />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>      
                <button
                  type="submit"
                  className="addTOCart__btn"
                  disabled={loading}
                >
                  {loading && <Spinner size="sm" />}
                  {loading ? ' Login...' : 'Login'}
                </button>
              </form>
              <Link to="/register">Don't have an account? Create an account</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};


export default Login;
