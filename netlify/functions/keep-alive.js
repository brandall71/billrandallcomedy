exports.handler = async function() {
  try {
    await fetch(
      'https://mtudjpkvsawcuzgrqapx.supabase.co/rest/v1/shows?select=id&limit=1',
      {
        headers: {
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10dWRqcGt2c2F3Y3V6Z3JxYXB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3OTY3MjksImV4cCI6MjA5NjM3MjcyOX0.NCdkd8L42LjiOMVr0fvOZHl1nTtAfbjr9Cv9apGLnnk',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10dWRqcGt2c2F3Y3V6Z3JxYXB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3OTY3MjksImV4cCI6MjA5NjM3MjcyOX0.NCdkd8L42LjiOMVr0fvOZHl1nTtAfbjr9Cv9apGLnnk'
        }
      }
    );
    return { statusCode: 200, body: 'OK' };
  } catch(e) {
    return { statusCode: 500, body: e.message };
  }
};
