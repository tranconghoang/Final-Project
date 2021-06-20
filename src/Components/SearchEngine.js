import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./SearchEngine.css"
import { Form, FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { getSearch } from '../redux/action.js'
const element = <FontAwesomeIcon icon={faSearch} />

export default function SearchEngine() {
    const dispatch = useDispatch()
    return (
    
        <Form inline>
            <FormControl onChange={(e)=> dispatch(getSearch(e.target.value))} type="text"  />
            <Button >{element}</Button>
        </Form>
    )
}