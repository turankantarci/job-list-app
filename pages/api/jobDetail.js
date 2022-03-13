import jobDetail from 'mockData/jobDetail';

const handler = (req, res) => {
    const { id } = JSON.parse(req.body);
    const preparedJobDetail = jobDetail.find(job => id == job.id);
    
    res.status(200).json(preparedJobDetail);
}

export default handler;