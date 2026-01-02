import "../css/Landing.css"
import { BsLinkedin, BsGithub, BsFileEarmarkTextFill } from "react-icons/bs"

function Landing() {
    return (
        <section id="hero">
            <div className="hero-wrapper">
                <h3>Oi 👋 eu sou o Gabriel</h3>
                <div className="hero-line">
                    <h2 id="hero-stack">FULLSTACK</h2>
                    <div className="hero-icons">
                        <a href=""><BsLinkedin /></a>
                        <a href=""><BsGithub /></a>
                        <a href=""><BsFileEarmarkTextFill /></a>
                    </div>
                </div>
                <h2 id="hero-dev">DEVELOPER</h2>
                <p>Desenvolvedor FullStack com habilidades em React e Express e experiência em banco de dados SQL. Familiarizado com metodologias ágeis e organização de projetos.</p>
            </div>
        </section>
    )
}

export default Landing