import AuthForm from './components/AuthForm-form/AuthForm-form.jsx'
import { Route, Switch } from 'react-router-dom'
import ActivationSuccess from './components/ActivationSuccess/ActivationSuccess'
import ResetPasswordForm from './components/ResetPasswordForm/ResetPasswordForm'
import SignupSuccessMessage from './components/Signup-success-message/Signup-success-message'
import Navbar from './components/Navbar/Navbar'
import UserProfile from './components/UserProfile/UserProfile'
import ProjectProfile from './components/ProjectProfile/ProjectProfile'
import StartQuestionsForm from './components/StartQuestionsForm/StartQuestionsForm'
import StartPage from './components/Start-Page/StartPage.jsx'
import Footer from "./components/Footer/Footer.jsx"


function App() {
  
    return (
      <>
            <Navbar />
            <Switch>
                <Route exact path="/start">
                    <StartQuestionsForm />
                </Route>
                <Route exact path="/profile">
                    <UserProfile />
                </Route>
                <Route exact path="/profile/:id">
                    <UserProfile />
                </Route>
                <Route exact path="/auth">
                    <AuthForm />
                </Route>
                <Route exact path="/activation/success/:link">
                    <ActivationSuccess />
                </Route>
                <Route exact path="/resetPassword/:link">
                    <ResetPasswordForm />
                </Route>
                <Route exact path="/signUp/success">
                    <SignupSuccessMessage />
                </Route>
                <Route exact path="/projects/:projectId">
                    <ProjectProfile />
                </Route>
                <Route path="/">
                    <StartPage />
                </Route>
            </Switch>
            {/* <Footer/> */}
            </>
    )
}

export default App
