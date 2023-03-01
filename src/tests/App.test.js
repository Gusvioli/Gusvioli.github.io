import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Verifica o componente App', () => {
  test('Verifica se os links de navegação são renderizados na tela', ()=>{
    render(<App />);

    expect(screen.getByTestId('Github')).toBeInTheDocument();
    expect(screen.getByTestId('Linkedin')).toBeInTheDocument();
    expect(screen.getByTestId('SobreMim')).toBeInTheDocument();
    expect(screen.getByTestId('Habilidades')).toBeInTheDocument();
    expect(screen.getByTestId('Contato')).toBeInTheDocument();
    expect(screen.getByTestId('Projetos')).toBeInTheDocument();
    expect(screen.getByTestId('IrTopo')).toBeInTheDocument();
  });
  test('Verifica se a Imagem da foto do Gustavo e o texto de bem vindos estão na tela', ()=>{
    render(<App />);

    expect(screen.getByTestId('fotoGustavo')).toBeInTheDocument();
    expect(screen.getByTestId('msgGus')).toHaveTextContent('Oi eu sou o Gustavo, seja bem vindo(a) ao meu Portfólio!');
  });
});
