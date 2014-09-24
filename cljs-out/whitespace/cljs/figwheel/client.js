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
var log__delegate = function (p__19112,args){var map__19114 = p__19112;var map__19114__$1 = ((cljs.core.seq_QMARK_.call(null,map__19114))?cljs.core.apply.call(null,cljs.core.hash_map,map__19114):map__19114);var debug = cljs.core.get.call(null,map__19114__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__19112,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__19112,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__19115){
var p__19112 = cljs.core.first(arglist__19115);
var args = cljs.core.rest(arglist__19115);
return log__delegate(p__19112,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__19116){var map__19118 = p__19116;var map__19118__$1 = ((cljs.core.seq_QMARK_.call(null,map__19118))?cljs.core.apply.call(null,cljs.core.hash_map,map__19118):map__19118);var websocket_url = cljs.core.get.call(null,map__19118__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__19119,callback){var map__19121 = p__19119;var map__19121__$1 = ((cljs.core.seq_QMARK_.call(null,map__19121))?cljs.core.apply.call(null,cljs.core.hash_map,map__19121):map__19121);var msg = map__19121__$1;var dependency_file = cljs.core.get.call(null,map__19121__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__19121__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__19121__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__19121,map__19121__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__19121,map__19121__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__19122,p__19123){var map__19126 = p__19122;var map__19126__$1 = ((cljs.core.seq_QMARK_.call(null,map__19126))?cljs.core.apply.call(null,cljs.core.hash_map,map__19126):map__19126);var opts = map__19126__$1;var url_rewriter = cljs.core.get.call(null,map__19126__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__19127 = p__19123;var map__19127__$1 = ((cljs.core.seq_QMARK_.call(null,map__19127))?cljs.core.apply.call(null,cljs.core.hash_map,map__19127):map__19127);var d = map__19127__$1;var file = cljs.core.get.call(null,map__19127__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__19128,p__19129){var map__19171 = p__19128;var map__19171__$1 = ((cljs.core.seq_QMARK_.call(null,map__19171))?cljs.core.apply.call(null,cljs.core.hash_map,map__19171):map__19171);var opts = map__19171__$1;var on_jsload = cljs.core.get.call(null,map__19171__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__19171__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__19172 = p__19129;var map__19172__$1 = ((cljs.core.seq_QMARK_.call(null,map__19172))?cljs.core.apply.call(null,cljs.core.hash_map,map__19172):map__19172);var files = cljs.core.get.call(null,map__19172__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__19171,map__19171__$1,opts,on_jsload,before_jsload,map__19172,map__19172__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__19171,map__19171__$1,opts,on_jsload,before_jsload,map__19172,map__19172__$1,files){
return (function (state_19195){var state_val_19196 = (state_19195[(1)]);if((state_val_19196 === (6)))
{var inst_19177 = (state_19195[(7)]);var inst_19186 = (state_19195[(2)]);var inst_19187 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19188 = [inst_19177];var inst_19189 = (new cljs.core.PersistentVector(null,1,(5),inst_19187,inst_19188,null));var inst_19190 = cljs.core.apply.call(null,on_jsload,inst_19189);var state_19195__$1 = (function (){var statearr_19197 = state_19195;(statearr_19197[(8)] = inst_19186);
return statearr_19197;
})();var statearr_19198_19212 = state_19195__$1;(statearr_19198_19212[(2)] = inst_19190);
(statearr_19198_19212[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19196 === (5)))
{var inst_19193 = (state_19195[(2)]);var state_19195__$1 = state_19195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19195__$1,inst_19193);
} else
{if((state_val_19196 === (4)))
{var state_19195__$1 = state_19195;var statearr_19199_19213 = state_19195__$1;(statearr_19199_19213[(2)] = null);
(statearr_19199_19213[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19196 === (3)))
{var inst_19177 = (state_19195[(7)]);var inst_19180 = console.debug("Figwheel: loaded these files");var inst_19181 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_19177);var inst_19182 = cljs.core.prn_str.call(null,inst_19181);var inst_19183 = console.log(inst_19182);var inst_19184 = cljs.core.async.timeout.call(null,(10));var state_19195__$1 = (function (){var statearr_19200 = state_19195;(statearr_19200[(9)] = inst_19183);
(statearr_19200[(10)] = inst_19180);
return statearr_19200;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19195__$1,(6),inst_19184);
} else
{if((state_val_19196 === (2)))
{var inst_19177 = (state_19195[(7)]);var inst_19177__$1 = (state_19195[(2)]);var inst_19178 = cljs.core.not_empty.call(null,inst_19177__$1);var state_19195__$1 = (function (){var statearr_19201 = state_19195;(statearr_19201[(7)] = inst_19177__$1);
return statearr_19201;
})();if(cljs.core.truth_(inst_19178))
{var statearr_19202_19214 = state_19195__$1;(statearr_19202_19214[(1)] = (3));
} else
{var statearr_19203_19215 = state_19195__$1;(statearr_19203_19215[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19196 === (1)))
{var inst_19173 = before_jsload.call(null,files);var inst_19174 = figwheel.client.add_request_urls.call(null,opts,files);var inst_19175 = figwheel.client.load_all_js_files.call(null,inst_19174);var state_19195__$1 = (function (){var statearr_19204 = state_19195;(statearr_19204[(11)] = inst_19173);
return statearr_19204;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19195__$1,(2),inst_19175);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__19171,map__19171__$1,opts,on_jsload,before_jsload,map__19172,map__19172__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__19171,map__19171__$1,opts,on_jsload,before_jsload,map__19172,map__19172__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19208 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19208[(0)] = state_machine__5694__auto__);
(statearr_19208[(1)] = (1));
return statearr_19208;
});
var state_machine__5694__auto____1 = (function (state_19195){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19195);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19209){if((e19209 instanceof Object))
{var ex__5697__auto__ = e19209;var statearr_19210_19216 = state_19195;(statearr_19210_19216[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19195);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19209;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19217 = state_19195;
state_19195 = G__19217;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19195){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__19171,map__19171__$1,opts,on_jsload,before_jsload,map__19172,map__19172__$1,files))
})();var state__5710__auto__ = (function (){var statearr_19211 = f__5709__auto__.call(null);(statearr_19211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_19211;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__19171,map__19171__$1,opts,on_jsload,before_jsload,map__19172,map__19172__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__19218,link_href){var map__19220 = p__19218;var map__19220__$1 = ((cljs.core.seq_QMARK_.call(null,map__19220))?cljs.core.apply.call(null,cljs.core.hash_map,map__19220):map__19220);var request_url = cljs.core.get.call(null,map__19220__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__19220__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_19241){var state_val_19242 = (state_19241[(1)]);if((state_val_19242 === (2)))
{var inst_19238 = (state_19241[(2)]);var inst_19239 = parent.removeChild(orig_link);var state_19241__$1 = (function (){var statearr_19243 = state_19241;(statearr_19243[(7)] = inst_19238);
return statearr_19243;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19241__$1,inst_19239);
} else
{if((state_val_19242 === (1)))
{var inst_19236 = cljs.core.async.timeout.call(null,(200));var state_19241__$1 = state_19241;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19241__$1,(2),inst_19236);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19247 = [null,null,null,null,null,null,null,null];(statearr_19247[(0)] = state_machine__5694__auto__);
(statearr_19247[(1)] = (1));
return statearr_19247;
});
var state_machine__5694__auto____1 = (function (state_19241){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19241);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19248){if((e19248 instanceof Object))
{var ex__5697__auto__ = e19248;var statearr_19249_19251 = state_19241;(statearr_19249_19251[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19241);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19248;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19252 = state_19241;
state_19241 = G__19252;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19241){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_19250 = f__5709__auto__.call(null);(statearr_19250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_19250;
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
figwheel.client.reload_css_file = (function reload_css_file(p__19253){var map__19255 = p__19253;var map__19255__$1 = ((cljs.core.seq_QMARK_.call(null,map__19255))?cljs.core.apply.call(null,cljs.core.hash_map,map__19255):map__19255);var f_data = map__19255__$1;var request_url = cljs.core.get.call(null,map__19255__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__19255__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__19256,files_msg){var map__19278 = p__19256;var map__19278__$1 = ((cljs.core.seq_QMARK_.call(null,map__19278))?cljs.core.apply.call(null,cljs.core.hash_map,map__19278):map__19278);var opts = map__19278__$1;var on_cssload = cljs.core.get.call(null,map__19278__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__19279_19299 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__19280_19300 = null;var count__19281_19301 = (0);var i__19282_19302 = (0);while(true){
if((i__19282_19302 < count__19281_19301))
{var f_19303 = cljs.core._nth.call(null,chunk__19280_19300,i__19282_19302);figwheel.client.reload_css_file.call(null,f_19303);
{
var G__19304 = seq__19279_19299;
var G__19305 = chunk__19280_19300;
var G__19306 = count__19281_19301;
var G__19307 = (i__19282_19302 + (1));
seq__19279_19299 = G__19304;
chunk__19280_19300 = G__19305;
count__19281_19301 = G__19306;
i__19282_19302 = G__19307;
continue;
}
} else
{var temp__4126__auto___19308 = cljs.core.seq.call(null,seq__19279_19299);if(temp__4126__auto___19308)
{var seq__19279_19309__$1 = temp__4126__auto___19308;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19279_19309__$1))
{var c__4314__auto___19310 = cljs.core.chunk_first.call(null,seq__19279_19309__$1);{
var G__19311 = cljs.core.chunk_rest.call(null,seq__19279_19309__$1);
var G__19312 = c__4314__auto___19310;
var G__19313 = cljs.core.count.call(null,c__4314__auto___19310);
var G__19314 = (0);
seq__19279_19299 = G__19311;
chunk__19280_19300 = G__19312;
count__19281_19301 = G__19313;
i__19282_19302 = G__19314;
continue;
}
} else
{var f_19315 = cljs.core.first.call(null,seq__19279_19309__$1);figwheel.client.reload_css_file.call(null,f_19315);
{
var G__19316 = cljs.core.next.call(null,seq__19279_19309__$1);
var G__19317 = null;
var G__19318 = (0);
var G__19319 = (0);
seq__19279_19299 = G__19316;
chunk__19280_19300 = G__19317;
count__19281_19301 = G__19318;
i__19282_19302 = G__19319;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__19278,map__19278__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__19278,map__19278__$1,opts,on_cssload){
return (function (state_19289){var state_val_19290 = (state_19289[(1)]);if((state_val_19290 === (2)))
{var inst_19285 = (state_19289[(2)]);var inst_19286 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_19287 = on_cssload.call(null,inst_19286);var state_19289__$1 = (function (){var statearr_19291 = state_19289;(statearr_19291[(7)] = inst_19285);
return statearr_19291;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19289__$1,inst_19287);
} else
{if((state_val_19290 === (1)))
{var inst_19283 = cljs.core.async.timeout.call(null,(100));var state_19289__$1 = state_19289;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19289__$1,(2),inst_19283);
} else
{return null;
}
}
});})(c__5708__auto__,map__19278,map__19278__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__19278,map__19278__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19295 = [null,null,null,null,null,null,null,null];(statearr_19295[(0)] = state_machine__5694__auto__);
(statearr_19295[(1)] = (1));
return statearr_19295;
});
var state_machine__5694__auto____1 = (function (state_19289){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19289);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19296){if((e19296 instanceof Object))
{var ex__5697__auto__ = e19296;var statearr_19297_19320 = state_19289;(statearr_19297_19320[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19289);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19296;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19321 = state_19289;
state_19289 = G__19321;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19289){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__19278,map__19278__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_19298 = f__5709__auto__.call(null);(statearr_19298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_19298;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__19278,map__19278__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__19322){var map__19327 = p__19322;var map__19327__$1 = ((cljs.core.seq_QMARK_.call(null,map__19327))?cljs.core.apply.call(null,cljs.core.hash_map,map__19327):map__19327);var opts = map__19327__$1;var on_compile_fail = cljs.core.get.call(null,map__19327__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__19327__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__19327__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__19327__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__19327,map__19327__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__19328 = cljs.core._EQ_;var expr__19329 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__19328.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__19329)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__19328.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__19329)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__19328.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__19329)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__19327,map__19327__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__19327,map__19327__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__19327,map__19327__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__19327,map__19327__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__19327,map__19327__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__19327,map__19327__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__19327,map__19327__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__19327,map__19327__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__19327,map__19327__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj19334 = {"detail":url};return obj19334;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__19335){var map__19337 = p__19335;var map__19337__$1 = ((cljs.core.seq_QMARK_.call(null,map__19337))?cljs.core.apply.call(null,cljs.core.hash_map,map__19337):map__19337);var class$ = cljs.core.get.call(null,map__19337__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__19337__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__19338){var map__19344 = p__19338;var map__19344__$1 = ((cljs.core.seq_QMARK_.call(null,map__19344))?cljs.core.apply.call(null,cljs.core.hash_map,map__19344):map__19344);var ed = map__19344__$1;var exception_data = cljs.core.get.call(null,map__19344__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__19344__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__19345_19349 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__19346_19350 = null;var count__19347_19351 = (0);var i__19348_19352 = (0);while(true){
if((i__19348_19352 < count__19347_19351))
{var msg_19353 = cljs.core._nth.call(null,chunk__19346_19350,i__19348_19352);console.log(msg_19353);
{
var G__19354 = seq__19345_19349;
var G__19355 = chunk__19346_19350;
var G__19356 = count__19347_19351;
var G__19357 = (i__19348_19352 + (1));
seq__19345_19349 = G__19354;
chunk__19346_19350 = G__19355;
count__19347_19351 = G__19356;
i__19348_19352 = G__19357;
continue;
}
} else
{var temp__4126__auto___19358 = cljs.core.seq.call(null,seq__19345_19349);if(temp__4126__auto___19358)
{var seq__19345_19359__$1 = temp__4126__auto___19358;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19345_19359__$1))
{var c__4314__auto___19360 = cljs.core.chunk_first.call(null,seq__19345_19359__$1);{
var G__19361 = cljs.core.chunk_rest.call(null,seq__19345_19359__$1);
var G__19362 = c__4314__auto___19360;
var G__19363 = cljs.core.count.call(null,c__4314__auto___19360);
var G__19364 = (0);
seq__19345_19349 = G__19361;
chunk__19346_19350 = G__19362;
count__19347_19351 = G__19363;
i__19348_19352 = G__19364;
continue;
}
} else
{var msg_19365 = cljs.core.first.call(null,seq__19345_19359__$1);console.log(msg_19365);
{
var G__19366 = cljs.core.next.call(null,seq__19345_19359__$1);
var G__19367 = null;
var G__19368 = (0);
var G__19369 = (0);
seq__19345_19349 = G__19366;
chunk__19346_19350 = G__19367;
count__19347_19351 = G__19368;
i__19348_19352 = G__19369;
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
var watch_and_reload__delegate = function (p__19370){var map__19372 = p__19370;var map__19372__$1 = ((cljs.core.seq_QMARK_.call(null,map__19372))?cljs.core.apply.call(null,cljs.core.hash_map,map__19372):map__19372);var opts = map__19372__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__19370 = null;if (arguments.length > 0) {
  p__19370 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__19370);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__19373){
var p__19370 = cljs.core.seq(arglist__19373);
return watch_and_reload__delegate(p__19370);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
