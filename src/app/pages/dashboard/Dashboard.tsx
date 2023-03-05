import { Link } from 'react-router-dom'

export const Dashboard = () => {
    return(
        <>
            <p>Tela de dashboard</p>
            <Link to={"/login"}>Login</Link>
        </>
    )
}