import Error404 from "../../components/Error4004/Error404.jsx";
import imageError from "./../../assets/imageError.png"


const textForError="Oups! La page que vous demandez n'existe pas."
const textForLink="Retourner sur la page d’accueil"

function NotFound () {
    return (
        <main>
        <section>
        <Error404 imgError={imageError} textError={textForError} linkText={textForLink}/>
        </section>
        </main>
    )
}
export default NotFound