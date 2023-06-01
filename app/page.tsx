import { createUser, getAllUsers } from "./libs/data"

export default async function Home() {

  const user = await getAllUsers()
  return (
    <div>
      <ul>
        {user?.map((user) => {
          return (
            <li key={user.id}>{user.name}--{user.email}--{user.password}--{user.id}</li>
          )
        })}
      </ul>
    </div>
  )
}
