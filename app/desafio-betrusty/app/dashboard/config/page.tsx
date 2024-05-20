import Header from "../header/page";

export default function Config() {
  return (
      <div>
        {/*wrapper general*/}
        <div className="h-screen flex flex-col justify-between  bg-primario">
        
        <Header></Header>

        <main className="mb-auto flex flex-col text-start text-white font-poppins text-xl p-4">
            Pantalla de configuración...

            
            
        </main>           
        {/*footer*/}
        <footer className="bottom-0 h-20 bg-black"></footer>
        </div>
      </div>
  );
}
