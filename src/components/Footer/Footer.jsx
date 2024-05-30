import React from "react";
import styles from "./footer.module.css";
 export default function Footer() {
 

  return (
    <>
      <div>
        
        <section className={`${styles.footer}   text-white-800 text-center`}>
          <h3 className="font-bold text-3xl mb-12">Contact us</h3>
          <div className="flex flex-wrap">
            <div className="mb-6 lg:mb-0 flex-initial shrink w-full lg:w-5/12 lg:pr-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.722142677905!2d36.95834677371089!3d-0.39783139959826236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828677a4955ff13%3A0x7ae4dae9615396a6!2sDEDAN%20KIMATHI%20UNIVERSITY!5e0!3m2!1sen!2sus!4v1716905744418!5m2!1sen!2sus" width="100%" height="200" allowFullScreen loading="lazy" >

</iframe>


            </div>
            <div className="flex-initial shrink w-full lg:w-7/12 lg:pl-3">
              <form>
                <div className="flex flex-wrap">
                  <div className="flex-initial shrink w-full md:w-9/12 md:pr-3">
                    <div className="grid md:grid-cols-2 md:gap-4 mb-6">
                      <div className="mb-6 md:mb-0">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal   bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleX1"
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal   bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleX2"
                          placeholder="Email address"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal   bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleX3"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="mb-6">
                      <textarea
                        className="form-control block w-full px-3 py-1.5 text-base font-normal   bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleX4"
                        rows="4"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="text-center md:text-left">
                      <button
                        type="submit"
                        className="inline-block px-6 py-2.5 bg-white-600   font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-4 md:mb-0"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                  <div className="flex-initial shrink w-full md:w-3/12 md:pl-3">
                    <ul>
                      <li>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          className="w-5 mx-auto text-white-600 mb-1"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path
                            fill="currentColor"
                            d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                          ></path>
                        </svg>
                        <p className="mb-6">
                          <small>
                            Dedan Kimathi University, DeKut 10012, Nyeri
                          </small>
                        </p>
                      </li>
                      <li>
                        <i className="fas fa-phone fa-2x text-blue-600"></i>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          className="w-6 mx-auto text-white-600 mb-1"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                          ></path>
                        </svg>
                        <p className="mb-6">
                          <small>+154712345678</small>
                        </p>
                      </li>
                      <li>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="envelope"
                          className="w-6 mx-auto text-white-600 mb-1"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                          ></path>
                        </svg>
                        <p>
                          <small>Dekutstp@gmail.com</small>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <div className={styles.copyright}>
          © 2024 Dedan Kimathi Science and Technology Park. All rights reserved
        </div>
      </div>
    </>
  );
}
