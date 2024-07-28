import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Rejected = () => {


    const [candidate, setCandidate] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [toggleNotes, setToggleNotes] = useState(true);


    const { firstName, lastName, email, phoneNumber, notes, } = candidate;


    useEffect(() => {
        setIsLoading(true);
        const getRejected = async () => {
            const { data } = await axios.get('/api/candidates/getrejected');
            setCandidate(data);
        }
        getRejected();
        setIsLoading(false);
    }, []);

   

    const isValid = candidate.length > 0;
    return (
        <div className="container" style={{ marginTop: "80px" }}>
            <h3>{isLoading ? "Loading, please be patient..." : "Rejected Candidates:"}</h3>
            <button className="btn btn-info" disabled={!isValid} onClick={() => setToggleNotes(!toggleNotes)}>{toggleNotes ? "Hide notes" : "Show notes"}</button>
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        {toggleNotes && <th>Notes</th>}
                    </tr>
                </thead>
                <tbody>
                    {candidate.map(c =>
                        <tr key={c.id} style={{ backgroundColor: "#f8f9fa", borderRadius: "15px" }} >
                            <td>{c.firstName}</td>
                            <td>{c.lastName}</td>
                            <td>{c.phoneNumber}</td>
                            <td>{c.notes}</td>
                            {toggleNotes && <td>{c.notes}</td>}
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    )
}
export default Rejected;