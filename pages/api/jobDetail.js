import jobDetail from 'mockData/jobDetail';

const handler = (req, res) => {
    res.status(200).json(jobDetail)
}

export default handler;