import { Link } from "react-router-dom";

function App() {
    return (
        <div className="flex flex-col items-center  h-screen w-screen ">
            <header className="w-full font-extrabold border-b-2 border-dark-border text-4xl text-light-blue mx-auto flex items-center px-5 h-24">
                <div className="w-2/3 mx-auto">
                    <Link>Langeasy</Link>
                </div>
            </header>

            <div className="w-full h-full flex items-center justify-center">
                <div className="h-1/2">
                    <h1 className="font-extrabold text-4xl text-center w-2/3 text-dark-text-white/75 mb-8">
                        İngilizce öğrenmenin kolay yolu...
                    </h1>
                    <div className="w-2/3">
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

                <div className="w-1/3 h-1/2 skew-y-[16deg]">
                    <img
                        src="/question.png"
                        className="rounded-xl border-2 "
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
