import React from 'react'

export default function Card(props) {
    // const {color}=this.props;
  return (
    <div>
      <div class="card" style={{width:" 18rem"}}>
  <div class={`card-body ${props.color}`}>
    <h5 class="card-title"></h5>
    <h6 class="card-subtitle mb-2 text-muted"></h6>
    <i class="fa-regular fa-user text-white fs-1  pt-1 "></i>
    <p class="card-text pt-2">{props.count}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    </div>
  )
}
