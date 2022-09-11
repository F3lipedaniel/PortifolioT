import { Profile } from './components/Profile'
import { Link } from './components/link';
import { Tech } from './components/tech';

import styles from './App.module.css';
import './global.css';
import { Experience } from './components/Experiences';
import { Projects } from './components/projects';
import { Education } from './components/Education';


export function App() {
  return (
    <div>
      <div className={styles.wrapper}>
        <Profile/>
        <Link/>
        <Tech/>
        <Experience/>
        <Education/>
        <Projects/>
        </div>
    </div>
    
  )
}
