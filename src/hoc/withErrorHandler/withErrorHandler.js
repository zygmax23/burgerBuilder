import React, { useEffect, useState } from "react";
import Modal from "../../components/organisms/Modal/Modal";

const withErrorHandler = (WrapperdComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);

    let requestInterceptor = null;
    let responseInterceptor = null;

    useEffect(() => {
      requestInterceptor = axios.interceptors.request.use((request) => {
        setError(null);
        return request;
      });
      responseInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          setError(error);
          return Promise.reject(error);
        }
      );

      return () => {
        axios.interceptors.request.eject(requestInterceptor);
        axios.interceptors.response.eject(responseInterceptor);
      };
    }, []);

    return (
      <>
        <Modal show={error} closeModalFn={() => setError(null)}>
          <>
            <p>Something didn't work!</p>
            {error?.message}
          </>
        </Modal>
        <WrapperdComponent {...props} />
      </>
    );
  };
};

export default withErrorHandler;
