import Footer from "./Footer";
import Header from "./Header";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Header />
        <WrappedComponent {...props} />
        <Footer />
      </>
    );
  };
};

export default AppLayout;
