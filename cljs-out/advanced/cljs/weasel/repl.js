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
weasel.repl.process_message = (function (){var method_table__4409__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4410__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4411__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4412__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4413__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1053,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("process-message",cljs.core.constant$keyword$1127,cljs.core.constant$keyword$769,hierarchy__4413__auto__,method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__));
})();
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$1128,(function (message){return console.error(("Websocket REPL error "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$810.cljs$core$IFn$_invoke$arity$1(message))));
}));
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$1129,(function (message){var code = cljs.core.constant$keyword$1130.cljs$core$IFn$_invoke$arity$1(message);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1127,cljs.core.constant$keyword$1131,cljs.core.constant$keyword$841,(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1132,cljs.core.constant$keyword$924,cljs.core.constant$keyword$841,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(eval(code)))], null);
}catch (e43378){if((e43378 instanceof Error))
{var e = e43378;return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1132,cljs.core.constant$keyword$1134,cljs.core.constant$keyword$841,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$1133,(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
} else
{if(cljs.core.constant$keyword$768)
{var e = e43378;return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1132,cljs.core.constant$keyword$1134,cljs.core.constant$keyword$841,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$1133,"No stacktrace available."], null);
} else
{return null;
}
}
}})()], null);
}));
weasel.repl.repl_print = (function repl_print(x){var temp__4124__auto__ = cljs.core.deref(weasel.repl.ws_connection);if(cljs.core.truth_(temp__4124__auto__))
{var conn = temp__4124__auto__;return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(weasel.repl.ws_connection),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1127,cljs.core.constant$keyword$1135,cljs.core.constant$keyword$841,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0))], null));
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
weasel.repl.connect = (function() { 
var connect__delegate = function (repl_server_url,p__43379){var map__43382 = p__43379;var map__43382__$1 = ((cljs.core.seq_QMARK_(map__43382))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43382):map__43382);var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43382__$1,cljs.core.constant$keyword$1136);var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43382__$1,cljs.core.constant$keyword$1137);var on_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43382__$1,cljs.core.constant$keyword$1138);var verbose = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43382__$1,cljs.core.constant$keyword$1139,true);var repl_connection = weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(weasel.repl.ws_connection,cljs.core.constantly(repl_connection));
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1140,((function (repl_connection,map__43382,map__43382__$1,on_close,on_error,on_open,verbose){
return (function (evt){clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1127,cljs.core.constant$keyword$1141], null)], 0)));
if(cljs.core.truth_(verbose))
{console.info("Opened Websocket REPL connection");
} else
{}
if(cljs.core.fn_QMARK_(on_open))
{return (on_open.cljs$core$IFn$_invoke$arity$0 ? on_open.cljs$core$IFn$_invoke$arity$0() : on_open.call(null));
} else
{return null;
}
});})(repl_connection,map__43382,map__43382__$1,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1142,((function (repl_connection,map__43382,map__43382__$1,on_close,on_error,on_open,verbose){
return (function (evt){var map__43383 = cljs.reader.read_string(evt.message);var map__43383__$1 = ((cljs.core.seq_QMARK_(map__43383))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43383):map__43383);var message = map__43383__$1;var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43383__$1,cljs.core.constant$keyword$1127);var response = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1 ? weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1(message) : weasel.repl.process_message.call(null,message))], 0));return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,response);
});})(repl_connection,map__43382,map__43382__$1,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1143,((function (repl_connection,map__43382,map__43382__$1,on_close,on_error,on_open,verbose){
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
});})(repl_connection,map__43382,map__43382__$1,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1128,((function (repl_connection,map__43382,map__43382__$1,on_close,on_error,on_open,verbose){
return (function (evt){if(cljs.core.truth_(verbose))
{console.error("WebSocket error",evt);
} else
{}
if(cljs.core.fn_QMARK_(on_error))
{return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(evt) : on_error.call(null,evt));
} else
{return null;
}
});})(repl_connection,map__43382,map__43382__$1,on_close,on_error,on_open,verbose))
);
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(repl_connection,repl_server_url);
};
var connect = function (repl_server_url,var_args){
var p__43379 = null;if (arguments.length > 1) {
  p__43379 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return connect__delegate.call(this,repl_server_url,p__43379);};
connect.cljs$lang$maxFixedArity = 1;
connect.cljs$lang$applyTo = (function (arglist__43384){
var repl_server_url = cljs.core.first(arglist__43384);
var p__43379 = cljs.core.rest(arglist__43384);
return connect__delegate(repl_server_url,p__43379);
});
connect.cljs$core$IFn$_invoke$arity$variadic = connect__delegate;
return connect;
})()
;
