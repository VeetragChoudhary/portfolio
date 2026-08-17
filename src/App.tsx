import { Footer } from './components/Footer'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Intro } from './sections/Intro'
import { Projects } from './sections/Projects'
import { Toolkit } from './sections/Toolkit'

export default function App() {
  return (
    <div className="min-h-screen bg-bg px-10 text-default antialiased max-[760px]:px-5">
      <div className="mx-auto max-w-[820px] pt-16">
        <Intro />
        <Experience />
        <Projects />
        <Toolkit />
        <Education />
        <Footer />
      </div>
    </div>
  )
}
