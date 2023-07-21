import { useReactiveVar } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import NotFound from './screens/NotFound';
import { darkModeVar, isLoggedInVar } from './apollo';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from './styles';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div>
        <Router>
          <Switch>
            <Route path="/" exact>
              {isLoggedIn ? <Home /> : <Login />}
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;

/**
 * Switch : 한 번에 딱 하나의 route만 render시켜줌.
 *  exact : url이 정확히 맞는지 확인.
 *browser router와 hash router차이점 : hash outer가 deploy하기 훨씬 쉬움.
 *redirect(Router): redirect시키면, 사용자는 가끔 그 경로가 맞는지 틀렸는지 모를 수 있음. reditect 보단 notfound로 선호.

 Reactive variables (Apollo client포함)
 */
