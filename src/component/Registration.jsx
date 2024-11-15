import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    sendPasswordResetEmail,
    sendEmailVerification,
    setPersistence,
    browserLocalPersistence,
    deleteUser,
} from "firebase/auth";
import { useState } from "react";
import { app } from "../firebase";
import './Registration.css';

function Registration({ handleview }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const isPasswordValid = (password) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoginError('');
        setSuccessMessage('');

        if (!isPasswordValid(password)) {
            setLoginError("Password must be at least 8 characters long, including uppercase, lowercase, number, and symbol.");
            return;
        }
        setIsLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(userCredential.user);
            setSuccessMessage("Sign-up successful! Please verify your email.");
        } catch (error) {
            console.log(error);
            setLoginError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginError('');
        setSuccessMessage('');
        setIsLoading(true);

        try {
            if (rememberMe) {
                await setPersistence(auth, browserLocalPersistence);
            }
            await signInWithEmailAndPassword(auth, email, password);
            setSuccessMessage("Logged in successfully!");
            if (auth.currentUser.email === 'admin@gmail.com') {
                handleview('admin')
            } else {
                handleview('Applicant')
            }
        } catch (error) {
            console.log(error);
            setLoginError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = async (handleview) => {
        setLoginError('');
        setSuccessMessage('');
        setIsLoading(true);

        try {
            await signInWithPopup(auth, googleProvider);
            setSuccessMessage("Google sign-in successful!");
        } catch (error) {
            console.log(error);
            setLoginError(error.message);
        } finally {
            setIsLoading(false);
            handleview('Applicant')
        }
    };

    const handlePasswordReset = async () => {
        setLoginError('');
        setSuccessMessage('');

        if (!email) {
            setLoginError("Please enter your email for password reset.");
            return;
        }
        try {
            await sendPasswordResetEmail(auth, email);
            setSuccessMessage('Password reset email sent!');
        } catch (error) {
            console.log(error);
            setLoginError(error.message);
        }
    };

    const handleDeleteAccount = async () => {
        setLoginError('');
        setSuccessMessage('');

        if (!auth.currentUser) {
            setLoginError("No user logged in to delete.");
            return;
        }
        try {
            await deleteUser(auth.currentUser);
            setSuccessMessage("Account deleted successfully.");
        } catch (error) {
            console.log(error);
            setLoginError(error.message);
        }
    };

    return (
        <div className="container">
            <h2>Welcome</h2>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {loginError && <p className="error-message">{loginError}</p>}

            <form className="log" onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required
                />
                <div className="input-container">
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                    />
                </div>
                <div className="checkboxes">
                    <label htmlFor="showPassword">
                        <input
                            type="checkbox"
                            id="showPassword"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        Show Password
                    </label>
                    <div className="checkbox-container">
                        <label htmlFor="rememberMe">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            Remember Me
                        </label>
                    </div>
                </div>
                <div className="login_and_sign_up">
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? "Loading..." : "Login"}
                    </button>
                    <button onClick={handleSignUp} className="btn">Sign Up!</button>
                </div>
            </form>
            <button onClick={handlePasswordReset} className="btn">Forgot Password?</button>

            <div className="social-icons">
                <button onClick={handleGoogleLogin} className="google-button">
                    Continue with Google
                </button>
            </div>

            <button onClick={handleDeleteAccount}>Delete Account!</button>
        </div>
    );
}

export default Registration;    
