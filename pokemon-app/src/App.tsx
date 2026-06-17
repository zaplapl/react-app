import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function UselessButton() {
    return (
        <button>
            This button does nothing
        </button>
    )
}

function pokemonFetcher(dataSetter: CallableFunction, number: number){
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
        .then(response => response.json())
        .then(data => dataSetter(data));
}

function PokemonForNumber({count} :{count: number}) {
    const [pokemonData, setPokemonData] = useState({name: undefined, sprites:{front_default: ""}});
    pokemonFetcher(setPokemonData, count)

    return (
        <div>
            {pokemonData && (
                <div>
                    <h1>{pokemonData.name}</h1>
                    <img
                        className="avatar"
                        src={pokemonData.sprites.front_default}
                        alt={pokemonData.name ? 'Photo of ' + pokemonData.name: ""}
                        style={{
                            width: 90,
                            height: 90
                        }}
                    />
                </div>
            )}
        </div>
    );
}
function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <section id="center">
                <div className="hero">
                    <img src={heroImg} className="base" width="170" height="179" alt=""/>
                    <img src={reactLogo} className="framework" alt="React logo"/>
                    <img src={viteLogo} className="vite" alt="Vite logo"/>
                </div>
                <div>
                    <h1>Get started</h1>
                    <p>
                        <code>this is where you really start to code</code>
                    </p>
                </div>
                <button
                    type="button"
                    className="counter"
                    onClick={() => setCount((count) => count + 1)}
                >
                    Click button to increment this integer and pokemon: {count}
                </button>
                <PokemonForNumber count={count}/>
            </section>

            <section>
                <UselessButton/>
            </section>

            <section id="spacer"></section>
        </>
    )
}

export default App
