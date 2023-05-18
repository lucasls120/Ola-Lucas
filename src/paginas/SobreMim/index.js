import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from './SobreMim.module.css';
import minhaFoto from "assets/minha_foto.png"

export default function SobreMim() {
    return(
       <PostModelo
          fotoCapa={fotoCapa}
          titulo="Sobre mim"
       >
        <h3 className={styles.subtitulo}>
            Olá, eu sou o Lucas Soares!
        </h3>

        <img
            src={minhaFoto}
            alt="Foto do Lucas"
            className={styles.fotoSobreMim}
        />
        <p className={styles.paragrafo}>
        Fiz Direito entre 2017 - 2021 conclui o curso e atuava na área jurídica, entrei na Advocacia Soares em 2017 e fui até 2022 comecei como estagiário e depois virei assistente jurídico. fazendo diversos serviços tais como, criação de petição, breve atendimento ao cliente, acompanhamento em audiências, distribuição processuais e documentos via sistema, guardar documento no arquivo e acompanho o andamento processual. 
        </p>
        <p className={styles.paragrafo}>
        Mas atualmente eu busco transição de carreira, porém antes de entrar nesse mundo da programação, eu sempre gostei de mexer em computador, e certo dia no Instagram me apareceu anúncios sobre Python e comecei a pesquisar sobre e vi o que era Front-end e Back-End e fiquei abismado com aquilo achando muito legal e continuei pesquisando. E não demorei muito, logo iniciei o curso de análise e desenvolvimento de sistemas na (FMU) e já me encontro no 3º semestre e também faço um curso aparte na Alura. 
        </p>

        <p className={styles.paragrafo}>
        Só que antes de entrar na Alura eu tinha na cabeça que eu só queria o Back-end e nada de front, mais ai nas aulas de lógica de programação da Alura acabei me identificando mais com fron-end, e comecei a perceber, o que é fazer uma coisa que você realmente gosta, coisa que nunca tive com o Direito, começo estudar e sempre que aparece algo novo vou atrás de pesquisar e me aprofundar e entender aquilo que está se passando ali na aula e da vontade de estudar. 
        </p>
        
        <p className={styles.paragrafo}>
        E com isso estou estudando HTML, CSS , JavaScript, Node.Js, React e Python, porém mais para frente depois que eu me aprofundar mais ainda nessas linguagens pretendo estudar Angular, Next.js e também pretendo fazer um básico de UX/Ui para saber como funciona um figma e etc.
        </p> 

        <p className={styles.paragrafo}> 
        No rodape tem o Link que vai direto para meu Linkedin e para meu GitHub! deem uma Olhada se quiserem, Obrigado ;)
        </p>
       </PostModelo>
    )
}