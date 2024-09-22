import Header from "./Header";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Header />
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default AppLayout;
