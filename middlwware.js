export const middleware = (req, res, next) => {
  if (
    req.headers.length !== 0 ||
    req.query.length !== 0 ||
    req.body.length !== 0 ||
    req.params
  ) {
    console.log(req.header);
    res.json({
      context: "something found",
      headers: req.headers,
      params: req.params,
      body: req.body,
      query: req.query,
    });
  }
  next();
};
