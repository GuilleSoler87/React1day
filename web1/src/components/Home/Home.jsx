import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h2 className="home-title">¡Hola, soy Guillermo!</h2>
                <p className="home-description">
                    Soy un desarrollador web apasionado por la tecnología y la programación.
                    Me encanta aprender nuevas tecnologías y herramientas para poder
                    construir proyectos web cada vez más interesantes y sofisticados.</p>
                <p className="home-description">
                    Como desarrollador web, mi pasión por la tecnología y la programación me lleva a estar en constante aprendizaje.
                    Me emociona descubrir nuevas herramientas y tecnologías que me permitan construir proyectos web innovadores y atractivos.
                    Considero que el aprendizaje continuo es la clave para mantenerse actualizado y ser capaz de afrontar los desafíos que plantea el mundo digital.</p>
                <p className="home-description">
                    Además, disfruto del proceso creativo de la programación y me gusta enfrentar problemas complejos y buscar soluciones eficientes.
                    La tecnología es una herramienta poderosa para mejorar la calidad de vida de las personas y estoy comprometido en hacer mi aporte en este ámbito.</p>
                <p className="home-description">
                    En resumen, mi objetivo es seguir creciendo como desarrollador web y estar siempre en la vanguardia de las nuevas tecnologías y herramientas
                    para poder brindar soluciones innovadoras y de calidad a los problemas y desafíos que surgen en el mundo digital.</p>
            </div>
            <div className="home-technologies">
                <h3 className="home-technologies-title"> Algunas de las tecnologías que manejo son:</h3>
                <ul className="home-technologies-list">
                    <li className="home-technologies-list-item">HTML5</li>
                    <li className="home-technologies-list-item">CSS3</li>
                    <li className="home-technologies-list-item">JavaScript</li>
                    <li className="home-technologies-list-item">React</li>
                    <li className="home-technologies-list-item">Node.js</li>
                    <li className="home-technologies-list-item">Express</li>
                    <li className="home-technologies-list-item">MySQL/Sequelize</li>
                    <li className="home-technologies-list-item">MongoDB/Mongoose</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
