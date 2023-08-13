import img from '/404.svg';

const NotFound = () => {
    return (
        <div className="text-center">
            <img className="inline-block self-center w-1/4 h-auto mt-5" src={img} alt="404"/>
            <p>Seems like you're lost. <a href="/" className="inline-block underline">Go Home</a></p>
        </div>
    );
}
 
export default NotFound;