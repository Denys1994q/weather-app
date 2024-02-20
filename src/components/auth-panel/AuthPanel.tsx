import { GoogleLogin, googleLogout } from '@react-oauth/google';

interface Response {
    clientId?: string,
    credential?: string,
    select_by?: string
}

const AuthPanel = () => {

    const handleLogout = () => {
        console.log('logout')
        googleLogout();
        // Додаткові дії, якщо потрібно
    };

    const handleSuccess = (response: Response) => {
        // діспатчити юзера 
        console.log(response)
    }

    return (
        <div>
            <GoogleLogin
                onSuccess={credentialResponse => handleSuccess(credentialResponse)}
                onError={() => {
                    console.log("Login Failed");
                }}
            />
        </div>
    );
};

export default AuthPanel;
