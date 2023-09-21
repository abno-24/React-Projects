import classes from './Navigation.module.css';

const Navigation = () => {
    console.log(classes);
    return(
        <nav className={`${classes.navigation} container`}>
            <div className={`${classes.logobx}`}>
                <img src="/images/logo.png" alt="brand logo" />
            </div>
            <ul>
                <li href="#">Home</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
        </nav>
    )
}

export default Navigation;