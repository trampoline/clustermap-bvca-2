// Compiled by ClojureScript 0.0-2268
goog.provide('weasel.repl');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.browser.event');
goog.require('weasel.impls.websocket');
goog.require('weasel.impls.websocket');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('clojure.browser.net');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('clojure.browser.event');
weasel.repl.ws_connection = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
weasel.repl.alive_QMARK_ = (function alive_QMARK_(){return !((cljs.core.deref(weasel.repl.ws_connection) == null));
});
weasel.repl.process_message = (function (){var method_table__4409__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4410__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4411__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4412__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4413__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1048,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("process-message",cljs.core.constant$keyword$1121,cljs.core.constant$keyword$765,hierarchy__4413__auto__,method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__));
})();
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$1122,(function (message){return console.error(("Websocket REPL error "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$805.cljs$core$IFn$_invoke$arity$1(message))));
}));
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$1123,(function (message){var code = cljs.core.constant$keyword$1124.cljs$core$IFn$_invoke$arity$1(message);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1121,cljs.core.constant$keyword$1125,cljs.core.constant$keyword$836,(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1126,cljs.core.constant$keyword$919,cljs.core.constant$keyword$836,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(eval(code)))], null);
}catch (e44557){if((e44557 instanceof Error))
{var e = e44557;return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1126,cljs.core.constant$keyword$1128,cljs.core.constant$keyword$836,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$1127,(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
} else
{if(cljs.core.constant$keyword$764)
{var e = e44557;return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1126,cljs.core.constant$keyword$1128,cljs.core.constant$keyword$836,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$1127,"No stacktrace available."], null);
} else
{return null;
}
}
}})()], null);
}));
weasel.repl.repl_print = (function repl_print(x){var temp__4124__auto__ = cljs.core.deref(weasel.repl.ws_connection);if(cljs.core.truth_(temp__4124__auto__))
{var conn = temp__4124__auto__;return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(weasel.repl.ws_connection),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1121,cljs.core.constant$keyword$1129,cljs.core.constant$keyword$836,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0))], null));
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
weasel.repl.connect = (function() { 
var connect__delegate = function (repl_server_url,p__44558){var map__44561 = p__44558;var map__44561__$1 = ((cljs.core.seq_QMARK_(map__44561))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44561):map__44561);var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44561__$1,cljs.core.constant$keyword$1130);var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44561__$1,cljs.core.constant$keyword$1131);var on_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44561__$1,cljs.core.constant$keyword$1132);var verbose = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44561__$1,cljs.core.constant$keyword$1133,true);var repl_connection = weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(weasel.repl.ws_connection,cljs.core.constantly(repl_connection));
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1134,((function (repl_connection,map__44561,map__44561__$1,on_close,on_error,on_open,verbose){
return (function (evt){clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1121,cljs.core.constant$keyword$1135], null)], 0)));
if(cljs.core.truth_(verbose))
{console.info("Opened Websocket REPL connection");
} else
{}
if(cljs.core.fn_QMARK_(on_open))
{return (on_open.cljs$core$IFn$_invoke$arity$0 ? on_open.cljs$core$IFn$_invoke$arity$0() : on_open.call(null));
} else
{return null;
}
});})(repl_connection,map__44561,map__44561__$1,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1136,((function (repl_connection,map__44561,map__44561__$1,on_close,on_error,on_open,verbose){
return (function (evt){var map__44562 = cljs.reader.read_string(evt.message);var map__44562__$1 = ((cljs.core.seq_QMARK_(map__44562))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44562):map__44562);var message = map__44562__$1;var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44562__$1,cljs.core.constant$keyword$1121);var response = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1 ? weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1(message) : weasel.repl.process_message.call(null,message))], 0));return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,response);
});})(repl_connection,map__44561,map__44561__$1,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1137,((function (repl_connection,map__44561,map__44561__$1,on_close,on_error,on_open,verbose){
return (function (evt){cljs.core.reset_BANG_(weasel.repl.ws_connection,null);
if(cljs.core.truth_(verbose))
{console.info("Closed Websocket REPL connection");
} else
{}
if(cljs.core.fn_QMARK_(on_close))
{return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else
{return null;
}
});})(repl_connection,map__44561,map__44561__$1,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1122,((function (repl_connection,map__44561,map__44561__$1,on_close,on_error,on_open,verbose){
return (function (evt){if(cljs.core.truth_(verbose))
{console.error("WebSocket error",evt);
} else
{}
if(cljs.core.fn_QMARK_(on_error))
{return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(evt) : on_error.call(null,evt));
} else
{return null;
}
});})(repl_connection,map__44561,map__44561__$1,on_close,on_error,on_open,verbose))
);
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(repl_connection,repl_server_url);
};
var connect = function (repl_server_url,var_args){
var p__44558 = null;if (arguments.length > 1) {
  p__44558 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return connect__delegate.call(this,repl_server_url,p__44558);};
connect.cljs$lang$maxFixedArity = 1;
connect.cljs$lang$applyTo = (function (arglist__44563){
var repl_server_url = cljs.core.first(arglist__44563);
var p__44558 = cljs.core.rest(arglist__44563);
return connect__delegate(repl_server_url,p__44558);
});
connect.cljs$core$IFn$_invoke$arity$variadic = connect__delegate;
return connect;
})()
;
