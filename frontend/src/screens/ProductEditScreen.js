import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productContants'
import Meta from '../components/Meta'

const ProductEditScreen = ({ match, history }) => {

    const productId = match.params.id

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails
    
    const productUpdate = useSelector(state => state.productUpdate)
    const { loading:loadingUpdate, error:errorUpdate, success:successUpdate } = productUpdate

    useEffect(() => {

        if(successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET })
            history.push('/admin/products/')
        } else {

            if(!product.name || product._id !== productId) {
                dispatch(listProductDetails(productId))
            } else {
                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setBrand(product.brand)
                setCategory(product.category)
                setDescription(product.description)
                setCountInStock(product.countInStock)
            }
        }
        

    }, [history, dispatch, product, productId, successUpdate])

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const { data } = await axios.post('/api/upload', formData, config)

            setImage(data)
            setUploading(false)

        } catch (error) {
            console.log(error)
            setUploading(false)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProduct({
            _id: productId,
            name,
            price,
            image,
            brand,
            category,
            description,
            countInStock
        }))
    }

    return (

        <>
            <Link to='/admin/products/' className='btn btn-light my-3'>Torna Indietro</Link>

            <Meta title={' Modifica Prodotto | CentCellStore'} />

            <FormContainer>
                <h1>Modifica Prodotto</h1>

                {loadingUpdate && <Loader />}

                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (

                <Form onSubmit={submitHandler}>

                    <Form.Group controlId='name'>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type='name' placeholder='Inserire il nome' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='price'>
                        <Form.Label>Prezzo</Form.Label>
                        <Form.Control type='number' placeholder='Inserire il prezzo' value={price} onChange={(e) => setPrice(e.target.value)}></Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId='image'>
                        <Form.Label>Immagine</Form.Label>
                        <Form.Control type='text' placeholder="Inserisci l'URL dell'immagine" value={image} onChange={(e) => setImage(e.target.value)}></Form.Control>
                        <Form.File className='mt-3' id='image-file' label='Scegli il file' custom onChange={uploadFileHandler}></Form.File>
                        {uploading && <Loader />}
                    </Form.Group>
                    
                    <Form.Group controlId='brand'>
                        <Form.Label>Marca</Form.Label>
                        <Form.Control type='text' placeholder='Inserisci il marchio' value={brand} onChange={(e) => setBrand(e.target.value)}></Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId='category'>
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control type='text' placeholder='Inserisci la categoria' value={category} onChange={(e) => setCategory(e.target.value)}></Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId='description'>
                        <Form.Label>Descrizione</Form.Label>
                        <Form.Control as='textarea' rows={5} placeholder='Immettere la descrizione' value={description} onChange={(e) => setDescription(e.target.value)}></Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId='countInStock'>
                        <Form.Label>Conta in magazzino</Form.Label>
                        <Form.Control type='number' placeholder='Enter countInStock' value={countInStock} onChange={(e) => setCountInStock(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                        Aggiorna
                    </Button>
                </Form>
                )}
            </FormContainer>

        </>
        
    )
}

export default ProductEditScreen
