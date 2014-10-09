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
var log__delegate = function (p__46160,args){var map__46162 = p__46160;var map__46162__$1 = ((cljs.core.seq_QMARK_(map__46162))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46162):map__46162);var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46162__$1,cljs.core.constant$keyword$1264);if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array(args));
} else
{return null;
}
};
var log = function (p__46160,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__46160,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__46163){
var p__46160 = cljs.core.first(arglist__46163);
var args = cljs.core.rest(arglist__46163);
return log__delegate(p__46160,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__46164){var map__46166 = p__46164;var map__46166__$1 = ((cljs.core.seq_QMARK_(map__46166))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46166):map__46166);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46166__$1,cljs.core.constant$keyword$1265);return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__46167,callback){var map__46169 = p__46167;var map__46169__$1 = ((cljs.core.seq_QMARK_(map__46169))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46169):map__46169);var msg = map__46169__$1;var dependency_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46169__$1,cljs.core.constant$keyword$1266);var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46169__$1,cljs.core.constant$keyword$1267);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46169__$1,cljs.core.constant$keyword$1268);if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster(request_url)).addCallback(((function (map__46169,map__46169__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__46169,map__46169__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__46170,p__46171){var map__46174 = p__46170;var map__46174__$1 = ((cljs.core.seq_QMARK_(map__46174))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46174):map__46174);var opts = map__46174__$1;var url_rewriter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46174__$1,cljs.core.constant$keyword$1269);var map__46175 = p__46171;var map__46175__$1 = ((cljs.core.seq_QMARK_(map__46175))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46175):map__46175);var d = map__46175__$1;var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46175__$1,cljs.core.constant$keyword$1270);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.constant$keyword$1268,(url_rewriter.cljs$core$IFn$_invoke$arity$1 ? url_rewriter.cljs$core$IFn$_invoke$arity$1(("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))) : url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__46176,p__46177){var map__46219 = p__46176;var map__46219__$1 = ((cljs.core.seq_QMARK_(map__46219))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46219):map__46219);var opts = map__46219__$1;var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46219__$1,cljs.core.constant$keyword$1271);var before_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46219__$1,cljs.core.constant$keyword$1272);var map__46220 = p__46177;var map__46220__$1 = ((cljs.core.seq_QMARK_(map__46220))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46220):map__46220);var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46220__$1,cljs.core.constant$keyword$1273);var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,map__46219,map__46219__$1,opts,on_jsload,before_jsload,map__46220,map__46220__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__46219,map__46219__$1,opts,on_jsload,before_jsload,map__46220,map__46220__$1,files){
return (function (state_46243){var state_val_46244 = (state_46243[(1)]);if((state_val_46244 === (6)))
{var inst_46225 = (state_46243[(7)]);var inst_46234 = (state_46243[(2)]);var inst_46235 = cljs.core.PersistentVector.EMPTY_NODE;var inst_46236 = [inst_46225];var inst_46237 = (new cljs.core.PersistentVector(null,1,(5),inst_46235,inst_46236,null));var inst_46238 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(on_jsload,inst_46237);var state_46243__$1 = (function (){var statearr_46245 = state_46243;(statearr_46245[(8)] = inst_46234);
return statearr_46245;
})();var statearr_46246_46260 = state_46243__$1;(statearr_46246_46260[(2)] = inst_46238);
(statearr_46246_46260[(1)] = (5));
return cljs.core.constant$keyword$872;
} else
{if((state_val_46244 === (5)))
{var inst_46241 = (state_46243[(2)]);var state_46243__$1 = state_46243;return cljs.core.async.impl.ioc_helpers.return_chan(state_46243__$1,inst_46241);
} else
{if((state_val_46244 === (4)))
{var state_46243__$1 = state_46243;var statearr_46247_46261 = state_46243__$1;(statearr_46247_46261[(2)] = null);
(statearr_46247_46261[(1)] = (5));
return cljs.core.constant$keyword$872;
} else
{if((state_val_46244 === (3)))
{var inst_46225 = (state_46243[(7)]);var inst_46228 = console.debug("Figwheel: loaded these files");var inst_46229 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1270,inst_46225);var inst_46230 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_46229], 0));var inst_46231 = console.log(inst_46230);var inst_46232 = cljs.core.async.timeout((10));var state_46243__$1 = (function (){var statearr_46248 = state_46243;(statearr_46248[(9)] = inst_46231);
(statearr_46248[(10)] = inst_46228);
return statearr_46248;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46243__$1,(6),inst_46232);
} else
{if((state_val_46244 === (2)))
{var inst_46225 = (state_46243[(7)]);var inst_46225__$1 = (state_46243[(2)]);var inst_46226 = cljs.core.not_empty(inst_46225__$1);var state_46243__$1 = (function (){var statearr_46249 = state_46243;(statearr_46249[(7)] = inst_46225__$1);
return statearr_46249;
})();if(cljs.core.truth_(inst_46226))
{var statearr_46250_46262 = state_46243__$1;(statearr_46250_46262[(1)] = (3));
} else
{var statearr_46251_46263 = state_46243__$1;(statearr_46251_46263[(1)] = (4));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_46244 === (1)))
{var inst_46221 = (before_jsload.cljs$core$IFn$_invoke$arity$1 ? before_jsload.cljs$core$IFn$_invoke$arity$1(files) : before_jsload.call(null,files));var inst_46222 = figwheel.client.add_request_urls(opts,files);var inst_46223 = figwheel.client.load_all_js_files(inst_46222);var state_46243__$1 = (function (){var statearr_46252 = state_46243;(statearr_46252[(11)] = inst_46221);
return statearr_46252;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46243__$1,(2),inst_46223);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__46219,map__46219__$1,opts,on_jsload,before_jsload,map__46220,map__46220__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__46219,map__46219__$1,opts,on_jsload,before_jsload,map__46220,map__46220__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_46256 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_46256[(0)] = state_machine__5694__auto__);
(statearr_46256[(1)] = (1));
return statearr_46256;
});
var state_machine__5694__auto____1 = (function (state_46243){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_46243);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e46257){if((e46257 instanceof Object))
{var ex__5697__auto__ = e46257;var statearr_46258_46264 = state_46243;(statearr_46258_46264[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_46243);
return cljs.core.constant$keyword$872;
} else
{throw e46257;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__46265 = state_46243;
state_46243 = G__46265;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_46243){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_46243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__46219,map__46219__$1,opts,on_jsload,before_jsload,map__46220,map__46220__$1,files))
})();var state__5710__auto__ = (function (){var statearr_46259 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_46259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_46259;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,map__46219,map__46219__$1,opts,on_jsload,before_jsload,map__46220,map__46220__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__46266,link_href){var map__46268 = p__46266;var map__46268__$1 = ((cljs.core.seq_QMARK_(map__46268))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46268):map__46268);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46268__$1,cljs.core.constant$keyword$1268);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46268__$1,cljs.core.constant$keyword$1270);var trunc_href = figwheel.client.truncate_url(link_href);return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file,trunc_href)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(figwheel.client.truncate_url(request_url),trunc_href));
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
return (function (state_46289){var state_val_46290 = (state_46289[(1)]);if((state_val_46290 === (2)))
{var inst_46286 = (state_46289[(2)]);var inst_46287 = parent.removeChild(orig_link);var state_46289__$1 = (function (){var statearr_46291 = state_46289;(statearr_46291[(7)] = inst_46286);
return statearr_46291;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_46289__$1,inst_46287);
} else
{if((state_val_46290 === (1)))
{var inst_46284 = cljs.core.async.timeout((200));var state_46289__$1 = state_46289;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46289__$1,(2),inst_46284);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_46295 = [null,null,null,null,null,null,null,null];(statearr_46295[(0)] = state_machine__5694__auto__);
(statearr_46295[(1)] = (1));
return statearr_46295;
});
var state_machine__5694__auto____1 = (function (state_46289){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_46289);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e46296){if((e46296 instanceof Object))
{var ex__5697__auto__ = e46296;var statearr_46297_46299 = state_46289;(statearr_46297_46299[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_46289);
return cljs.core.constant$keyword$872;
} else
{throw e46296;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__46300 = state_46289;
state_46289 = G__46300;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_46289){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_46289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_46298 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_46298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_46298;
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
figwheel.client.reload_css_file = (function reload_css_file(p__46301){var map__46303 = p__46301;var map__46303__$1 = ((cljs.core.seq_QMARK_(map__46303))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46303):map__46303);var f_data = map__46303__$1;var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46303__$1,cljs.core.constant$keyword$1268);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46303__$1,cljs.core.constant$keyword$1270);var temp__4124__auto__ = figwheel.client.get_correct_link(f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$2(link,figwheel.client.clone_link(link,request_url));
} else
{return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$1(figwheel.client.create_link(request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__46304,files_msg){var map__46326 = p__46304;var map__46326__$1 = ((cljs.core.seq_QMARK_(map__46326))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46326):map__46326);var opts = map__46326__$1;var on_cssload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46326__$1,cljs.core.constant$keyword$1274);var seq__46327_46347 = cljs.core.seq(figwheel.client.add_request_urls(opts,cljs.core.constant$keyword$1273.cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__46328_46348 = null;var count__46329_46349 = (0);var i__46330_46350 = (0);while(true){
if((i__46330_46350 < count__46329_46349))
{var f_46351 = chunk__46328_46348.cljs$core$IIndexed$_nth$arity$2(null,i__46330_46350);figwheel.client.reload_css_file(f_46351);
{
var G__46352 = seq__46327_46347;
var G__46353 = chunk__46328_46348;
var G__46354 = count__46329_46349;
var G__46355 = (i__46330_46350 + (1));
seq__46327_46347 = G__46352;
chunk__46328_46348 = G__46353;
count__46329_46349 = G__46354;
i__46330_46350 = G__46355;
continue;
}
} else
{var temp__4126__auto___46356 = cljs.core.seq(seq__46327_46347);if(temp__4126__auto___46356)
{var seq__46327_46357__$1 = temp__4126__auto___46356;if(cljs.core.chunked_seq_QMARK_(seq__46327_46357__$1))
{var c__4314__auto___46358 = cljs.core.chunk_first(seq__46327_46357__$1);{
var G__46359 = cljs.core.chunk_rest(seq__46327_46357__$1);
var G__46360 = c__4314__auto___46358;
var G__46361 = cljs.core.count(c__4314__auto___46358);
var G__46362 = (0);
seq__46327_46347 = G__46359;
chunk__46328_46348 = G__46360;
count__46329_46349 = G__46361;
i__46330_46350 = G__46362;
continue;
}
} else
{var f_46363 = cljs.core.first(seq__46327_46357__$1);figwheel.client.reload_css_file(f_46363);
{
var G__46364 = cljs.core.next(seq__46327_46357__$1);
var G__46365 = null;
var G__46366 = (0);
var G__46367 = (0);
seq__46327_46347 = G__46364;
chunk__46328_46348 = G__46365;
count__46329_46349 = G__46366;
i__46330_46350 = G__46367;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,map__46326,map__46326__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__46326,map__46326__$1,opts,on_cssload){
return (function (state_46337){var state_val_46338 = (state_46337[(1)]);if((state_val_46338 === (2)))
{var inst_46333 = (state_46337[(2)]);var inst_46334 = cljs.core.constant$keyword$1273.cljs$core$IFn$_invoke$arity$1(files_msg);var inst_46335 = (on_cssload.cljs$core$IFn$_invoke$arity$1 ? on_cssload.cljs$core$IFn$_invoke$arity$1(inst_46334) : on_cssload.call(null,inst_46334));var state_46337__$1 = (function (){var statearr_46339 = state_46337;(statearr_46339[(7)] = inst_46333);
return statearr_46339;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_46337__$1,inst_46335);
} else
{if((state_val_46338 === (1)))
{var inst_46331 = cljs.core.async.timeout((100));var state_46337__$1 = state_46337;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46337__$1,(2),inst_46331);
} else
{return null;
}
}
});})(c__5708__auto__,map__46326,map__46326__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__46326,map__46326__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_46343 = [null,null,null,null,null,null,null,null];(statearr_46343[(0)] = state_machine__5694__auto__);
(statearr_46343[(1)] = (1));
return statearr_46343;
});
var state_machine__5694__auto____1 = (function (state_46337){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_46337);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e46344){if((e46344 instanceof Object))
{var ex__5697__auto__ = e46344;var statearr_46345_46368 = state_46337;(statearr_46345_46368[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_46337);
return cljs.core.constant$keyword$872;
} else
{throw e46344;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__46369 = state_46337;
state_46337 = G__46369;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_46337){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_46337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__46326,map__46326__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_46346 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_46346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_46346;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,map__46326,map__46326__$1,opts,on_cssload))
);
return c__5708__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return (compile_fail_callback.cljs$core$IFn$_invoke$arity$1 ? compile_fail_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$1275)) : compile_fail_callback.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$1275)));
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__46370){var map__46375 = p__46370;var map__46375__$1 = ((cljs.core.seq_QMARK_(map__46375))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46375):map__46375);var opts = map__46375__$1;var on_compile_fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46375__$1,cljs.core.constant$keyword$1276);var jsload_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46375__$1,cljs.core.constant$keyword$1277);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46375__$1,cljs.core.constant$keyword$1265);var retry_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46375__$1,cljs.core.constant$keyword$1278);console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__46375,map__46375__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string(msg_str.data);var pred__46376 = cljs.core._EQ_;var expr__46377 = cljs.core.constant$keyword$1275.cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_((pred__46376.cljs$core$IFn$_invoke$arity$2 ? pred__46376.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1279,expr__46377) : pred__46376.call(null,cljs.core.constant$keyword$1279,expr__46377))))
{return figwheel.client.reload_js_files(opts,msg);
} else
{if(cljs.core.truth_((pred__46376.cljs$core$IFn$_invoke$arity$2 ? pred__46376.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1280,expr__46377) : pred__46376.call(null,cljs.core.constant$keyword$1280,expr__46377))))
{return figwheel.client.reload_css_files(opts,msg);
} else
{if(cljs.core.truth_((pred__46376.cljs$core$IFn$_invoke$arity$2 ? pred__46376.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1281,expr__46377) : pred__46376.call(null,cljs.core.constant$keyword$1281,expr__46377))))
{return figwheel.client.compile_failed(msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__46375,map__46375__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__46375,map__46375__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base();
return console.debug("Figwheel: socket connection established");
});})(socket,map__46375,map__46375__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__46375,map__46375__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket closed or failed to open"], 0));
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__46375,map__46375__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$1278,(retry_count - (1))));
});})(socket,map__46375,map__46375__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__46375,map__46375__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__46375,map__46375__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket error "], 0));
});})(socket,map__46375,map__46375__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj46382 = {"detail":url};return obj46382;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons(cljs.core.select_keys(ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1262,cljs.core.constant$keyword$915], null)),get_essential_messages(cljs.core.constant$keyword$1282.cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__46383){var map__46385 = p__46383;var map__46385__$1 = ((cljs.core.seq_QMARK_(map__46385))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46385):map__46385);var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46385__$1,cljs.core.constant$keyword$915);var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46385__$1,cljs.core.constant$keyword$1262);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__46386){var map__46392 = p__46386;var map__46392__$1 = ((cljs.core.seq_QMARK_(map__46392))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46392):map__46392);var ed = map__46392__$1;var exception_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46392__$1,cljs.core.constant$keyword$1283);var formatted_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46392__$1,cljs.core.constant$keyword$1284);console.debug("Figwheel: Compile Exception");
var seq__46393_46397 = cljs.core.seq((figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(exception_data) : figwheel.client.format_messages.call(null,exception_data)));var chunk__46394_46398 = null;var count__46395_46399 = (0);var i__46396_46400 = (0);while(true){
if((i__46396_46400 < count__46395_46399))
{var msg_46401 = chunk__46394_46398.cljs$core$IIndexed$_nth$arity$2(null,i__46396_46400);console.log(msg_46401);
{
var G__46402 = seq__46393_46397;
var G__46403 = chunk__46394_46398;
var G__46404 = count__46395_46399;
var G__46405 = (i__46396_46400 + (1));
seq__46393_46397 = G__46402;
chunk__46394_46398 = G__46403;
count__46395_46399 = G__46404;
i__46396_46400 = G__46405;
continue;
}
} else
{var temp__4126__auto___46406 = cljs.core.seq(seq__46393_46397);if(temp__4126__auto___46406)
{var seq__46393_46407__$1 = temp__4126__auto___46406;if(cljs.core.chunked_seq_QMARK_(seq__46393_46407__$1))
{var c__4314__auto___46408 = cljs.core.chunk_first(seq__46393_46407__$1);{
var G__46409 = cljs.core.chunk_rest(seq__46393_46407__$1);
var G__46410 = c__4314__auto___46408;
var G__46411 = cljs.core.count(c__4314__auto___46408);
var G__46412 = (0);
seq__46393_46397 = G__46409;
chunk__46394_46398 = G__46410;
count__46395_46399 = G__46411;
i__46396_46400 = G__46412;
continue;
}
} else
{var msg_46413 = cljs.core.first(seq__46393_46407__$1);console.log(msg_46413);
{
var G__46414 = cljs.core.next(seq__46393_46407__$1);
var G__46415 = null;
var G__46416 = (0);
var G__46417 = (0);
seq__46393_46397 = G__46414;
chunk__46394_46398 = G__46415;
count__46395_46399 = G__46416;
i__46396_46400 = G__46417;
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
console.log(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1270,files)], 0)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$1278,(100),cljs.core.constant$keyword$1277,figwheel.client.default_on_jsload,cljs.core.constant$keyword$1271,(function (){var or__3558__auto__ = cljs.core.constant$keyword$1277.cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),cljs.core.constant$keyword$1274,figwheel.client.default_on_cssload,cljs.core.constant$keyword$1272,figwheel.client.default_before_load,cljs.core.constant$keyword$1276,figwheel.client.default_on_compile_fail,cljs.core.constant$keyword$1269,cljs.core.identity,cljs.core.constant$keyword$1265,("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts], 0)));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__46418){var map__46420 = p__46418;var map__46420__$1 = ((cljs.core.seq_QMARK_(map__46420))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46420):map__46420);var opts = map__46420__$1;return figwheel.client.watch_and_reload_with_opts(opts);
};
var watch_and_reload = function (var_args){
var p__46418 = null;if (arguments.length > 0) {
  p__46418 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__46418);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__46421){
var p__46418 = cljs.core.seq(arglist__46421);
return watch_and_reload__delegate(p__46418);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
