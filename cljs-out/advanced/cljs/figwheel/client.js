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
var log__delegate = function (p__44222,args){var map__44224 = p__44222;var map__44224__$1 = ((cljs.core.seq_QMARK_(map__44224))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44224):map__44224);var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44224__$1,cljs.core.constant$keyword$1210);if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array(args));
} else
{return null;
}
};
var log = function (p__44222,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__44222,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__44225){
var p__44222 = cljs.core.first(arglist__44225);
var args = cljs.core.rest(arglist__44225);
return log__delegate(p__44222,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__44226){var map__44228 = p__44226;var map__44228__$1 = ((cljs.core.seq_QMARK_(map__44228))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44228):map__44228);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44228__$1,cljs.core.constant$keyword$1211);return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__44229,callback){var map__44231 = p__44229;var map__44231__$1 = ((cljs.core.seq_QMARK_(map__44231))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44231):map__44231);var msg = map__44231__$1;var dependency_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44231__$1,cljs.core.constant$keyword$1212);var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44231__$1,cljs.core.constant$keyword$1213);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44231__$1,cljs.core.constant$keyword$1214);if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster(request_url)).addCallback(((function (map__44231,map__44231__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__44231,map__44231__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__44232,p__44233){var map__44236 = p__44232;var map__44236__$1 = ((cljs.core.seq_QMARK_(map__44236))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44236):map__44236);var opts = map__44236__$1;var url_rewriter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44236__$1,cljs.core.constant$keyword$1215);var map__44237 = p__44233;var map__44237__$1 = ((cljs.core.seq_QMARK_(map__44237))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44237):map__44237);var d = map__44237__$1;var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44237__$1,cljs.core.constant$keyword$1216);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.constant$keyword$1214,(url_rewriter.cljs$core$IFn$_invoke$arity$1 ? url_rewriter.cljs$core$IFn$_invoke$arity$1(("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))) : url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__44238,p__44239){var map__44281 = p__44238;var map__44281__$1 = ((cljs.core.seq_QMARK_(map__44281))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44281):map__44281);var opts = map__44281__$1;var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44281__$1,cljs.core.constant$keyword$1217);var before_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44281__$1,cljs.core.constant$keyword$1218);var map__44282 = p__44239;var map__44282__$1 = ((cljs.core.seq_QMARK_(map__44282))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44282):map__44282);var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44282__$1,cljs.core.constant$keyword$1219);var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,map__44281,map__44281__$1,opts,on_jsload,before_jsload,map__44282,map__44282__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__44281,map__44281__$1,opts,on_jsload,before_jsload,map__44282,map__44282__$1,files){
return (function (state_44305){var state_val_44306 = (state_44305[(1)]);if((state_val_44306 === (6)))
{var inst_44287 = (state_44305[(7)]);var inst_44296 = (state_44305[(2)]);var inst_44297 = cljs.core.PersistentVector.EMPTY_NODE;var inst_44298 = [inst_44287];var inst_44299 = (new cljs.core.PersistentVector(null,1,(5),inst_44297,inst_44298,null));var inst_44300 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(on_jsload,inst_44299);var state_44305__$1 = (function (){var statearr_44307 = state_44305;(statearr_44307[(8)] = inst_44296);
return statearr_44307;
})();var statearr_44308_44322 = state_44305__$1;(statearr_44308_44322[(2)] = inst_44300);
(statearr_44308_44322[(1)] = (5));
return cljs.core.constant$keyword$836;
} else
{if((state_val_44306 === (5)))
{var inst_44303 = (state_44305[(2)]);var state_44305__$1 = state_44305;return cljs.core.async.impl.ioc_helpers.return_chan(state_44305__$1,inst_44303);
} else
{if((state_val_44306 === (4)))
{var state_44305__$1 = state_44305;var statearr_44309_44323 = state_44305__$1;(statearr_44309_44323[(2)] = null);
(statearr_44309_44323[(1)] = (5));
return cljs.core.constant$keyword$836;
} else
{if((state_val_44306 === (3)))
{var inst_44287 = (state_44305[(7)]);var inst_44290 = console.debug("Figwheel: loaded these files");var inst_44291 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1216,inst_44287);var inst_44292 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_44291], 0));var inst_44293 = console.log(inst_44292);var inst_44294 = cljs.core.async.timeout((10));var state_44305__$1 = (function (){var statearr_44310 = state_44305;(statearr_44310[(9)] = inst_44293);
(statearr_44310[(10)] = inst_44290);
return statearr_44310;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44305__$1,(6),inst_44294);
} else
{if((state_val_44306 === (2)))
{var inst_44287 = (state_44305[(7)]);var inst_44287__$1 = (state_44305[(2)]);var inst_44288 = cljs.core.not_empty(inst_44287__$1);var state_44305__$1 = (function (){var statearr_44311 = state_44305;(statearr_44311[(7)] = inst_44287__$1);
return statearr_44311;
})();if(cljs.core.truth_(inst_44288))
{var statearr_44312_44324 = state_44305__$1;(statearr_44312_44324[(1)] = (3));
} else
{var statearr_44313_44325 = state_44305__$1;(statearr_44313_44325[(1)] = (4));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_44306 === (1)))
{var inst_44283 = (before_jsload.cljs$core$IFn$_invoke$arity$1 ? before_jsload.cljs$core$IFn$_invoke$arity$1(files) : before_jsload.call(null,files));var inst_44284 = figwheel.client.add_request_urls(opts,files);var inst_44285 = figwheel.client.load_all_js_files(inst_44284);var state_44305__$1 = (function (){var statearr_44314 = state_44305;(statearr_44314[(11)] = inst_44283);
return statearr_44314;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44305__$1,(2),inst_44285);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__44281,map__44281__$1,opts,on_jsload,before_jsload,map__44282,map__44282__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__44281,map__44281__$1,opts,on_jsload,before_jsload,map__44282,map__44282__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_44318 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44318[(0)] = state_machine__5694__auto__);
(statearr_44318[(1)] = (1));
return statearr_44318;
});
var state_machine__5694__auto____1 = (function (state_44305){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_44305);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e44319){if((e44319 instanceof Object))
{var ex__5697__auto__ = e44319;var statearr_44320_44326 = state_44305;(statearr_44320_44326[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44305);
return cljs.core.constant$keyword$836;
} else
{throw e44319;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__44327 = state_44305;
state_44305 = G__44327;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_44305){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_44305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__44281,map__44281__$1,opts,on_jsload,before_jsload,map__44282,map__44282__$1,files))
})();var state__5710__auto__ = (function (){var statearr_44321 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_44321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_44321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,map__44281,map__44281__$1,opts,on_jsload,before_jsload,map__44282,map__44282__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__44328,link_href){var map__44330 = p__44328;var map__44330__$1 = ((cljs.core.seq_QMARK_(map__44330))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44330):map__44330);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44330__$1,cljs.core.constant$keyword$1214);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44330__$1,cljs.core.constant$keyword$1216);var trunc_href = figwheel.client.truncate_url(link_href);return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file,trunc_href)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(figwheel.client.truncate_url(request_url),trunc_href));
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
return (function (state_44351){var state_val_44352 = (state_44351[(1)]);if((state_val_44352 === (2)))
{var inst_44348 = (state_44351[(2)]);var inst_44349 = parent.removeChild(orig_link);var state_44351__$1 = (function (){var statearr_44353 = state_44351;(statearr_44353[(7)] = inst_44348);
return statearr_44353;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_44351__$1,inst_44349);
} else
{if((state_val_44352 === (1)))
{var inst_44346 = cljs.core.async.timeout((200));var state_44351__$1 = state_44351;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44351__$1,(2),inst_44346);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_44357 = [null,null,null,null,null,null,null,null];(statearr_44357[(0)] = state_machine__5694__auto__);
(statearr_44357[(1)] = (1));
return statearr_44357;
});
var state_machine__5694__auto____1 = (function (state_44351){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_44351);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e44358){if((e44358 instanceof Object))
{var ex__5697__auto__ = e44358;var statearr_44359_44361 = state_44351;(statearr_44359_44361[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44351);
return cljs.core.constant$keyword$836;
} else
{throw e44358;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__44362 = state_44351;
state_44351 = G__44362;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_44351){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_44351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_44360 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_44360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_44360;
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
figwheel.client.reload_css_file = (function reload_css_file(p__44363){var map__44365 = p__44363;var map__44365__$1 = ((cljs.core.seq_QMARK_(map__44365))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44365):map__44365);var f_data = map__44365__$1;var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44365__$1,cljs.core.constant$keyword$1214);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44365__$1,cljs.core.constant$keyword$1216);var temp__4124__auto__ = figwheel.client.get_correct_link(f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$2(link,figwheel.client.clone_link(link,request_url));
} else
{return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$1(figwheel.client.create_link(request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__44366,files_msg){var map__44388 = p__44366;var map__44388__$1 = ((cljs.core.seq_QMARK_(map__44388))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44388):map__44388);var opts = map__44388__$1;var on_cssload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44388__$1,cljs.core.constant$keyword$1220);var seq__44389_44409 = cljs.core.seq(figwheel.client.add_request_urls(opts,cljs.core.constant$keyword$1219.cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__44390_44410 = null;var count__44391_44411 = (0);var i__44392_44412 = (0);while(true){
if((i__44392_44412 < count__44391_44411))
{var f_44413 = chunk__44390_44410.cljs$core$IIndexed$_nth$arity$2(null,i__44392_44412);figwheel.client.reload_css_file(f_44413);
{
var G__44414 = seq__44389_44409;
var G__44415 = chunk__44390_44410;
var G__44416 = count__44391_44411;
var G__44417 = (i__44392_44412 + (1));
seq__44389_44409 = G__44414;
chunk__44390_44410 = G__44415;
count__44391_44411 = G__44416;
i__44392_44412 = G__44417;
continue;
}
} else
{var temp__4126__auto___44418 = cljs.core.seq(seq__44389_44409);if(temp__4126__auto___44418)
{var seq__44389_44419__$1 = temp__4126__auto___44418;if(cljs.core.chunked_seq_QMARK_(seq__44389_44419__$1))
{var c__4314__auto___44420 = cljs.core.chunk_first(seq__44389_44419__$1);{
var G__44421 = cljs.core.chunk_rest(seq__44389_44419__$1);
var G__44422 = c__4314__auto___44420;
var G__44423 = cljs.core.count(c__4314__auto___44420);
var G__44424 = (0);
seq__44389_44409 = G__44421;
chunk__44390_44410 = G__44422;
count__44391_44411 = G__44423;
i__44392_44412 = G__44424;
continue;
}
} else
{var f_44425 = cljs.core.first(seq__44389_44419__$1);figwheel.client.reload_css_file(f_44425);
{
var G__44426 = cljs.core.next(seq__44389_44419__$1);
var G__44427 = null;
var G__44428 = (0);
var G__44429 = (0);
seq__44389_44409 = G__44426;
chunk__44390_44410 = G__44427;
count__44391_44411 = G__44428;
i__44392_44412 = G__44429;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,map__44388,map__44388__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__44388,map__44388__$1,opts,on_cssload){
return (function (state_44399){var state_val_44400 = (state_44399[(1)]);if((state_val_44400 === (2)))
{var inst_44395 = (state_44399[(2)]);var inst_44396 = cljs.core.constant$keyword$1219.cljs$core$IFn$_invoke$arity$1(files_msg);var inst_44397 = (on_cssload.cljs$core$IFn$_invoke$arity$1 ? on_cssload.cljs$core$IFn$_invoke$arity$1(inst_44396) : on_cssload.call(null,inst_44396));var state_44399__$1 = (function (){var statearr_44401 = state_44399;(statearr_44401[(7)] = inst_44395);
return statearr_44401;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_44399__$1,inst_44397);
} else
{if((state_val_44400 === (1)))
{var inst_44393 = cljs.core.async.timeout((100));var state_44399__$1 = state_44399;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44399__$1,(2),inst_44393);
} else
{return null;
}
}
});})(c__5708__auto__,map__44388,map__44388__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__44388,map__44388__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_44405 = [null,null,null,null,null,null,null,null];(statearr_44405[(0)] = state_machine__5694__auto__);
(statearr_44405[(1)] = (1));
return statearr_44405;
});
var state_machine__5694__auto____1 = (function (state_44399){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_44399);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e44406){if((e44406 instanceof Object))
{var ex__5697__auto__ = e44406;var statearr_44407_44430 = state_44399;(statearr_44407_44430[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44399);
return cljs.core.constant$keyword$836;
} else
{throw e44406;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__44431 = state_44399;
state_44399 = G__44431;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_44399){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_44399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__44388,map__44388__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_44408 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_44408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_44408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,map__44388,map__44388__$1,opts,on_cssload))
);
return c__5708__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return (compile_fail_callback.cljs$core$IFn$_invoke$arity$1 ? compile_fail_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$1221)) : compile_fail_callback.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$1221)));
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__44432){var map__44437 = p__44432;var map__44437__$1 = ((cljs.core.seq_QMARK_(map__44437))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44437):map__44437);var opts = map__44437__$1;var on_compile_fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44437__$1,cljs.core.constant$keyword$1222);var jsload_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44437__$1,cljs.core.constant$keyword$1223);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44437__$1,cljs.core.constant$keyword$1211);var retry_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44437__$1,cljs.core.constant$keyword$1224);console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__44437,map__44437__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string(msg_str.data);var pred__44438 = cljs.core._EQ_;var expr__44439 = cljs.core.constant$keyword$1221.cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_((pred__44438.cljs$core$IFn$_invoke$arity$2 ? pred__44438.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1225,expr__44439) : pred__44438.call(null,cljs.core.constant$keyword$1225,expr__44439))))
{return figwheel.client.reload_js_files(opts,msg);
} else
{if(cljs.core.truth_((pred__44438.cljs$core$IFn$_invoke$arity$2 ? pred__44438.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1226,expr__44439) : pred__44438.call(null,cljs.core.constant$keyword$1226,expr__44439))))
{return figwheel.client.reload_css_files(opts,msg);
} else
{if(cljs.core.truth_((pred__44438.cljs$core$IFn$_invoke$arity$2 ? pred__44438.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1227,expr__44439) : pred__44438.call(null,cljs.core.constant$keyword$1227,expr__44439))))
{return figwheel.client.compile_failed(msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__44437,map__44437__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__44437,map__44437__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base();
return console.debug("Figwheel: socket connection established");
});})(socket,map__44437,map__44437__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__44437,map__44437__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket closed or failed to open"], 0));
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__44437,map__44437__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$1224,(retry_count - (1))));
});})(socket,map__44437,map__44437__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__44437,map__44437__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__44437,map__44437__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket error "], 0));
});})(socket,map__44437,map__44437__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj44444 = {"detail":url};return obj44444;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons(cljs.core.select_keys(ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1208,cljs.core.constant$keyword$885], null)),get_essential_messages(cljs.core.constant$keyword$1228.cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__44445){var map__44447 = p__44445;var map__44447__$1 = ((cljs.core.seq_QMARK_(map__44447))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44447):map__44447);var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44447__$1,cljs.core.constant$keyword$885);var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44447__$1,cljs.core.constant$keyword$1208);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__44448){var map__44454 = p__44448;var map__44454__$1 = ((cljs.core.seq_QMARK_(map__44454))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44454):map__44454);var ed = map__44454__$1;var exception_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44454__$1,cljs.core.constant$keyword$1229);var formatted_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44454__$1,cljs.core.constant$keyword$1230);console.debug("Figwheel: Compile Exception");
var seq__44455_44459 = cljs.core.seq((figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(exception_data) : figwheel.client.format_messages.call(null,exception_data)));var chunk__44456_44460 = null;var count__44457_44461 = (0);var i__44458_44462 = (0);while(true){
if((i__44458_44462 < count__44457_44461))
{var msg_44463 = chunk__44456_44460.cljs$core$IIndexed$_nth$arity$2(null,i__44458_44462);console.log(msg_44463);
{
var G__44464 = seq__44455_44459;
var G__44465 = chunk__44456_44460;
var G__44466 = count__44457_44461;
var G__44467 = (i__44458_44462 + (1));
seq__44455_44459 = G__44464;
chunk__44456_44460 = G__44465;
count__44457_44461 = G__44466;
i__44458_44462 = G__44467;
continue;
}
} else
{var temp__4126__auto___44468 = cljs.core.seq(seq__44455_44459);if(temp__4126__auto___44468)
{var seq__44455_44469__$1 = temp__4126__auto___44468;if(cljs.core.chunked_seq_QMARK_(seq__44455_44469__$1))
{var c__4314__auto___44470 = cljs.core.chunk_first(seq__44455_44469__$1);{
var G__44471 = cljs.core.chunk_rest(seq__44455_44469__$1);
var G__44472 = c__4314__auto___44470;
var G__44473 = cljs.core.count(c__4314__auto___44470);
var G__44474 = (0);
seq__44455_44459 = G__44471;
chunk__44456_44460 = G__44472;
count__44457_44461 = G__44473;
i__44458_44462 = G__44474;
continue;
}
} else
{var msg_44475 = cljs.core.first(seq__44455_44469__$1);console.log(msg_44475);
{
var G__44476 = cljs.core.next(seq__44455_44469__$1);
var G__44477 = null;
var G__44478 = (0);
var G__44479 = (0);
seq__44455_44459 = G__44476;
chunk__44456_44460 = G__44477;
count__44457_44461 = G__44478;
i__44458_44462 = G__44479;
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
console.log(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1216,files)], 0)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$1224,(100),cljs.core.constant$keyword$1223,figwheel.client.default_on_jsload,cljs.core.constant$keyword$1217,(function (){var or__3558__auto__ = cljs.core.constant$keyword$1223.cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),cljs.core.constant$keyword$1220,figwheel.client.default_on_cssload,cljs.core.constant$keyword$1218,figwheel.client.default_before_load,cljs.core.constant$keyword$1222,figwheel.client.default_on_compile_fail,cljs.core.constant$keyword$1215,cljs.core.identity,cljs.core.constant$keyword$1211,("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts], 0)));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__44480){var map__44482 = p__44480;var map__44482__$1 = ((cljs.core.seq_QMARK_(map__44482))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44482):map__44482);var opts = map__44482__$1;return figwheel.client.watch_and_reload_with_opts(opts);
};
var watch_and_reload = function (var_args){
var p__44480 = null;if (arguments.length > 0) {
  p__44480 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__44480);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__44483){
var p__44480 = cljs.core.seq(arglist__44483);
return watch_and_reload__delegate(p__44480);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
