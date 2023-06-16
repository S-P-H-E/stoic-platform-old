export default function WebhooksPage(req, res) {
    if (req.method === 'POST') {
      const event = req.body;
  
      if (event.type === 'invoice.created') {
        console.log('INVOICE CREATED');
      }
  
      res.status(200).end();
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  }
  