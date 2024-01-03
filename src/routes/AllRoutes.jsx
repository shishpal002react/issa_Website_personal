import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import SupportPage from "../pages/SupportPage";
import DownloadPage from "../pages/DownloadPage";
import PricePage from "../pages/PricePage";
import AboutPage from "../pages/AboutPage";
import SingleEmployee from "../pages/SingleEmployee";
import PartnerPage from "../pages/PartnersPage";
import ResourcesPage from "../pages/ResourcesPage";
import ContactUs from "../pages/ContectUs";
import DemoPage from "../pages/DemoPage";
import NotesPage from "../pages/NotesPage";
import Account from "../pages/Account";
import BlogPage from "../pages/BlogPage";
import SingleBlogPage from "../pages/SingleBlog";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/support-faq" element={<SupportPage />} />
      <Route path="/support-downloads" element={<DownloadPage />} />
      <Route path="/support-notes" element={<NotesPage />} />
      <Route path="/support-account-management" element={<Account />} />
      <Route path="/pricing" element={<PricePage />} />
      <Route path="/about/clinical-advisors" element={<AboutPage />} />
      <Route
        path="/about/clinical-advisors/:employee"
        element={<SingleEmployee />}
      />
      <Route path="/about/partners" element={<PartnerPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/resources/blog/:id" element={<BlogPage />} />
      <Route path="/resources/blog/:blog" element={<SingleBlogPage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/demo-request" element={<DemoPage />} />

      {/* Not Found */}
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};
