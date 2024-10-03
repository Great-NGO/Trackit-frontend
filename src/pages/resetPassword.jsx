import React from 'react'
import Layout from '../components/common/Layout'
import { Button, Container, Form } from 'react-bootstrap'
import Loader from '../components/Loader'

const ResetPassword = () => {
  return (
    <Layout>
      <>
        <Container fluid="md">
          <main className="border rounded p-5 mt-5">

            <Form onSubmit={"handleResetPassword"}>
              <h1>Reset Password</h1>

                     {/* Password success Message */}
                     {/* {successMsg? 
                        <Alert variant="info" >
                          <strong> Password has been reset successfully! <span onClick={() => navigate('/login')} style={{cursor: "pointer", textDecoration: "underline"}}>Click here to login!</span> </strong>  
                        </Alert>
                        : null
                      }

                       {/* Show error */}
                        {/* {error.length > 0 ?  */}
                          {/* <Alert variant="danger" onClick={(evt) => dispatch({type: 'clearErrorAlert'})} style={{cursor: "pointer", fontWeight: "700"}} > */}
                            {/* {error[0]} */}
                          {/* </Alert> */}
                          {/* : null */}
                        {/* } */}

              <Form.Group controlId="formNewResetPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="New password"
                //   value={newPassword}
                  name="newPassword"
                //   onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formConfirmResetPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm new password"
                //   value={confirmNewPassword}
                  name="confirmNewPassword"
                //   onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Button variant="success" type="submit" className="mt-2">
                Submit
              </Button>

              {/* {isLoading ? <Loader size={"70px"} /> : "" } */}

              
              
            </Form>
          </main>
        </Container>
      </>
    </Layout>
  )
}

export default ResetPassword