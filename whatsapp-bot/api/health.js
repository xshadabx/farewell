// Health check endpoint for WhatsApp bot
module.exports = function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    // Only allow GET requests
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }
    
    res.status(200).json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        service: "Iqra's Farewell WhatsApp Bot",
        event: "Iqra's Farewell Bash",
        date: "September 14th, 2025",
        whatsapp: "+1 980 470 3786",
        endpoints: {
            webhook: '/api/webhook',
            health: '/api/health'
        }
    });
}
