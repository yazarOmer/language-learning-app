import { Link } from "react-router-dom";

function App() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="font-extrabold text-3xl text-sky-500 mb-8">
                İngilizce öğrenmenin kolay yolu...
            </h1>
            <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-md text-sm  transition-colors border border-sky-500 border-2 mb-2 h-11 px-12 hover:bg-sky-500 hover:text-white text-sky-500 font-bold"
            >
                Giriş yap
            </Link>
            <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-md text-sm font-bold text-white hover:text-sky-500 hover:bg-transparent border-2 border-sky-500 transition-colors bg-sky-500 h-11 px-12 "
            >
                Kayıt Ol
            </Link>
        </div>
    );
}

export default App;
