const Timeline = () => {
  return (
    <div className="container dark:bg-neutral-900 bg-white mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 dark:border-white border-neutral-900 h-full border"
          style={{ left: "50%" }}
        ></div>
        {/* <!-- right timeline --> */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 dark:bg-white bg-neutral-900 w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white dark:text-neutral-900">
              1
            </h1>
          </div>
          <div className="order-1 bg-green-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">GOJEK </h3>{" "}
            <p>Feb 2022 - Aug 2022</p>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Frontend Engineer (Internship)
            </p>
          </div>
        </div>

        {/* <!-- left timeline --> */}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>

          <div className="z-20 flex items-center order-1 dark:bg-white bg-neutral-900 w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white dark:text-neutral-900">
              2
            </h1>
          </div>
          <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
