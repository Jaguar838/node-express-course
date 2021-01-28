import './App.css';
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'
import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';

const color = 'yellow';

const App = () => {
  return (
    <>
      <Header
        title="This is title"
        descr="This is description"
      />
      <Layout
        id='001'
        title="This is title"
        descr="This is description"
        urlBg={bg1}
      />
      <Layout
        id='002'
        title="This is title"
        descr="This is description"
        colorBg={{ color }} />
      
      <Layout
        id='003'
        urlBg={bg2}
        title="This is title"
        descr="This is description"/>
      
      <Footer/>
     
    </>
  );
}

export default App;

// import HeaderBlock from "./components/HeaderBlock";

// const App = () => {
//   return (
//   <>
//       <HeaderBlock
//       title="This is new Title"
//       descr="This is new description!"
//       />
//       <HeaderBlock 
//       title="This is new Title"
//       hideBackground
//       />
//   </>         
// );
//   }

// export default App;
