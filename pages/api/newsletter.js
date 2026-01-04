function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;
    console.log('server', email);

    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }
    // Store email in a database
    res.status(201).json({ message: 'Signed up!' });
  }
}

export default handler;
