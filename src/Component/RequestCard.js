import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// prop = { data}

function HeaderAndFooterExample({data}) {
        
  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{data.heading}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Button variant="primary" href={`/studentreq/${data.id}`}>Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default HeaderAndFooterExample;