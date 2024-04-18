import Profile from "../../users/profile";
import Signin from "../../users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import UserTable from "../../users/tables";
import { SignatureKind } from "typescript";
import Signup from "../../users/signup";
export default function Account() {
    return (
        <div className="container-fluid">
            <Routes>
                <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Signup" element={<Signup/>} />
                <Route path="/Admin/Users" element={<UserTable />} />
            </Routes>
        </div>
    );
}

