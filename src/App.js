import Card from "./components/Card";
import AddCard from "./components/AddCard";
import CreateModal from "./components/CreateModal";

function App() {
  return (
    <div className="container-fluid p-5">
      <h1 className="mb-3">To-Do List</h1>

      <div className="d-flex flex-column gap-3">
        {/* RENDER Cards */}
        <Card id="1" title="Card One" />
        <Card id="2" title="Card Two" />
        <Card id="3" title="Card Three" />

        {/* RENDER Add Card Button */}
        <AddCard />
      </div>
      <CreateModal />
    </div>
  );
}

export default App;
