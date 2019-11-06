# Angular
## 1. Comandos CMD:
	- npm install
	- npm install @angular/cli
	- ng new nome-pacote --prefix=ESCOLHA
	- ng serve: inicia o servidor do Angular no localhost:4200
	- ng g c nome --spec=false: criar um novo componente-nome
		- ng generate component --skipTests=true component-name
		
	- npm install -g json-server: api de banco via json
		- json-server name.json
## 2. Anotações:
	- ? : transforma o nosso elemento em algo opcional;
	- https://github.com/cod3rcursos: pegar um novo projeto
	- <router-outlet></router-outlet>: É no router-outlet que os componentes acessados pelas rotas são renderizados.
	- pipes (|):  transformam o conteúdo.

## 3. Roteamento:
	- Passo 1: Você tem que ter as rotas;
	- Passo 2: Configurar no modulo raiz; _(routes.ts)_
	- Passo 3: Necessario indicar uma região para trocar os componentes nesta região: <router-outlet></router-outlet>
	
## 4. Programação Reativa ou (Reactive Programming):
	- Um evento acontece e os que estão interessados são notificados e reagem a ele:
		- Bliblioteca: RXJS.
		
## 5. Formar de obter parâmetros:
	- snapshot:
	- subscribe: 
	
##
		https://imasters.com.br/back-end/crud-com-hibernate-e-spring-framework
		https://www.caelum.com.br/apostila-java-web/uma-introducao-pratica-ao-jpa-com-hibernate/#mapeando-uma-classe-tarefa-para-nosso-banco-de-dados
		https://www.caelum.com.br/apostila-java-web/#null