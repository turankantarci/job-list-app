import jobList from '../../mockData/jobList';

const handler = (req, res) => {
    res.status(200).json(jobList)
}

export default handler;