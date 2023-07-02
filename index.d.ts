export = Darwish;
export as namespace Darwish;
declare namespace Darwish {
  type SearchURL = DF.URL;
  function operateURL(url: SearchURL): URLSearchParams;
}
