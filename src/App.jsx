import React from "react"
import { Admin, Resource, Show, ListGuesser, ShowGuesser } from "react-admin"
import customDataProvider from "./dataProvider"
import UsersList from "./components/UsersList"
import PostsList from "./components/PostsList"
import SalesList from "./components/SalesList"
import CustomersList from "./components/CustomersList"
import ReviewsList from "./components/ReviewsList"
import PostIcon from '@mui/icons-material/Book'
import UserIcon from "@mui/icons-material/Group"
import EuroIcon from '@mui/icons-material/Euro';
import MessageIcon from '@mui/icons-material/Message';
import Dashboard from "./components/Dashboard"
import ShowWrapper from "./components/ShowWrapper"
import CustomerShow from "./components/CustomerShow"

function App() {
  return (
    <Admin dataProvider={customDataProvider('http://localhost:3000')} dashboard={Dashboard}>
      <Resource name="users" list={UsersList} icon={UserIcon} />
      <Resource name="posts" list={PostsList} icon={PostIcon} />
      <Resource name="sales" list={SalesList} icon={EuroIcon} 
        show={
          <Show component={ShowWrapper}>
            ...
        </Show>} 
      />
      <Resource name="customers" list={CustomersList} icon={UserIcon}
       show={
          <Show component={CustomerShow}>
            ...
        </Show>} 
      />
      <Resource name="reviews" list={ReviewsList} icon={MessageIcon} />
    </Admin>
  )
}

export default App
