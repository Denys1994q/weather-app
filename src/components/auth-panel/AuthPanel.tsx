import './AuthPanel.css'
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { useEffect, useState } from "react";
import { setUserData } from "../../store/slices/auth";

interface Response {
    clientId?: string;
    credential?: string;
    select_by?: string;
}

const AuthPanel = () => {
    const dispatch = useAppDispatch();
    const userData = useAppSelector(store => store.auth.user);
    const [user, setUser] = useState(null);

    const handleLogout = () => {
        googleLogout();
        setUser(null)
    };

    const handleSuccess = (response: Response) => {
        if (response.credential) {
            const user = jwtDecode(response.credential);
            setUser(user as any);
        }
    };

    useEffect(() => {
        dispatch(setUserData(user as any));
    }, [user]);

    return (
        <>
            {userData ? (
                <button className="google-logout-btn" onClick={handleLogout}>
                    <img src={userData.picture} alt="user-photo" />
                    Logout
                </button>
            ) : (
                <div>
                    <GoogleLogin
                        onSuccess={credentialResponse => handleSuccess(credentialResponse)}
                        onError={() => {
                            console.log("Login Failed");
                        }}
                    />
                </div>
            )}
        </>
    );
};

export default AuthPanel;
