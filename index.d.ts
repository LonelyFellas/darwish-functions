declare namespace Darwish {
  type URL =
    | string
    | URLSearchParams
    | string[][]
    | Record<string, string>
    | undefined;
  function operateURL(url: URL): URLSearchParams;
}
