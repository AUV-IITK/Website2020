// eslint-disable-next-line no-use-before-define
import React, { Component } from 'react'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-blogs'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'

// reactstrap components
import { Container, Row } from 'reactstrap'

import ExamplesNavbar from '../../components/Navbars/ExamplesNavbar'

import ContactUsComponent from '../LandingPage/components/ContactUs/ContactUs'

class ContactUsPage extends Component {
    state = {
      messageForm: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Name'
          },
          value: '',
          validation: {
            required: true
          }
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Email'
          },
          value: '',
          validation: {
            required: true
          }
        },
        message: {
          elementType: 'input',
          elementConfig: {
            type: 'textarea',
            placeholder: 'Tell us your thoughts and feelings'
          },
          value: '',
          validation: {
            required: true
          }
        }
      },
      loading: false
    };

    componentDidMount () {
      window.scrollTo(0, 0)
      document.documentElement.classList.remove('nav-open')
    }

    orderHandler = (event) => {
      event.preventDefault()
      // console.log(this.props.ingredients);
      const formData = {}

      for (const formElementIdentifier in this.state.messageForm) {
        formData[formElementIdentifier] = this.state.orderForm[
          formElementIdentifier
        ].value
      }
      // alert('You continue!');
      this.setState({ loading: true })
      const message = {
        orderData: formData
      }
      axios
        .post('/messages.json', message)
        .then(() => {
          this.setState({ loading: false })
          // eslint-disable-next-line react/prop-types
          this.props.history.push('/')
        })
        .catch(error => {
          this.setState({ loading: false })
          console.error(error)
        })
      console.log('Now posting')
    };

    inputChangedHandler = (event, inputIdentifier) => {
      const updatedOrderForm = {
        ...this.state.orderForm
      }

      const updatedFormElement = { ...updatedOrderForm[inputIdentifier] }

      updatedFormElement.value = event.target.value
      // updatedFormElement.valid= this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
      updatedFormElement.valid = true

      updatedOrderForm[inputIdentifier] = updatedFormElement
      this.setState({ orderForm: updatedOrderForm })
    };

    checkValidity (value, rules) {
      let isValid = true
      if (rules.required) {
        isValid = value.trim() !== '' && isValid
      }
      return isValid
    }

    render () {
      const FormElementsArray = []

      for (const key in this.state.messageForm) {
        FormElementsArray.push({
          id: key,
          config: this.state.messageForm[key]
        })
      }

      let form = (
            <form onSubmit={this.orderHandler}>
                {FormElementsArray.map((formElement) => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <Button btnType="Success" clicked={this.orderHandler}>
                    ORDER
                </Button>
            </form>
      )

      if (this.state.loading) {
        form = <Spinner/>
      }
      return (
            <>
                <ExamplesNavbar activePage="/contact-us"/>
                <div className="section text-center ">
                    <Container className="reduce-margin">
                        <Row>
                            <h2 className="heading-main">Contact Us</h2>
                        </Row>
                    </Container>
                </div>
                <div className="main">
                    <ContactUsComponent/>
                </div>
            </>
      )
    }
}

export default ContactUsPage
