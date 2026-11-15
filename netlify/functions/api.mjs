import {handleRequest} from '../../server.mjs';
export const config = { path: ['/api/status', '/api/alerts', '/api/chat'] };
export default async function(request) {
 const url = new URL(request.url), headers = Object.fromEntries(request.headers.entries());
 headers.host = url.host;
 const body = request.method === 'POST' ? await request.text() : '';
 const req = {url: url.pathname, method: request.method, headers, async *[Symbol.asyncIterator]() { if (body) yield body; }};
 let status = 500, responseHeaders = {}, responseBody = '';
 const res = {writeHead(code, h) {status = code; responseHeaders = h}, end(data) {responseBody = data || ''}};
 try { await handleRequest(req, res); return new Response(responseBody, {status, headers: responseHeaders}); }
 catch { return Response.json({error: 'No se pudo completar la consulta del servidor.'}, {status: 500}); }
}
