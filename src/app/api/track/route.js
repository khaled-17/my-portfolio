// app/api/track/route.js
import { NextResponse } from 'next/server';
import { handleVisit, handlePageView, handleEvent, handleUnload } from '@/lib/tracking';
import geoip from 'geoip-lite';
import UAParser from 'ua-parser-js';

export async function POST(req) {
  try {
    const data = await req.json();
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';
    const geo = geoip.lookup(ip);
    const parser = new UAParser(data.techData?.userAgent || '');
    const ua = parser.getResult();

    if (data.type === 'visit') {
      await handleVisit(data, ip, geo, ua);
    } else if (data.type === 'pageview') {
      await handlePageView(data);
    } else if (data.type === 'event') {
      await handleEvent(data);
    } else if (data.type === 'unload') {
      await handleUnload(data);
    }

    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('Tracking error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
