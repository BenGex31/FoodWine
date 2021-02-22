import React, { Fragment } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap'
import dataWine from '../data.json'
import Wine from './Wine';

const listWine = dataWine

console.log(listWine);

class FilterWine extends React.Component {
    state = {
        list: listWine.filter(wine => wine.category === this.props.category),
        filter: [],
    }

    handleChange = (event) => {
        event.preventDefault()
        const currentPrice = parseInt(event.target.value);

        console.log('this vaut :', this)

        const wines = { ...this.state }
        console.log("Wines", wines);
        
        let filtering;
        switch(currentPrice) {
            case 1:
                filtering = wine => wine.price < 10;
                break;
            case 2:
                filtering = wine => wine.price >= 10 && wine.price < 20;
                break;
            case 3:
                filtering = wine => wine.price >= 20 && wine.price < 30;
                break;
            case 4:
                filtering = wine => wine.price >= 30 && wine.price < 40
                break;
            case 5:
                filtering = wine => wine.price >= 40 && wine.price < 50
                break;
            case 6:
                filtering = wine => wine.price >= 50
                break;
            default:
                filtering = wine => wine.price > 0
                break;
        }

        this.setState({
            filter: wines.list.filter(wine => filtering(wine)),
            number: wines.filter.length,
        })
    }

    componentDidMount() {
        if (this.state.filter.length === 0) {
            this.setState({
                filter: [...this.state.list],
            })
        }
    }

    render () {
        const listFilter = [...this.state.filter]

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
                    <Row>
                        <Col>
                            <p className="text-center mt-3">
                            {listFilter.length === 1 ? listFilter.length + " seul vin dans la liste"
                            : listFilter.length > 1 ? listFilter.length + " vins dans la liste"
                            : "Il n'y a pas de vin dans cette fourchette de prix..."}
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container className="listWine">
                    {listFilter.map(wine => (
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