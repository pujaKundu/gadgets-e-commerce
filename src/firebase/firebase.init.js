import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;

// steps for authentication
/*
Step-1
1.firebae : create project
2.create web app
3.get configuration
4.initialize firebase
5.enable auth method

---------------------

Step-2 steup component
1.Create Login component
2.Create register component
3.Create route for login and register

------------------------
Step-3 set auth system
1.set up signin method
2.set up signOut method
3.user state
4.special observer
5.return necessary methods and states from useFirebase
 
-------------------

Step-4 create auth context(useAuth)
1.create a auth context
2.create a context provider
3.set context Provider context value
4.use auth provider
5.create useAuth hook

------------------

Step-5 create private route
1.create private route
2.set private route
*/
