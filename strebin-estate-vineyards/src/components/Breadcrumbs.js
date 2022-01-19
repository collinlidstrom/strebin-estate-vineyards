import React from 'react'

export default function Breadcrumbs(props) {
  console.log('rendering breadcrumbs')
  return (
    <div className='container'>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Welcome</a>
          </li>
          <li class="breadcrumb-item">
            <a href="/library">Wine Collection</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Under Development</li>
        </ol>
      </nav>
    </div>
  )
}
