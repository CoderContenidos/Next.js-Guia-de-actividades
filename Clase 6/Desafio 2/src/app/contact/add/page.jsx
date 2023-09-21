import AddContactPage from "../../../../views/ContactsPage/AddContactPage"

//Add custom <head> 
export const metadata = {
  title: 'Coderhouse Next.Js | Contactos',
  description: 'Pagina de contactos de aplicacion Next.Js creada por Ezequiel M. Tartaglia para Coderhouse S.R.L',
}

export default function contacts() {
  return <AddContactPage/>
}
