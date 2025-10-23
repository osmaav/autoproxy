function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, ".googlevideo.com") || 
    dnsDomainIs(host, ".youtube.com") ||
    dnsDomainIs(host, ".ytimg.com") ||
    dnsDomainIs(host, ".ggpht.com")){ 
    return "PROXY '147.45.188.68:59739'";};
  return "DIRECT";
}
