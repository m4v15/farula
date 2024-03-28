import GoogleButton from "./components/GoogleButton"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-around p-24">
     
      <div className="relative flex place-items-center">
      <h1 className={`mb-3 text-4xl font-semibold text-palestine-red`}>
            Farula | فرولة
          </h1>
      </div>

      <div className="mb-32 flex place-items-center text-center lg:mb-0">

        <GoogleButton></GoogleButton>

        
      </div>
    </main>
  );
}
