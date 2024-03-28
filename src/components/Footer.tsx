
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#2DD4BF', color: '#fff', textAlign: 'center', padding: '20px' }}>
      <p>
        Joosudev - Este proyecto está bajo la Licencia MIT &copy; {currentYear}
      </p>
      <a href="https://github.com/joosudev/CalculadorDePropinas.git" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/material-rounded/48/ffffff/github.png" alt="GitHub" style={{ margin: 'auto', display: 'block', width: '48px', height: '48px' }} />
      </a>
    </footer>
  );
}

export default Footer;
