import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Pending = () => {

    const [candidates, setCandidates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { firstName, lastName, email, phoneNumber, notes } = candidates;

    useEffect(() => {
        setIsLoading(true);
        const getPending = async () => {
            const { data } = await axios.get('/api/candidates/getpending');
            setCandidates(data);
        }
        getPending();
        setIsLoading(false);
    }, []);


    return (
        <div className="container" style={{ marginTop: "80px" }} >
            <h3>{isLoading ? "Loading, please be patient..." : "Pending Candidates:"}</h3>
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>View Details</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map(c =>
                        <tr key={c.id} style={{ backgroundColor: "#f8f9fa", borderRadius: "15px" }} >
                            <td>
                                <a href={`/viewdetails/${c.id}`}>View Details</a>
                            </td>
                            <td>{c.firstName}</td>
                            <td>{c.lastName}</td>
                            <td>{c.phoneNumber}</td>
                            <td>{c.email}</td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    )
}
export default Pending;