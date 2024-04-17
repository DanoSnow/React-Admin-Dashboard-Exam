import React from "react"
import { Admin, Resource, ListGuesser } from "react-admin"
import customDataProvider from "./dataProvider"
import UsersList from "./components/UsersList"
import PostsList from "./components/PostsList"
import PostIcon from '@mui/icons-material/Book'
import UserIcon from "@mui/icons-material/Group"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <Admin dataProvider={customDataProvider('http://localhost:3000')} dashboard={Dashboard}>
      <Resource name="users" list={UsersList} icon={UserIcon} />
      <Resource name="posts" list={PostsList} icon={PostIcon} />
    </Admin>
  )
}

export default App
