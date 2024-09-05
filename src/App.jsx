import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeIn from "./page/Homepage/HomeIn";
import Home from "./page/Homepage/Home";
import Job from "./page/jobs/Jobs";
import Company from "./component/company/company";
import CompanyIn from "./component/company/companyIn";
import Hiring from "./page/hiring/hiring";
import LoginRegister from "./component/loginRegister/loginRegister";
import Signup from "./component/signup";
import HiringJob from "./page/hiring/page/hiringjob";
import HiringCompany from "./page/hiring/page/hiringcom";
import Upload from "./page/hiring/page/upload/upload";
import ApplicationForm from "./page/apply/Apply";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/job" element={<Job />} />
          <Route path="/company" element={<Company />} />
          <Route path="/companyin" element={<CompanyIn />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/homein" element={<HomeIn />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/hiringjob" element={<HiringJob />} />
          <Route path="/hiringcom" element={<HiringCompany />} />
          <Route path="/apply" element={<ApplicationForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
