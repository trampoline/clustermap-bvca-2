// Compiled by ClojureScript 0.0-2356
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
weasel.repl.ws_connection = (function (){var G__70683 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__70683) : cljs.core.atom.call(null,G__70683));
})();
weasel.repl.alive_QMARK_ = (function alive_QMARK_(){return !(((function (){var G__70685 = weasel.repl.ws_connection;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70685) : cljs.core.deref.call(null,G__70685));
})() == null));
});
weasel.repl.process_message = (function (){var method_table__4516__auto__ = (function (){var G__70686 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__70686) : cljs.core.atom.call(null,G__70686));
})();var prefer_table__4517__auto__ = (function (){var G__70687 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__70687) : cljs.core.atom.call(null,G__70687));
})();var method_cache__4518__auto__ = (function (){var G__70688 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__70688) : cljs.core.atom.call(null,G__70688));
})();var cached_hierarchy__4519__auto__ = (function (){var G__70689 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__70689) : cljs.core.atom.call(null,G__70689));
})();var hierarchy__4520__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1292,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("process-message",cljs.core.constant$keyword$1375,cljs.core.constant$keyword$1111,hierarchy__4520__auto__,method_table__4516__auto__,prefer_table__4517__auto__,method_cache__4518__auto__,cached_hierarchy__4519__auto__));
})();
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$1318,(function (message){return console.error(("Websocket REPL error "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1160.cljs$core$IFn$_invoke$arity$1(message))));
}));
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$1376,(function (message){var code = cljs.core.constant$keyword$1377.cljs$core$IFn$_invoke$arity$1(message);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1375,cljs.core.constant$keyword$1378,cljs.core.constant$keyword$1275,(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1379,cljs.core.constant$keyword$1306,cljs.core.constant$keyword$1275,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(eval(code)))], null);
}catch (e70690){if((e70690 instanceof Error))
{var e = e70690;return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1379,cljs.core.constant$keyword$1381,cljs.core.constant$keyword$1275,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$1380,(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
} else
{var e = e70690;return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1379,cljs.core.constant$keyword$1381,cljs.core.constant$keyword$1275,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$1380,"No stacktrace available."], null);

}
}})()], null);
}));
/**
* @param {...*} var_args
*/
weasel.repl.repl_print = (function() { 
var repl_print__delegate = function (args){var temp__4124__auto__ = (function (){var G__70693 = weasel.repl.ws_connection;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70693) : cljs.core.deref.call(null,G__70693));
})();if(cljs.core.truth_(temp__4124__auto__))
{var conn = temp__4124__auto__;return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2((function (){var G__70694 = weasel.repl.ws_connection;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70694) : cljs.core.deref.call(null,G__70694));
})(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1375,cljs.core.constant$keyword$1382,cljs.core.constant$keyword$1275,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,args)], null));
} else
{return null;
}
};
var repl_print = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return repl_print__delegate.call(this,args);};
repl_print.cljs$lang$maxFixedArity = 0;
repl_print.cljs$lang$applyTo = (function (arglist__70695){
var args = cljs.core.seq(arglist__70695);
return repl_print__delegate(args);
});
repl_print.cljs$core$IFn$_invoke$arity$variadic = repl_print__delegate;
return repl_print;
})()
;
/**
* @param {...*} var_args
*/
weasel.repl.console_print = (function() { 
var console_print__delegate = function (args){return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var console_print = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return console_print__delegate.call(this,args);};
console_print.cljs$lang$maxFixedArity = 0;
console_print.cljs$lang$applyTo = (function (arglist__70696){
var args = cljs.core.seq(arglist__70696);
return console_print__delegate(args);
});
console_print.cljs$core$IFn$_invoke$arity$variadic = console_print__delegate;
return console_print;
})()
;
weasel.repl.print_fns = new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$1383,weasel.repl.repl_print,cljs.core.constant$keyword$1384,weasel.repl.console_print,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1383,null,cljs.core.constant$keyword$1384,null], null), null),(function() { 
var G__70697__delegate = function (args){cljs.core.apply.cljs$core$IFn$_invoke$arity$2(weasel.repl.console_print,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(weasel.repl.repl_print,args);
};
var G__70697 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__70697__delegate.call(this,args);};
G__70697.cljs$lang$maxFixedArity = 0;
G__70697.cljs$lang$applyTo = (function (arglist__70698){
var args = cljs.core.seq(arglist__70698);
return G__70697__delegate(args);
});
G__70697.cljs$core$IFn$_invoke$arity$variadic = G__70697__delegate;
return G__70697;
})()
], true, false);
/**
* @param {...*} var_args
*/
weasel.repl.connect = (function() { 
var connect__delegate = function (repl_server_url,p__70699){var map__70706 = p__70699;var map__70706__$1 = ((cljs.core.seq_QMARK_(map__70706))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70706):map__70706);var print = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70706__$1,cljs.core.constant$keyword$1382,cljs.core.constant$keyword$1383);var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70706__$1,cljs.core.constant$keyword$1385);var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70706__$1,cljs.core.constant$keyword$1386);var on_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70706__$1,cljs.core.constant$keyword$1387);var verbose = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70706__$1,cljs.core.constant$keyword$1388,true);var repl_connection = weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(weasel.repl.ws_connection,cljs.core.constantly(repl_connection));
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1389,((function (repl_connection,map__70706,map__70706__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){cljs.core.set_print_fn_BANG_(((cljs.core.fn_QMARK_(print))?print:cljs.core.get.cljs$core$IFn$_invoke$arity$2(weasel.repl.print_fns,print)));
clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1375,cljs.core.constant$keyword$1390], null)], 0)));
if(cljs.core.truth_(verbose))
{console.info("Opened Websocket REPL connection");
} else
{}
if(cljs.core.fn_QMARK_(on_open))
{return (on_open.cljs$core$IFn$_invoke$arity$0 ? on_open.cljs$core$IFn$_invoke$arity$0() : on_open.call(null));
} else
{return null;
}
});})(repl_connection,map__70706,map__70706__$1,print,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1391,((function (repl_connection,map__70706,map__70706__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){var map__70707 = cljs.reader.read_string(evt.message);var map__70707__$1 = ((cljs.core.seq_QMARK_(map__70707))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70707):map__70707);var message = map__70707__$1;var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70707__$1,cljs.core.constant$keyword$1375);var response = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__70708 = message;return (weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1 ? weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1(G__70708) : weasel.repl.process_message.call(null,G__70708));
})()], 0));return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,response);
});})(repl_connection,map__70706,map__70706__$1,print,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1392,((function (repl_connection,map__70706,map__70706__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){var G__70709_70712 = weasel.repl.ws_connection;var G__70710_70713 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__70709_70712,G__70710_70713) : cljs.core.reset_BANG_.call(null,G__70709_70712,G__70710_70713));
if(cljs.core.truth_(verbose))
{console.info("Closed Websocket REPL connection");
} else
{}
if(cljs.core.fn_QMARK_(on_close))
{return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else
{return null;
}
});})(repl_connection,map__70706,map__70706__$1,print,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1318,((function (repl_connection,map__70706,map__70706__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){if(cljs.core.truth_(verbose))
{console.error("WebSocket error",evt);
} else
{}
if(cljs.core.fn_QMARK_(on_error))
{var G__70711 = evt;return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__70711) : on_error.call(null,G__70711));
} else
{return null;
}
});})(repl_connection,map__70706,map__70706__$1,print,on_close,on_error,on_open,verbose))
);
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(repl_connection,repl_server_url);
};
var connect = function (repl_server_url,var_args){
var p__70699 = null;if (arguments.length > 1) {
  p__70699 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return connect__delegate.call(this,repl_server_url,p__70699);};
connect.cljs$lang$maxFixedArity = 1;
connect.cljs$lang$applyTo = (function (arglist__70714){
var repl_server_url = cljs.core.first(arglist__70714);
var p__70699 = cljs.core.rest(arglist__70714);
return connect__delegate(repl_server_url,p__70699);
});
connect.cljs$core$IFn$_invoke$arity$variadic = connect__delegate;
return connect;
})()
;
