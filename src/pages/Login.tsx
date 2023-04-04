import styled from "styled-components";
import {mobile} from "../responsive";
import { login } from "../redux/ducks/authDuck";
import { useSelector, useDispatch } from 'react-redux';
import { useRef} from "react";
import { CircularProgress } from '@mui/material';
import { ThunkDispatch } from 'redux-thunk';

interface RootState {
   login: {
    currentUser: {
      _id: string;
    }
    isFetching: boolean;
    error: boolean;
    };
  };


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile("small")({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const username = useRef<HTMLInputElement>(null); 
  const password = useRef<HTMLInputElement>(null); 
  const isFetching = useSelector((state:RootState) => state.login.isFetching);
  const dispatch: ThunkDispatch<RootState, void, any> = useDispatch();
  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    const usernameValue = username.current?.value;
    const passwordValue = password.current?.value;
    e.preventDefault();
    dispatch(login({ username: usernameValue as string, password: passwordValue as string }))
    console.log(usernameValue, passwordValue)
  };
  
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleClick}>
          <Input 
          placeholder="username" 
          ref={username}
          required
          />
          <Input 
          placeholder="password"
          ref={password}
          required
          type={"password"}
          />
          <Button className="loginButton" type="submit" disabled={isFetching}>
          {isFetching ? (
              <CircularProgress />
            ) : (
              "Log In"
            )}
          </Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;