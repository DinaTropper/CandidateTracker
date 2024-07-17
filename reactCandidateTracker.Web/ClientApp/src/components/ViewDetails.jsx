import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useCandidatesCount } from '../Pages/CandidateCountContext';


const ViewDetails = () => {


    const { id } = useParams();
    const [candidate, setCandidate] = useState({});
    const { firstName, lastName, email, phoneNumber, notes } = candidate;
    const { refreshConfirmedCount, refreshRejectedCount, refreshPendingCount } = useCandidatesCount();
    const navigate = useNavigate();

    useEffect(() => {
        const getById = async () => {
            const { data } = await axios.get(`/api/candidates/getbyid?id=${id}`);
            setCandidate(data);
            console.log(data);
        }
        getById();
    }, [])

    const onConfirmClick = async () => {
        candidate.status = 'Confirmed';
        await axios.post('/api/candidates/updatestatus', candidate);
        refreshConfirmedCount();
        refreshPendingCount();
        navigate('/confirmed');
    }
    const onRejectClick = async () => {
        candidate.status = 'Rejected';
        await axios.post('/api/candidates/updatestatus', candidate);
        refreshRejectedCount();
        refreshPendingCount();
        navigate('/rejected');

    }

    return (
        <div className="container" style={{ marginTop: "80px" }}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Name: {candidate.firstName} {candidate.lastName}</h4>
                        <h4>Email:{candidate.email}</h4>
                        <h4>Phone: {candidate.phoneNumber}</h4>
                        <h4>Status: {candidate.status}</h4>
                        <h4>Notes:</h4>
                        <p>{candidate.notes}</p>
                        <div>
                            <button className="btn btn-primary" onClick={onConfirmClick}>Confirm</button>
                            <button className="btn btn-danger" onClick={onRejectClick} >Reject</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewDetails;