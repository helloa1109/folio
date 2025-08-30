import Intro from '@/app/_section/Intro'
import SectionWatcher from '@/app/_components/SectionWatcher'
import Header from '@/app/_components/Header'
import InfoSection from '@/app/_section/InfoSection'
import Skill from '@/app/_section/Skill'

export default function Home() {
  return (
    <SectionWatcher id="home">
      <main
        className="
        w-full min-w-96 max-w-screen-lg min-h-screen mx-auto
        px-5 md:px-8 lg:px-10
        flex flex-col items-center relative">
        <Intro />
        <Header />
        <InfoSection/>
        <Skill/>
      </main>
    </SectionWatcher>
  )
}
