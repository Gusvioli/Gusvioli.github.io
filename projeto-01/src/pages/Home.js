import React, { useContext } from 'react';
import Context from '../context/Context';

function Home() {
    const { title, description } = useContext(Context);
    return (
        <div className="App">
            <header className="App-header">
            <h1 className="App-title">{title}</h1>
            </header>
            <main className="App-main">
            <div className="App-central"></div> 
            </main>
            <section className="App-section">
            { }
            <div className="App-project"></div>
            </section>
            <footer className="App-footer">
                <div className="footer__align">
                    {description} 
                </div>
            </footer>
        </div>
    );
  
}

export default Home;
