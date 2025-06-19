// lib/tracking.js
import { pool } from './db';

export async function handleVisit(data, ip, geo, ua) {
  const [rows] = await pool.query(
    'SELECT id FROM visitors WHERE session_id = ?',
    [data.sessionId]
  );

  if (rows.length > 0) {
    await pool.query(
      `UPDATE visitors SET 
       last_visit = NOW(), 
       page_views = page_views + 1,
       is_returning = ?
       WHERE session_id = ?`,
      [data.isReturning ? 1 : 0, data.sessionId]
    );
  } else {
    await pool.query(
      `INSERT INTO visitors (
        session_id, ip_address, user_agent, referrer, landing_page,
        screen_resolution, language, device_type, os, browser,
        country, city, timezone, first_visit, last_visit, is_returning
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), ?)`,
      [
        data.sessionId,
        ip,
        data.techData.userAgent,
        data.pageData.referrer,
        data.pageData.url,
        data.techData.screenResolution,
        data.techData.language,
        data.techData.deviceType,
        ua.os.name,
        ua.browser.name,
        geo?.country,
        geo?.city,
        geo?.timezone || '',
        data.isReturning ? 1 : 0,
      ]
    );
  }
}

export async function handlePageView(data) {
  await pool.query(
    `INSERT INTO page_views (
      session_id, page_url, page_title, time_spent, scroll_depth
    ) VALUES (?, ?, ?, ?, ?)`,
    [
      data.sessionId,
      data.pageData.url,
      data.pageData.title,
      data.pageData.timeSpent,
      data.pageData.scrollDepth,
    ]
  );
}

export async function handleEvent(data) {
  await pool.query(
    `INSERT INTO events (
      session_id, event_type, event_value, element_id, element_class, element_tag, page_url
    ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      data.sessionId,
      data.eventData.eventType,
      data.eventData.eventValue,
      data.eventData.elementId,
      data.eventData.elementClass,
      data.eventData.elementTag,
      data.eventData.pageUrl,
    ]
  );
}

export async function handleUnload(data) {
  await pool.query(
    `UPDATE page_views SET 
     time_spent = ?,
     scroll_depth = ?
     WHERE session_id = ? AND page_url = ?
     ORDER BY timestamp DESC LIMIT 1`,
    [
      data.pageData.timeSpent,
      data.pageData.scrollDepth,
      data.sessionId,
      data.pageData.url,
    ]
  );
}
