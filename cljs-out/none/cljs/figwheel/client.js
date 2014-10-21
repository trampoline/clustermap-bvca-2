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
var log__delegate = function (p__65143,args){var map__65145 = p__65143;var map__65145__$1 = ((cljs.core.seq_QMARK_.call(null,map__65145))?cljs.core.apply.call(null,cljs.core.hash_map,map__65145):map__65145);var debug = cljs.core.get.call(null,map__65145__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__65143,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__65143,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__65146){
var p__65143 = cljs.core.first(arglist__65146);
var args = cljs.core.rest(arglist__65146);
return log__delegate(p__65143,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__65147){var map__65149 = p__65147;var map__65149__$1 = ((cljs.core.seq_QMARK_.call(null,map__65149))?cljs.core.apply.call(null,cljs.core.hash_map,map__65149):map__65149);var websocket_url = cljs.core.get.call(null,map__65149__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__65150,callback){var map__65152 = p__65150;var map__65152__$1 = ((cljs.core.seq_QMARK_.call(null,map__65152))?cljs.core.apply.call(null,cljs.core.hash_map,map__65152):map__65152);var msg = map__65152__$1;var dependency_file = cljs.core.get.call(null,map__65152__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__65152__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__65152__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__65152,map__65152__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__65152,map__65152__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__65153,p__65154){var map__65157 = p__65153;var map__65157__$1 = ((cljs.core.seq_QMARK_.call(null,map__65157))?cljs.core.apply.call(null,cljs.core.hash_map,map__65157):map__65157);var opts = map__65157__$1;var url_rewriter = cljs.core.get.call(null,map__65157__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__65158 = p__65154;var map__65158__$1 = ((cljs.core.seq_QMARK_.call(null,map__65158))?cljs.core.apply.call(null,cljs.core.hash_map,map__65158):map__65158);var d = map__65158__$1;var file = cljs.core.get.call(null,map__65158__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__65159,p__65160){var map__65202 = p__65159;var map__65202__$1 = ((cljs.core.seq_QMARK_.call(null,map__65202))?cljs.core.apply.call(null,cljs.core.hash_map,map__65202):map__65202);var opts = map__65202__$1;var on_jsload = cljs.core.get.call(null,map__65202__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__65202__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__65203 = p__65160;var map__65203__$1 = ((cljs.core.seq_QMARK_.call(null,map__65203))?cljs.core.apply.call(null,cljs.core.hash_map,map__65203):map__65203);var files = cljs.core.get.call(null,map__65203__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__65202,map__65202__$1,opts,on_jsload,before_jsload,map__65203,map__65203__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__65202,map__65202__$1,opts,on_jsload,before_jsload,map__65203,map__65203__$1,files){
return (function (state_65226){var state_val_65227 = (state_65226[(1)]);if((state_val_65227 === (6)))
{var inst_65208 = (state_65226[(7)]);var inst_65217 = (state_65226[(2)]);var inst_65218 = cljs.core.PersistentVector.EMPTY_NODE;var inst_65219 = [inst_65208];var inst_65220 = (new cljs.core.PersistentVector(null,1,(5),inst_65218,inst_65219,null));var inst_65221 = cljs.core.apply.call(null,on_jsload,inst_65220);var state_65226__$1 = (function (){var statearr_65228 = state_65226;(statearr_65228[(8)] = inst_65217);
return statearr_65228;
})();var statearr_65229_65243 = state_65226__$1;(statearr_65229_65243[(2)] = inst_65221);
(statearr_65229_65243[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65227 === (5)))
{var inst_65224 = (state_65226[(2)]);var state_65226__$1 = state_65226;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65226__$1,inst_65224);
} else
{if((state_val_65227 === (4)))
{var state_65226__$1 = state_65226;var statearr_65230_65244 = state_65226__$1;(statearr_65230_65244[(2)] = null);
(statearr_65230_65244[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65227 === (3)))
{var inst_65208 = (state_65226[(7)]);var inst_65211 = console.debug("Figwheel: loaded these files");var inst_65212 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_65208);var inst_65213 = cljs.core.prn_str.call(null,inst_65212);var inst_65214 = console.log(inst_65213);var inst_65215 = cljs.core.async.timeout.call(null,(10));var state_65226__$1 = (function (){var statearr_65231 = state_65226;(statearr_65231[(9)] = inst_65211);
(statearr_65231[(10)] = inst_65214);
return statearr_65231;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65226__$1,(6),inst_65215);
} else
{if((state_val_65227 === (2)))
{var inst_65208 = (state_65226[(7)]);var inst_65208__$1 = (state_65226[(2)]);var inst_65209 = cljs.core.not_empty.call(null,inst_65208__$1);var state_65226__$1 = (function (){var statearr_65232 = state_65226;(statearr_65232[(7)] = inst_65208__$1);
return statearr_65232;
})();if(cljs.core.truth_(inst_65209))
{var statearr_65233_65245 = state_65226__$1;(statearr_65233_65245[(1)] = (3));
} else
{var statearr_65234_65246 = state_65226__$1;(statearr_65234_65246[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_65227 === (1)))
{var inst_65204 = before_jsload.call(null,files);var inst_65205 = figwheel.client.add_request_urls.call(null,opts,files);var inst_65206 = figwheel.client.load_all_js_files.call(null,inst_65205);var state_65226__$1 = (function (){var statearr_65235 = state_65226;(statearr_65235[(11)] = inst_65204);
return statearr_65235;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65226__$1,(2),inst_65206);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__65202,map__65202__$1,opts,on_jsload,before_jsload,map__65203,map__65203__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__65202,map__65202__$1,opts,on_jsload,before_jsload,map__65203,map__65203__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_65239 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_65239[(0)] = state_machine__5694__auto__);
(statearr_65239[(1)] = (1));
return statearr_65239;
});
var state_machine__5694__auto____1 = (function (state_65226){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_65226);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e65240){if((e65240 instanceof Object))
{var ex__5697__auto__ = e65240;var statearr_65241_65247 = state_65226;(statearr_65241_65247[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65226);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e65240;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__65248 = state_65226;
state_65226 = G__65248;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_65226){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_65226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__65202,map__65202__$1,opts,on_jsload,before_jsload,map__65203,map__65203__$1,files))
})();var state__5710__auto__ = (function (){var statearr_65242 = f__5709__auto__.call(null);(statearr_65242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_65242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__65202,map__65202__$1,opts,on_jsload,before_jsload,map__65203,map__65203__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__65249,link_href){var map__65251 = p__65249;var map__65251__$1 = ((cljs.core.seq_QMARK_.call(null,map__65251))?cljs.core.apply.call(null,cljs.core.hash_map,map__65251):map__65251);var request_url = cljs.core.get.call(null,map__65251__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__65251__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,parent){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,parent){
return (function (state_65272){var state_val_65273 = (state_65272[(1)]);if((state_val_65273 === (2)))
{var inst_65269 = (state_65272[(2)]);var inst_65270 = parent.removeChild(orig_link);var state_65272__$1 = (function (){var statearr_65274 = state_65272;(statearr_65274[(7)] = inst_65269);
return statearr_65274;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65272__$1,inst_65270);
} else
{if((state_val_65273 === (1)))
{var inst_65267 = cljs.core.async.timeout.call(null,(200));var state_65272__$1 = state_65272;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65272__$1,(2),inst_65267);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_65278 = [null,null,null,null,null,null,null,null];(statearr_65278[(0)] = state_machine__5694__auto__);
(statearr_65278[(1)] = (1));
return statearr_65278;
});
var state_machine__5694__auto____1 = (function (state_65272){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_65272);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e65279){if((e65279 instanceof Object))
{var ex__5697__auto__ = e65279;var statearr_65280_65282 = state_65272;(statearr_65280_65282[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65272);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e65279;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__65283 = state_65272;
state_65272 = G__65283;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_65272){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_65272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_65281 = f__5709__auto__.call(null);(statearr_65281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_65281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
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
figwheel.client.reload_css_file = (function reload_css_file(p__65284){var map__65286 = p__65284;var map__65286__$1 = ((cljs.core.seq_QMARK_.call(null,map__65286))?cljs.core.apply.call(null,cljs.core.hash_map,map__65286):map__65286);var f_data = map__65286__$1;var request_url = cljs.core.get.call(null,map__65286__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__65286__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__65287,files_msg){var map__65309 = p__65287;var map__65309__$1 = ((cljs.core.seq_QMARK_.call(null,map__65309))?cljs.core.apply.call(null,cljs.core.hash_map,map__65309):map__65309);var opts = map__65309__$1;var on_cssload = cljs.core.get.call(null,map__65309__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__65310_65330 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__65311_65331 = null;var count__65312_65332 = (0);var i__65313_65333 = (0);while(true){
if((i__65313_65333 < count__65312_65332))
{var f_65334 = cljs.core._nth.call(null,chunk__65311_65331,i__65313_65333);figwheel.client.reload_css_file.call(null,f_65334);
{
var G__65335 = seq__65310_65330;
var G__65336 = chunk__65311_65331;
var G__65337 = count__65312_65332;
var G__65338 = (i__65313_65333 + (1));
seq__65310_65330 = G__65335;
chunk__65311_65331 = G__65336;
count__65312_65332 = G__65337;
i__65313_65333 = G__65338;
continue;
}
} else
{var temp__4126__auto___65339 = cljs.core.seq.call(null,seq__65310_65330);if(temp__4126__auto___65339)
{var seq__65310_65340__$1 = temp__4126__auto___65339;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65310_65340__$1))
{var c__4314__auto___65341 = cljs.core.chunk_first.call(null,seq__65310_65340__$1);{
var G__65342 = cljs.core.chunk_rest.call(null,seq__65310_65340__$1);
var G__65343 = c__4314__auto___65341;
var G__65344 = cljs.core.count.call(null,c__4314__auto___65341);
var G__65345 = (0);
seq__65310_65330 = G__65342;
chunk__65311_65331 = G__65343;
count__65312_65332 = G__65344;
i__65313_65333 = G__65345;
continue;
}
} else
{var f_65346 = cljs.core.first.call(null,seq__65310_65340__$1);figwheel.client.reload_css_file.call(null,f_65346);
{
var G__65347 = cljs.core.next.call(null,seq__65310_65340__$1);
var G__65348 = null;
var G__65349 = (0);
var G__65350 = (0);
seq__65310_65330 = G__65347;
chunk__65311_65331 = G__65348;
count__65312_65332 = G__65349;
i__65313_65333 = G__65350;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__65309,map__65309__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__65309,map__65309__$1,opts,on_cssload){
return (function (state_65320){var state_val_65321 = (state_65320[(1)]);if((state_val_65321 === (2)))
{var inst_65316 = (state_65320[(2)]);var inst_65317 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_65318 = on_cssload.call(null,inst_65317);var state_65320__$1 = (function (){var statearr_65322 = state_65320;(statearr_65322[(7)] = inst_65316);
return statearr_65322;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65320__$1,inst_65318);
} else
{if((state_val_65321 === (1)))
{var inst_65314 = cljs.core.async.timeout.call(null,(100));var state_65320__$1 = state_65320;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65320__$1,(2),inst_65314);
} else
{return null;
}
}
});})(c__5708__auto__,map__65309,map__65309__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__65309,map__65309__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_65326 = [null,null,null,null,null,null,null,null];(statearr_65326[(0)] = state_machine__5694__auto__);
(statearr_65326[(1)] = (1));
return statearr_65326;
});
var state_machine__5694__auto____1 = (function (state_65320){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_65320);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e65327){if((e65327 instanceof Object))
{var ex__5697__auto__ = e65327;var statearr_65328_65351 = state_65320;(statearr_65328_65351[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65320);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e65327;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__65352 = state_65320;
state_65320 = G__65352;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_65320){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_65320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__65309,map__65309__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_65329 = f__5709__auto__.call(null);(statearr_65329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_65329;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__65309,map__65309__$1,opts,on_cssload))
);
return c__5708__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__65353){var map__65358 = p__65353;var map__65358__$1 = ((cljs.core.seq_QMARK_.call(null,map__65358))?cljs.core.apply.call(null,cljs.core.hash_map,map__65358):map__65358);var opts = map__65358__$1;var on_compile_fail = cljs.core.get.call(null,map__65358__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__65358__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__65358__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__65358__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__65358,map__65358__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__65359 = cljs.core._EQ_;var expr__65360 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__65359.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__65360)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__65359.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__65360)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__65359.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__65360)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__65358,map__65358__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__65358,map__65358__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__65358,map__65358__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__65358,map__65358__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__65358,map__65358__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__65358,map__65358__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__65358,map__65358__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__65358,map__65358__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__65358,map__65358__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj65365 = {"detail":url};return obj65365;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__65366){var map__65368 = p__65366;var map__65368__$1 = ((cljs.core.seq_QMARK_.call(null,map__65368))?cljs.core.apply.call(null,cljs.core.hash_map,map__65368):map__65368);var class$ = cljs.core.get.call(null,map__65368__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__65368__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__65369){var map__65375 = p__65369;var map__65375__$1 = ((cljs.core.seq_QMARK_.call(null,map__65375))?cljs.core.apply.call(null,cljs.core.hash_map,map__65375):map__65375);var ed = map__65375__$1;var exception_data = cljs.core.get.call(null,map__65375__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__65375__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__65376_65380 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__65377_65381 = null;var count__65378_65382 = (0);var i__65379_65383 = (0);while(true){
if((i__65379_65383 < count__65378_65382))
{var msg_65384 = cljs.core._nth.call(null,chunk__65377_65381,i__65379_65383);console.log(msg_65384);
{
var G__65385 = seq__65376_65380;
var G__65386 = chunk__65377_65381;
var G__65387 = count__65378_65382;
var G__65388 = (i__65379_65383 + (1));
seq__65376_65380 = G__65385;
chunk__65377_65381 = G__65386;
count__65378_65382 = G__65387;
i__65379_65383 = G__65388;
continue;
}
} else
{var temp__4126__auto___65389 = cljs.core.seq.call(null,seq__65376_65380);if(temp__4126__auto___65389)
{var seq__65376_65390__$1 = temp__4126__auto___65389;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65376_65390__$1))
{var c__4314__auto___65391 = cljs.core.chunk_first.call(null,seq__65376_65390__$1);{
var G__65392 = cljs.core.chunk_rest.call(null,seq__65376_65390__$1);
var G__65393 = c__4314__auto___65391;
var G__65394 = cljs.core.count.call(null,c__4314__auto___65391);
var G__65395 = (0);
seq__65376_65380 = G__65392;
chunk__65377_65381 = G__65393;
count__65378_65382 = G__65394;
i__65379_65383 = G__65395;
continue;
}
} else
{var msg_65396 = cljs.core.first.call(null,seq__65376_65390__$1);console.log(msg_65396);
{
var G__65397 = cljs.core.next.call(null,seq__65376_65390__$1);
var G__65398 = null;
var G__65399 = (0);
var G__65400 = (0);
seq__65376_65380 = G__65397;
chunk__65377_65381 = G__65398;
count__65378_65382 = G__65399;
i__65379_65383 = G__65400;
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
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3558__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
var watch_and_reload__delegate = function (p__65401){var map__65403 = p__65401;var map__65403__$1 = ((cljs.core.seq_QMARK_.call(null,map__65403))?cljs.core.apply.call(null,cljs.core.hash_map,map__65403):map__65403);var opts = map__65403__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__65401 = null;if (arguments.length > 0) {
  p__65401 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__65401);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__65404){
var p__65401 = cljs.core.seq(arglist__65404);
return watch_and_reload__delegate(p__65401);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map