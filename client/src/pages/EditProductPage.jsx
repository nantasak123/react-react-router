import EditProductForm from "../components/EditProductForm";
import { useNavigate } from "react-router-dom";

function EditProductPage() {
  let navigator = useNavigate()

  return (
    <div>
      <h1>Edit Product Page</h1>
      <EditProductForm />
      <button onClick={() => {navigator("/")}}>Back to Home</button>
    </div>
  );
}

export default EditProductPage;
