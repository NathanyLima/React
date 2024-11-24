import { getImageUrl } from "./utils";

export default function Avatar({ person, size}) {
    // const avatar = 'https://i.imgur.com/7vQDOfPs.jpg';
    // const description = 'Gregorio Y. Zara';
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}
