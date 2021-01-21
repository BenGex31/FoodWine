import React, { Fragment } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap'
import dataWine from '../data.json'
import Wine from './Wine';

const listWine = dataWine

console.log(listWine);

class FilterWine extends React.Component {
    state = {
        list: listWine,
        number: listWine.length,
        filter: ''
    }

    handleChange = (event) => {
        event.preventDefault()
        const currentPrice = event.target.value;
        console.log('this vaut :', this)
        const wines = { ...this.state }

        const choice1 = wines.list.filter(wine => wine.price < 10)
        console.log(choice1)
        
        if(currentPrice === 1) {
            this.setState({
                filter: wines.list.filter(wine => wine.price < 10)
            })
        }
    }

    render () {
        //const { listFilter } = this.state.filter
        return (
            <Fragment>
                <Container className='mt-5 mb-5'>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <Form>
                                <FormGroup>
                                    <Label for="selectBudget">Selectionner votre budget :</Label>
                                    <Input onChange={this.handleChange}
                                    type="select"
                                    name="select"
                                    id="selectBudget">
                                        <option value="select">-</option>
                                        <option value={1}>inférieur à 10€</option>
                                        <option value={2}>entre 10€ et 20€</option>
                                        <option value={3}>entre 20€ et 30€</option>
                                        <option value={4}>entre 30€ et 40€</option>
                                        <option value={5}>entre 40€ et 50€</option>
                                        <option value={6}>supérieur à 50€</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <Container className="listWine">
                    {this.state.list
                        .filter(wine => wine.category === this.props.category)
                            .map(wine => (
                                <Wine
                                    id={wine.id}
                                    nameWine={wine.nameWine}
                                    year={wine.year}
                                    price={wine.price}
                                    imgWine={wine.imgWine}
                                    description={wine.description}
                                    story={wine.story}
                                    rating={wine.rating}
                                />
                            )
                        )
                    }
                </Container>
            </Fragment>
        )
    }
}

export default FilterWine