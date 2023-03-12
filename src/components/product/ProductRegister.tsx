// import ProductRegister from "~/pages/my-account/ProductRegister";
import { useRef, useState } from 'react';
// import { useNavigate } from "react-router-dom";



const Register = ({ onCreate }) => {

    const explainInput = useRef();
    const priceInput = useRef();

    const [name, setName] = useState({
        product: "",
        explain: "",
        price: ""
    });

    // navigate함수

    // const navigate = useNavigate();
    // const navigatePage = () => {
    //     navigate("/ProductList");
    // }


    const handleChangeState = (e) => {
        setName({
            ...name,
            [e.target.name]: e.target.value,
        });
    }

    const buttonSubmit = () => {
        if (name.explain.length < 3) {
            explainInput.current.focus();
            return;
        }
        if (name.price.length < 5) {
            priceInput.current.focus();
            return;
        }
        onCreate(name.product, name.explain, name.price)
        console.log(name);
        alert("저장성공");
        s
        setName({
            product: "",
            explain: "",
            price: "",
        })
    }
    return (
        <>
            <div className="md:w-4/6 2xl:w-8/12 mt-4 md:mt-0">
                <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                    {("상품 등록 페이지")}
                </h2>
                <div>
                    <div>
                        <textarea
                            className='py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12'
                            name='product'
                            value={name.product}
                            onChange={handleChangeState}
                        />
                    </div>
                    <div>
                        <input
                            className='py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12'
                            name='explain'
                            //focus
                            ref={explainInput}
                            value={name.explain}
                            onChange={handleChangeState}
                        />
                    </div>
                    <div>
                        <input
                            className='py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12'
                            name="price"
                            ref={priceInput}
                            value={name.price}
                            onChange={handleChangeState}
                        />
                    </div>
                    <button
                        type='submit'
                        className='text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 mt-3 w-full sm:w-32'
                        onClick={buttonSubmit}>
                        등록
                    </button>
                    <button
                        type='button'
                        className='text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 mt-3 w-full sm:w-32'
                        onClick={buttonSubmit}>
                        리스트
                    </button>
                </div>
            </div>
        </>
    )
}

export default Register;
