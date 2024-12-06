import { TimelineData } from "./constant";

const Timeline = () => {
  return (
    <div className="flex h-full items-center justify-center px-6 md:px-60 dark:bg-neutral-900 mt-10 dark:text-white">
      <div className="space-y-6 border-l-2 border-dashed mb-10">
        {TimelineData.map((item) => (
          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full dark:text-yellow-300 text-rose-700"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <div className="ml-6">
              <h4 className="font-bold dark:text-yellow-300 text-rose-700">
                {item.company} - {item.jobRole}
              </h4>
              <ul className="mt-2 max-w-screen-sm text-sm list-disc">
                {item.reports.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
              <span className="mt-1 block text-sm font-semibold dark:text-yellow-300 text-rose-700">
                {item.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
