<h1>NodeApp - App de Anotações</h1>

  <h2>Funcionalidades</h2>
  <ul>
    <li>Página inicial: Apresenta uma visão geral do aplicativo e suas funcionalidades.</li>
    <li>Página "Sobre": Informações sobre o aplicativo.</li>
    <li>Gerenciamento de Notas:
      <ul>
        <li>Adicionar nota: Permite ao usuário adicionar uma nova nota.</li>
        <li>Listar notas: Exibe todas as notas existentes.</li>
        <li>Editar nota: Permite ao usuário editar uma nota existente.</li>
        <li>Excluir nota: Permite ao usuário excluir uma nota.</li>
      </ul>
    </li>
    <li>Autenticação de Usuário:
      <ul>
        <li>Cadastro: Permite ao usuário criar uma conta.</li>
        <li>Login: Permite ao usuário fazer login no aplicativo.</li>
        <li>Logout: Permite ao usuário fazer logout da conta.</li>
      </ul>
    </li>
  </ul>

  <h2>Rotas</h2>

  <h3>Página inicial</h3>
  <p>'/'</p>

  <h3>Página "Sobre"</h3>
  <p>'/about'</p>

  <h3>Rotas de Notas</h3>

  <ul>
    <li>Adicionar nota:
      <ul>
        <li>GET: '/notes/add'</li>
        <li>POST: '/notes/new-note'</li>
      </ul>
    </li>
    <li>Listar notas:
      <ul>
        <li>GET: '/notes'</li>
      </ul>
    </li>
    <li>Editar nota:
      <ul>
        <li>GET: '/notes/edit/:id'</li>
        <li>PUT: '/notes/edit/:id'</li>
      </ul>
    </li>
    <li>Excluir nota:
      <ul>
        <li>DELETE: '/notes/delete/:id'</li>
      </ul>
    </li>
  </ul>

  <h3>Rotas de Usuários</h3>

  <ul>
    <li>Cadastro:
      <ul>
        <li>GET: '/users/signup'</li>
        <li>POST: '/users/signup'</li>
      </ul>
    </li>
    <li>Login:
      <ul>
        <li>GET: '/users/signin'</li>
        <li>POST: '/users/signin'</li>
      </ul>
    </li>
    <li>Logout:
      <ul>
        <li>GET: '/users/logout'</li>
      </ul>
    </li>
  </ul>

  <h2>Configuração e Execução</h2>

  <p>Siga as etapas abaixo para configurar e executar o NodeApp em sua máquina:</p>

  <ol>
    <li>Clone o repositório do projeto:</li>
  </ol>
  <pre><code>git clone https://github.com/Queonias/notes.git</code></pre>

  <ol start="2">
    <li>Navegue até o diretório do projeto:</li>
  </ol>
  <pre><code>cd notes</code></pre>

  <ol start="3">
    <li>Instale as dependências:</li>
  </ol>
  <pre><code>npm install</code></pre>

  <ol start="4">
    <li>Inicie o servidor:</li>
  </ol>
  <pre><code>npm start</code></pre>

  <p>O NodeApp estará em execução no endereço: <a href="http://localhost:3000">http://localhost:3000</a></p>

  <h2>Tecnologias Utilizadas</h2>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>Handlebars (HBS)</li>
    <li>MongoDB</li>
    <li>Passport.js</li>
    <li>Bcrypt.js</li>
    <li>Express-session</li>
  </ul>

  <h2>Contribuição</h2>
  <p>Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests no repositório do projeto.</p>

  <h2>Licença</h2>
  <p>Este projeto está licenciado sob a Licença ISC. Consulte o arquivo LICENSE para obter mais detalhes.</p>

  <h2>Contato</h2>
  <p>Para mais informações, você pode me contatar pelo e-mail: <a href="mailto:queones@gmail.com">seu-email@example.com</a>.</p>

  <p>Repositório do projeto: <a href="https://github.com/Queonias/notes">https://github.com/Queonias/notes</a></p>
</body>
