import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';

const CandidateCountContext = createContext();

const CandidateCountContextComponent = (props) => {

    const [ConfirmedCount, setConfirmedCount] = useState(0);
    const [RejectedCount, setRejectedCount] = useState(0);
    const [PendingCount, setPendingCount] = useState(0);

    const refreshConfirmedCount = async () => {
        const { data } = await axios.get('/api/candidates/getconfirmedcount');
        setConfirmedCount(data);
    }

    const refreshRejectedCount = async () => {
        const { data } = await axios.get('/api/candidates/getrejectedcount');
        setRejectedCount(data);
    }

    const refreshPendingCount = async () => {
        const { data } = await axios.get('/api/candidates/getpendingcount');
        setPendingCount(data);        
    }

    useEffect(() => {
        refreshConfirmedCount();
        refreshRejectedCount();
        refreshPendingCount();
    }, []);

    const obj = {
        ConfirmedCount,
        RejectedCount,
        PendingCount,
        refreshConfirmedCount,
        refreshRejectedCount,
        refreshPendingCount
    }

    return <CandidateCountContext.Provider value={obj}>
        {props.children}
    </CandidateCountContext.Provider>
}

const useCandidatesCount = () => {
    return useContext(CandidateCountContext);
}

export default CandidateCountContextComponent;
export { useCandidatesCount };
