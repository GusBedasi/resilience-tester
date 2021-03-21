const handleFail = (req, res) => {
  const failPercent = req.query.percent;
  const failPercentCount = (failPercent / 10);
  const randomicNumberOneToTen = Math.floor(Math.random() * (11 - 1) + 1);
  
  if(failPercentCount >= randomicNumberOneToTen && failPercentCount < failPercentCount + 1){
    return res.status(500).send();
  }else{
    return res.status(200).send();
  }
}

module.exports = handleFail;