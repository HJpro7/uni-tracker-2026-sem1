self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(clients.claim()); });

self.addEventListener('message', function(e){
  if(e.data&&e.data.type==='notify'){
    e.waitUntil(
      self.registration.showNotification(e.data.title,{
        body: e.data.body,
        tag: e.data.tag,
        icon: '',
        renotify: false
      })
    );
  }
});
