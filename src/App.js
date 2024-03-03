import './App.css';
import Example from './components/example/example';
import TodoList from './components/todo/todo-list';
import ShopForMan from './components/shop/shop-for-man';
import Header from './components/Header';
import ThemeProvider from './components/providers/themeProvider';
import { Outlet } from 'react-router-dom';

function App() {


  return (
    <ThemeProvider>
      <Header />
      <Outlet />
      {/* <Example /> */}
      {/* <TodoList /> */}
      {/* <ShopForMan /> */}
    </ThemeProvider>
  );
}

export default App;
