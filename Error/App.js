import HeaderBlock from "./components/HeaderBlock";

const App = () => {
  return (
  <>
      <HeaderBlock
      title="This is new Title"
      descr="This is new description!"
      />
      <HeaderBlock 
      title="This is new Title"
      hideBackground
      />
  </>         
);
  }

export default App;