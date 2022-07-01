## When does a React component is re-rendered?

There are 3 moments where a component is re-rendered in React

1. When it's state is changed;
2. When a property is change;
3. When a parent component is re-rendered;

## Change the default form input invalid message

```jsx
const handleNewInvalidComment = e => {
  // Changes default invalid message
  e.target.setCustomValidity('Este campo é obrigatório!');
};

const handleNewCommentChange = e => {
  setNewCommentText(e.target.value);
  // Remove the invalid message
  e.target.setCustomValidity('');
};

// ...
// Field textarea with "required" flag
// onInvalid gets triggered when the typed field is invalid
// in this case gets triggered if not typed because of "required" flag
<textarea
  name="comment"
  value={newCommentText}
  placeholder="Deixe um comentário"
  onChange={handleNewCommentChange}
  onInvalid={handleNewInvalidComment}
  required
/>;
```

## Imperative vs Declarative programming

Imperative is when

## Doing setState 2 times in row

```jsx
const [likeCount, setLikeCount] = useState(0);

// This wont work - Will only update 1 time
function handleLikeComment() {
  setLikeCount(likeCount + 1);
  setLikeCount(likeCount + 1);
}

// This will work - Updates the state 2 times
function handleLikeComment() {
  setLikeCount(prevState => {
    return prevState + 1;
  });

  setLikeCount(prevState => {
    return prevState + 1;
  });
}
```

Sempre que tiver de actualizar um estado e esse estado depender do valor que tinha antes (dele mm) devemos sempre usar o padrao com função, onde tenho acesso ao estado anterior.

## Typescript

JS -> Dinamic Typing - Losely Typed
TS -> Static Typing - Strongly Typed
