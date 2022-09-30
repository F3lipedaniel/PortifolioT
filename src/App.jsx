import { Profile } from './components/Profile'
import { Link } from './components/link';
import { Tech } from './components/tech';
import { Experience } from './components/Experiences';
import {ProjectsHead } from './components/ProjectsBox/projects';
import { Education } from './components/Education/Education';
import styles from './global.css';


export function App() {
  return (
    <div>
      <div className={styles.global}>
        <Profile/>
        <Link/>
        <Tech/>
        <Experience/>
        <Education/>
        <ProjectsHead/>





        </div>
    </div>
    
  )
}
