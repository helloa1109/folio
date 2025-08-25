import Intro from '@/section/Intro'
import SectionWatcher from '@/components/SectionWatcher'
import Header from '@/components/Header'

export default function Home() {
  return (
    <SectionWatcher id="home">
      <main
        className="
        w-full min-w-96 max-w-screen-lg min-h-screen mx-auto
        px-5 md:px-8 lg:px-10
        flex flex-col items-center relative
      "
      >
        <Intro />
        <Header />
      </main>
    </SectionWatcher>
  )
}
