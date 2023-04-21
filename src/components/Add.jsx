import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { v4 as uuid } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employees from './Employees'
import { useNavigate } from 'react-router-dom'

const Add = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    let history = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        
        const ids = uuid()
        let uniqueId = ids.slice(0,8)

        Employees.push({Id: uniqueId, Name: name, Age: age})

        history('/')
    }    

    return (
        <div>
            <Form className='d-grid gap-2' style={{margin:'15rem'}}>
                <Form.Group className='mb-3' controlId='FormName'>
                    <Form.Control type='text' placeholder='Enter Name' onChange={(e) => setName(e.target.value)} required />
                </Form.Group>
                <br />
                <Form.Group className='mb-3' controlId='FormAge'>
                    <Form.Control type='text' placeholder='Enter Age' onChange={(e) => setAge(e.target.value)} required />
                </Form.Group>
            </Form>
            <Button onClick={(e)=>handleSubmit(e)}>SUBMIT</Button>
        </div>
    )
}

export default Add
