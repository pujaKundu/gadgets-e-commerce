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

Step-2
1.Create Login component
2.Create register component
3.Create route for login and register
*/
