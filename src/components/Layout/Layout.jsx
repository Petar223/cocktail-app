import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="content-container">{children}</div>
    </div>
  );
}
export default Layout;
