import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employees from './Employees'
import { useNavigate } from 'react-router-dom'

const Edit = () => {

  const [name, setName]=useState('')
  const [age, setAge]=useState('')

  useEffect(()=>{    
    setName(localStorage.getItem('Name'))
    setAge(localStorage.getItem('Age'))    
  },[])

  console.log(name, age)

  let history=useNavigate()  

  const handleUpdate=(e)=>{
    e.preventDefault()

    let result = Employees.map((d) => {
      return d.Id
    })
  
    var index = result.indexOf(localStorage.getItem('Id'))

    console.log(result)
    console.log(index)

    let a = Employees[index];
    a.Name=name
    a.Age=age

    history('/')
  }  
  
  return (
    <div>
      <Form className='d-grid gap-2' style={{ margin: '15rem' }}>
        <Form.Group className='mb-3' controlId='FormName'>
          <Form.Control type='text' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>
        <br />
        <Form.Group className='mb-3' controlId='FormAge'>
          <Form.Control type='text' placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)} required />
        </Form.Group>
      </Form>
      <Button onClick={(e) => handleUpdate(e)} type='submit'>UPDATE</Button>
    </div>
  )
}

export default Edit
