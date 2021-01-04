async function createAuction(event, context) {
  const title = JSON.parse(event.body);
  const now = new Date().toISOString();

  const auction = {
    title: title,
    status: 'OPEN',
    createdAt: now
  }



  return {
    statusCode: 200,
    body: JSON.stringify({ auction }),
  };
}

export const handler = createAuction;


