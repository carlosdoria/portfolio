import { HomeSection } from 'containers/HomeSection'
import { AboutMeSection } from 'containers/AboutMeSection'
import { SkillsSection } from 'containers/SkillsSection'
import { ContactSection } from 'containers/ContactSection'
import { ProjectsSection } from 'containers/ProjectsSection'

const Home = () => {
  return (
    <main>
      <HomeSection />
      <AboutMeSection />
      <SkillsSection />
      {/* <ProjectsSection /> */}
      {/* <ContactSection /> */}
    </main>
  )
}

export default Home
