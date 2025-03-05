import { Button } from "./ui/button";
import Link from "next/link";
const HeroScetion = () => {
  return (
    <section className="px-16 w-full py-12 md:py-24 lg:py-32 xl:py-48">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Transform Your Ideas with BotVisionary
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          The smart note-taking app designed to organize your thoughts, enhance productivity, and ensure you never overlook anything.
          </p>
        </div>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroScetion