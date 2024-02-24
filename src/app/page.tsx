import { AboutMeSection } from 'containers/AboutMeSection'
import { ContactSection } from 'containers/ContactSection'
import { HomeSection } from 'containers/HomeSection'
import { ProjectsSection } from 'containers/ProjectsSection'
import { SkillsSection } from 'containers/SkillsSection'

const Home = () => {
  return (
    <main>
      <HomeSection />
      <AboutMeSection />
      {/* <SkillsSection />
      <ProjectsSection />
      <ContactSection /> */}
    </main>
  )
}

export default Home
