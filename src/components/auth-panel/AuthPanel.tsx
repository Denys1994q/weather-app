import './AuthPanel.css'
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode  } from "jwt-decode";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setUserData } from "../../store/slices/auth";
import { User } from '../../store/slices/models/user';

interface Response {
    clientId?: string;
    credential?: string;
    select_by?: string;
}

const AuthPanel: React.FC = () => {
    const dispatch = useAppDispatch();
    const userData = useAppSelector(store => store.auth.user);

    const handleLogout = () => {
        googleLogout();
        window.localStorage.removeItem("user");
        dispatch(setUserData(null));
    };

    const handleSuccess = (response: Response) => {
        if (response.credential) {
            const user: User = jwtDecode(response.credential);
            const filteredUser: User = {
                email: user.email,
                name: user.name,
                picture: user.picture,
                given_name: user.given_name,
                family_name: user.family_name,
                locale: user.locale,
            };
            window.localStorage.setItem("user", JSON.stringify(filteredUser));
            dispatch(setUserData(filteredUser));
        }
    };

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
