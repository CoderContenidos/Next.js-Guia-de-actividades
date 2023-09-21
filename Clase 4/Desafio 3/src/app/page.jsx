import HomePage from "../../views/HomePage/HomePage"

//Add custom <head> 
export const metadata = {
  title: 'Coderhouse Next.Js | Inicio',
  description: 'Pagina de inicio de aplicacion Next.Js creada por Ezequiel M. Tartaglia para Coderhouse S.R.L',
}

export default function home() {
  return <HomePage/>
}
