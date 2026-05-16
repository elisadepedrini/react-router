import { Link } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import ProductsPage from "./ProductsPage";
import WhoPage from "./WhoPage";

export default function HomePage() {

    return(
        <>
        <AppHeader />

        <main>
            <div class="p-5 mb-4 bg-light rounded-3 d-flex flex-row">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold w-50 pb-4">Design che ispira ogni giorno</h1>
                    <p class="col-md-8 fs-4 w-100">
                        Oggetti selezionati con cura per portare bellezza e funzionalità nella tua casa. Artigianato autentico, materiali premium.
                    </p>
                    
                    <button class="btn btn-primary btn-md list-unstyled me-3" type="button">
                        <Link to="/products" className="text-light text-decoration-none">Scopri la collezione</Link>
                    </button>  
                    <button class="btn btn-primary btn-md" type="button">
                        <Link to="/who" className="text-light text-decoration-none">Chi siamo</Link>
                    </button>  
                    
                </div>



                <div class="card text-start text-center">
                    <img class="card-img-top w-25 mx-auto mt-5" src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png" alt="Title" />
                    <div class="card-body">
                        <h4 class="card-title mt-5">White Gold Plated Princess</h4>
                        <p class="card-text mt-4"><em>Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day..."</em></p>
                    </div>
                </div>
            </div>

            
        </main>
        </>
    )
}