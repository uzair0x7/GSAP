import "./App.css";
import Fly from "./components/Fly";

function App() {
    return (
        <main className="app">
            <header className="header">
                <p className="eyebrow">GSAP INTERACTION</p>
                <h1>Catch Patrick</h1>
                <p className="instruction">
                    Try to catch him before he escapes.
                </p>
            </header>

            <Fly />
        </main>
    );
}

export default App;