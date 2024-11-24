import Avatar from "./Avatar";
// function Avatar({ person, size}) {
//     return (
//         <img 
//             className="avatar"
//             src="https://i.imgur.com/.jpg"
//             alt="Lin Lanying"
//             width={100}
//             height={100}
//         />
//     )
// }

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default function Profile() {
    return (
        <Card>
            <Avatar
                size={100}
                person={{ 
                    name: 'Katsuko Saruhashi', 
                    imageId: 'YfeOqp2' 
                }}
            />
        </Card>
    );
}
