import { LoginForm } from "../../components/Login"
import { Navbar } from "../../components/Navbar"

export const AuthLogin = () => {
    return (
        <div>
            <Navbar />
            <div>
                <LoginForm />
            </div>
        </div>
    )
}