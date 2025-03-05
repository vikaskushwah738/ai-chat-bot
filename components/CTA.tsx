import { Button } from "./ui/button";
import Link from "next/link";
const CTA = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                   Elevate Your Note-Taking Experience Today
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join thousands of happy users who have revolutionized their Business with BotVisionary.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full hover:bg-white hover:text-gray-950 hover:border-2 border-gray-950" asChild>
                  <Link href="/signup">Get Started for Free</Link>
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  No credit card needed. Get started with our free plan and upgrade whenever you’re ready.
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default CTA