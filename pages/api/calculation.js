// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function retrieve(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ details:"red" })
  }
}