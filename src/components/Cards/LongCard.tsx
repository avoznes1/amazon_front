import { useState } from "react"
import { AiFillHeart, AiOutlineEye, AiOutlineHeart } from "react-icons/ai"
import { BsHandbag } from "react-icons/bs"
import { GoGitCompare } from "react-icons/go"
import RatingStar from "../../pages/Rating"
import { LiaRupeeSignSolid } from "react-icons/lia"
import { IProductState } from "../../redux/reducers/product/productSlice"

const LongCard: React.FC<{ data: IProductState, isHidden?: any }> = ({ data, isHidden }) => {
    const [like, setLike] = useState(false)
    return (
        <>
            <div className={`w-full ${isHidden === true ? "hidden sm:block" : "false"}`}>
                <div className="group bg-white w-full h-[250px] flex px-2 rounded-lg border text-gray-700 shadow transition hover:shadow-lg">
                    <div className="w-[25%] relative flex justify-center items-center">
                        <span className="absolute left-3 top-3 text-black bg-yellow-500 rounded-full px-[5px]">-30%</span>
                        <img src={data?.images![0]?.url} className=" h-[80%] group-hover:h-[100%] transition-all ease-out duration-300 cursor-pointer group-hover:scaloe-125" alt="" />
                    </div>

                    <div className="w-[75%] relative pr-8 text-left overflow-hidden">
                        <p className="mt-3 overflow-hidden text-lg font-semibold line-clamp-1"> {data?.title} </p>
                        <p className="line-clamp-2 text-[#777777] lowercase my-2" dangerouslySetInnerHTML={{ __html: data?.description }}></p>
                        <div className=" flex items-center ">
                            <RatingStar stars={data?.totalRating} />
                            <p className="ml-[10px]">{data?.totalRating} reviews</p>
                        </div>
                        <div>
                            <span className="text-[#1c1b1b] font-[1rem] font-Rubik mr-3"><LiaRupeeSignSolid className="inline text-[1.2rem]" />{data?.price}</span>
                            <span className="line-through italic text-[#1c1b1b] font-[1rem]  font-Rubik"><LiaRupeeSignSolid className="inline text-[1.2rem]" />{data?.price + data?.price * 0.3}</span>
                        </div>
                        <p>Save extra with no cost EMI</p>
                        <div className="cursor-pointer ">
                            <div onClick={() => setLike(!like)} className=" tooltip sm:absolute hidden sm:block sm:top-4 sm:right-2 cursor-pointer hover:bg-[#c4bfbf] rounded-full p-2 " >
                                {like ? <AiFillHeart className="text-red-500" size={25} /> : <AiOutlineHeart size={25} />}
                                <span className="tooltiptext">Wishlist</span>
                            </div>
                            <div className="tooltip absolute sm:right-2 sm:top-12 hidden sm:block first-letter transition-all ease-linear sm:translate-x-14 sm:group-hover:translate-x-0 hover:bg-[#c4bfbf] rounded-full p-2">
                                <AiOutlineEye size={25} />
                                <span className="tooltiptext">Eye</span>
                            </div>
                            <div className="tooltip absolute right-2 top-[51%] hidden sm:block transition-all ease-linear translate-x-14 group-hover:translate-x-0 hover:bg-[#c4bfbf] rounded-full p-2">
                                <GoGitCompare size={25} />
                                <span className="tooltiptext">Compare</span>
                            </div>
                            <div className="tooltip absolute sm:right-2 sm:top-[35%] hidden sm:block transition-all ease-linear translate-x-14 group-hover:translate-x-0 hover:bg-[#c4bfbf] rounded-full p-2">
                                <BsHandbag size={25} />
                                <span className="tooltiptext">Cart</span>
                            </div>
                        </div>
                        <div className=" flex justify-between text-gray-700">
                            <div className="flex h-fit text-sm font-medium">
                                <div className="rounded-sm mr-4 bg-green-100 px-2 py-0.5 text-green-700">{data?.tags[0]}</div>
                                <div className="rounded-sm bg-blue-100 px-2 py-0.5 text-blue-700">Top Rated</div>
                            </div>
                            <a href="#" className=" rounded-md px-5 py-2 text-center transition hover:scale-105 bg-orange-600 text-white">Add to Cart </a>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default LongCard