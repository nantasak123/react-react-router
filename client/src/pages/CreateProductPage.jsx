import CreateProductForm from "../components/CreateProductForm";
import { useNavigate } from "react-router-dom";

function CreateProductPage() {
  let navigator = useNavigate();

  let goToHomePage = () => {
    navigator("/");
  }

  return (
    <div>
      <h1>Create Product Page</h1>
      <CreateProductForm />
      <button onClick={goToHomePage} >Back to Home</button>
    </div>
  );
}

export default CreateProductPage;
