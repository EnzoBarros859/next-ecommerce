export function handleWebhookResponse(response: Response) {
  const orderEvent = response.headers.get('X-Order-Event');
  
  if (orderEvent) {
    try {
      const eventData = JSON.parse(orderEvent);
      // Dispatch a custom event that the NotificationProvider will listen for
      window.dispatchEvent(
        new CustomEvent('order-event', {
          detail: {
            type: eventData.type,
            message: eventData.message,
            order: eventData.order
          }
        })
      );
    } catch (error) {
      console.error('Error parsing order event:', error);
    }
  }
} 