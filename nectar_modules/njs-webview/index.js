'!_ffi_include lib/njs-webview.h';

var njs_display = {};
njs_display.webview_create = function(_window, _title)
{
  __NJS_CREATE(_window, _title);
};
njs_display.webview_destroy = function(_window)
{
  __NJS_DESTROY(_window);
};
njs_display.webview_run = function(_window)
{
  __NJS_RUN(_window);
};
njs_display.webview_terminate = function(_window)
{
  __NJS_TERMINATE(_window);
};
njs_display.webview_dispatch = function(_window,  _fn, _args)
{
  __NJS_DISPATCH(_window, _fn, _args);
};
njs_display.webview_get_window = function(_window)
{
  __NJS_GET_WINDOW(_window);
};
njs_display.webview_set_title = function(_window, _title)
{
  __NJS_SET_TITLE(_window, _title);
};
njs_display.webview_set_size = function(_window, _width, _height, _hints)
{
  __NJS_SET_SIZE(_window, _width, _height, _hints);
};
njs_display.webview_navigate = function(_window, _uri)
{
  __NJS_NAVIGATE(_window, _uri);
};
njs_display.webview_init = function(_window, _js)
{
  __NJS_INIT(_window, _js);
};
njs_display.webview_eval = function(_window, _js)
{
  __NJS_EVAL(_window, _js);
};
njs_display.webview_bind = function(_window, _name, _fn, _args)
{
  __NJS_BIND(_window, _name, _fn, _args);
};
njs_display.webview_return = function(_window, _seq, _status, _result)
{
  __NJS_RETURN(_window, _seq, _status, _result);
};


module.exports = njs_display;
