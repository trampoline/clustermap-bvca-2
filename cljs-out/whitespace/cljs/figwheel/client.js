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
var log__delegate = function (p__22947,args){var map__22949 = p__22947;var map__22949__$1 = ((cljs.core.seq_QMARK_.call(null,map__22949))?cljs.core.apply.call(null,cljs.core.hash_map,map__22949):map__22949);var debug = cljs.core.get.call(null,map__22949__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__22947,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__22947,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__22950){
var p__22947 = cljs.core.first(arglist__22950);
var args = cljs.core.rest(arglist__22950);
return log__delegate(p__22947,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__22951){var map__22953 = p__22951;var map__22953__$1 = ((cljs.core.seq_QMARK_.call(null,map__22953))?cljs.core.apply.call(null,cljs.core.hash_map,map__22953):map__22953);var websocket_url = cljs.core.get.call(null,map__22953__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__22954,callback){var map__22956 = p__22954;var map__22956__$1 = ((cljs.core.seq_QMARK_.call(null,map__22956))?cljs.core.apply.call(null,cljs.core.hash_map,map__22956):map__22956);var msg = map__22956__$1;var dependency_file = cljs.core.get.call(null,map__22956__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__22956__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__22956__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__22956,map__22956__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__22956,map__22956__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__22957,p__22958){var map__22961 = p__22957;var map__22961__$1 = ((cljs.core.seq_QMARK_.call(null,map__22961))?cljs.core.apply.call(null,cljs.core.hash_map,map__22961):map__22961);var opts = map__22961__$1;var url_rewriter = cljs.core.get.call(null,map__22961__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__22962 = p__22958;var map__22962__$1 = ((cljs.core.seq_QMARK_.call(null,map__22962))?cljs.core.apply.call(null,cljs.core.hash_map,map__22962):map__22962);var d = map__22962__$1;var file = cljs.core.get.call(null,map__22962__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__22963,p__22964){var map__23006 = p__22963;var map__23006__$1 = ((cljs.core.seq_QMARK_.call(null,map__23006))?cljs.core.apply.call(null,cljs.core.hash_map,map__23006):map__23006);var opts = map__23006__$1;var on_jsload = cljs.core.get.call(null,map__23006__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__23006__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__23007 = p__22964;var map__23007__$1 = ((cljs.core.seq_QMARK_.call(null,map__23007))?cljs.core.apply.call(null,cljs.core.hash_map,map__23007):map__23007);var files = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__23006,map__23006__$1,opts,on_jsload,before_jsload,map__23007,map__23007__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__23006,map__23006__$1,opts,on_jsload,before_jsload,map__23007,map__23007__$1,files){
return (function (state_23030){var state_val_23031 = (state_23030[(1)]);if((state_val_23031 === (6)))
{var inst_23012 = (state_23030[(7)]);var inst_23021 = (state_23030[(2)]);var inst_23022 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23023 = [inst_23012];var inst_23024 = (new cljs.core.PersistentVector(null,1,(5),inst_23022,inst_23023,null));var inst_23025 = cljs.core.apply.call(null,on_jsload,inst_23024);var state_23030__$1 = (function (){var statearr_23032 = state_23030;(statearr_23032[(8)] = inst_23021);
return statearr_23032;
})();var statearr_23033_23047 = state_23030__$1;(statearr_23033_23047[(2)] = inst_23025);
(statearr_23033_23047[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23031 === (5)))
{var inst_23028 = (state_23030[(2)]);var state_23030__$1 = state_23030;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23030__$1,inst_23028);
} else
{if((state_val_23031 === (4)))
{var state_23030__$1 = state_23030;var statearr_23034_23048 = state_23030__$1;(statearr_23034_23048[(2)] = null);
(statearr_23034_23048[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23031 === (3)))
{var inst_23012 = (state_23030[(7)]);var inst_23015 = console.debug("Figwheel: loaded these files");var inst_23016 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23012);var inst_23017 = cljs.core.prn_str.call(null,inst_23016);var inst_23018 = console.log(inst_23017);var inst_23019 = cljs.core.async.timeout.call(null,(10));var state_23030__$1 = (function (){var statearr_23035 = state_23030;(statearr_23035[(9)] = inst_23018);
(statearr_23035[(10)] = inst_23015);
return statearr_23035;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23030__$1,(6),inst_23019);
} else
{if((state_val_23031 === (2)))
{var inst_23012 = (state_23030[(7)]);var inst_23012__$1 = (state_23030[(2)]);var inst_23013 = cljs.core.not_empty.call(null,inst_23012__$1);var state_23030__$1 = (function (){var statearr_23036 = state_23030;(statearr_23036[(7)] = inst_23012__$1);
return statearr_23036;
})();if(cljs.core.truth_(inst_23013))
{var statearr_23037_23049 = state_23030__$1;(statearr_23037_23049[(1)] = (3));
} else
{var statearr_23038_23050 = state_23030__$1;(statearr_23038_23050[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23031 === (1)))
{var inst_23008 = before_jsload.call(null,files);var inst_23009 = figwheel.client.add_request_urls.call(null,opts,files);var inst_23010 = figwheel.client.load_all_js_files.call(null,inst_23009);var state_23030__$1 = (function (){var statearr_23039 = state_23030;(statearr_23039[(11)] = inst_23008);
return statearr_23039;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23030__$1,(2),inst_23010);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__23006,map__23006__$1,opts,on_jsload,before_jsload,map__23007,map__23007__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__23006,map__23006__$1,opts,on_jsload,before_jsload,map__23007,map__23007__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_23043 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23043[(0)] = state_machine__5694__auto__);
(statearr_23043[(1)] = (1));
return statearr_23043;
});
var state_machine__5694__auto____1 = (function (state_23030){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_23030);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e23044){if((e23044 instanceof Object))
{var ex__5697__auto__ = e23044;var statearr_23045_23051 = state_23030;(statearr_23045_23051[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23030);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23044;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23052 = state_23030;
state_23030 = G__23052;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_23030){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_23030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__23006,map__23006__$1,opts,on_jsload,before_jsload,map__23007,map__23007__$1,files))
})();var state__5710__auto__ = (function (){var statearr_23046 = f__5709__auto__.call(null);(statearr_23046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_23046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__23006,map__23006__$1,opts,on_jsload,before_jsload,map__23007,map__23007__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__23053,link_href){var map__23055 = p__23053;var map__23055__$1 = ((cljs.core.seq_QMARK_.call(null,map__23055))?cljs.core.apply.call(null,cljs.core.hash_map,map__23055):map__23055);var request_url = cljs.core.get.call(null,map__23055__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__23055__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_23076){var state_val_23077 = (state_23076[(1)]);if((state_val_23077 === (2)))
{var inst_23073 = (state_23076[(2)]);var inst_23074 = parent.removeChild(orig_link);var state_23076__$1 = (function (){var statearr_23078 = state_23076;(statearr_23078[(7)] = inst_23073);
return statearr_23078;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23076__$1,inst_23074);
} else
{if((state_val_23077 === (1)))
{var inst_23071 = cljs.core.async.timeout.call(null,(200));var state_23076__$1 = state_23076;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23076__$1,(2),inst_23071);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_23082 = [null,null,null,null,null,null,null,null];(statearr_23082[(0)] = state_machine__5694__auto__);
(statearr_23082[(1)] = (1));
return statearr_23082;
});
var state_machine__5694__auto____1 = (function (state_23076){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_23076);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e23083){if((e23083 instanceof Object))
{var ex__5697__auto__ = e23083;var statearr_23084_23086 = state_23076;(statearr_23084_23086[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23076);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23083;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23087 = state_23076;
state_23076 = G__23087;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_23076){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_23076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_23085 = f__5709__auto__.call(null);(statearr_23085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_23085;
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
figwheel.client.reload_css_file = (function reload_css_file(p__23088){var map__23090 = p__23088;var map__23090__$1 = ((cljs.core.seq_QMARK_.call(null,map__23090))?cljs.core.apply.call(null,cljs.core.hash_map,map__23090):map__23090);var f_data = map__23090__$1;var request_url = cljs.core.get.call(null,map__23090__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__23090__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__23091,files_msg){var map__23113 = p__23091;var map__23113__$1 = ((cljs.core.seq_QMARK_.call(null,map__23113))?cljs.core.apply.call(null,cljs.core.hash_map,map__23113):map__23113);var opts = map__23113__$1;var on_cssload = cljs.core.get.call(null,map__23113__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__23114_23134 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__23115_23135 = null;var count__23116_23136 = (0);var i__23117_23137 = (0);while(true){
if((i__23117_23137 < count__23116_23136))
{var f_23138 = cljs.core._nth.call(null,chunk__23115_23135,i__23117_23137);figwheel.client.reload_css_file.call(null,f_23138);
{
var G__23139 = seq__23114_23134;
var G__23140 = chunk__23115_23135;
var G__23141 = count__23116_23136;
var G__23142 = (i__23117_23137 + (1));
seq__23114_23134 = G__23139;
chunk__23115_23135 = G__23140;
count__23116_23136 = G__23141;
i__23117_23137 = G__23142;
continue;
}
} else
{var temp__4126__auto___23143 = cljs.core.seq.call(null,seq__23114_23134);if(temp__4126__auto___23143)
{var seq__23114_23144__$1 = temp__4126__auto___23143;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23114_23144__$1))
{var c__4314__auto___23145 = cljs.core.chunk_first.call(null,seq__23114_23144__$1);{
var G__23146 = cljs.core.chunk_rest.call(null,seq__23114_23144__$1);
var G__23147 = c__4314__auto___23145;
var G__23148 = cljs.core.count.call(null,c__4314__auto___23145);
var G__23149 = (0);
seq__23114_23134 = G__23146;
chunk__23115_23135 = G__23147;
count__23116_23136 = G__23148;
i__23117_23137 = G__23149;
continue;
}
} else
{var f_23150 = cljs.core.first.call(null,seq__23114_23144__$1);figwheel.client.reload_css_file.call(null,f_23150);
{
var G__23151 = cljs.core.next.call(null,seq__23114_23144__$1);
var G__23152 = null;
var G__23153 = (0);
var G__23154 = (0);
seq__23114_23134 = G__23151;
chunk__23115_23135 = G__23152;
count__23116_23136 = G__23153;
i__23117_23137 = G__23154;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__23113,map__23113__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__23113,map__23113__$1,opts,on_cssload){
return (function (state_23124){var state_val_23125 = (state_23124[(1)]);if((state_val_23125 === (2)))
{var inst_23120 = (state_23124[(2)]);var inst_23121 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_23122 = on_cssload.call(null,inst_23121);var state_23124__$1 = (function (){var statearr_23126 = state_23124;(statearr_23126[(7)] = inst_23120);
return statearr_23126;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23124__$1,inst_23122);
} else
{if((state_val_23125 === (1)))
{var inst_23118 = cljs.core.async.timeout.call(null,(100));var state_23124__$1 = state_23124;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23124__$1,(2),inst_23118);
} else
{return null;
}
}
});})(c__5708__auto__,map__23113,map__23113__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__23113,map__23113__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_23130 = [null,null,null,null,null,null,null,null];(statearr_23130[(0)] = state_machine__5694__auto__);
(statearr_23130[(1)] = (1));
return statearr_23130;
});
var state_machine__5694__auto____1 = (function (state_23124){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_23124);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e23131){if((e23131 instanceof Object))
{var ex__5697__auto__ = e23131;var statearr_23132_23155 = state_23124;(statearr_23132_23155[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23124);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23131;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23156 = state_23124;
state_23124 = G__23156;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_23124){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_23124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__23113,map__23113__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_23133 = f__5709__auto__.call(null);(statearr_23133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_23133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__23113,map__23113__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__23157){var map__23162 = p__23157;var map__23162__$1 = ((cljs.core.seq_QMARK_.call(null,map__23162))?cljs.core.apply.call(null,cljs.core.hash_map,map__23162):map__23162);var opts = map__23162__$1;var on_compile_fail = cljs.core.get.call(null,map__23162__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__23162__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__23162__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__23162__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__23162,map__23162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__23163 = cljs.core._EQ_;var expr__23164 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__23163.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__23164)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__23163.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__23164)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__23163.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23164)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__23162,map__23162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__23162,map__23162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__23162,map__23162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__23162,map__23162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__23162,map__23162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__23162,map__23162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__23162,map__23162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__23162,map__23162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__23162,map__23162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj23169 = {"detail":url};return obj23169;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__23170){var map__23172 = p__23170;var map__23172__$1 = ((cljs.core.seq_QMARK_.call(null,map__23172))?cljs.core.apply.call(null,cljs.core.hash_map,map__23172):map__23172);var class$ = cljs.core.get.call(null,map__23172__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__23172__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__23173){var map__23179 = p__23173;var map__23179__$1 = ((cljs.core.seq_QMARK_.call(null,map__23179))?cljs.core.apply.call(null,cljs.core.hash_map,map__23179):map__23179);var ed = map__23179__$1;var exception_data = cljs.core.get.call(null,map__23179__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__23179__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__23180_23184 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__23181_23185 = null;var count__23182_23186 = (0);var i__23183_23187 = (0);while(true){
if((i__23183_23187 < count__23182_23186))
{var msg_23188 = cljs.core._nth.call(null,chunk__23181_23185,i__23183_23187);console.log(msg_23188);
{
var G__23189 = seq__23180_23184;
var G__23190 = chunk__23181_23185;
var G__23191 = count__23182_23186;
var G__23192 = (i__23183_23187 + (1));
seq__23180_23184 = G__23189;
chunk__23181_23185 = G__23190;
count__23182_23186 = G__23191;
i__23183_23187 = G__23192;
continue;
}
} else
{var temp__4126__auto___23193 = cljs.core.seq.call(null,seq__23180_23184);if(temp__4126__auto___23193)
{var seq__23180_23194__$1 = temp__4126__auto___23193;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23180_23194__$1))
{var c__4314__auto___23195 = cljs.core.chunk_first.call(null,seq__23180_23194__$1);{
var G__23196 = cljs.core.chunk_rest.call(null,seq__23180_23194__$1);
var G__23197 = c__4314__auto___23195;
var G__23198 = cljs.core.count.call(null,c__4314__auto___23195);
var G__23199 = (0);
seq__23180_23184 = G__23196;
chunk__23181_23185 = G__23197;
count__23182_23186 = G__23198;
i__23183_23187 = G__23199;
continue;
}
} else
{var msg_23200 = cljs.core.first.call(null,seq__23180_23194__$1);console.log(msg_23200);
{
var G__23201 = cljs.core.next.call(null,seq__23180_23194__$1);
var G__23202 = null;
var G__23203 = (0);
var G__23204 = (0);
seq__23180_23184 = G__23201;
chunk__23181_23185 = G__23202;
count__23182_23186 = G__23203;
i__23183_23187 = G__23204;
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
var watch_and_reload__delegate = function (p__23205){var map__23207 = p__23205;var map__23207__$1 = ((cljs.core.seq_QMARK_.call(null,map__23207))?cljs.core.apply.call(null,cljs.core.hash_map,map__23207):map__23207);var opts = map__23207__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__23205 = null;if (arguments.length > 0) {
  p__23205 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__23205);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__23208){
var p__23205 = cljs.core.seq(arglist__23208);
return watch_and_reload__delegate(p__23205);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
