import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { Projects } from "./layout/sections/projects/Projects";
import { Footer } from "./layout/footer/Footer";
import { AboutMe } from "./layout/sections/aboutMe/AboutMe";
import { Container } from "./components/Container";

function App() {
	return (
		<div className="App">
			<Container>
				<Header />
				<Main />
				<Skills />
				<Projects />
				<AboutMe />
				<Footer />
			</Container>
		</div>
	);
}

export default App;
