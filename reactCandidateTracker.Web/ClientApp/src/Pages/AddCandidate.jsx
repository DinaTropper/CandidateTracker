import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useCandidatesCount } from '../Pages/CandidateCountContext';

const AddCandidate = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [notes, setNotes] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {refreshPendingCount } = useCandidatesCount();

  
    useEffect(() => {
        console.log('in effect');
    }, []);


    const onSubmitClick = async () => {
        setIsSubmitting(true);
        await axios.post('/api/candidates/addcandidate', { firstName, lastName, email, phoneNumber, notes });
        setIsSubmitting(false);
        navigate('/');
        refreshPendingCount();
    }
    const isValid = firstName && lastName && email && phoneNumber;

    return (
        <div className="container" style={{ marginTop: "80px" }}>
            < div className="row" style={{ marginTop: "20px" }}>
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Add Candidate</h4>
                        <form>
                            <input type="text" onChange={e => setFirstName(e.target.value)} name="firstName" placeholder="First Name" className="form-control" />
                            <br />
                            <input type="text" onChange={e => setLastName(e.target.value)} name="lastName" placeholder="Last Name" className="form-control" />
                            <br />
                            <input type="text" onChange={e => setEmail(e.target.value)} name="email" placeholder="Email" className="form-control" />
                            <br />
                            <input type="text" onChange={e => setPhoneNumber(e.target.value)} name="phoneNumber" placeholder="Phone Number" className="form-control" />
                            <br />
                            <textarea rows="5" onChange={e => setNotes(e.target.value)} className="form-control" name="Notes"></textarea>
                            <br />
                            <button className="btn btn-primary" disabled={!isValid} onClick={onSubmitClick}>{isSubmitting ? "Submitting..." : "Submit"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
}
export default AddCandidate;
