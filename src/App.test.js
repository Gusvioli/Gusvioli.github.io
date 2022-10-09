import { render, screen } from '@testing-library/react';
import App from './App';

describe('Verifica o componente App', () => {
  test('Verifica se os links são renderizados na tela', ()=>{
    render(<App />);
    const linkGithub = screen.getByTestId('Github');
    const linkLinkedin = screen.getByTestId('Linkedin');
    const linkSobreMim = screen.getByTestId('SobreMim');
    const linkHabilidades = screen.getByTestId('Habilidades');
    const linkContato = screen.getByTestId('Contato');
    expect(linkGithub).toBeInTheDocument();
    expect(linkLinkedin).toBeInTheDocument();
    expect(linkSobreMim).toBeInTheDocument();
    expect(linkHabilidades).toBeInTheDocument();
    expect(linkContato).toBeInTheDocument();
    
  });

});
