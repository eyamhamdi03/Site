import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAA_TCzuCsfcip6pzbge1e_6Gb2VPnla0o",
  authDomain: "myreactwebsite-93e0b.firebaseapp.com",
  projectId: "myreactwebsite-93e0b",
  storageBucket: "myreactwebsite-93e0b.firebasestorage.app",
  messagingSenderId: "136354709694",
  appId: "1:136354709694:web:159e1c87fc47962dc09eef",
  measurementId: "G-YFY25TB0HG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);