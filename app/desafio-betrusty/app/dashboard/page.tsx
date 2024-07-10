import Image from "next/image";
import Header from "./header/page";
import Carr from "./carr/page";
import DateAndPrice from "./dateandprice/page";
import Specifications from "./specifications/page";

export default function Dashboard() {
  return (
      <div>
        {/*wrapper general*/}
        <div className="flex-col justify-between  bg-primario">
        
        <Header></Header>

          {/* fetch title departamento y botones*/}
          <div className="h-20 bg-primario flex justify-between mx-5">
            <div className="self-center font-roboto font-semibold text-2xl text-white">Frank Apart</div>
            <div className="buttons self-center flex gap-x-3">
                <div className="h-11 w-11 flex relative ">
                    <div className="h-11 w-11 rounded-full bg-secundario opacity-20"></div>
                    <Image
                    src="/img/icons/Edit.png"
                    width={30}
                    height={30}
                    className="fill-secundario opacity-100 absolute self-center right-2"
                    alt=""
                    />
                </div>
                <div className="h-11 w-11 flex relative ">
                    <div className="h-11 w-11 rounded-full bg-secundario"></div>
                    <Image
                    src="/img/icons/Share.png"
                    width={30}
                    height={30}
                    className="fill-black opacity-100 absolute self-center right-2"
                    alt=""
                    />
                </div>
            </div>
            
                

            
          </div>
          {/*carousel*/}
          
          <Carr/>
            
          {/*wrapper price & button*/}
          <DateAndPrice/> 
                   
          {/*características*/}
          <Specifications/>
          

          <div className="mt-7 mx-8 border-white rounded-lg text-white text-sm font-roboto font-light">
             {/*descr-caja*/}
            <div className=" flex-col mt-7 text-white font-poppins font-light">
              {/*descr-titulo*/}
              <div className="font-roboto text-xl font-bold">Descripción</div>
              {/*descr-text*/}
              <div className="mt-6">Este hermoso apartamento de 2 habitaciones se encuentra en el corazón de la ciudad, a solo unos pasos de los mejores restaurantes, tiendas y lugares de interés turístico. El apartamento es ideal para aquellos que buscan un espacio cómodo y acogedor en el que relajarse después de un largo día de trabajo o de turismo.
              </div>
            </div>
          </div>

          <div className="mt-7 pb-7 mx-8 border-white rounded-lg text-white text-sm font-roboto font-light">
            {/*propietario-caja*/}
            <div className=" flex-col mt-7 text-white font-poppins font-light">
              {/*propietario-titulo*/}
              <div className="font-roboto text-xl font-bold">Propietario</div>
              {/*prop-avatar y texto*/}
              <div className="mt-1 flex items-center">
              <Image
                src="/img/em.png"
                width={50}
                height={50}
                className="block rounded-full"
                alt=""
               />
              {/*prop-text*/}
              <div className="ml-2">Fetch (join on id...)</div>
              </div>
            </div>
            </div>

            
          </div>

          {/*footer*/}
          <footer className="sticky h-20 bg-black"></footer>

        </div>
        

      
   
  );
}
