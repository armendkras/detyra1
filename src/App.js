import MainLayout from "./layout/MainLayout";
import MainPart from "./components/Users/Main/MainPart";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <MainPart />
      </MainLayout>
    </div>
  );
}

export default App;
