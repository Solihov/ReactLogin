import { useDispatch } from 'react-redux'
import './style.scss'
import { SetPopUpDisplay } from '../../store/Features/FileSlice'

const FilePage = () => {
    const dispatch = useDispatch()
    const showPopUpDisplay = () => {
        dispatch(SetPopUpDisplay('flex'))
    }
    return (
        <>File</>
    )
}

export default FilePage