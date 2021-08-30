import Card from '../UI/Card'
import classes from './NewMeetUpForm.module.css'
import {useRef} from 'react'


const NewMeetUpForm = ()=>{

    const inputTitleRef = useRef()
    const inputImageRef =useRef()
    const inputAddressRef= useRef()
    const inputDescriptionRef=useRef()

    const submitHandler =(event)=>{
        event.preventDefault();

        const enteredTitle = inputTitleRef.current.value;
        const enteredImage = inputImageRef.current.value;
        const enteredAddress = inputAddressRef.current.value;
        const enteredDescription =inputDescriptionRef.current.value;

        const meetUpData ={
            Title: enteredTitle,
            Image:enteredImage,
            Address:enteredAddress,
            Description: enteredDescription      
        }

        console.log(meetUpData);


    }
    return(
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text"  required id="title" ref={inputTitleRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url"  required id="image" ref={inputImageRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text"  required id="address" ref={inputAddressRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                   <textarea id="description"  required cols="30" rows="10" ref={inputDescriptionRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                    </div>
            </form>
        </Card>
    )
}
export default NewMeetUpForm