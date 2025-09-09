import Intro from '@/app/_section/Intro'
import SectionWatcher from '@/app/_components/SectionWatcher'
import Header from '@/app/_components/Header'
import InfoSection from '@/app/_section/InfoSection'
import Project from '@/app/_section/Project'
import ScrollProgressBar from './_components/ScrollProgressBar'

export default function Home() {
  return (
    <SectionWatcher id="home">
       <ScrollProgressBar />
      <main
        className="
        w-full min-w-96 max-w-screen-lg min-h-screen mx-auto
        px-5 md:px-8 lg:px-10
        flex flex-col items-center relative">
        <Intro />
        <Header />
        <InfoSection/>
        <Project/>
      </main>
    </SectionWatcher>
  )
}
