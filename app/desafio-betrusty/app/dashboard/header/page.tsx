import Image from "next/image";
import Link from "next/link";

export default function Header() {

    return (
        <div className="h-20 bg-black flex justify-between">
            <Link href="/dashboard" className="ml-6 h-9 w-32 self-center relative">
                {/*logo*/}
            <div className="">
                <Image
                src="/img/logo/VectorTpL.png"
                width={12.31}
                height={7.57}
                className="absolute top-0 left-0"
                alt=""
                />
               
                <Image
                src="/img/logo/VectorTpR.png"
                width={19}
                height={7.56}
                className="absolute top-0 left-3"
                alt=""
                />
                               
                <Image
                src="/img/logo/VectorDw.png"
                width={16.85}
                height={24.32}
                className="absolute top-2.5 left-1"
                alt=""
                />
               
                <Image
                src="/img/logo/VectorB.png"
                width={10.56}
                height={16.31}
                className="absolute bottom-2.5 left-10 "
                alt=""
                />
                            
                <Image
                src="/img/logo/Vectore.png"
                width={11.33}
                height={13.35}
                className="ml-1 absolute bottom-2.5 left-12"
                alt=""
                />
                            
                <Image
                src="/img/logo/VectorT.png"
                width={10.56}
                height={16.31}
                className="absolute bottom-2.5 left-16 "
                alt=""
                />
                            
                <Image
                src="/img/logo/Vectorr.png"
                width={5.82}
                height={13.14}
                className="ml-3 absolute bottom-2.5 left-16"
                alt=""
                />
                            
                <Image
                src="/img/logo/Vectoru.png"
                width={10.51}
                height={13.12}
                className="ml-1 absolute bottom-2.5 left-20 "
                alt=""
                />
                            
                <Image
                src="/img/logo/Vectors.png"
                width={9.19}
                height={13.35}
                className="absolute bottom-2.5 left-24 "
                alt=""
                />
               
                <Image
                src="/img/logo/Vectortm.png"
                width={6.55}
                height={16.14}
                className="ml-2.5 absolute bottom-2.5 left-24 "
                alt=""
                />
                            
                <Image
                src="/img/logo/Vectory.png"
                width={11.7}
                height={19.01}
                className="mr-px mt-px absolute top-3 right-px"
                alt=""
                />
                               
            </div>
            </Link>
            

            {/*avatar*/}
            <div className="w-11 h-11 mr-6 self-center flex justify-center">
                <div className="self-center   bg-secundario rounded-full w-11 h-11 flex justify-center">
                    <div className="self-center border-black rounded-full w-11 h-11 flex justify-center">
                        <Image
                        src="/img/em.png"
                        width={41}
                        height={41}
                        className="rounded-full self-center border-x border-y border-black bg-black"
                        alt=""
                       />
                    </div>        
                </div>
            </div>
        </div>
    )
    
  }
