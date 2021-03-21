const handleTimeout = (req, res) => {

  const timeToWait = req.query.timeout ? req.query.timeout * 1000 : 5000;
  const failPercent = req.query.percent;
  const failPercentCount = (failPercent / 10);
  const randomicNumberOneToTen = Math.floor(Math.random() * (11 - 1) + 1);

  if(failPercentCount >= randomicNumberOneToTen && failPercentCount < failPercentCount + 1){
    setTimeout(() => {
      return res.status(503).send({ServiceUnavailableError: 'Response timeout'});
    }, timeToWait);
  }else{
    return res.status(200).send();
  }
}

module.exports = handleTimeout;