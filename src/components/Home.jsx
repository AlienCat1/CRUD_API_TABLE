import React, { Fragment } from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employees from './Employees'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

  const history = useNavigate()

  const handleEdit = (Id, Name, Age) => {

    localStorage.setItem('Id', Id)
    localStorage.setItem('Name', Name)
    localStorage.setItem('Age', Age)

  }

  const handleDelete = (Id) => {
    let result = Employees.map((e) => {
      return e.Id
    })

    var index = result.indexOf(Id)

    Employees.splice(index, 1)

    history('/')
  }

  return (
    <Fragment>
      <div style={{ margin: '10rem' }}>
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Age
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {
              Employees && Employees.length > 0
                ?
                Employees.map((item) => {
                  return (
                    <tr>
                      <td>
                        {item.Name}
                      </td>
                      <td>
                        {item.Age}
                      </td>
                      <Link to={'/edit'}>
                       <Button onClick={() => handleEdit(item.Id, item.Name, item.Age)}>EDIT</Button>
                      </Link>
                      &nbsp;
                      <Button onClick={() => handleDelete(item.Id)}>DELETE</Button>
                    </tr>
                  )
                })
                :
                "No Data Available"
            }
          </tbody>
        </Table>
        <br />
        <Link to={'/add'}>
         <Button>CREATE</Button>
        </Link>
      </div>
    </Fragment>
  )
}

export default Home
