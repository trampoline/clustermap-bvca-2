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
var log__delegate = function (p__90209,args){var map__90211 = p__90209;var map__90211__$1 = ((cljs.core.seq_QMARK_.call(null,map__90211))?cljs.core.apply.call(null,cljs.core.hash_map,map__90211):map__90211);var debug = cljs.core.get.call(null,map__90211__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__90209,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__90209,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__90212){
var p__90209 = cljs.core.first(arglist__90212);
var args = cljs.core.rest(arglist__90212);
return log__delegate(p__90209,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__90213){var map__90215 = p__90213;var map__90215__$1 = ((cljs.core.seq_QMARK_.call(null,map__90215))?cljs.core.apply.call(null,cljs.core.hash_map,map__90215):map__90215);var websocket_url = cljs.core.get.call(null,map__90215__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__90216,callback){var map__90218 = p__90216;var map__90218__$1 = ((cljs.core.seq_QMARK_.call(null,map__90218))?cljs.core.apply.call(null,cljs.core.hash_map,map__90218):map__90218);var msg = map__90218__$1;var dependency_file = cljs.core.get.call(null,map__90218__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__90218__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__90218__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3637__auto__ = dependency_file;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__90218,map__90218__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__90218,map__90218__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__90219,p__90220){var map__90223 = p__90219;var map__90223__$1 = ((cljs.core.seq_QMARK_.call(null,map__90223))?cljs.core.apply.call(null,cljs.core.hash_map,map__90223):map__90223);var opts = map__90223__$1;var url_rewriter = cljs.core.get.call(null,map__90223__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__90224 = p__90220;var map__90224__$1 = ((cljs.core.seq_QMARK_.call(null,map__90224))?cljs.core.apply.call(null,cljs.core.hash_map,map__90224):map__90224);var d = map__90224__$1;var file = cljs.core.get.call(null,map__90224__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__90225,p__90226){var map__90268 = p__90225;var map__90268__$1 = ((cljs.core.seq_QMARK_.call(null,map__90268))?cljs.core.apply.call(null,cljs.core.hash_map,map__90268):map__90268);var opts = map__90268__$1;var on_jsload = cljs.core.get.call(null,map__90268__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__90268__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__90269 = p__90226;var map__90269__$1 = ((cljs.core.seq_QMARK_.call(null,map__90269))?cljs.core.apply.call(null,cljs.core.hash_map,map__90269):map__90269);var files = cljs.core.get.call(null,map__90269__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,map__90268,map__90268__$1,opts,on_jsload,before_jsload,map__90269,map__90269__$1,files){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,map__90268,map__90268__$1,opts,on_jsload,before_jsload,map__90269,map__90269__$1,files){
return (function (state_90292){var state_val_90293 = (state_90292[(1)]);if((state_val_90293 === (6)))
{var inst_90274 = (state_90292[(7)]);var inst_90283 = (state_90292[(2)]);var inst_90284 = cljs.core.PersistentVector.EMPTY_NODE;var inst_90285 = [inst_90274];var inst_90286 = (new cljs.core.PersistentVector(null,1,(5),inst_90284,inst_90285,null));var inst_90287 = cljs.core.apply.call(null,on_jsload,inst_90286);var state_90292__$1 = (function (){var statearr_90294 = state_90292;(statearr_90294[(8)] = inst_90283);
return statearr_90294;
})();var statearr_90295_90309 = state_90292__$1;(statearr_90295_90309[(2)] = inst_90287);
(statearr_90295_90309[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_90293 === (5)))
{var inst_90290 = (state_90292[(2)]);var state_90292__$1 = state_90292;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90292__$1,inst_90290);
} else
{if((state_val_90293 === (4)))
{var state_90292__$1 = state_90292;var statearr_90296_90310 = state_90292__$1;(statearr_90296_90310[(2)] = null);
(statearr_90296_90310[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_90293 === (3)))
{var inst_90274 = (state_90292[(7)]);var inst_90277 = console.debug("Figwheel: loaded these files");var inst_90278 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_90274);var inst_90279 = cljs.core.prn_str.call(null,inst_90278);var inst_90280 = console.log(inst_90279);var inst_90281 = cljs.core.async.timeout.call(null,(10));var state_90292__$1 = (function (){var statearr_90297 = state_90292;(statearr_90297[(9)] = inst_90277);
(statearr_90297[(10)] = inst_90280);
return statearr_90297;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90292__$1,(6),inst_90281);
} else
{if((state_val_90293 === (2)))
{var inst_90274 = (state_90292[(7)]);var inst_90274__$1 = (state_90292[(2)]);var inst_90275 = cljs.core.not_empty.call(null,inst_90274__$1);var state_90292__$1 = (function (){var statearr_90298 = state_90292;(statearr_90298[(7)] = inst_90274__$1);
return statearr_90298;
})();if(cljs.core.truth_(inst_90275))
{var statearr_90299_90311 = state_90292__$1;(statearr_90299_90311[(1)] = (3));
} else
{var statearr_90300_90312 = state_90292__$1;(statearr_90300_90312[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_90293 === (1)))
{var inst_90270 = before_jsload.call(null,files);var inst_90271 = figwheel.client.add_request_urls.call(null,opts,files);var inst_90272 = figwheel.client.load_all_js_files.call(null,inst_90271);var state_90292__$1 = (function (){var statearr_90301 = state_90292;(statearr_90301[(11)] = inst_90270);
return statearr_90301;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90292__$1,(2),inst_90272);
} else
{return null;
}
}
}
}
}
}
});})(c__5819__auto__,map__90268,map__90268__$1,opts,on_jsload,before_jsload,map__90269,map__90269__$1,files))
;return ((function (switch__5804__auto__,c__5819__auto__,map__90268,map__90268__$1,opts,on_jsload,before_jsload,map__90269,map__90269__$1,files){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_90305 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_90305[(0)] = state_machine__5805__auto__);
(statearr_90305[(1)] = (1));
return statearr_90305;
});
var state_machine__5805__auto____1 = (function (state_90292){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_90292);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e90306){if((e90306 instanceof Object))
{var ex__5808__auto__ = e90306;var statearr_90307_90313 = state_90292;(statearr_90307_90313[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90292);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e90306;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__90314 = state_90292;
state_90292 = G__90314;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_90292){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_90292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,map__90268,map__90268__$1,opts,on_jsload,before_jsload,map__90269,map__90269__$1,files))
})();var state__5821__auto__ = (function (){var statearr_90308 = f__5820__auto__.call(null);(statearr_90308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_90308;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,map__90268,map__90268__$1,opts,on_jsload,before_jsload,map__90269,map__90269__$1,files))
);
return c__5819__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__90315,link_href){var map__90317 = p__90315;var map__90317__$1 = ((cljs.core.seq_QMARK_.call(null,map__90317))?cljs.core.apply.call(null,cljs.core.hash_map,map__90317):map__90317);var request_url = cljs.core.get.call(null,map__90317__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__90317__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,parent){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,parent){
return (function (state_90338){var state_val_90339 = (state_90338[(1)]);if((state_val_90339 === (2)))
{var inst_90335 = (state_90338[(2)]);var inst_90336 = parent.removeChild(orig_link);var state_90338__$1 = (function (){var statearr_90340 = state_90338;(statearr_90340[(7)] = inst_90335);
return statearr_90340;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90338__$1,inst_90336);
} else
{if((state_val_90339 === (1)))
{var inst_90333 = cljs.core.async.timeout.call(null,(200));var state_90338__$1 = state_90338;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90338__$1,(2),inst_90333);
} else
{return null;
}
}
});})(c__5819__auto__,parent))
;return ((function (switch__5804__auto__,c__5819__auto__,parent){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_90344 = [null,null,null,null,null,null,null,null];(statearr_90344[(0)] = state_machine__5805__auto__);
(statearr_90344[(1)] = (1));
return statearr_90344;
});
var state_machine__5805__auto____1 = (function (state_90338){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_90338);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e90345){if((e90345 instanceof Object))
{var ex__5808__auto__ = e90345;var statearr_90346_90348 = state_90338;(statearr_90346_90348[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90338);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e90345;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__90349 = state_90338;
state_90338 = G__90349;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_90338){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_90338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,parent))
})();var state__5821__auto__ = (function (){var statearr_90347 = f__5820__auto__.call(null);(statearr_90347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_90347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
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
figwheel.client.reload_css_file = (function reload_css_file(p__90350){var map__90352 = p__90350;var map__90352__$1 = ((cljs.core.seq_QMARK_.call(null,map__90352))?cljs.core.apply.call(null,cljs.core.hash_map,map__90352):map__90352);var f_data = map__90352__$1;var request_url = cljs.core.get.call(null,map__90352__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__90352__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__90353,files_msg){var map__90375 = p__90353;var map__90375__$1 = ((cljs.core.seq_QMARK_.call(null,map__90375))?cljs.core.apply.call(null,cljs.core.hash_map,map__90375):map__90375);var opts = map__90375__$1;var on_cssload = cljs.core.get.call(null,map__90375__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__90376_90396 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__90377_90397 = null;var count__90378_90398 = (0);var i__90379_90399 = (0);while(true){
if((i__90379_90399 < count__90378_90398))
{var f_90400 = cljs.core._nth.call(null,chunk__90377_90397,i__90379_90399);figwheel.client.reload_css_file.call(null,f_90400);
{
var G__90401 = seq__90376_90396;
var G__90402 = chunk__90377_90397;
var G__90403 = count__90378_90398;
var G__90404 = (i__90379_90399 + (1));
seq__90376_90396 = G__90401;
chunk__90377_90397 = G__90402;
count__90378_90398 = G__90403;
i__90379_90399 = G__90404;
continue;
}
} else
{var temp__4126__auto___90405 = cljs.core.seq.call(null,seq__90376_90396);if(temp__4126__auto___90405)
{var seq__90376_90406__$1 = temp__4126__auto___90405;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90376_90406__$1))
{var c__4406__auto___90407 = cljs.core.chunk_first.call(null,seq__90376_90406__$1);{
var G__90408 = cljs.core.chunk_rest.call(null,seq__90376_90406__$1);
var G__90409 = c__4406__auto___90407;
var G__90410 = cljs.core.count.call(null,c__4406__auto___90407);
var G__90411 = (0);
seq__90376_90396 = G__90408;
chunk__90377_90397 = G__90409;
count__90378_90398 = G__90410;
i__90379_90399 = G__90411;
continue;
}
} else
{var f_90412 = cljs.core.first.call(null,seq__90376_90406__$1);figwheel.client.reload_css_file.call(null,f_90412);
{
var G__90413 = cljs.core.next.call(null,seq__90376_90406__$1);
var G__90414 = null;
var G__90415 = (0);
var G__90416 = (0);
seq__90376_90396 = G__90413;
chunk__90377_90397 = G__90414;
count__90378_90398 = G__90415;
i__90379_90399 = G__90416;
continue;
}
}
} else
{}
}
break;
}
var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,map__90375,map__90375__$1,opts,on_cssload){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,map__90375,map__90375__$1,opts,on_cssload){
return (function (state_90386){var state_val_90387 = (state_90386[(1)]);if((state_val_90387 === (2)))
{var inst_90382 = (state_90386[(2)]);var inst_90383 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_90384 = on_cssload.call(null,inst_90383);var state_90386__$1 = (function (){var statearr_90388 = state_90386;(statearr_90388[(7)] = inst_90382);
return statearr_90388;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90386__$1,inst_90384);
} else
{if((state_val_90387 === (1)))
{var inst_90380 = cljs.core.async.timeout.call(null,(100));var state_90386__$1 = state_90386;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90386__$1,(2),inst_90380);
} else
{return null;
}
}
});})(c__5819__auto__,map__90375,map__90375__$1,opts,on_cssload))
;return ((function (switch__5804__auto__,c__5819__auto__,map__90375,map__90375__$1,opts,on_cssload){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_90392 = [null,null,null,null,null,null,null,null];(statearr_90392[(0)] = state_machine__5805__auto__);
(statearr_90392[(1)] = (1));
return statearr_90392;
});
var state_machine__5805__auto____1 = (function (state_90386){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_90386);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e90393){if((e90393 instanceof Object))
{var ex__5808__auto__ = e90393;var statearr_90394_90417 = state_90386;(statearr_90394_90417[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90386);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e90393;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__90418 = state_90386;
state_90386 = G__90418;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_90386){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_90386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,map__90375,map__90375__$1,opts,on_cssload))
})();var state__5821__auto__ = (function (){var statearr_90395 = f__5820__auto__.call(null);(statearr_90395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_90395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,map__90375,map__90375__$1,opts,on_cssload))
);
return c__5819__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__90419){var map__90424 = p__90419;var map__90424__$1 = ((cljs.core.seq_QMARK_.call(null,map__90424))?cljs.core.apply.call(null,cljs.core.hash_map,map__90424):map__90424);var opts = map__90424__$1;var on_compile_fail = cljs.core.get.call(null,map__90424__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__90424__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__90424__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__90424__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__90424,map__90424__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__90425 = cljs.core._EQ_;var expr__90426 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__90425.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__90426)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__90425.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__90426)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__90425.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__90426)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__90424,map__90424__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__90424,map__90424__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__90424,map__90424__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__90424,map__90424__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__90424,map__90424__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__90424,map__90424__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__90424,map__90424__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__90424,map__90424__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__90424,map__90424__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj90431 = {"detail":url};return obj90431;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__90432){var map__90434 = p__90432;var map__90434__$1 = ((cljs.core.seq_QMARK_.call(null,map__90434))?cljs.core.apply.call(null,cljs.core.hash_map,map__90434):map__90434);var class$ = cljs.core.get.call(null,map__90434__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__90434__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__90435){var map__90441 = p__90435;var map__90441__$1 = ((cljs.core.seq_QMARK_.call(null,map__90441))?cljs.core.apply.call(null,cljs.core.hash_map,map__90441):map__90441);var ed = map__90441__$1;var exception_data = cljs.core.get.call(null,map__90441__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__90441__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__90442_90446 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__90443_90447 = null;var count__90444_90448 = (0);var i__90445_90449 = (0);while(true){
if((i__90445_90449 < count__90444_90448))
{var msg_90450 = cljs.core._nth.call(null,chunk__90443_90447,i__90445_90449);console.log(msg_90450);
{
var G__90451 = seq__90442_90446;
var G__90452 = chunk__90443_90447;
var G__90453 = count__90444_90448;
var G__90454 = (i__90445_90449 + (1));
seq__90442_90446 = G__90451;
chunk__90443_90447 = G__90452;
count__90444_90448 = G__90453;
i__90445_90449 = G__90454;
continue;
}
} else
{var temp__4126__auto___90455 = cljs.core.seq.call(null,seq__90442_90446);if(temp__4126__auto___90455)
{var seq__90442_90456__$1 = temp__4126__auto___90455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90442_90456__$1))
{var c__4406__auto___90457 = cljs.core.chunk_first.call(null,seq__90442_90456__$1);{
var G__90458 = cljs.core.chunk_rest.call(null,seq__90442_90456__$1);
var G__90459 = c__4406__auto___90457;
var G__90460 = cljs.core.count.call(null,c__4406__auto___90457);
var G__90461 = (0);
seq__90442_90446 = G__90458;
chunk__90443_90447 = G__90459;
count__90444_90448 = G__90460;
i__90445_90449 = G__90461;
continue;
}
} else
{var msg_90462 = cljs.core.first.call(null,seq__90442_90456__$1);console.log(msg_90462);
{
var G__90463 = cljs.core.next.call(null,seq__90442_90456__$1);
var G__90464 = null;
var G__90465 = (0);
var G__90466 = (0);
seq__90442_90446 = G__90463;
chunk__90443_90447 = G__90464;
count__90444_90448 = G__90465;
i__90445_90449 = G__90466;
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
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3637__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__90467){var map__90469 = p__90467;var map__90469__$1 = ((cljs.core.seq_QMARK_.call(null,map__90469))?cljs.core.apply.call(null,cljs.core.hash_map,map__90469):map__90469);var opts = map__90469__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__90467 = null;if (arguments.length > 0) {
  p__90467 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__90467);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__90470){
var p__90467 = cljs.core.seq(arglist__90470);
return watch_and_reload__delegate(p__90467);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map