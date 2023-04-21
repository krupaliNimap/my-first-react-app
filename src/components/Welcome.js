import React from 'react';


const App = () => {
  const [text, setText] = React.useState('poiuytrewq  thy');

  const handleChange = event => {
    setText(event.target.value);
  };

  return (
    <>
      <p>{text}</p>
      <input type="text" value={text} onChange={handleChange} />
    </>
  );
};

export default App;