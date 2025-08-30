import Intro from '@/section/Intro'
import SectionWatcher from '@/components/SectionWatcher'
import Header from '@/components/Header'
import InfoSection from '@/section/InfoSection'
import Skill from '@/section/Skill'

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
