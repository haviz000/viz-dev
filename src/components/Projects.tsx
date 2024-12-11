import { useMobileResponsive } from "@/hooks/useMobileResponsive";
import { ProjectsData } from "./constant";
import StickyBar from "./StickyBar";

const Projects = () => {
  const isMobile = useMobileResponsive();
  return (
    <>
      <div className="w-full min-h-screen overflow-x-hidden dark:bg-neutral-900 bg-white dark:text-white flex justify-center flex-col px-4 md:px-0">
        <div className="md:ml-8 w-full text-center md:text-left fixed top-0 mt-14 dark:bg-neutral-900 bg-white md:justify-center">
          <h1 className="text-3xl md:text-5xl font-caveat font-semibold text-center mt-6">
            Projects
          </h1>
          <p className="text-lg md:text-xl font-caveat text-center">
            A set of my prior works
          </p>
        </div>
        <div className="flex flex-col h-auto overflow-y-auto space-y-6 mt-24 items-center">
          {ProjectsData.map((project, index) => (
            <div
              key={index}
              className="w-full max-w-[600px] border-2 border-dashed border-gray-200 dark:border-light rounded overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 px-2 py-2">
                  <img
                    className="w-full h-auto object-cover"
                    src={project.Image ? project.Image : ""}
                    alt="Project Screenshot"
                  />
                </div>
                <div className="flex flex-col gap-2 px-4 py-2 md:w-1/2">
                  <div>
                    <p className="font-caveat font-semibold text-2xl md:text-3xl text-center md:text-left">
                      {project.projectName}
                    </p>
                    <p className="text-xs md:text-sm font-mono text-center md:text-left">
                      Created at {project.date}
                    </p>
                  </div>
                  <p className="text-sm font-extralight text-center md:text-left">
                    {project.desc}
                  </p>
                  <div className="flex justify-center md:justify-start gap-4 text-sm">
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      className="px-3 py-1 border rounded hover:bg-gray-100 transition"
                    >
                      Visit Project
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        className="px-3 py-1 border rounded hover:bg-gray-100 transition"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isMobile && <StickyBar />}
    </>
  );
};

export default Projects;
