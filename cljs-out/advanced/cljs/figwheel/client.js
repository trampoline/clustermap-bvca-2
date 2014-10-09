// Compiled by ClojureScript 0.0-2322
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__53234,args){var map__53236 = p__53234;var map__53236__$1 = ((cljs.core.seq_QMARK_(map__53236))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53236):map__53236);var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53236__$1,cljs.core.constant$keyword$1360);if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array(args));
} else
{return null;
}
};
var log = function (p__53234,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__53234,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__53237){
var p__53234 = cljs.core.first(arglist__53237);
var args = cljs.core.rest(arglist__53237);
return log__delegate(p__53234,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__53238){var map__53240 = p__53238;var map__53240__$1 = ((cljs.core.seq_QMARK_(map__53240))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53240):map__53240);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53240__$1,cljs.core.constant$keyword$1361);return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__53241,callback){var map__53243 = p__53241;var map__53243__$1 = ((cljs.core.seq_QMARK_(map__53243))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53243):map__53243);var msg = map__53243__$1;var dependency_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53243__$1,cljs.core.constant$keyword$1362);var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53243__$1,cljs.core.constant$keyword$1363);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53243__$1,cljs.core.constant$keyword$1364);if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster(request_url)).addCallback(((function (map__53243,map__53243__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__53243,map__53243__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();figwheel.client.js_reload(file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,url);
return cljs.core.async.close_BANG_(out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into(cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__53244,p__53245){var map__53248 = p__53244;var map__53248__$1 = ((cljs.core.seq_QMARK_(map__53248))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53248):map__53248);var opts = map__53248__$1;var url_rewriter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53248__$1,cljs.core.constant$keyword$1365);var map__53249 = p__53245;var map__53249__$1 = ((cljs.core.seq_QMARK_(map__53249))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53249):map__53249);var d = map__53249__$1;var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53249__$1,cljs.core.constant$keyword$1366);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.constant$keyword$1364,(url_rewriter.cljs$core$IFn$_invoke$arity$1 ? url_rewriter.cljs$core$IFn$_invoke$arity$1(("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))) : url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__53250,p__53251){var map__53293 = p__53250;var map__53293__$1 = ((cljs.core.seq_QMARK_(map__53293))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53293):map__53293);var opts = map__53293__$1;var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53293__$1,cljs.core.constant$keyword$1367);var before_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53293__$1,cljs.core.constant$keyword$1368);var map__53294 = p__53251;var map__53294__$1 = ((cljs.core.seq_QMARK_(map__53294))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53294):map__53294);var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53294__$1,cljs.core.constant$keyword$1369);var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,map__53293,map__53293__$1,opts,on_jsload,before_jsload,map__53294,map__53294__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__53293,map__53293__$1,opts,on_jsload,before_jsload,map__53294,map__53294__$1,files){
return (function (state_53317){var state_val_53318 = (state_53317[(1)]);if((state_val_53318 === (6)))
{var inst_53299 = (state_53317[(7)]);var inst_53308 = (state_53317[(2)]);var inst_53309 = cljs.core.PersistentVector.EMPTY_NODE;var inst_53310 = [inst_53299];var inst_53311 = (new cljs.core.PersistentVector(null,1,(5),inst_53309,inst_53310,null));var inst_53312 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(on_jsload,inst_53311);var state_53317__$1 = (function (){var statearr_53319 = state_53317;(statearr_53319[(8)] = inst_53308);
return statearr_53319;
})();var statearr_53320_53334 = state_53317__$1;(statearr_53320_53334[(2)] = inst_53312);
(statearr_53320_53334[(1)] = (5));
return cljs.core.constant$keyword$936;
} else
{if((state_val_53318 === (5)))
{var inst_53315 = (state_53317[(2)]);var state_53317__$1 = state_53317;return cljs.core.async.impl.ioc_helpers.return_chan(state_53317__$1,inst_53315);
} else
{if((state_val_53318 === (4)))
{var state_53317__$1 = state_53317;var statearr_53321_53335 = state_53317__$1;(statearr_53321_53335[(2)] = null);
(statearr_53321_53335[(1)] = (5));
return cljs.core.constant$keyword$936;
} else
{if((state_val_53318 === (3)))
{var inst_53299 = (state_53317[(7)]);var inst_53302 = console.debug("Figwheel: loaded these files");var inst_53303 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1366,inst_53299);var inst_53304 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_53303], 0));var inst_53305 = console.log(inst_53304);var inst_53306 = cljs.core.async.timeout((10));var state_53317__$1 = (function (){var statearr_53322 = state_53317;(statearr_53322[(9)] = inst_53302);
(statearr_53322[(10)] = inst_53305);
return statearr_53322;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53317__$1,(6),inst_53306);
} else
{if((state_val_53318 === (2)))
{var inst_53299 = (state_53317[(7)]);var inst_53299__$1 = (state_53317[(2)]);var inst_53300 = cljs.core.not_empty(inst_53299__$1);var state_53317__$1 = (function (){var statearr_53323 = state_53317;(statearr_53323[(7)] = inst_53299__$1);
return statearr_53323;
})();if(cljs.core.truth_(inst_53300))
{var statearr_53324_53336 = state_53317__$1;(statearr_53324_53336[(1)] = (3));
} else
{var statearr_53325_53337 = state_53317__$1;(statearr_53325_53337[(1)] = (4));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_53318 === (1)))
{var inst_53295 = (before_jsload.cljs$core$IFn$_invoke$arity$1 ? before_jsload.cljs$core$IFn$_invoke$arity$1(files) : before_jsload.call(null,files));var inst_53296 = figwheel.client.add_request_urls(opts,files);var inst_53297 = figwheel.client.load_all_js_files(inst_53296);var state_53317__$1 = (function (){var statearr_53326 = state_53317;(statearr_53326[(11)] = inst_53295);
return statearr_53326;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53317__$1,(2),inst_53297);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__53293,map__53293__$1,opts,on_jsload,before_jsload,map__53294,map__53294__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__53293,map__53293__$1,opts,on_jsload,before_jsload,map__53294,map__53294__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_53330 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53330[(0)] = state_machine__5694__auto__);
(statearr_53330[(1)] = (1));
return statearr_53330;
});
var state_machine__5694__auto____1 = (function (state_53317){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_53317);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53331){if((e53331 instanceof Object))
{var ex__5697__auto__ = e53331;var statearr_53332_53338 = state_53317;(statearr_53332_53338[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_53317);
return cljs.core.constant$keyword$936;
} else
{throw e53331;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__53339 = state_53317;
state_53317 = G__53339;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53317){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__53293,map__53293__$1,opts,on_jsload,before_jsload,map__53294,map__53294__$1,files))
})();var state__5710__auto__ = (function (){var statearr_53333 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_53333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_53333;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,map__53293,map__53293__$1,opts,on_jsload,before_jsload,map__53294,map__53294__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__53340,link_href){var map__53342 = p__53340;var map__53342__$1 = ((cljs.core.seq_QMARK_(map__53342))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53342):map__53342);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53342__$1,cljs.core.constant$keyword$1364);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53342__$1,cljs.core.constant$keyword$1366);var trunc_href = figwheel.client.truncate_url(link_href);return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file,trunc_href)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(figwheel.client.truncate_url(request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some((function (l){if(figwheel.client.matches_file_QMARK_(f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links());
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster(url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster(url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,parent){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,parent){
return (function (state_53363){var state_val_53364 = (state_53363[(1)]);if((state_val_53364 === (2)))
{var inst_53360 = (state_53363[(2)]);var inst_53361 = parent.removeChild(orig_link);var state_53363__$1 = (function (){var statearr_53365 = state_53363;(statearr_53365[(7)] = inst_53360);
return statearr_53365;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_53363__$1,inst_53361);
} else
{if((state_val_53364 === (1)))
{var inst_53358 = cljs.core.async.timeout((200));var state_53363__$1 = state_53363;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53363__$1,(2),inst_53358);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_53369 = [null,null,null,null,null,null,null,null];(statearr_53369[(0)] = state_machine__5694__auto__);
(statearr_53369[(1)] = (1));
return statearr_53369;
});
var state_machine__5694__auto____1 = (function (state_53363){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_53363);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53370){if((e53370 instanceof Object))
{var ex__5697__auto__ = e53370;var statearr_53371_53373 = state_53363;(statearr_53371_53373[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_53363);
return cljs.core.constant$keyword$936;
} else
{throw e53370;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__53374 = state_53363;
state_53363 = G__53374;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53363){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_53372 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_53372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_53372;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,parent))
);
return c__5708__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__53375){var map__53377 = p__53375;var map__53377__$1 = ((cljs.core.seq_QMARK_(map__53377))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53377):map__53377);var f_data = map__53377__$1;var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53377__$1,cljs.core.constant$keyword$1364);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53377__$1,cljs.core.constant$keyword$1366);var temp__4124__auto__ = figwheel.client.get_correct_link(f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$2(link,figwheel.client.clone_link(link,request_url));
} else
{return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$1(figwheel.client.create_link(request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__53378,files_msg){var map__53400 = p__53378;var map__53400__$1 = ((cljs.core.seq_QMARK_(map__53400))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53400):map__53400);var opts = map__53400__$1;var on_cssload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53400__$1,cljs.core.constant$keyword$1370);var seq__53401_53421 = cljs.core.seq(figwheel.client.add_request_urls(opts,cljs.core.constant$keyword$1369.cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__53402_53422 = null;var count__53403_53423 = (0);var i__53404_53424 = (0);while(true){
if((i__53404_53424 < count__53403_53423))
{var f_53425 = chunk__53402_53422.cljs$core$IIndexed$_nth$arity$2(null,i__53404_53424);figwheel.client.reload_css_file(f_53425);
{
var G__53426 = seq__53401_53421;
var G__53427 = chunk__53402_53422;
var G__53428 = count__53403_53423;
var G__53429 = (i__53404_53424 + (1));
seq__53401_53421 = G__53426;
chunk__53402_53422 = G__53427;
count__53403_53423 = G__53428;
i__53404_53424 = G__53429;
continue;
}
} else
{var temp__4126__auto___53430 = cljs.core.seq(seq__53401_53421);if(temp__4126__auto___53430)
{var seq__53401_53431__$1 = temp__4126__auto___53430;if(cljs.core.chunked_seq_QMARK_(seq__53401_53431__$1))
{var c__4314__auto___53432 = cljs.core.chunk_first(seq__53401_53431__$1);{
var G__53433 = cljs.core.chunk_rest(seq__53401_53431__$1);
var G__53434 = c__4314__auto___53432;
var G__53435 = cljs.core.count(c__4314__auto___53432);
var G__53436 = (0);
seq__53401_53421 = G__53433;
chunk__53402_53422 = G__53434;
count__53403_53423 = G__53435;
i__53404_53424 = G__53436;
continue;
}
} else
{var f_53437 = cljs.core.first(seq__53401_53431__$1);figwheel.client.reload_css_file(f_53437);
{
var G__53438 = cljs.core.next(seq__53401_53431__$1);
var G__53439 = null;
var G__53440 = (0);
var G__53441 = (0);
seq__53401_53421 = G__53438;
chunk__53402_53422 = G__53439;
count__53403_53423 = G__53440;
i__53404_53424 = G__53441;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,map__53400,map__53400__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__53400,map__53400__$1,opts,on_cssload){
return (function (state_53411){var state_val_53412 = (state_53411[(1)]);if((state_val_53412 === (2)))
{var inst_53407 = (state_53411[(2)]);var inst_53408 = cljs.core.constant$keyword$1369.cljs$core$IFn$_invoke$arity$1(files_msg);var inst_53409 = (on_cssload.cljs$core$IFn$_invoke$arity$1 ? on_cssload.cljs$core$IFn$_invoke$arity$1(inst_53408) : on_cssload.call(null,inst_53408));var state_53411__$1 = (function (){var statearr_53413 = state_53411;(statearr_53413[(7)] = inst_53407);
return statearr_53413;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_53411__$1,inst_53409);
} else
{if((state_val_53412 === (1)))
{var inst_53405 = cljs.core.async.timeout((100));var state_53411__$1 = state_53411;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53411__$1,(2),inst_53405);
} else
{return null;
}
}
});})(c__5708__auto__,map__53400,map__53400__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__53400,map__53400__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_53417 = [null,null,null,null,null,null,null,null];(statearr_53417[(0)] = state_machine__5694__auto__);
(statearr_53417[(1)] = (1));
return statearr_53417;
});
var state_machine__5694__auto____1 = (function (state_53411){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_53411);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e53418){if((e53418 instanceof Object))
{var ex__5697__auto__ = e53418;var statearr_53419_53442 = state_53411;(statearr_53419_53442[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_53411);
return cljs.core.constant$keyword$936;
} else
{throw e53418;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__53443 = state_53411;
state_53411 = G__53443;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_53411){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_53411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__53400,map__53400__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_53420 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_53420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_53420;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,map__53400,map__53400__$1,opts,on_cssload))
);
return c__5708__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return (compile_fail_callback.cljs$core$IFn$_invoke$arity$1 ? compile_fail_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$1371)) : compile_fail_callback.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$1371)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster(src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__53444){var map__53449 = p__53444;var map__53449__$1 = ((cljs.core.seq_QMARK_(map__53449))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53449):map__53449);var opts = map__53449__$1;var on_compile_fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53449__$1,cljs.core.constant$keyword$1372);var jsload_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53449__$1,cljs.core.constant$keyword$1373);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53449__$1,cljs.core.constant$keyword$1361);var retry_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53449__$1,cljs.core.constant$keyword$1374);console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__53449,map__53449__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string(msg_str.data);var pred__53450 = cljs.core._EQ_;var expr__53451 = cljs.core.constant$keyword$1371.cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_((pred__53450.cljs$core$IFn$_invoke$arity$2 ? pred__53450.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1375,expr__53451) : pred__53450.call(null,cljs.core.constant$keyword$1375,expr__53451))))
{return figwheel.client.reload_js_files(opts,msg);
} else
{if(cljs.core.truth_((pred__53450.cljs$core$IFn$_invoke$arity$2 ? pred__53450.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1376,expr__53451) : pred__53450.call(null,cljs.core.constant$keyword$1376,expr__53451))))
{return figwheel.client.reload_css_files(opts,msg);
} else
{if(cljs.core.truth_((pred__53450.cljs$core$IFn$_invoke$arity$2 ? pred__53450.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1377,expr__53451) : pred__53450.call(null,cljs.core.constant$keyword$1377,expr__53451))))
{return figwheel.client.compile_failed(msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__53449,map__53449__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__53449,map__53449__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base();
return console.debug("Figwheel: socket connection established");
});})(socket,map__53449,map__53449__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__53449,map__53449__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket closed or failed to open"], 0));
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__53449,map__53449__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$1374,(retry_count - (1))));
});})(socket,map__53449,map__53449__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__53449,map__53449__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__53449,map__53449__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket error "], 0));
});})(socket,map__53449,map__53449__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj53456 = {"detail":url};return obj53456;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons(cljs.core.select_keys(ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1358,cljs.core.constant$keyword$1049], null)),get_essential_messages(cljs.core.constant$keyword$1378.cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__53457){var map__53459 = p__53457;var map__53459__$1 = ((cljs.core.seq_QMARK_(map__53459))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53459):map__53459);var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53459__$1,cljs.core.constant$keyword$1049);var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53459__$1,cljs.core.constant$keyword$1358);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__53460){var map__53466 = p__53460;var map__53466__$1 = ((cljs.core.seq_QMARK_(map__53466))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53466):map__53466);var ed = map__53466__$1;var exception_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53466__$1,cljs.core.constant$keyword$1379);var formatted_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53466__$1,cljs.core.constant$keyword$1380);console.debug("Figwheel: Compile Exception");
var seq__53467_53471 = cljs.core.seq((figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(exception_data) : figwheel.client.format_messages.call(null,exception_data)));var chunk__53468_53472 = null;var count__53469_53473 = (0);var i__53470_53474 = (0);while(true){
if((i__53470_53474 < count__53469_53473))
{var msg_53475 = chunk__53468_53472.cljs$core$IIndexed$_nth$arity$2(null,i__53470_53474);console.log(msg_53475);
{
var G__53476 = seq__53467_53471;
var G__53477 = chunk__53468_53472;
var G__53478 = count__53469_53473;
var G__53479 = (i__53470_53474 + (1));
seq__53467_53471 = G__53476;
chunk__53468_53472 = G__53477;
count__53469_53473 = G__53478;
i__53470_53474 = G__53479;
continue;
}
} else
{var temp__4126__auto___53480 = cljs.core.seq(seq__53467_53471);if(temp__4126__auto___53480)
{var seq__53467_53481__$1 = temp__4126__auto___53480;if(cljs.core.chunked_seq_QMARK_(seq__53467_53481__$1))
{var c__4314__auto___53482 = cljs.core.chunk_first(seq__53467_53481__$1);{
var G__53483 = cljs.core.chunk_rest(seq__53467_53481__$1);
var G__53484 = c__4314__auto___53482;
var G__53485 = cljs.core.count(c__4314__auto___53482);
var G__53486 = (0);
seq__53467_53471 = G__53483;
chunk__53468_53472 = G__53484;
count__53469_53473 = G__53485;
i__53470_53474 = G__53486;
continue;
}
} else
{var msg_53487 = cljs.core.first(seq__53467_53481__$1);console.log(msg_53487);
{
var G__53488 = cljs.core.next(seq__53467_53481__$1);
var G__53489 = null;
var G__53490 = (0);
var G__53491 = (0);
seq__53467_53471 = G__53488;
chunk__53468_53472 = G__53489;
count__53469_53473 = G__53490;
i__53470_53474 = G__53491;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1366,files)], 0)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$1374,(100),cljs.core.constant$keyword$1373,figwheel.client.default_on_jsload,cljs.core.constant$keyword$1367,(function (){var or__3558__auto__ = cljs.core.constant$keyword$1373.cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),cljs.core.constant$keyword$1370,figwheel.client.default_on_cssload,cljs.core.constant$keyword$1368,figwheel.client.default_before_load,cljs.core.constant$keyword$1372,figwheel.client.default_on_compile_fail,cljs.core.constant$keyword$1365,cljs.core.identity,cljs.core.constant$keyword$1361,("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts], 0)));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__53492){var map__53494 = p__53492;var map__53494__$1 = ((cljs.core.seq_QMARK_(map__53494))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53494):map__53494);var opts = map__53494__$1;return figwheel.client.watch_and_reload_with_opts(opts);
};
var watch_and_reload = function (var_args){
var p__53492 = null;if (arguments.length > 0) {
  p__53492 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__53492);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__53495){
var p__53492 = cljs.core.seq(arglist__53495);
return watch_and_reload__delegate(p__53492);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
