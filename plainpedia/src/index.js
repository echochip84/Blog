// plainpedia.com은 정적 자산(Hugo 빌드 결과물)만 서빙하는 Worker다. 유일한 커스텀
// 로직은 www.plainpedia.com → plainpedia.com 301 리다이렉트다 — _redirects 파일은
// 경로 기반 규칙만 지원하고 호스트(www) 기반 규칙은 지원하지 않아, 여기서 직접
// 처리한 뒤 나머지는 정적 자산 파이프라인(_redirects 포함)에 그대로 위임한다.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.plainpedia.com") {
      url.hostname = "plainpedia.com";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
