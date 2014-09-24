// Compiled by ClojureScript 0.0-2322
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
weasel.repl.ws_connection = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
weasel.repl.alive_QMARK_ = (function alive_QMARK_(){return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(weasel.repl.ws_connection) : cljs.core.deref.call(null,weasel.repl.ws_connection)) == null));
});
weasel.repl.process_message = (function (){var method_table__4424__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var prefer_table__4425__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var method_cache__4426__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var cached_hierarchy__4427__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));var hierarchy__4428__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1131,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("process-message",cljs.core.constant$keyword$1205,cljs.core.constant$keyword$835,hierarchy__4428__auto__,method_table__4424__auto__,prefer_table__4425__auto__,method_cache__4426__auto__,cached_hierarchy__4427__auto__));
})();
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$1206,(function (message){return console.error(("Websocket REPL error "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$880.cljs$core$IFn$_invoke$arity$1(message))));
}));
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$1207,(function (message){var code = cljs.core.constant$keyword$1208.cljs$core$IFn$_invoke$arity$1(message);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1205,cljs.core.constant$keyword$1209,cljs.core.constant$keyword$913,(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1210,cljs.core.constant$keyword$995,cljs.core.constant$keyword$913,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(eval(code)))], null);
}catch (e44257){if((e44257 instanceof Error))
{var e = e44257;return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1210,cljs.core.constant$keyword$1212,cljs.core.constant$keyword$913,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$1211,(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
} else
{var e = e44257;return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1210,cljs.core.constant$keyword$1212,cljs.core.constant$keyword$913,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$1211,"No stacktrace available."], null);

}
}})()], null);
}));
weasel.repl.repl_print = (function repl_print(x){var temp__4124__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(weasel.repl.ws_connection) : cljs.core.deref.call(null,weasel.repl.ws_connection));if(cljs.core.truth_(temp__4124__auto__))
{var conn = temp__4124__auto__;return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(weasel.repl.ws_connection) : cljs.core.deref.call(null,weasel.repl.ws_connection)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1205,cljs.core.constant$keyword$1213,cljs.core.constant$keyword$913,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0))], null));
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
weasel.repl.connect = (function() { 
var connect__delegate = function (repl_server_url,p__44258){var map__44261 = p__44258;var map__44261__$1 = ((cljs.core.seq_QMARK_(map__44261))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44261):map__44261);var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44261__$1,cljs.core.constant$keyword$1214);var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44261__$1,cljs.core.constant$keyword$1215);var on_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44261__$1,cljs.core.constant$keyword$1216);var verbose = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44261__$1,cljs.core.constant$keyword$1217,true);var repl_connection = weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(weasel.repl.ws_connection,cljs.core.constantly(repl_connection));
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1218,((function (repl_connection,map__44261,map__44261__$1,on_close,on_error,on_open,verbose){
return (function (evt){clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1205,cljs.core.constant$keyword$1219], null)], 0)));
if(cljs.core.truth_(verbose))
{console.info("Opened Websocket REPL connection");
} else
{}
if(cljs.core.fn_QMARK_(on_open))
{return (on_open.cljs$core$IFn$_invoke$arity$0 ? on_open.cljs$core$IFn$_invoke$arity$0() : on_open.call(null));
} else
{return null;
}
});})(repl_connection,map__44261,map__44261__$1,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1220,((function (repl_connection,map__44261,map__44261__$1,on_close,on_error,on_open,verbose){
return (function (evt){var map__44262 = cljs.reader.read_string(evt.message);var map__44262__$1 = ((cljs.core.seq_QMARK_(map__44262))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44262):map__44262);var message = map__44262__$1;var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44262__$1,cljs.core.constant$keyword$1205);var response = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1 ? weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1(message) : weasel.repl.process_message.call(null,message))], 0));return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,response);
});})(repl_connection,map__44261,map__44261__$1,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1221,((function (repl_connection,map__44261,map__44261__$1,on_close,on_error,on_open,verbose){
return (function (evt){(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(weasel.repl.ws_connection,null) : cljs.core.reset_BANG_.call(null,weasel.repl.ws_connection,null));
if(cljs.core.truth_(verbose))
{console.info("Closed Websocket REPL connection");
} else
{}
if(cljs.core.fn_QMARK_(on_close))
{return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else
{return null;
}
});})(repl_connection,map__44261,map__44261__$1,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1206,((function (repl_connection,map__44261,map__44261__$1,on_close,on_error,on_open,verbose){
return (function (evt){if(cljs.core.truth_(verbose))
{console.error("WebSocket error",evt);
} else
{}
if(cljs.core.fn_QMARK_(on_error))
{return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(evt) : on_error.call(null,evt));
} else
{return null;
}
});})(repl_connection,map__44261,map__44261__$1,on_close,on_error,on_open,verbose))
);
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(repl_connection,repl_server_url);
};
var connect = function (repl_server_url,var_args){
var p__44258 = null;if (arguments.length > 1) {
  p__44258 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return connect__delegate.call(this,repl_server_url,p__44258);};
connect.cljs$lang$maxFixedArity = 1;
connect.cljs$lang$applyTo = (function (arglist__44263){
var repl_server_url = cljs.core.first(arglist__44263);
var p__44258 = cljs.core.rest(arglist__44263);
return connect__delegate(repl_server_url,p__44258);
});
connect.cljs$core$IFn$_invoke$arity$variadic = connect__delegate;
return connect;
})()
;
