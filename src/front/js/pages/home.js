import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import img from "../../img/ligthbox.jpg"



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5 mb-5" style={{ background: "ligth-gray" }}>
			<h3>Estudio creativo en Barcelona</h3>
			<br />
			<h1>Cómo crear tu <strong style={{ color: "rgba(var(--bs-warning-rgb)" }}>contenido</strong> de <strong style={{ color: "rgba(var(--bs-warning-rgb)" }}>1 mes en 1 día</strong></h1>
			<a href="https://www.youtube.com/watch?app=desktop&v=UnlxN_QKPyI" target="_blank" className="color-black  mt-5 mb-5">Ver video</a>
			<div className="embed-responsive embed-responsive-16by9">
				<iframe width="560" className= "embed-responsive-item" height="315" src="https://www.youtube.com/embed/UnlxN_QKPyI" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
			</div>
			<div className="bg-warning text-start">
				<h3 className="">
					Creación de contenido en barcelona
				</h3>
				<h1>
					Deja de procrastinar la creación de contenido
				</h1>

				<ul className="bg-warning">
					<li>
						No tengo tiempo
					</li>
					<li>
						No tengo espacio de grabación
					</li>
					<li >
						No tengo material para grabación
					</li>
					<li>
						No tengo estrategia de contenido
					</li>
					<li>
						No tengo espacio de grabación
					</li>
				</ul>

				<button type="button" className="btn btn-dark"><strong style={{ color: "yellow" }}>Programa una reunion conmigo</strong></button>
				<div className="mt-5 d-flex justify-content-center">
					<div id="carouselExampleIndicators" className="carousel slide mb-5" style={{ width: "50%" }}>
						<div className="carousel-indicators">
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
						</div>
						<div className="carousel-inner" style={{ borderRadius: "10px" }}>
							<div className="carousel-item active">
								<img src="https://petapixel.com/assets/uploads/2015/10/freeheader.jpg" className="d-block w-100" alt="..." />
							</div>
							<div className="carousel-item">
								<img src="https://media.istockphoto.com/id/1196172395/photo/in-the-photo-studio-with-professional-equipment-portrait-of-the-famous-photographer-holding.jpg?s=612x612&w=0&k=20&c=utO4aHRyA5ZUAYxbk9NelmhR1_E5-AOWUWcqDMP-NXE=" className="d-block w-100" alt="..." />
							</div>
							<div className="carousel-item">
								<img src="https://cdn.fstoppers.com/styles/full/s3/media/2019/11/01/become_a_professional_photographer-1.jpg" className="d-block w-100" alt="..." />
							</div>
						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>

			<div>
				<div className="text-align center mt-5">
					<h2>
						Sala de Grabación en Barcelona
					</h2>
					<h1>
						Una sala de grabación hecha a tu medida
					</h1>
				</div>
			</div>
			<div>
				<h2 className="text-start mt-5 ">
				NUESTROS ESPACIOS EN BARCELONA
					<br /><br />
					Sala configurable:
				</h2>
				<br /><br />
				<h4>
					Nuestra alianza estratégica con Lightbox BCN Studio, situado en el corazón de Barcelona en el Arco de Triunfo,
					 nos permite ofrecer un estudio de grabación completamente personalizado. Esta colaboración nos permite satisfacer tus necesidades con una variedad de opciones, 
					 desde configuraciones simples con fondos neutros y luces de colores hasta ajustes personalizados según tus requisitos específicos.
				</h4>
				<img className= "mt-5" style={{ borderRadius: "10px" }} src= "https://media.istockphoto.com/id/1093914934/photo/empty-studio-with-photography-lighting.jpg?s=612x612&w=0&k=20&c=WI0OApbMzeRviRwFR9tISanskRu_TEFxA8ztYZERsVA=" alt = "studio"/>
				<div>
				<img className="align-items-center mt-5" style={{ borderRadius: "10px" }} src={img}/>
				</div>
			</div>
		</div>


	);
};
