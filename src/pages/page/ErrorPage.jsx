import React from "react";
import PageHeader from "../../component/shared/PageHeader";

const ErrorPage = () => {
  return (
    <>
      <PageHeader />
      <div className="container">
        <div
          className={`inner-content text-center relative z-10 lg:pt-[150px] pt-[80px] bg-[url'')] bg-cover bg-center h-screen`}
        >
          <h1
            className="error-head font-lobster mx-auto mr-5 font-normal md:text-[140px] mb-5 text-[120px] leading-[1] text-white"
            style={{ fontSize: "120px", color: "white" }}
          >
            404
          </h1>
          <h3 className="error-para text-[#EFEFEF] mb-[10px] xl:text-[30px] text-[22px] font-semibold">
            Opps! Page not Found
          </h3>
          <p className="text-lg xl:mb-10 mb-[25px] text-[#ffffff80]">
            Sorry. The page you are looking for is not found
          </p>
          <a href="index.html" className="btn btn-md btn-primary btn-hover-1">
            <span>Back to Home</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
