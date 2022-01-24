# jusbid
(function(window) {
      window["envconfig"] = window["envconfig"] || {};

      // Environment variables
      window["jusbid"]["apiurl"] = "http://http://localhost:4200//api";
})(this);

(function(window) {
      window.envconfig = window.envconfig || {};

      // Environment variables
      window["envconfig"]["apiurl"] = "${API_URL}";           
})(this);

export const environment = {
     production: false,
     webapiurl: (window as any)["envconfig"]["apiurl"] || "default"                   
};
