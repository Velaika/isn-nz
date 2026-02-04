import { cn } from "@/lib/utils";
import { Footer } from "./footer/Footer";
import GoToTopButton from "@/components/shared/GoToTopButton";
import { NavbarComponent } from "./navbar/Navbar";
import { LayoutPropsType } from "@/types/ui";

/**
 * Provides a consistent page structure with a header, main content area, and footer.
 * Includes essential accessibility features like a skip-to-content link.
 *
 * @param {LayoutPropsType} props - The properties for the layout component.
 * @returns {JSX.Element} The rendered layout.
 */
const Layout = ({
  className,
  children,
  showNav = true,
  showFooter = true,
}: LayoutPropsType) => {
  return (
    <>
      <div
        className={cn(
          "flex min-h-screen flex-col bg-background font-sans",
          className,
        )}
      >
        {showNav && <NavbarComponent />}

        <main id="main-content" className="flex-grow" role="main">
          {children}
        </main>

        {showFooter && <Footer />}
      </div>

      <GoToTopButton />
    </>
  );
};

export default Layout;
