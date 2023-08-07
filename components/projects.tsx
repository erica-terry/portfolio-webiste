import ProjectBlock from "./ui/project-block";

export default function Projects() {

  const projects = [1, 2, 3];

  return (
    <section className="relative" id="projects">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-white">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Check out my projects</h2>
            <p className="text-xl text-gray-400">Here, you can explore a curated collection of some of the exciting software development projects I have undertaken.
              Feel free to click on each project to learn more about the problem it aims to solve, the technologies used, and the solutions implemented.</p>
          </div>

          {/* Project Blocks */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {projects.map((p, k) =>
              <ProjectBlock key={k}></ProjectBlock>
            )
            }
          </div>

        </div>
      </div>
    </section>
  )
}