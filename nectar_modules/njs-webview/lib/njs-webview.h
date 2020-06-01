#if defined(_WIN32)  || defined(__CYGWIN__)
  #define WIN32_LEAN_AND_MEAN
  #include "windows.h"
#endif

#include "webview.h"

using namespace webview;


 /* API
    WEBVIEW_API webview_t webview_create(int debug, void *window);
    WEBVIEW_API void webview_destroy(webview_t w);
    WEBVIEW_API void webview_run(webview_t w);
    WEBVIEW_API void webview_terminate(webview_t w);
    WEBVIEW_API void webview_dispatch(webview_t w, void (*fn)(webview_t w, void *arg), void *arg);
    WEBVIEW_API void *webview_get_window(webview_t w);
    WEBVIEW_API void webview_set_title(webview_t w, const char *title);
    WEBVIEW_API void webview_set_size(webview_t w, int width, int height, int hints);
    WEBVIEW_API void webview_navigate(webview_t w, const char *url);
    WEBVIEW_API void webview_init(webview_t w, const char *js);
    WEBVIEW_API void webview_eval(webview_t w, const char *js);
    WEBVIEW_API void webview_bind(webview_t w, const char *name, void (*fn)(const char *seq, const char *req, void *arg), void *arg);
    WEBVIEW_API void webview_return(webview_t w, const char *seq, int status,const char *result);
*/

var __NJS_CREATE(var _window, var _title)
{
   
}
var __NJS_DESTROY(var _window)
{
   
}
var __NJS_RUN(var _window)
{
   
}
var __NJS_TERMINATE(var _window)
{
   
}
var __NJS_DISPATCH(var _window, var _fn, var _args)
{
   
}
var __NJS_GET_WINDOW(var _window)
{
   
}
var __NJS_SET_TITLE(var _window, var _title)
{
   
}
var __NJS_SET_SIZE(var _window, var _width, var _height, var _hints)
{
   
}
var __NJS_NAVIGATE(var _window, var _URI)
{
   
}
var __NJS_INIT(var _window, var _js)
{
   
}
var __NJS_EVAL(var _window, var _title)
{
   
}
var __NJS_BIND(var _window, var _name, var _fn, var _args)
{
   
}
var __NJS_RETURN(var _window, var _seq, var _status, var _result)
{
   
}
