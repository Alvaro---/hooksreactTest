import { Link, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      {/* <h1>Main Appp</h1> */}
      <NavBar />
      <hr />

      <Routes>
        <Route exact="true" path="/" element={<HomePage />} />
        {/* <Route path="/*" element={<HomePage />} /> */}
        {/* Esta sirve para que cualquier cosa que no exista vaya al home, pero mantiene la ruta*/}
        <Route path="/*" element={<Navigate to="/about" />} />
        {/* Es mejor usar el navigate para que cambie la ruta */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </UserProvider>
  );
};
