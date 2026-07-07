const ICS_URL = 'https://p131-caldav.icloud.com/published/2/Mjg4MDkxNzYzMjg4MDkxN84zBbRLKxGY7g-uWcZpCB71I5hiCODQdOwUJOWLcDUH-d05UuKm0d_-b8RGn5n0nAZHznNL_V9mddAV4SvCpn4';

function unfold(text) {
  return text.replace(/\r?\n[ \t]/g, '');
}

function value(line) {
  const i = line.indexOf(':');
  return i === -1 ? '' : line.slice(i + 1).trim();
}

function parseDate(raw) {
  if (!raw) return null;
  const clean = raw.replace(/Z$/, '');
  const y = Number(clean.slice(0, 4));
  const m = Number(clean.slice(4, 6)) - 1;
  const d = Number(clean.slice(6, 8));
  if (!y || m < 0 || !d) return null;
  return new Date(Date.UTC(y, m, d));
}

function parseEvents(ics) {
  const out = [];
  const blocks = unfold(ics).split('BEGIN:VEVENT').slice(1);
  for (const block of blocks) {
    const lines = block.split(/\r?\n/);
    const startLine = lines.find(l => l.startsWith('DTSTART'));
    const endLine = lines.find(l => l.startsWith('DTEND'));
    const summaryLine = lines.find(l => l.startsWith('SUMMARY'));
    const start = parseDate(value(startLine || ''));
    let end = parseDate(value(endLine || ''));
    if (!start) continue;
    if (!end) end = new Date(start.getTime() + 86400000);
    out.push({
      start: start.toISOString().slice(0, 10),
      end: end.toISOString().slice(0, 10),
      summary: value(summaryLine || 'Booked') || 'Booked'
    });
  }
  return out;
}

export default async function handler(req, res) {
  try {
    const response = await fetch(ICS_URL, { headers: { 'user-agent': 'MarbellaHideawayAvailability/1.0' } });
    if (!response.ok) throw new Error(`Calendar responded ${response.status}`);
    const ics = await response.text();
    res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600');
    res.status(200).json({ updatedAt: new Date().toISOString(), events: parseEvents(ics) });
  } catch (error) {
    res.status(500).json({ error: 'Unable to read availability calendar', detail: error.message });
  }
}
