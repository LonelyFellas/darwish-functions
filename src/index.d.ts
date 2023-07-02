export = darwish;
export as namespace darwish;
declare namespace darwish {
  type searchurl = df.url;
  function operateurl(url: searchurl): urlsearchparams;
}
declare namespace df {
    type url = string | urlsearchparams | string[][] | record<string, string> | undefined;
}