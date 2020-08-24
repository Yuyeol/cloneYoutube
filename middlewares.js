import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  //여기서 siteName은 pug에서 쓸수있는 전역변수로 정의된것
  res.locals.siteName = "Wetube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};
