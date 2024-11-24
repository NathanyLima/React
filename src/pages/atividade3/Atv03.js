// import { getImageUrl } from "./utils";
import Gallery from "./cont/Gallery";
import List from "./cont/List";
import PackingList from "./cont/PackingList";
import Profile from "./cont/Profile";
import TeaGathering from "./cont/TeaGathering";
import TeaSet from "./cont/TeaSet";
import TodoList from "./cont/TodoList";
import "./Atv03.scss";

// import Gallery from "./Profile";
// import { Profile } from "./Gallery";

// export default function Atv03() {
//     return (
//         <Gallery />
//     );
// }

// function Avatar({ person, size = 100}) {
//     return (
//         <img
//             className="avatar"
//             src={getImageUrl(person)}
//             alt={person.name}
//             width={size}
//             height={size}
//         />
//     );
// }

// function Card({ children }){
//     return (
//         <div className="card">
//             {children}
//         </div>
//     );
// }

/*export default function Profile() {
    return (
        <Card>
            <Avatar 
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
             {/* <Avatar
                size={80}
                person={{
                    name: 'Akililu Lemma',
                    imageId: 'OKS67lh'
                }}
            />
            <Avatar
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />  }
        </Card>
    )
}*/

// export default function Atv03() {
//     return (
//         <PackingList />
//     );
// }

export default function Atv03() {
  return (
    <div className="body">
      <div className="componrnt">
        <h2>Gallery component</h2>
        <Gallery />
      </div>
      <div className="componrnt">
        <h2>List component</h2>
        <List />
      </div>
      <div className="componrnt">
        <h2>PackingList component</h2>
        <PackingList />
      </div>
      <div className="componrnt">
        <h2>Profile component</h2>
        <Profile />
      </div>
      <div className="componrnt">
        <h2>TeaGathering component</h2>
        <TeaGathering />
      </div>
      <div className="componrnt">
        <h2>TeaSet component</h2>
        <TeaSet />
      </div>
      <div className="componrnt">
        <h2>TodoList component</h2>
        <TodoList />
      </div>
    </div>
  );
}
