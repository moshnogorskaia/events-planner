function handler(req, res) {
  const eventId = req.query.eventId;
  if (req.method === 'POST') {
    const { email, name, text } = req.body;
    if (
      !email ||
      email.trim() === '' ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }
    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log('server', newComment);
    res.status(201).json({ message: 'Comment added.', comment: newComment });
  }

  if (req.method === 'GET') {
    const comments = [
      { id: '1', email: 'test@test.com', name: 'Test', text: 'Test' },
      { id: '2', email: 'test2@test.com', name: 'Test2', text: 'Test2' },
    ];
    res.status(200).json({ comments: comments });
  }
}

export default handler;
