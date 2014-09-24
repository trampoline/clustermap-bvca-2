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
var log__delegate = function (p__44294,args){var map__44296 = p__44294;var map__44296__$1 = ((cljs.core.seq_QMARK_(map__44296))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44296):map__44296);var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44296__$1,cljs.core.constant$keyword$1222);if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array(args));
} else
{return null;
}
};
var log = function (p__44294,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__44294,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__44297){
var p__44294 = cljs.core.first(arglist__44297);
var args = cljs.core.rest(arglist__44297);
return log__delegate(p__44294,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__44298){var map__44300 = p__44298;var map__44300__$1 = ((cljs.core.seq_QMARK_(map__44300))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44300):map__44300);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44300__$1,cljs.core.constant$keyword$1223);return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__44301,callback){var map__44303 = p__44301;var map__44303__$1 = ((cljs.core.seq_QMARK_(map__44303))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44303):map__44303);var msg = map__44303__$1;var dependency_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44303__$1,cljs.core.constant$keyword$1224);var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44303__$1,cljs.core.constant$keyword$1225);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44303__$1,cljs.core.constant$keyword$1226);if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster(request_url)).addCallback(((function (map__44303,map__44303__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__44303,map__44303__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__44304,p__44305){var map__44308 = p__44304;var map__44308__$1 = ((cljs.core.seq_QMARK_(map__44308))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44308):map__44308);var opts = map__44308__$1;var url_rewriter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44308__$1,cljs.core.constant$keyword$1227);var map__44309 = p__44305;var map__44309__$1 = ((cljs.core.seq_QMARK_(map__44309))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44309):map__44309);var d = map__44309__$1;var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44309__$1,cljs.core.constant$keyword$1228);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.constant$keyword$1226,(url_rewriter.cljs$core$IFn$_invoke$arity$1 ? url_rewriter.cljs$core$IFn$_invoke$arity$1(("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))) : url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__44310,p__44311){var map__44353 = p__44310;var map__44353__$1 = ((cljs.core.seq_QMARK_(map__44353))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44353):map__44353);var opts = map__44353__$1;var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44353__$1,cljs.core.constant$keyword$1229);var before_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44353__$1,cljs.core.constant$keyword$1230);var map__44354 = p__44311;var map__44354__$1 = ((cljs.core.seq_QMARK_(map__44354))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44354):map__44354);var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44354__$1,cljs.core.constant$keyword$1231);var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,map__44353,map__44353__$1,opts,on_jsload,before_jsload,map__44354,map__44354__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__44353,map__44353__$1,opts,on_jsload,before_jsload,map__44354,map__44354__$1,files){
return (function (state_44377){var state_val_44378 = (state_44377[(1)]);if((state_val_44378 === (6)))
{var inst_44359 = (state_44377[(7)]);var inst_44368 = (state_44377[(2)]);var inst_44369 = cljs.core.PersistentVector.EMPTY_NODE;var inst_44370 = [inst_44359];var inst_44371 = (new cljs.core.PersistentVector(null,1,(5),inst_44369,inst_44370,null));var inst_44372 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(on_jsload,inst_44371);var state_44377__$1 = (function (){var statearr_44379 = state_44377;(statearr_44379[(8)] = inst_44368);
return statearr_44379;
})();var statearr_44380_44394 = state_44377__$1;(statearr_44380_44394[(2)] = inst_44372);
(statearr_44380_44394[(1)] = (5));
return cljs.core.constant$keyword$844;
} else
{if((state_val_44378 === (5)))
{var inst_44375 = (state_44377[(2)]);var state_44377__$1 = state_44377;return cljs.core.async.impl.ioc_helpers.return_chan(state_44377__$1,inst_44375);
} else
{if((state_val_44378 === (4)))
{var state_44377__$1 = state_44377;var statearr_44381_44395 = state_44377__$1;(statearr_44381_44395[(2)] = null);
(statearr_44381_44395[(1)] = (5));
return cljs.core.constant$keyword$844;
} else
{if((state_val_44378 === (3)))
{var inst_44359 = (state_44377[(7)]);var inst_44362 = console.debug("Figwheel: loaded these files");var inst_44363 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1228,inst_44359);var inst_44364 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_44363], 0));var inst_44365 = console.log(inst_44364);var inst_44366 = cljs.core.async.timeout((10));var state_44377__$1 = (function (){var statearr_44382 = state_44377;(statearr_44382[(9)] = inst_44362);
(statearr_44382[(10)] = inst_44365);
return statearr_44382;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44377__$1,(6),inst_44366);
} else
{if((state_val_44378 === (2)))
{var inst_44359 = (state_44377[(7)]);var inst_44359__$1 = (state_44377[(2)]);var inst_44360 = cljs.core.not_empty(inst_44359__$1);var state_44377__$1 = (function (){var statearr_44383 = state_44377;(statearr_44383[(7)] = inst_44359__$1);
return statearr_44383;
})();if(cljs.core.truth_(inst_44360))
{var statearr_44384_44396 = state_44377__$1;(statearr_44384_44396[(1)] = (3));
} else
{var statearr_44385_44397 = state_44377__$1;(statearr_44385_44397[(1)] = (4));
}
return cljs.core.constant$keyword$844;
} else
{if((state_val_44378 === (1)))
{var inst_44355 = (before_jsload.cljs$core$IFn$_invoke$arity$1 ? before_jsload.cljs$core$IFn$_invoke$arity$1(files) : before_jsload.call(null,files));var inst_44356 = figwheel.client.add_request_urls(opts,files);var inst_44357 = figwheel.client.load_all_js_files(inst_44356);var state_44377__$1 = (function (){var statearr_44386 = state_44377;(statearr_44386[(11)] = inst_44355);
return statearr_44386;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44377__$1,(2),inst_44357);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__44353,map__44353__$1,opts,on_jsload,before_jsload,map__44354,map__44354__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__44353,map__44353__$1,opts,on_jsload,before_jsload,map__44354,map__44354__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_44390 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44390[(0)] = state_machine__5694__auto__);
(statearr_44390[(1)] = (1));
return statearr_44390;
});
var state_machine__5694__auto____1 = (function (state_44377){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_44377);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e44391){if((e44391 instanceof Object))
{var ex__5697__auto__ = e44391;var statearr_44392_44398 = state_44377;(statearr_44392_44398[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44377);
return cljs.core.constant$keyword$844;
} else
{throw e44391;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__44399 = state_44377;
state_44377 = G__44399;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_44377){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_44377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__44353,map__44353__$1,opts,on_jsload,before_jsload,map__44354,map__44354__$1,files))
})();var state__5710__auto__ = (function (){var statearr_44393 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_44393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_44393;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,map__44353,map__44353__$1,opts,on_jsload,before_jsload,map__44354,map__44354__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__44400,link_href){var map__44402 = p__44400;var map__44402__$1 = ((cljs.core.seq_QMARK_(map__44402))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44402):map__44402);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44402__$1,cljs.core.constant$keyword$1226);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44402__$1,cljs.core.constant$keyword$1228);var trunc_href = figwheel.client.truncate_url(link_href);return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file,trunc_href)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(figwheel.client.truncate_url(request_url),trunc_href));
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
return (function (state_44423){var state_val_44424 = (state_44423[(1)]);if((state_val_44424 === (2)))
{var inst_44420 = (state_44423[(2)]);var inst_44421 = parent.removeChild(orig_link);var state_44423__$1 = (function (){var statearr_44425 = state_44423;(statearr_44425[(7)] = inst_44420);
return statearr_44425;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_44423__$1,inst_44421);
} else
{if((state_val_44424 === (1)))
{var inst_44418 = cljs.core.async.timeout((200));var state_44423__$1 = state_44423;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44423__$1,(2),inst_44418);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_44429 = [null,null,null,null,null,null,null,null];(statearr_44429[(0)] = state_machine__5694__auto__);
(statearr_44429[(1)] = (1));
return statearr_44429;
});
var state_machine__5694__auto____1 = (function (state_44423){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_44423);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e44430){if((e44430 instanceof Object))
{var ex__5697__auto__ = e44430;var statearr_44431_44433 = state_44423;(statearr_44431_44433[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44423);
return cljs.core.constant$keyword$844;
} else
{throw e44430;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__44434 = state_44423;
state_44423 = G__44434;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_44423){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_44423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_44432 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_44432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_44432;
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
figwheel.client.reload_css_file = (function reload_css_file(p__44435){var map__44437 = p__44435;var map__44437__$1 = ((cljs.core.seq_QMARK_(map__44437))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44437):map__44437);var f_data = map__44437__$1;var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44437__$1,cljs.core.constant$keyword$1226);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44437__$1,cljs.core.constant$keyword$1228);var temp__4124__auto__ = figwheel.client.get_correct_link(f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$2(link,figwheel.client.clone_link(link,request_url));
} else
{return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$1(figwheel.client.create_link(request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__44438,files_msg){var map__44460 = p__44438;var map__44460__$1 = ((cljs.core.seq_QMARK_(map__44460))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44460):map__44460);var opts = map__44460__$1;var on_cssload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44460__$1,cljs.core.constant$keyword$1232);var seq__44461_44481 = cljs.core.seq(figwheel.client.add_request_urls(opts,cljs.core.constant$keyword$1231.cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__44462_44482 = null;var count__44463_44483 = (0);var i__44464_44484 = (0);while(true){
if((i__44464_44484 < count__44463_44483))
{var f_44485 = chunk__44462_44482.cljs$core$IIndexed$_nth$arity$2(null,i__44464_44484);figwheel.client.reload_css_file(f_44485);
{
var G__44486 = seq__44461_44481;
var G__44487 = chunk__44462_44482;
var G__44488 = count__44463_44483;
var G__44489 = (i__44464_44484 + (1));
seq__44461_44481 = G__44486;
chunk__44462_44482 = G__44487;
count__44463_44483 = G__44488;
i__44464_44484 = G__44489;
continue;
}
} else
{var temp__4126__auto___44490 = cljs.core.seq(seq__44461_44481);if(temp__4126__auto___44490)
{var seq__44461_44491__$1 = temp__4126__auto___44490;if(cljs.core.chunked_seq_QMARK_(seq__44461_44491__$1))
{var c__4314__auto___44492 = cljs.core.chunk_first(seq__44461_44491__$1);{
var G__44493 = cljs.core.chunk_rest(seq__44461_44491__$1);
var G__44494 = c__4314__auto___44492;
var G__44495 = cljs.core.count(c__4314__auto___44492);
var G__44496 = (0);
seq__44461_44481 = G__44493;
chunk__44462_44482 = G__44494;
count__44463_44483 = G__44495;
i__44464_44484 = G__44496;
continue;
}
} else
{var f_44497 = cljs.core.first(seq__44461_44491__$1);figwheel.client.reload_css_file(f_44497);
{
var G__44498 = cljs.core.next(seq__44461_44491__$1);
var G__44499 = null;
var G__44500 = (0);
var G__44501 = (0);
seq__44461_44481 = G__44498;
chunk__44462_44482 = G__44499;
count__44463_44483 = G__44500;
i__44464_44484 = G__44501;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,map__44460,map__44460__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__44460,map__44460__$1,opts,on_cssload){
return (function (state_44471){var state_val_44472 = (state_44471[(1)]);if((state_val_44472 === (2)))
{var inst_44467 = (state_44471[(2)]);var inst_44468 = cljs.core.constant$keyword$1231.cljs$core$IFn$_invoke$arity$1(files_msg);var inst_44469 = (on_cssload.cljs$core$IFn$_invoke$arity$1 ? on_cssload.cljs$core$IFn$_invoke$arity$1(inst_44468) : on_cssload.call(null,inst_44468));var state_44471__$1 = (function (){var statearr_44473 = state_44471;(statearr_44473[(7)] = inst_44467);
return statearr_44473;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_44471__$1,inst_44469);
} else
{if((state_val_44472 === (1)))
{var inst_44465 = cljs.core.async.timeout((100));var state_44471__$1 = state_44471;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44471__$1,(2),inst_44465);
} else
{return null;
}
}
});})(c__5708__auto__,map__44460,map__44460__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__44460,map__44460__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_44477 = [null,null,null,null,null,null,null,null];(statearr_44477[(0)] = state_machine__5694__auto__);
(statearr_44477[(1)] = (1));
return statearr_44477;
});
var state_machine__5694__auto____1 = (function (state_44471){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_44471);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e44478){if((e44478 instanceof Object))
{var ex__5697__auto__ = e44478;var statearr_44479_44502 = state_44471;(statearr_44479_44502[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44471);
return cljs.core.constant$keyword$844;
} else
{throw e44478;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__44503 = state_44471;
state_44471 = G__44503;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_44471){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_44471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__44460,map__44460__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_44480 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_44480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_44480;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,map__44460,map__44460__$1,opts,on_cssload))
);
return c__5708__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return (compile_fail_callback.cljs$core$IFn$_invoke$arity$1 ? compile_fail_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$1233)) : compile_fail_callback.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$1233)));
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__44504){var map__44509 = p__44504;var map__44509__$1 = ((cljs.core.seq_QMARK_(map__44509))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44509):map__44509);var opts = map__44509__$1;var on_compile_fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44509__$1,cljs.core.constant$keyword$1234);var jsload_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44509__$1,cljs.core.constant$keyword$1235);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44509__$1,cljs.core.constant$keyword$1223);var retry_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44509__$1,cljs.core.constant$keyword$1236);console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__44509,map__44509__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string(msg_str.data);var pred__44510 = cljs.core._EQ_;var expr__44511 = cljs.core.constant$keyword$1233.cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_((pred__44510.cljs$core$IFn$_invoke$arity$2 ? pred__44510.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1237,expr__44511) : pred__44510.call(null,cljs.core.constant$keyword$1237,expr__44511))))
{return figwheel.client.reload_js_files(opts,msg);
} else
{if(cljs.core.truth_((pred__44510.cljs$core$IFn$_invoke$arity$2 ? pred__44510.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1238,expr__44511) : pred__44510.call(null,cljs.core.constant$keyword$1238,expr__44511))))
{return figwheel.client.reload_css_files(opts,msg);
} else
{if(cljs.core.truth_((pred__44510.cljs$core$IFn$_invoke$arity$2 ? pred__44510.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1239,expr__44511) : pred__44510.call(null,cljs.core.constant$keyword$1239,expr__44511))))
{return figwheel.client.compile_failed(msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__44509,map__44509__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__44509,map__44509__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base();
return console.debug("Figwheel: socket connection established");
});})(socket,map__44509,map__44509__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__44509,map__44509__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket closed or failed to open"], 0));
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__44509,map__44509__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$1236,(retry_count - (1))));
});})(socket,map__44509,map__44509__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__44509,map__44509__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__44509,map__44509__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket error "], 0));
});})(socket,map__44509,map__44509__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj44516 = {"detail":url};return obj44516;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons(cljs.core.select_keys(ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1220,cljs.core.constant$keyword$894], null)),get_essential_messages(cljs.core.constant$keyword$1240.cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__44517){var map__44519 = p__44517;var map__44519__$1 = ((cljs.core.seq_QMARK_(map__44519))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44519):map__44519);var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44519__$1,cljs.core.constant$keyword$894);var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44519__$1,cljs.core.constant$keyword$1220);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__44520){var map__44526 = p__44520;var map__44526__$1 = ((cljs.core.seq_QMARK_(map__44526))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44526):map__44526);var ed = map__44526__$1;var exception_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44526__$1,cljs.core.constant$keyword$1241);var formatted_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44526__$1,cljs.core.constant$keyword$1242);console.debug("Figwheel: Compile Exception");
var seq__44527_44531 = cljs.core.seq((figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(exception_data) : figwheel.client.format_messages.call(null,exception_data)));var chunk__44528_44532 = null;var count__44529_44533 = (0);var i__44530_44534 = (0);while(true){
if((i__44530_44534 < count__44529_44533))
{var msg_44535 = chunk__44528_44532.cljs$core$IIndexed$_nth$arity$2(null,i__44530_44534);console.log(msg_44535);
{
var G__44536 = seq__44527_44531;
var G__44537 = chunk__44528_44532;
var G__44538 = count__44529_44533;
var G__44539 = (i__44530_44534 + (1));
seq__44527_44531 = G__44536;
chunk__44528_44532 = G__44537;
count__44529_44533 = G__44538;
i__44530_44534 = G__44539;
continue;
}
} else
{var temp__4126__auto___44540 = cljs.core.seq(seq__44527_44531);if(temp__4126__auto___44540)
{var seq__44527_44541__$1 = temp__4126__auto___44540;if(cljs.core.chunked_seq_QMARK_(seq__44527_44541__$1))
{var c__4314__auto___44542 = cljs.core.chunk_first(seq__44527_44541__$1);{
var G__44543 = cljs.core.chunk_rest(seq__44527_44541__$1);
var G__44544 = c__4314__auto___44542;
var G__44545 = cljs.core.count(c__4314__auto___44542);
var G__44546 = (0);
seq__44527_44531 = G__44543;
chunk__44528_44532 = G__44544;
count__44529_44533 = G__44545;
i__44530_44534 = G__44546;
continue;
}
} else
{var msg_44547 = cljs.core.first(seq__44527_44541__$1);console.log(msg_44547);
{
var G__44548 = cljs.core.next(seq__44527_44541__$1);
var G__44549 = null;
var G__44550 = (0);
var G__44551 = (0);
seq__44527_44531 = G__44548;
chunk__44528_44532 = G__44549;
count__44529_44533 = G__44550;
i__44530_44534 = G__44551;
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
console.log(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1228,files)], 0)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$1236,(100),cljs.core.constant$keyword$1235,figwheel.client.default_on_jsload,cljs.core.constant$keyword$1229,(function (){var or__3558__auto__ = cljs.core.constant$keyword$1235.cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),cljs.core.constant$keyword$1232,figwheel.client.default_on_cssload,cljs.core.constant$keyword$1230,figwheel.client.default_before_load,cljs.core.constant$keyword$1234,figwheel.client.default_on_compile_fail,cljs.core.constant$keyword$1227,cljs.core.identity,cljs.core.constant$keyword$1223,("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts], 0)));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__44552){var map__44554 = p__44552;var map__44554__$1 = ((cljs.core.seq_QMARK_(map__44554))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44554):map__44554);var opts = map__44554__$1;return figwheel.client.watch_and_reload_with_opts(opts);
};
var watch_and_reload = function (var_args){
var p__44552 = null;if (arguments.length > 0) {
  p__44552 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__44552);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__44555){
var p__44552 = cljs.core.seq(arglist__44555);
return watch_and_reload__delegate(p__44552);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
