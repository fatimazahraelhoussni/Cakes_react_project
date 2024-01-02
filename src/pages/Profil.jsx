import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { auth } from "../firebase";

const Profil = () => {
    const navigate = useNavigate();
    const user = auth.currentUser;

    const logoutUser = async (e) => {
        e.preventDefault();
        await auth.signOut(auth);
        navigate("/");
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            !user ? navigate("/login") : console.log('auth');
        });
      
        // Cleanup function to unsubscribe when component unmounts
        return () => unsubscribe();
    }, []);

    // Styles
    const pageStyle = {
        backgroundColor: '#e6dbdb', // Fond de la page en rose clair
        color: '#333', // Couleur du texte principale
        fontFamily: 'Arial, sans-serif', // Police de caractères
    };

    const containerStyle = {
        margin: '20px auto', // Centrer le contenu
        padding: '20px',
        backgroundColor: '#FFFFFF', // Fond du conteneur en blanc
        borderRadius: '10px', // Coins arrondis
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Ombre légère
    };

    const welcomeTextStyle = {
        textDecoration: 'underline',
    };

    const buttonStyle = {
        padding: '10px',
        backgroundColor: '#DB938F', // Rose clair
        color: '#FFFFFF', // Texte blanc
        border: '1px solid #CCCCCC', // Bordure grise
        borderRadius: '5px', // Coins arrondis
        cursor: 'pointer', // Curseur au survol
    };

    return (
        <div className="page" style={pageStyle}>
            <div className="container" style={containerStyle}>
                <div className="row justify-content-center">
                    <div className="col-md-4 text-center">
                        <p>
                            Welcome <em style={welcomeTextStyle}>{user ? user.email : ''}</em>. You are logged in!
                        </p>
                        <div className="d-grid gap-2">
                            <button
                                type="submit"
                                className="btn btn-primary pt-3 pb-3"
                                onClick={(e) => logoutUser(e)}
                                style={buttonStyle}
                            >
                                Logout
                            </button>
                        </div>                
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profil;
