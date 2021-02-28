import Header from "./components/taskia_header";
import Boxes from "./components/boxes"
import './styles/app.scss';
import foto1 from './images/1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/taskia_home";
import About from "./components/about";
import Work from "./components/taskia_workflow";
import Footer from "./components/taskia_footer";
import background from "./images/bg.png";
import Team from "./components/Taskia_team";
function App() {
 
  const title = "Task management and lists Tool";
AOS.init();
  return (
    <Container>
      <img className="background" src={background} alt="" />
      <div className="App">
        <Header />
        <Home title={title} foto1={foto1} />
        <Boxes />
        <About />
        <Work />
        <Team />
        <Footer />
        
      </div>
    </Container>
  );
}

export default App;
