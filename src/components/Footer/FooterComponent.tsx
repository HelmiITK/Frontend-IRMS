const FooterComponent: React.FC = () => {
  return (
    <footer className="footer bg-primary text-green-100 items-center p-4">
      <aside className="grid-flow-col items-center">
        <p className="text-xs lg:text-sm">
          Copyright © {new Date().getFullYear()} - All right reserved -
          Internship from ITK
        </p>
      </aside>
    </footer>
  );
};

export default FooterComponent;
