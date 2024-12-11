import { selfie } from "@/assets";
import StickyBar from "./StickyBar";
import { useMobileResponsive } from "@/hooks/useMobileResponsive";

const About = () => {
  const isMobile = useMobileResponsive();
  return (
    <div className="flex h-full items-center justify-center px-6 md:px-60 dark:bg-neutral-900 mt-10 dark:text-white flex-col">
      <img
        src={selfie}
        width={300}
        height={300}
        className="rounded-full z-10"
      />
      <div className="mb-20">
        <h1 className="text-3xl font-caveat font-semibold">About</h1>
        <p className="text-sm font-mono mt-4">
          Hey there! I’m Mochamad Haviz Tasmara, but you can call me Haviz or
          Tasmara (or just yell “Haviz!” if you need me). I’m a southern Jakarta
          kid turned Frontend Engineer with a degree in Informatics from Esa
          Unggul University. I spend my days wrangling code with React.js,
          TypeScript, and Tailwind CSS to make web apps look sleek and run
          smooth.
        </p>
        <p className="text-sm font-mono mt-2">
          When I’m not smashing bugs or tweaking pixels, I dive into the backend
          world with Go and Python, whipping up APIs and services that actually
          make things work behind the scenes. I’m also rocking Next.js to tackle
          fullstack projects, so yeah, I can build the whole thing if you let
          me.
        </p>
        <p className="text-sm font-mono mt-2">
          I’ve got a thing for cybersecurity (breaking stuff to make it better
          is my jam) and love geeking out over CTF challenges. Plus, I’m getting
          cozy with blockchain, dreaming of creating the next killer dApp while
          praying gas fees stay low.
        </p>
        <p className="text-sm font-mono mt-2">
          Outside the tech grind, I hang out with my cat Chan, who’s basically
          my fluffy project manager (he’s great at giving me the “why aren’t you
          working?” look). You’ll also find me devouring food, solving LeetCode
          puzzles, or scheming up the next big thing to wow the internet
          (fingers crossed).
        </p>
        <p className="text-sm font-mono mt-2">
          Future me? Hopefully a fullstack wizard, crafting secure, innovative
          apps that do cool things and maybe, just maybe, make life a little
          easier. Until then, it’s me, my laptop, and Chan.
        </p>
        <h1 className="text-3xl font-caveat font-semibold mt-12">Contact</h1>
        <p className="text-sm font-mono mt-2">
          I’m always excited to connect with others, so feel free to reach out
          to me! You can follow me on my social media below:
        </p>
        <div>
          <ul className="list-disc mt-6 ml-8 text-sm flex gap-3 flex-col">
            <li className="font-mono">
              Email - <a>haviz.tasmara000@gmail.com</a>
            </li>
            <li className="font-mono">
              Linkedin -{" "}
              <a
                href="https://www.linkedin.com/in/haviz-tasmara/"
                target="_blank"
              >
                https://www.linkedin.com/in/haviz-tasmara
              </a>
            </li>
            <li className="font-mono">
              Github -{" "}
              <a href="https://github.com/haviz000" target="_blank">
                https://github.com/haviz000
              </a>
            </li>
            <li className="font-mono">
              Medium -{" "}
              <a href="https://medium.com/@haviztasmara000" target="_blank">
                https://medium.com/@haviztasmara000
              </a>
            </li>
            <li className="font-mono">
              Spotify -{" "}
              <a
                href="https://open.spotify.com/playlist/4mm3x2M7S5tAcTy43fGMvI?si=ivBYQ6nmQRu3ouom6wxU2g&pi=a-YTgtOuBuS3um"
                target="_blank"
              >
                Codriding Playlist
              </a>
            </li>
          </ul>
          <p className="font-mono mt-4 text-sm">
            Also, you can read{" "}
            <a
              href="https://drive.google.com/file/d/1THFHYwr8A28nRElliXjJ1DNHMJzRjuC-/view?usp=sharing"
              target="_blank"
              className="underline text-blue-500"
            >
              my resume here
            </a>
          </p>
        </div>
      </div>
      {isMobile && <StickyBar />}
    </div>
  );
};

export default About;
