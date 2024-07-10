import Image from "next/image";
import Link from "next/link";

export default function DateAndPrice() {

    return (
        <div className="mt-7 mx-8">
            {/*price owner*/}
            <div className="h-priceOwnerH flex-col border-x border-y border-white rounded-lg bg-primario">
                <div className="h-1/3 flex justify-center text-white border-b border-white border-opacity-30">
                    <div className="self-center text-center w-4/5">
                        <p className="font-roboto text-2xl font-medium">$fetch por noche</p>
                        <p className="mt-2 font-roboto text-sm font-light">Precio por habitación</p>
                    </div>
                    <Image
                    src="/img/icons/Edit.png"
                    width={30}
                    height={30}
                    className="mr-10 fill-secundario opacity-100 self-center"
                    alt=""
                    />
                </div>
                <div className="h-1/4 text-white flex border-b border-white border-opacity-30">
                    <div className="w-1/2 text-white flex-col content-center text-center ">
                        <p className=" font-roboto text-lg font-medium">CHECK-IN</p>
                        <p className=" mt-2 font-roboto font-light text-sm">ca/le/ndar</p>
                    </div>    
                    <div className="w-1/2 border-l border-white border-opacity-30 text-white flex-col content-center text-center ">
                        <p className=" font-roboto text-lg font-medium">CHECK-OUT</p>
                        <p className=" mt-2 font-roboto font-light text-sm">ca/le/ndar</p>
                    </div>    
                </div>
                <div className="text-sm font-light h-2/5 flex-col">
                    <div className="h-1/3 flex justify-center text-white text-center border-b border-white border-opacity-30 ">
                        <p className="self-center mr-px">Cantidad de días: </p><p className="ml-px self-center font-semibold">TS</p>
                    </div>
                    <div className="h-1/3 flex justify-center text-white text-center border-b border-white border-opacity-30 ">
                        <p className="self-center mr-px">Depósito reembolsable: </p><p className="ml-px self-center font-semibold">Fetch</p>
                    </div>
                    <div className="h-1/3 flex justify-center text-white text-center">
                        <p className="self-center mr-px">Ingreso Total: </p><p className="ml-px self-center font-semibold"> TS</p>
                    </div>
                    
                </div>
            </div>
            
            <div className="h-9 bg-secundario text-primario mt-7 font-roboto rounded-full flex items-center justify-center">Invitar Inquilino</div>
        </div>
    );
  }
