import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const navItems = [{ name: "Problems", link: "/problems" }];

const Navbar2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Navbar className={"top-5"}>
      <NavBody>
        <Link to="/" className="font-mono font-medium text-white text-base">
          WiseCode
        </Link>
        <NavItems items={navItems} />
        <div className="flex items-center gap-3">
          <NavbarButton
            className={"font-inter font-medium"}
            variant="secondary"
            onClick={() => navigate("/login")}
          >
            Sign in
          </NavbarButton>
          <NavbarButton
            className={"font-inter font-medium"}
            variant="primary"
            onClick={() => navigate("/register")}
          >
            Get started
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <Link to="/" className="font-mono font-medium text-white text-base">
            WiseCode
          </Link>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-neutral-300 mx-auto"
            >
              {item.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 w-full">
            <NavbarButton
              variant="primary"
              className="w-1/2 mx-auto font-medium font-inter"
              onClick={() => {
                navigate("/login");
                setIsMobileMenuOpen(false);
              }}
            >
              Sign in
            </NavbarButton>
            <NavbarButton
              variant="primary"
              className="w-1/2 mx-auto font-medium font-inter"
              onClick={() => {
                navigate("/register");
                setIsMobileMenuOpen(false);
              }}
            >
              Get started
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Navbar2;
