import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ids = searchParams.get('ids');

  if (!ids) {
    return NextResponse.json({ error: 'Tracking ID(s) required' }, { status: 400 });
  }

  const trackingIds = ids.split(',')
    .map(id => id.trim())
    .filter(Boolean);

  if (trackingIds.length === 0) {
    return NextResponse.json({ error: 'No valid tracking IDs provided' }, { status: 400 });
  }

  if (trackingIds.length > 5) {
    return NextResponse.json({ error: 'Maximum 5 tracking IDs allowed per request' }, { status: 400 });
  }
  
  // Simulate fetching data for each ID
  const results = trackingIds.map(id => {
    // Generate some random but consistent data based on the ID
    const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const statuses = ['In Transit', 'Delivered', 'Pending', 'Out for Delivery'];
    const status = statuses[hash % statuses.length];
    
    const origins = ['Singapore (SIN)', 'New York (JFK)', 'London (LHR)', 'Tokyo (HND)'];
    const destinations = ['Rotterdam (RTM)', 'Los Angeles (LAX)', 'Frankfurt (FRA)', 'Sydney (SYD)'];
    
    const origin = origins[hash % origins.length];
    const destination = destinations[(hash + 1) % destinations.length];
    
    return {
      id,
      status,
      origin,
      destination,
      estimatedDelivery: 'Oct 31',
      weight: `${(hash % 2000) + 100} KG`,
      service: hash % 2 === 0 ? 'Express Sea' : 'Air Freight',
      events: [
        { date: 'Oct 26, 14:15', location: 'Dubai Al Maktoum', description: 'Departed Sorting Facility', icon: 'Truck' },
        { date: 'Oct 25, 02:40', location: `En route from ${origin.split(' ')[1].replace(/[()]/g, '')}`, description: 'Flight In Transit', icon: 'PlaneTakeoff' },
        { date: 'Oct 24, 19:10', location: `${origin.split(' ')[0]} Central Gateway`, description: 'Arrived at Origin Hub', icon: 'Network' }
      ]
    };
  });

  return NextResponse.json({ results });
}
