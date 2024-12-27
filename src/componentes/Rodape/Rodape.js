import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="sociais">
        <img src="/imagens/fb.png" alt="logo facebook" />
        <img src="/imagens/tw.png" alt="logo twiter" />
        <img src="/imagens/ig.png" alt="logo instagran" />
      </div>
      <div>
        <img src="/imagens/logo.png" alt="logo organo" />
      </div>
      <div>
        <p>Desenvolvido por David Charles</p>
      </div>
    </footer>
  );
};

export default Rodape;
