.UUID || "ad80b5ad-c12e-4614-a95e-18e3fb77a064";
    
    if (url.pathname === '/sub') {
      const host = url.hostname;
      const vlessMain = `vless://${uuid}@${host}:443?encryption=none&security=tls&sni=${host}&type=ws&host=${host}&path=%2F#Seronto-VLESS`;
      return new Response(btoa(vlessMain), {
        headers: { 'content-type': 'text/plain; charset=utf-8' }
      });
    }
    
    return new Response("Skrip Aktif! Tambahkan /sub di ujung alamat untuk mengambil akun VLESS.", { status: 200 });
  }
};
