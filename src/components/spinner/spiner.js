import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
 function spiner() {
  return (
    <div>
      <Spinner animation="border" size="sm" />
      <Spinner animation="border" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
    </div>
  )
}
export default spiner