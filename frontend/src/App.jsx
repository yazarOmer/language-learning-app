import { Link } from "react-router-dom";

function App() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen ">
            <h1 className="font-extrabold text-3xl text-light-blue mb-8">
                İngilizce öğrenmenin kolay yolu...
            </h1>
            <div className="">
                <Link
                    to="/login"
                    className="btn px-3 border-light-blue mb-2 hover:bg-light-blue hover:text-dark-text-white text-light-blue font-bold"
                >
                    Giriş yap
                </Link>
                <Link
                    to="/register"
                    className="btn px-3 text-dark-text-white hover:text-light-blue hover:bg-transparent border-light-blue  bg-light-blue"
                >
                    Kayıt Ol
                </Link>
            </div>
        </div>
    );
}

export default App;
