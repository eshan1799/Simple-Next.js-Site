export default function calculate(req, res) {
  if (req.method === 'GET') {
    const { query } = req
    const emberPricing = {
      monthly: 39,
      perEmployee: 4
    }
    const calcSavings = (query.monthlyCost - (emberPricing.monthly + (emberPricing.perEmployee * query.employeeCount))) * 12
    res.status(200).json({ moneySaved: calcSavings })
  }
}