import React from 'react'
import {Fa500Px} from "react-icons/fa";

export default function Navigation(props) {
  const username = props.username;

  return (<nav class="navbar navbar-light bg-light" aria-label="breadcrumb">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <Fa500Px/>
        &nbsp; Strebin Estate Vineyards
      </a>
      Welcome back, {username}
    </div>
  </nav>)
}
