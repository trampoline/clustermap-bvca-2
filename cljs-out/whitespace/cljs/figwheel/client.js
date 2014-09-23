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
var log__delegate = function (p__19088,args){var map__19090 = p__19088;var map__19090__$1 = ((cljs.core.seq_QMARK_.call(null,map__19090))?cljs.core.apply.call(null,cljs.core.hash_map,map__19090):map__19090);var debug = cljs.core.get.call(null,map__19090__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__19088,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__19088,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__19091){
var p__19088 = cljs.core.first(arglist__19091);
var args = cljs.core.rest(arglist__19091);
return log__delegate(p__19088,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__19092){var map__19094 = p__19092;var map__19094__$1 = ((cljs.core.seq_QMARK_.call(null,map__19094))?cljs.core.apply.call(null,cljs.core.hash_map,map__19094):map__19094);var websocket_url = cljs.core.get.call(null,map__19094__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__19095,callback){var map__19097 = p__19095;var map__19097__$1 = ((cljs.core.seq_QMARK_.call(null,map__19097))?cljs.core.apply.call(null,cljs.core.hash_map,map__19097):map__19097);var msg = map__19097__$1;var dependency_file = cljs.core.get.call(null,map__19097__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__19097__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__19097__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__19097,map__19097__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__19097,map__19097__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__19098,p__19099){var map__19102 = p__19098;var map__19102__$1 = ((cljs.core.seq_QMARK_.call(null,map__19102))?cljs.core.apply.call(null,cljs.core.hash_map,map__19102):map__19102);var opts = map__19102__$1;var url_rewriter = cljs.core.get.call(null,map__19102__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__19103 = p__19099;var map__19103__$1 = ((cljs.core.seq_QMARK_.call(null,map__19103))?cljs.core.apply.call(null,cljs.core.hash_map,map__19103):map__19103);var d = map__19103__$1;var file = cljs.core.get.call(null,map__19103__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__19104,p__19105){var map__19147 = p__19104;var map__19147__$1 = ((cljs.core.seq_QMARK_.call(null,map__19147))?cljs.core.apply.call(null,cljs.core.hash_map,map__19147):map__19147);var opts = map__19147__$1;var on_jsload = cljs.core.get.call(null,map__19147__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__19147__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__19148 = p__19105;var map__19148__$1 = ((cljs.core.seq_QMARK_.call(null,map__19148))?cljs.core.apply.call(null,cljs.core.hash_map,map__19148):map__19148);var files = cljs.core.get.call(null,map__19148__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__19147,map__19147__$1,opts,on_jsload,before_jsload,map__19148,map__19148__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__19147,map__19147__$1,opts,on_jsload,before_jsload,map__19148,map__19148__$1,files){
return (function (state_19171){var state_val_19172 = (state_19171[(1)]);if((state_val_19172 === (6)))
{var inst_19153 = (state_19171[(7)]);var inst_19162 = (state_19171[(2)]);var inst_19163 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19164 = [inst_19153];var inst_19165 = (new cljs.core.PersistentVector(null,1,(5),inst_19163,inst_19164,null));var inst_19166 = cljs.core.apply.call(null,on_jsload,inst_19165);var state_19171__$1 = (function (){var statearr_19173 = state_19171;(statearr_19173[(8)] = inst_19162);
return statearr_19173;
})();var statearr_19174_19188 = state_19171__$1;(statearr_19174_19188[(2)] = inst_19166);
(statearr_19174_19188[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19172 === (5)))
{var inst_19169 = (state_19171[(2)]);var state_19171__$1 = state_19171;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19171__$1,inst_19169);
} else
{if((state_val_19172 === (4)))
{var state_19171__$1 = state_19171;var statearr_19175_19189 = state_19171__$1;(statearr_19175_19189[(2)] = null);
(statearr_19175_19189[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19172 === (3)))
{var inst_19153 = (state_19171[(7)]);var inst_19156 = console.debug("Figwheel: loaded these files");var inst_19157 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_19153);var inst_19158 = cljs.core.prn_str.call(null,inst_19157);var inst_19159 = console.log(inst_19158);var inst_19160 = cljs.core.async.timeout.call(null,(10));var state_19171__$1 = (function (){var statearr_19176 = state_19171;(statearr_19176[(9)] = inst_19159);
(statearr_19176[(10)] = inst_19156);
return statearr_19176;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19171__$1,(6),inst_19160);
} else
{if((state_val_19172 === (2)))
{var inst_19153 = (state_19171[(7)]);var inst_19153__$1 = (state_19171[(2)]);var inst_19154 = cljs.core.not_empty.call(null,inst_19153__$1);var state_19171__$1 = (function (){var statearr_19177 = state_19171;(statearr_19177[(7)] = inst_19153__$1);
return statearr_19177;
})();if(cljs.core.truth_(inst_19154))
{var statearr_19178_19190 = state_19171__$1;(statearr_19178_19190[(1)] = (3));
} else
{var statearr_19179_19191 = state_19171__$1;(statearr_19179_19191[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19172 === (1)))
{var inst_19149 = before_jsload.call(null,files);var inst_19150 = figwheel.client.add_request_urls.call(null,opts,files);var inst_19151 = figwheel.client.load_all_js_files.call(null,inst_19150);var state_19171__$1 = (function (){var statearr_19180 = state_19171;(statearr_19180[(11)] = inst_19149);
return statearr_19180;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19171__$1,(2),inst_19151);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__19147,map__19147__$1,opts,on_jsload,before_jsload,map__19148,map__19148__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__19147,map__19147__$1,opts,on_jsload,before_jsload,map__19148,map__19148__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19184 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19184[(0)] = state_machine__5694__auto__);
(statearr_19184[(1)] = (1));
return statearr_19184;
});
var state_machine__5694__auto____1 = (function (state_19171){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19171);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19185){if((e19185 instanceof Object))
{var ex__5697__auto__ = e19185;var statearr_19186_19192 = state_19171;(statearr_19186_19192[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19171);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19185;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19193 = state_19171;
state_19171 = G__19193;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19171){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__19147,map__19147__$1,opts,on_jsload,before_jsload,map__19148,map__19148__$1,files))
})();var state__5710__auto__ = (function (){var statearr_19187 = f__5709__auto__.call(null);(statearr_19187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_19187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__19147,map__19147__$1,opts,on_jsload,before_jsload,map__19148,map__19148__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__19194,link_href){var map__19196 = p__19194;var map__19196__$1 = ((cljs.core.seq_QMARK_.call(null,map__19196))?cljs.core.apply.call(null,cljs.core.hash_map,map__19196):map__19196);var request_url = cljs.core.get.call(null,map__19196__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__19196__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_19217){var state_val_19218 = (state_19217[(1)]);if((state_val_19218 === (2)))
{var inst_19214 = (state_19217[(2)]);var inst_19215 = parent.removeChild(orig_link);var state_19217__$1 = (function (){var statearr_19219 = state_19217;(statearr_19219[(7)] = inst_19214);
return statearr_19219;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19217__$1,inst_19215);
} else
{if((state_val_19218 === (1)))
{var inst_19212 = cljs.core.async.timeout.call(null,(200));var state_19217__$1 = state_19217;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19217__$1,(2),inst_19212);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19223 = [null,null,null,null,null,null,null,null];(statearr_19223[(0)] = state_machine__5694__auto__);
(statearr_19223[(1)] = (1));
return statearr_19223;
});
var state_machine__5694__auto____1 = (function (state_19217){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19217);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19224){if((e19224 instanceof Object))
{var ex__5697__auto__ = e19224;var statearr_19225_19227 = state_19217;(statearr_19225_19227[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19217);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19224;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19228 = state_19217;
state_19217 = G__19228;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19217){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_19226 = f__5709__auto__.call(null);(statearr_19226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_19226;
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
figwheel.client.reload_css_file = (function reload_css_file(p__19229){var map__19231 = p__19229;var map__19231__$1 = ((cljs.core.seq_QMARK_.call(null,map__19231))?cljs.core.apply.call(null,cljs.core.hash_map,map__19231):map__19231);var f_data = map__19231__$1;var request_url = cljs.core.get.call(null,map__19231__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__19231__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__19232,files_msg){var map__19254 = p__19232;var map__19254__$1 = ((cljs.core.seq_QMARK_.call(null,map__19254))?cljs.core.apply.call(null,cljs.core.hash_map,map__19254):map__19254);var opts = map__19254__$1;var on_cssload = cljs.core.get.call(null,map__19254__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__19255_19275 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__19256_19276 = null;var count__19257_19277 = (0);var i__19258_19278 = (0);while(true){
if((i__19258_19278 < count__19257_19277))
{var f_19279 = cljs.core._nth.call(null,chunk__19256_19276,i__19258_19278);figwheel.client.reload_css_file.call(null,f_19279);
{
var G__19280 = seq__19255_19275;
var G__19281 = chunk__19256_19276;
var G__19282 = count__19257_19277;
var G__19283 = (i__19258_19278 + (1));
seq__19255_19275 = G__19280;
chunk__19256_19276 = G__19281;
count__19257_19277 = G__19282;
i__19258_19278 = G__19283;
continue;
}
} else
{var temp__4126__auto___19284 = cljs.core.seq.call(null,seq__19255_19275);if(temp__4126__auto___19284)
{var seq__19255_19285__$1 = temp__4126__auto___19284;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19255_19285__$1))
{var c__4314__auto___19286 = cljs.core.chunk_first.call(null,seq__19255_19285__$1);{
var G__19287 = cljs.core.chunk_rest.call(null,seq__19255_19285__$1);
var G__19288 = c__4314__auto___19286;
var G__19289 = cljs.core.count.call(null,c__4314__auto___19286);
var G__19290 = (0);
seq__19255_19275 = G__19287;
chunk__19256_19276 = G__19288;
count__19257_19277 = G__19289;
i__19258_19278 = G__19290;
continue;
}
} else
{var f_19291 = cljs.core.first.call(null,seq__19255_19285__$1);figwheel.client.reload_css_file.call(null,f_19291);
{
var G__19292 = cljs.core.next.call(null,seq__19255_19285__$1);
var G__19293 = null;
var G__19294 = (0);
var G__19295 = (0);
seq__19255_19275 = G__19292;
chunk__19256_19276 = G__19293;
count__19257_19277 = G__19294;
i__19258_19278 = G__19295;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__19254,map__19254__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__19254,map__19254__$1,opts,on_cssload){
return (function (state_19265){var state_val_19266 = (state_19265[(1)]);if((state_val_19266 === (2)))
{var inst_19261 = (state_19265[(2)]);var inst_19262 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_19263 = on_cssload.call(null,inst_19262);var state_19265__$1 = (function (){var statearr_19267 = state_19265;(statearr_19267[(7)] = inst_19261);
return statearr_19267;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19265__$1,inst_19263);
} else
{if((state_val_19266 === (1)))
{var inst_19259 = cljs.core.async.timeout.call(null,(100));var state_19265__$1 = state_19265;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19265__$1,(2),inst_19259);
} else
{return null;
}
}
});})(c__5708__auto__,map__19254,map__19254__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__19254,map__19254__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19271 = [null,null,null,null,null,null,null,null];(statearr_19271[(0)] = state_machine__5694__auto__);
(statearr_19271[(1)] = (1));
return statearr_19271;
});
var state_machine__5694__auto____1 = (function (state_19265){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19265);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19272){if((e19272 instanceof Object))
{var ex__5697__auto__ = e19272;var statearr_19273_19296 = state_19265;(statearr_19273_19296[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19265);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19272;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19297 = state_19265;
state_19265 = G__19297;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19265){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__19254,map__19254__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_19274 = f__5709__auto__.call(null);(statearr_19274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_19274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__19254,map__19254__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__19298){var map__19303 = p__19298;var map__19303__$1 = ((cljs.core.seq_QMARK_.call(null,map__19303))?cljs.core.apply.call(null,cljs.core.hash_map,map__19303):map__19303);var opts = map__19303__$1;var on_compile_fail = cljs.core.get.call(null,map__19303__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__19303__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__19303__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__19303__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__19303,map__19303__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__19304 = cljs.core._EQ_;var expr__19305 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__19304.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__19305)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__19304.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__19305)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__19304.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__19305)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__19303,map__19303__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__19303,map__19303__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__19303,map__19303__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__19303,map__19303__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__19303,map__19303__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__19303,map__19303__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__19303,map__19303__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__19303,map__19303__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__19303,map__19303__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj19310 = {"detail":url};return obj19310;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__19311){var map__19313 = p__19311;var map__19313__$1 = ((cljs.core.seq_QMARK_.call(null,map__19313))?cljs.core.apply.call(null,cljs.core.hash_map,map__19313):map__19313);var class$ = cljs.core.get.call(null,map__19313__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__19313__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__19314){var map__19320 = p__19314;var map__19320__$1 = ((cljs.core.seq_QMARK_.call(null,map__19320))?cljs.core.apply.call(null,cljs.core.hash_map,map__19320):map__19320);var ed = map__19320__$1;var exception_data = cljs.core.get.call(null,map__19320__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__19320__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__19321_19325 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__19322_19326 = null;var count__19323_19327 = (0);var i__19324_19328 = (0);while(true){
if((i__19324_19328 < count__19323_19327))
{var msg_19329 = cljs.core._nth.call(null,chunk__19322_19326,i__19324_19328);console.log(msg_19329);
{
var G__19330 = seq__19321_19325;
var G__19331 = chunk__19322_19326;
var G__19332 = count__19323_19327;
var G__19333 = (i__19324_19328 + (1));
seq__19321_19325 = G__19330;
chunk__19322_19326 = G__19331;
count__19323_19327 = G__19332;
i__19324_19328 = G__19333;
continue;
}
} else
{var temp__4126__auto___19334 = cljs.core.seq.call(null,seq__19321_19325);if(temp__4126__auto___19334)
{var seq__19321_19335__$1 = temp__4126__auto___19334;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19321_19335__$1))
{var c__4314__auto___19336 = cljs.core.chunk_first.call(null,seq__19321_19335__$1);{
var G__19337 = cljs.core.chunk_rest.call(null,seq__19321_19335__$1);
var G__19338 = c__4314__auto___19336;
var G__19339 = cljs.core.count.call(null,c__4314__auto___19336);
var G__19340 = (0);
seq__19321_19325 = G__19337;
chunk__19322_19326 = G__19338;
count__19323_19327 = G__19339;
i__19324_19328 = G__19340;
continue;
}
} else
{var msg_19341 = cljs.core.first.call(null,seq__19321_19335__$1);console.log(msg_19341);
{
var G__19342 = cljs.core.next.call(null,seq__19321_19335__$1);
var G__19343 = null;
var G__19344 = (0);
var G__19345 = (0);
seq__19321_19325 = G__19342;
chunk__19322_19326 = G__19343;
count__19323_19327 = G__19344;
i__19324_19328 = G__19345;
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
var watch_and_reload__delegate = function (p__19346){var map__19348 = p__19346;var map__19348__$1 = ((cljs.core.seq_QMARK_.call(null,map__19348))?cljs.core.apply.call(null,cljs.core.hash_map,map__19348):map__19348);var opts = map__19348__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__19346 = null;if (arguments.length > 0) {
  p__19346 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__19346);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__19349){
var p__19346 = cljs.core.seq(arglist__19349);
return watch_and_reload__delegate(p__19346);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
