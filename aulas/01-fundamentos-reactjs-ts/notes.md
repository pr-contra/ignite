# React keys

> Ao passar uma key para um elemento, ela deve possuir um valor unico que nao
> tenha sido utilizado em outro elemento da mesma iteração
> A key é uma propriedade que ajuda o React a entender que foi alterado numa
> iteração, e deve ser utilizada sempre que temos uma iteração em nosso codigo

# Vite

> O Arquivo index.html é gerado na raiz do projeto e ele é o primeiro arquivo
> carregado na nossa app web

> O Vite utiliza a linha <script type="module" src="/src/main.jsx"></script> para
> importar o nosso primeiro arquivo Javascript (main.jsx) utilizando o ECMAScript Modules, ou seja, sem precisar utilizar um Bundler como o Webpack

> O React em conjunto com o React DOM renderiza dentro da <div id="root"></div>
> o conteudo gerado pelo Javascript. Ou seja, o JS tem total controlo da interface
> que é apresentada no ecran.

# Typescript

## Escaping type null error

Error in main.tsx:

```text
Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Element | DocumentFragment'.
  Type 'null' is not assignable to type 'Element | DocumentFragment
```

In fact there is a change that the root element is not present in the DOM so TS
thinks it can be null. But in this case it is guaranteed that it will be since
it's the main root Element of the React app.

You can tell TS to ignore this error by suffixing the error with the "!" character.

```js
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

## Extending HTML Attributes

```js
<Avatar src="https://github.com/pr-contra.png" alt="" title="img-test" />
```

```js
// Avatar.tsx file
import { ImgHTMLAttributes } from 'react';

// Here we can extend the default Image properties with ImgHTMLAttributes
// No need to pass the alt, title, src props this way since they are HTML native
interface Avatar extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export const Avatar = ({ hasBorder, ...props }: Avatar) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
};
```
