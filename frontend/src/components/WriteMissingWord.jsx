import React from "react";

const WriteMissingWord = ({ answer, changeAnswer, words, changeWords }) => {
    const handleInputChange = (e, i) => {
        const newInput = [...words];
        newInput[i] = e.target.value;
        changeWords(newInput);
    };

    const handleDelete = (i) => {
        const newWords = [...words];
        newWords.splice(i, 1);
        changeWords(newWords);
    };

    const addInput = () => {
        const newWords = [...words, ""];
        changeWords(newWords);
    };

    return (
        // <div className="w-[600px] ">
        //     <div className="flex flex-col w-full mb-3 mt-2">
        //         <label
        //             htmlFor="answer"
        //             className="text-dark-text-title font-bold text-base mb-2"
        //         >
        //             Soru Cevabı
        //         </label>
        //         <input
        //             type="text"
        //             name="answer"
        //             id="answer"
        //             value={answer}
        //             onChange={(e) => changeAnswer(e.target.value)}
        //             placeholder="Ders Adı"
        //             className="outline-none border-2 border-dark-border bg-transparent p-2 rounded-lg placeholder:text-dark-border text-dark-text-white font-semibold caret-dark-text-white"
        //         />
        //     </div>

        //     <div className="flex flex-col w-full mb-3 mt-2">
        //         <label
        //             htmlFor="sectionName"
        //             className="text-dark-text-title font-bold text-base mb-2"
        //         >
        //             Kelimeler
        //         </label>
        //         {words.map((item, i) => (
        //             <div
        //                 key={i}
        //                 className="flex gap-2 w-full items-center mt-1"
        //             >
        //                 <input
        //                     type="text"
        //                     value={item}
        //                     name="word"
        //                     placeholder=""
        //                     onChange={(e) => handleInputChange(e, i)}
        //                     className="flex-1 outline-none border-2 border-dark-border bg-transparent p-2 rounded-lg placeholder:text-dark-border text-dark-text-white font-semibold caret-dark-text-white"
        //                 />

        //                 <button
        //                     onClick={() => handleDelete(i)}
        //                     className="w-4 h-4 flex items-center justify-center"
        //                 >
        //                     <svg
        //                         id="fi_2976286"
        //                         enableBackground="new 0 0 320.591 320.591"
        //                         height="512"
        //                         viewBox="0 0 320.591 320.591"
        //                         width="512"
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         className="w-4 h-4 fill-white"
        //                     >
        //                         <g>
        //                             <g id="close_1_">
        //                                 <path d="m30.391 318.583c-7.86.457-15.59-2.156-21.56-7.288-11.774-11.844-11.774-30.973 0-42.817l257.812-257.813c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875l-259.331 259.331c-5.893 5.058-13.499 7.666-21.256 7.288z"></path>
        //                                 <path d="m287.9 318.583c-7.966-.034-15.601-3.196-21.257-8.806l-257.813-257.814c-10.908-12.738-9.425-31.908 3.313-42.817 11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414-6.35 5.522-14.707 8.161-23.078 7.288z"></path>
        //                             </g>
        //                         </g>
        //                     </svg>
        //                 </button>
        //             </div>
        //         ))}
        //     </div>

        //     <div>
        //         <button
        //             onClick={() => addInput()}
        //             className="btn mt-5 w-full border border-light-blue hover:bg-light-blue text-dark-text-white"
        //         >
        //             Kelime Ekle
        //         </button>
        //     </div>
        // </div>
        <div>wmw</div>
    );
};

export default WriteMissingWord;
