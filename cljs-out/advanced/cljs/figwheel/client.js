// Compiled by ClojureScript 0.0-2356
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
var log__delegate = function (p__73273,args){var map__73275 = p__73273;var map__73275__$1 = ((cljs.core.seq_QMARK_(map__73275))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73275):map__73275);var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73275__$1,cljs.core.constant$keyword$1577);if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array(args));
} else
{return null;
}
};
var log = function (p__73273,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__73273,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__73276){
var p__73273 = cljs.core.first(arglist__73276);
var args = cljs.core.rest(arglist__73276);
return log__delegate(p__73273,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__73277){var map__73279 = p__73277;var map__73279__$1 = ((cljs.core.seq_QMARK_(map__73279))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73279):map__73279);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73279__$1,cljs.core.constant$keyword$1578);return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__73280,callback){var map__73283 = p__73280;var map__73283__$1 = ((cljs.core.seq_QMARK_(map__73283))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73283):map__73283);var msg = map__73283__$1;var dependency_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73283__$1,cljs.core.constant$keyword$1579);var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73283__$1,cljs.core.constant$keyword$1580);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73283__$1,cljs.core.constant$keyword$1581);if(cljs.core.truth_((function (){var or__3637__auto__ = dependency_file;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return (function (){var G__73284 = figwheel.client.add_cache_buster(request_url);return goog.net.jsloader.load(G__73284);
})().addCallback(((function (map__73283,map__73283__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__73283,map__73283__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__73285,p__73286){var map__73290 = p__73285;var map__73290__$1 = ((cljs.core.seq_QMARK_(map__73290))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73290):map__73290);var opts = map__73290__$1;var url_rewriter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73290__$1,cljs.core.constant$keyword$1582);var map__73291 = p__73286;var map__73291__$1 = ((cljs.core.seq_QMARK_(map__73291))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73291):map__73291);var d = map__73291__$1;var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73291__$1,cljs.core.constant$keyword$1583);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.constant$keyword$1581,(function (){var G__73292 = ("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file));return (url_rewriter.cljs$core$IFn$_invoke$arity$1 ? url_rewriter.cljs$core$IFn$_invoke$arity$1(G__73292) : url_rewriter.call(null,G__73292));
})());
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__73293,p__73294){var map__73337 = p__73293;var map__73337__$1 = ((cljs.core.seq_QMARK_(map__73337))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73337):map__73337);var opts = map__73337__$1;var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73337__$1,cljs.core.constant$keyword$1584);var before_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73337__$1,cljs.core.constant$keyword$1585);var map__73338 = p__73294;var map__73338__$1 = ((cljs.core.seq_QMARK_(map__73338))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73338):map__73338);var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73338__$1,cljs.core.constant$keyword$1586);var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__,map__73337,map__73337__$1,opts,on_jsload,before_jsload,map__73338,map__73338__$1,files){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,map__73337,map__73337__$1,opts,on_jsload,before_jsload,map__73338,map__73338__$1,files){
return (function (state_73361){var state_val_73362 = (state_73361[(1)]);if((state_val_73362 === (6)))
{var inst_73343 = (state_73361[(7)]);var inst_73352 = (state_73361[(2)]);var inst_73353 = cljs.core.PersistentVector.EMPTY_NODE;var inst_73354 = [inst_73343];var inst_73355 = (new cljs.core.PersistentVector(null,1,(5),inst_73353,inst_73354,null));var inst_73356 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(on_jsload,inst_73355);var state_73361__$1 = (function (){var statearr_73363 = state_73361;(statearr_73363[(8)] = inst_73352);
return statearr_73363;
})();var statearr_73364_73379 = state_73361__$1;(statearr_73364_73379[(2)] = inst_73356);
(statearr_73364_73379[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_73362 === (5)))
{var inst_73359 = (state_73361[(2)]);var state_73361__$1 = state_73361;return cljs.core.async.impl.ioc_helpers.return_chan(state_73361__$1,inst_73359);
} else
{if((state_val_73362 === (4)))
{var state_73361__$1 = state_73361;var statearr_73365_73380 = state_73361__$1;(statearr_73365_73380[(2)] = null);
(statearr_73365_73380[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_73362 === (3)))
{var inst_73343 = (state_73361[(7)]);var inst_73346 = console.debug("Figwheel: loaded these files");var inst_73347 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1583,inst_73343);var inst_73348 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_73347], 0));var inst_73349 = console.log(inst_73348);var inst_73350 = cljs.core.async.timeout((10));var state_73361__$1 = (function (){var statearr_73366 = state_73361;(statearr_73366[(9)] = inst_73346);
(statearr_73366[(10)] = inst_73349);
return statearr_73366;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73361__$1,(6),inst_73350);
} else
{if((state_val_73362 === (2)))
{var inst_73343 = (state_73361[(7)]);var inst_73343__$1 = (state_73361[(2)]);var inst_73344 = cljs.core.not_empty(inst_73343__$1);var state_73361__$1 = (function (){var statearr_73367 = state_73361;(statearr_73367[(7)] = inst_73343__$1);
return statearr_73367;
})();if(cljs.core.truth_(inst_73344))
{var statearr_73368_73381 = state_73361__$1;(statearr_73368_73381[(1)] = (3));
} else
{var statearr_73369_73382 = state_73361__$1;(statearr_73369_73382[(1)] = (4));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_73362 === (1)))
{var inst_73339 = (function (){var G__73370 = files;return (before_jsload.cljs$core$IFn$_invoke$arity$1 ? before_jsload.cljs$core$IFn$_invoke$arity$1(G__73370) : before_jsload.call(null,G__73370));
})();var inst_73340 = figwheel.client.add_request_urls(opts,files);var inst_73341 = figwheel.client.load_all_js_files(inst_73340);var state_73361__$1 = (function (){var statearr_73371 = state_73361;(statearr_73371[(11)] = inst_73339);
return statearr_73371;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73361__$1,(2),inst_73341);
} else
{return null;
}
}
}
}
}
}
});})(c__5819__auto__,map__73337,map__73337__$1,opts,on_jsload,before_jsload,map__73338,map__73338__$1,files))
;return ((function (switch__5804__auto__,c__5819__auto__,map__73337,map__73337__$1,opts,on_jsload,before_jsload,map__73338,map__73338__$1,files){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_73375 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_73375[(0)] = state_machine__5805__auto__);
(statearr_73375[(1)] = (1));
return statearr_73375;
});
var state_machine__5805__auto____1 = (function (state_73361){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_73361);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e73376){if((e73376 instanceof Object))
{var ex__5808__auto__ = e73376;var statearr_73377_73383 = state_73361;(statearr_73377_73383[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_73361);
return cljs.core.constant$keyword$1120;
} else
{throw e73376;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__73384 = state_73361;
state_73361 = G__73384;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_73361){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_73361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,map__73337,map__73337__$1,opts,on_jsload,before_jsload,map__73338,map__73338__$1,files))
})();var state__5821__auto__ = (function (){var statearr_73378 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_73378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_73378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__,map__73337,map__73337__$1,opts,on_jsload,before_jsload,map__73338,map__73338__$1,files))
);
return c__5819__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__73385,link_href){var map__73387 = p__73385;var map__73387__$1 = ((cljs.core.seq_QMARK_(map__73387))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73387):map__73387);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73387__$1,cljs.core.constant$keyword$1581);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73387__$1,cljs.core.constant$keyword$1583);var trunc_href = figwheel.client.truncate_url(link_href);return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file,trunc_href)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(figwheel.client.truncate_url(request_url),trunc_href));
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
var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__,parent){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,parent){
return (function (state_73408){var state_val_73409 = (state_73408[(1)]);if((state_val_73409 === (2)))
{var inst_73405 = (state_73408[(2)]);var inst_73406 = parent.removeChild(orig_link);var state_73408__$1 = (function (){var statearr_73410 = state_73408;(statearr_73410[(7)] = inst_73405);
return statearr_73410;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_73408__$1,inst_73406);
} else
{if((state_val_73409 === (1)))
{var inst_73403 = cljs.core.async.timeout((200));var state_73408__$1 = state_73408;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73408__$1,(2),inst_73403);
} else
{return null;
}
}
});})(c__5819__auto__,parent))
;return ((function (switch__5804__auto__,c__5819__auto__,parent){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_73414 = [null,null,null,null,null,null,null,null];(statearr_73414[(0)] = state_machine__5805__auto__);
(statearr_73414[(1)] = (1));
return statearr_73414;
});
var state_machine__5805__auto____1 = (function (state_73408){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_73408);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e73415){if((e73415 instanceof Object))
{var ex__5808__auto__ = e73415;var statearr_73416_73418 = state_73408;(statearr_73416_73418[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_73408);
return cljs.core.constant$keyword$1120;
} else
{throw e73415;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__73419 = state_73408;
state_73408 = G__73419;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_73408){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_73408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,parent))
})();var state__5821__auto__ = (function (){var statearr_73417 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_73417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_73417;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__,parent))
);
return c__5819__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__73420){var map__73422 = p__73420;var map__73422__$1 = ((cljs.core.seq_QMARK_(map__73422))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73422):map__73422);var f_data = map__73422__$1;var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73422__$1,cljs.core.constant$keyword$1581);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73422__$1,cljs.core.constant$keyword$1583);var temp__4124__auto__ = figwheel.client.get_correct_link(f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$2(link,figwheel.client.clone_link(link,request_url));
} else
{return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$1(figwheel.client.create_link(request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__73423,files_msg){var map__73446 = p__73423;var map__73446__$1 = ((cljs.core.seq_QMARK_(map__73446))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73446):map__73446);var opts = map__73446__$1;var on_cssload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73446__$1,cljs.core.constant$keyword$1587);var seq__73447_73468 = cljs.core.seq(figwheel.client.add_request_urls(opts,cljs.core.constant$keyword$1586.cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__73448_73469 = null;var count__73449_73470 = (0);var i__73450_73471 = (0);while(true){
if((i__73450_73471 < count__73449_73470))
{var f_73472 = chunk__73448_73469.cljs$core$IIndexed$_nth$arity$2(null,i__73450_73471);figwheel.client.reload_css_file(f_73472);
{
var G__73473 = seq__73447_73468;
var G__73474 = chunk__73448_73469;
var G__73475 = count__73449_73470;
var G__73476 = (i__73450_73471 + (1));
seq__73447_73468 = G__73473;
chunk__73448_73469 = G__73474;
count__73449_73470 = G__73475;
i__73450_73471 = G__73476;
continue;
}
} else
{var temp__4126__auto___73477 = cljs.core.seq(seq__73447_73468);if(temp__4126__auto___73477)
{var seq__73447_73478__$1 = temp__4126__auto___73477;if(cljs.core.chunked_seq_QMARK_(seq__73447_73478__$1))
{var c__4406__auto___73479 = cljs.core.chunk_first(seq__73447_73478__$1);{
var G__73480 = cljs.core.chunk_rest(seq__73447_73478__$1);
var G__73481 = c__4406__auto___73479;
var G__73482 = cljs.core.count(c__4406__auto___73479);
var G__73483 = (0);
seq__73447_73468 = G__73480;
chunk__73448_73469 = G__73481;
count__73449_73470 = G__73482;
i__73450_73471 = G__73483;
continue;
}
} else
{var f_73484 = cljs.core.first(seq__73447_73478__$1);figwheel.client.reload_css_file(f_73484);
{
var G__73485 = cljs.core.next(seq__73447_73478__$1);
var G__73486 = null;
var G__73487 = (0);
var G__73488 = (0);
seq__73447_73468 = G__73485;
chunk__73448_73469 = G__73486;
count__73449_73470 = G__73487;
i__73450_73471 = G__73488;
continue;
}
}
} else
{}
}
break;
}
var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__,map__73446,map__73446__$1,opts,on_cssload){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,map__73446,map__73446__$1,opts,on_cssload){
return (function (state_73457){var state_val_73458 = (state_73457[(1)]);if((state_val_73458 === (2)))
{var inst_73453 = (state_73457[(2)]);var inst_73454 = cljs.core.constant$keyword$1586.cljs$core$IFn$_invoke$arity$1(files_msg);var inst_73455 = (function (){var G__73459 = inst_73454;return (on_cssload.cljs$core$IFn$_invoke$arity$1 ? on_cssload.cljs$core$IFn$_invoke$arity$1(G__73459) : on_cssload.call(null,G__73459));
})();var state_73457__$1 = (function (){var statearr_73460 = state_73457;(statearr_73460[(7)] = inst_73453);
return statearr_73460;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_73457__$1,inst_73455);
} else
{if((state_val_73458 === (1)))
{var inst_73451 = cljs.core.async.timeout((100));var state_73457__$1 = state_73457;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73457__$1,(2),inst_73451);
} else
{return null;
}
}
});})(c__5819__auto__,map__73446,map__73446__$1,opts,on_cssload))
;return ((function (switch__5804__auto__,c__5819__auto__,map__73446,map__73446__$1,opts,on_cssload){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_73464 = [null,null,null,null,null,null,null,null];(statearr_73464[(0)] = state_machine__5805__auto__);
(statearr_73464[(1)] = (1));
return statearr_73464;
});
var state_machine__5805__auto____1 = (function (state_73457){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_73457);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e73465){if((e73465 instanceof Object))
{var ex__5808__auto__ = e73465;var statearr_73466_73489 = state_73457;(statearr_73466_73489[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_73457);
return cljs.core.constant$keyword$1120;
} else
{throw e73465;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__73490 = state_73457;
state_73457 = G__73490;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_73457){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_73457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,map__73446,map__73446__$1,opts,on_cssload))
})();var state__5821__auto__ = (function (){var statearr_73467 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_73467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_73467;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__,map__73446,map__73446__$1,opts,on_cssload))
);
return c__5819__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){var G__73492 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$1588);return (compile_fail_callback.cljs$core$IFn$_invoke$arity$1 ? compile_fail_callback.cljs$core$IFn$_invoke$arity$1(G__73492) : compile_fail_callback.call(null,G__73492));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{var G__73494_73495 = figwheel.client.add_cache_buster(src);goog.net.jsloader.load(G__73494_73495);
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__73496){var map__73508 = p__73496;var map__73508__$1 = ((cljs.core.seq_QMARK_(map__73508))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73508):map__73508);var opts = map__73508__$1;var on_compile_fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73508__$1,cljs.core.constant$keyword$1589);var jsload_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73508__$1,cljs.core.constant$keyword$1590);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73508__$1,cljs.core.constant$keyword$1578);var retry_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73508__$1,cljs.core.constant$keyword$1591);console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__73508,map__73508__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string(msg_str.data);var pred__73509 = cljs.core._EQ_;var expr__73510 = cljs.core.constant$keyword$1588.cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_((function (){var G__73512 = cljs.core.constant$keyword$1592;var G__73513 = expr__73510;return (pred__73509.cljs$core$IFn$_invoke$arity$2 ? pred__73509.cljs$core$IFn$_invoke$arity$2(G__73512,G__73513) : pred__73509.call(null,G__73512,G__73513));
})()))
{return figwheel.client.reload_js_files(opts,msg);
} else
{if(cljs.core.truth_((function (){var G__73514 = cljs.core.constant$keyword$1593;var G__73515 = expr__73510;return (pred__73509.cljs$core$IFn$_invoke$arity$2 ? pred__73509.cljs$core$IFn$_invoke$arity$2(G__73514,G__73515) : pred__73509.call(null,G__73514,G__73515));
})()))
{return figwheel.client.reload_css_files(opts,msg);
} else
{if(cljs.core.truth_((function (){var G__73516 = cljs.core.constant$keyword$1594;var G__73517 = expr__73510;return (pred__73509.cljs$core$IFn$_invoke$arity$2 ? pred__73509.cljs$core$IFn$_invoke$arity$2(G__73516,G__73517) : pred__73509.call(null,G__73516,G__73517));
})()))
{return figwheel.client.compile_failed(msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__73508,map__73508__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__73508,map__73508__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base();
return console.debug("Figwheel: socket connection established");
});})(socket,map__73508,map__73508__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__73508,map__73508__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket closed or failed to open"], 0));
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__73508,map__73508__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$1591,(retry_count - (1))));
});})(socket,map__73508,map__73508__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__73508,map__73508__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__73508,map__73508__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket error "], 0));
});})(socket,map__73508,map__73508__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj73521 = {"detail":url};return obj73521;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons(cljs.core.select_keys(ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1391,cljs.core.constant$keyword$1257], null)),get_essential_messages(cljs.core.constant$keyword$1595.cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__73523){var map__73525 = p__73523;var map__73525__$1 = ((cljs.core.seq_QMARK_(map__73525))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73525):map__73525);var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73525__$1,cljs.core.constant$keyword$1257);var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73525__$1,cljs.core.constant$keyword$1391);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__73526){var map__73533 = p__73526;var map__73533__$1 = ((cljs.core.seq_QMARK_(map__73533))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73533):map__73533);var ed = map__73533__$1;var exception_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73533__$1,cljs.core.constant$keyword$1596);var formatted_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73533__$1,cljs.core.constant$keyword$1597);console.debug("Figwheel: Compile Exception");
var seq__73534_73539 = cljs.core.seq((function (){var G__73538 = exception_data;return (figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(G__73538) : figwheel.client.format_messages.call(null,G__73538));
})());var chunk__73535_73540 = null;var count__73536_73541 = (0);var i__73537_73542 = (0);while(true){
if((i__73537_73542 < count__73536_73541))
{var msg_73543 = chunk__73535_73540.cljs$core$IIndexed$_nth$arity$2(null,i__73537_73542);console.log(msg_73543);
{
var G__73544 = seq__73534_73539;
var G__73545 = chunk__73535_73540;
var G__73546 = count__73536_73541;
var G__73547 = (i__73537_73542 + (1));
seq__73534_73539 = G__73544;
chunk__73535_73540 = G__73545;
count__73536_73541 = G__73546;
i__73537_73542 = G__73547;
continue;
}
} else
{var temp__4126__auto___73548 = cljs.core.seq(seq__73534_73539);if(temp__4126__auto___73548)
{var seq__73534_73549__$1 = temp__4126__auto___73548;if(cljs.core.chunked_seq_QMARK_(seq__73534_73549__$1))
{var c__4406__auto___73550 = cljs.core.chunk_first(seq__73534_73549__$1);{
var G__73551 = cljs.core.chunk_rest(seq__73534_73549__$1);
var G__73552 = c__4406__auto___73550;
var G__73553 = cljs.core.count(c__4406__auto___73550);
var G__73554 = (0);
seq__73534_73539 = G__73551;
chunk__73535_73540 = G__73552;
count__73536_73541 = G__73553;
i__73537_73542 = G__73554;
continue;
}
} else
{var msg_73555 = cljs.core.first(seq__73534_73549__$1);console.log(msg_73555);
{
var G__73556 = cljs.core.next(seq__73534_73549__$1);
var G__73557 = null;
var G__73558 = (0);
var G__73559 = (0);
seq__73534_73539 = G__73556;
chunk__73535_73540 = G__73557;
count__73536_73541 = G__73558;
i__73537_73542 = G__73559;
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
console.log(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1583,files)], 0)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$1591,(100),cljs.core.constant$keyword$1590,figwheel.client.default_on_jsload,cljs.core.constant$keyword$1584,(function (){var or__3637__auto__ = cljs.core.constant$keyword$1590.cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),cljs.core.constant$keyword$1587,figwheel.client.default_on_cssload,cljs.core.constant$keyword$1585,figwheel.client.default_before_load,cljs.core.constant$keyword$1589,figwheel.client.default_on_compile_fail,cljs.core.constant$keyword$1582,cljs.core.identity,cljs.core.constant$keyword$1578,("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts], 0)));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__73560){var map__73562 = p__73560;var map__73562__$1 = ((cljs.core.seq_QMARK_(map__73562))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73562):map__73562);var opts = map__73562__$1;return figwheel.client.watch_and_reload_with_opts(opts);
};
var watch_and_reload = function (var_args){
var p__73560 = null;if (arguments.length > 0) {
  p__73560 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__73560);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__73563){
var p__73560 = cljs.core.seq(arglist__73563);
return watch_and_reload__delegate(p__73560);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
