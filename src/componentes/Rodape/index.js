import styles from './Rodape.module.css'
import GitHub from './github.png' 
import Linkedin from './linkedin.png'

export default function Rodape () {
    return(
        <footer className={styles.rodape}>
          <div className={styles.rodape__icones}>
            <a
              href="https://www.linkedin.com/in/lucas-soares-b7894b248/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="ícone do Linkedin" />
            </a>
            <a
              href="https://github.com/lucasls120"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GitHub} alt="ícone do GitHub" />
            </a>
          </div>
          <div className={styles.lucas}>
            <h2>Links das minhas redes.</h2>
          </div>
        
        </footer>
        
    )
}