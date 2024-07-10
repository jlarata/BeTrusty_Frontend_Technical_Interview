import Image from "next/image";
import Link from "next/link"; //<- invitar inquilino?

export default function Specifications() {

    return (
    
    <div className="mt-7 mx-8 border-white rounded-lg text-white text-sm font-roboto font-light">
        
        <div className="flex items-center">
            <div className="">Fetch 1 Av Siempreviva 1234, San Juan, Argentina</div>
            <div>
                <Image
                    src="/img/icons/map-marker.png"
                    width={30}
                    height={30}
                    className="fill-secundario opacity-100 self-center"
                    alt=""
                    />
            </div>
        </div>

        <div className="mt-2 flex items-baseline">
            <div>
                <Image
                    src="/img/icons/ic-01.png"
                    width={30}
                    height={30}
                    className="mr-2 fill-secundario opacity-100"
                    alt=""
                    />
            </div>
            <div className="">Fetch 2 tipoDeUnidad</div>
        </div>

        <div className="mt-2 flex items-baseline">
            <div>
                <Image
                    src="/img/icons/ic-02.png"
                    width={30}
                    height={30}
                    className="mr-2 fill-secundario opacity-100"
                    alt=""
                    />
            </div>
            <div className="">Fetch 3 cantHabitaciones</div>
        </div>

        <div className="mt-2 flex items-baseline">
            <div>
                <Image
                    src="/img/icons/ic-03.png"
                    width={30}
                    height={30}
                    className="mr-2 fill-secundario opacity-100"
                    alt=""
                    />
            </div>
            <div className="">Fetch 4 cantBanios</div>
        </div>

        <div className="mt-2 flex items-baseline">
            <div>
                <Image
                    src="/img/icons/ic-04.png"
                    width={30}
                    height={30}
                    className="mr-2 fill-secundario opacity-100"
                    alt=""
                    />
            </div>
            <div className="">Fetch 5 wifi</div>
        </div>

        <div className="mt-2 flex items-baseline">
            <div>
                <Image
                    src="/img/icons/ic-05.png"
                    width={30}
                    height={30}
                    className="mr-2 fill-secundario opacity-100"
                    alt=""
                    />
            </div>
            <div className="">Fetch 6 estac</div>
        </div>
        
       
    </div>
    
    );
  }
