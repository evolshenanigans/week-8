import React from 'react';
import { Link } from 'react-router-dom';
import{ styled } from '@mui/system';
import { Button, CircularProgress } from '@mui/material';
import DriftImage from '../../assets/images/initialddrift.jpg'
import { ClassNames } from '@emotion/react';
import MyLogo from '../../assets/images/projectd2.jpg';
import { getAuth } from 'firebase/auth'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const MyComponent = () => {
    return <img src={MyLogo} />
}

interface Props{
    title: string;
}

const Root = styled('div')({
    padding: 0,
    margin: 0
})

const NavbarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const Logo = styled('h1')({
    margin: '0 0 0 0.45em'

})
const LogoA = styled('a')({
    color: 'rgba(28, 24, 22,)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',

})

const LogoNavigation = styled('ul')({
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black'
})

const Main = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${DriftImage});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
})
const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
})

const SignInText =() =>{
    const auth = getAuth();
    const [SignInWithGoogle, user, loading, error] =useSignInWithGoogle(auth)
    if (loading){
        return <CircularProgress />
    } if (user) {
        return <NavA to='/signin'>Sign Out</NavA>
      } else {
        return <NavA to='/signin'>Sign In</NavA>
      }
}


export const Home = (props: Props) => {
    return (
        <Root>
            <NavbarContainer>
                <Logo>
                    <LogoA href ='https://www.instagram.com/juhyash'>
                    <img src={MyLogo}/>    
                    </LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA to ='#'>Home</NavA>
                    </li>
                    <li>
                        <NavA to ='/dashboard'>Dashboard</NavA>
                    </li>
                    <li>
                        <SignInText/>
                    </li>
                </LogoNavigation>
            </NavbarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p>FLY DOWN AKINA</p>
                    <Button color='primary' variant='contained' component={Link} to='/dashboard'>HIT THE APEX</Button>

                </MainText>
            </Main>
        </Root>
    )
}