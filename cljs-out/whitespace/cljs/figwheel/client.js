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
var log__delegate = function (p__23857,args){var map__23859 = p__23857;var map__23859__$1 = ((cljs.core.seq_QMARK_.call(null,map__23859))?cljs.core.apply.call(null,cljs.core.hash_map,map__23859):map__23859);var debug = cljs.core.get.call(null,map__23859__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__23857,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__23857,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__23860){
var p__23857 = cljs.core.first(arglist__23860);
var args = cljs.core.rest(arglist__23860);
return log__delegate(p__23857,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__23861){var map__23863 = p__23861;var map__23863__$1 = ((cljs.core.seq_QMARK_.call(null,map__23863))?cljs.core.apply.call(null,cljs.core.hash_map,map__23863):map__23863);var websocket_url = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__23864,callback){var map__23866 = p__23864;var map__23866__$1 = ((cljs.core.seq_QMARK_.call(null,map__23866))?cljs.core.apply.call(null,cljs.core.hash_map,map__23866):map__23866);var msg = map__23866__$1;var dependency_file = cljs.core.get.call(null,map__23866__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__23866__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__23866__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__23866,map__23866__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__23866,map__23866__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__23867,p__23868){var map__23871 = p__23867;var map__23871__$1 = ((cljs.core.seq_QMARK_.call(null,map__23871))?cljs.core.apply.call(null,cljs.core.hash_map,map__23871):map__23871);var opts = map__23871__$1;var url_rewriter = cljs.core.get.call(null,map__23871__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__23872 = p__23868;var map__23872__$1 = ((cljs.core.seq_QMARK_.call(null,map__23872))?cljs.core.apply.call(null,cljs.core.hash_map,map__23872):map__23872);var d = map__23872__$1;var file = cljs.core.get.call(null,map__23872__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__23873,p__23874){var map__23916 = p__23873;var map__23916__$1 = ((cljs.core.seq_QMARK_.call(null,map__23916))?cljs.core.apply.call(null,cljs.core.hash_map,map__23916):map__23916);var opts = map__23916__$1;var on_jsload = cljs.core.get.call(null,map__23916__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__23916__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__23917 = p__23874;var map__23917__$1 = ((cljs.core.seq_QMARK_.call(null,map__23917))?cljs.core.apply.call(null,cljs.core.hash_map,map__23917):map__23917);var files = cljs.core.get.call(null,map__23917__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__23916,map__23916__$1,opts,on_jsload,before_jsload,map__23917,map__23917__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__23916,map__23916__$1,opts,on_jsload,before_jsload,map__23917,map__23917__$1,files){
return (function (state_23940){var state_val_23941 = (state_23940[(1)]);if((state_val_23941 === (6)))
{var inst_23922 = (state_23940[(7)]);var inst_23931 = (state_23940[(2)]);var inst_23932 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23933 = [inst_23922];var inst_23934 = (new cljs.core.PersistentVector(null,1,(5),inst_23932,inst_23933,null));var inst_23935 = cljs.core.apply.call(null,on_jsload,inst_23934);var state_23940__$1 = (function (){var statearr_23942 = state_23940;(statearr_23942[(8)] = inst_23931);
return statearr_23942;
})();var statearr_23943_23957 = state_23940__$1;(statearr_23943_23957[(2)] = inst_23935);
(statearr_23943_23957[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23941 === (5)))
{var inst_23938 = (state_23940[(2)]);var state_23940__$1 = state_23940;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23940__$1,inst_23938);
} else
{if((state_val_23941 === (4)))
{var state_23940__$1 = state_23940;var statearr_23944_23958 = state_23940__$1;(statearr_23944_23958[(2)] = null);
(statearr_23944_23958[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23941 === (3)))
{var inst_23922 = (state_23940[(7)]);var inst_23925 = console.debug("Figwheel: loaded these files");var inst_23926 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23922);var inst_23927 = cljs.core.prn_str.call(null,inst_23926);var inst_23928 = console.log(inst_23927);var inst_23929 = cljs.core.async.timeout.call(null,(10));var state_23940__$1 = (function (){var statearr_23945 = state_23940;(statearr_23945[(9)] = inst_23925);
(statearr_23945[(10)] = inst_23928);
return statearr_23945;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23940__$1,(6),inst_23929);
} else
{if((state_val_23941 === (2)))
{var inst_23922 = (state_23940[(7)]);var inst_23922__$1 = (state_23940[(2)]);var inst_23923 = cljs.core.not_empty.call(null,inst_23922__$1);var state_23940__$1 = (function (){var statearr_23946 = state_23940;(statearr_23946[(7)] = inst_23922__$1);
return statearr_23946;
})();if(cljs.core.truth_(inst_23923))
{var statearr_23947_23959 = state_23940__$1;(statearr_23947_23959[(1)] = (3));
} else
{var statearr_23948_23960 = state_23940__$1;(statearr_23948_23960[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23941 === (1)))
{var inst_23918 = before_jsload.call(null,files);var inst_23919 = figwheel.client.add_request_urls.call(null,opts,files);var inst_23920 = figwheel.client.load_all_js_files.call(null,inst_23919);var state_23940__$1 = (function (){var statearr_23949 = state_23940;(statearr_23949[(11)] = inst_23918);
return statearr_23949;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23940__$1,(2),inst_23920);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__23916,map__23916__$1,opts,on_jsload,before_jsload,map__23917,map__23917__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__23916,map__23916__$1,opts,on_jsload,before_jsload,map__23917,map__23917__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_23953 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23953[(0)] = state_machine__5694__auto__);
(statearr_23953[(1)] = (1));
return statearr_23953;
});
var state_machine__5694__auto____1 = (function (state_23940){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_23940);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e23954){if((e23954 instanceof Object))
{var ex__5697__auto__ = e23954;var statearr_23955_23961 = state_23940;(statearr_23955_23961[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23940);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23954;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23962 = state_23940;
state_23940 = G__23962;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_23940){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_23940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__23916,map__23916__$1,opts,on_jsload,before_jsload,map__23917,map__23917__$1,files))
})();var state__5710__auto__ = (function (){var statearr_23956 = f__5709__auto__.call(null);(statearr_23956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_23956;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__23916,map__23916__$1,opts,on_jsload,before_jsload,map__23917,map__23917__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__23963,link_href){var map__23965 = p__23963;var map__23965__$1 = ((cljs.core.seq_QMARK_.call(null,map__23965))?cljs.core.apply.call(null,cljs.core.hash_map,map__23965):map__23965);var request_url = cljs.core.get.call(null,map__23965__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__23965__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_23986){var state_val_23987 = (state_23986[(1)]);if((state_val_23987 === (2)))
{var inst_23983 = (state_23986[(2)]);var inst_23984 = parent.removeChild(orig_link);var state_23986__$1 = (function (){var statearr_23988 = state_23986;(statearr_23988[(7)] = inst_23983);
return statearr_23988;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23986__$1,inst_23984);
} else
{if((state_val_23987 === (1)))
{var inst_23981 = cljs.core.async.timeout.call(null,(200));var state_23986__$1 = state_23986;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23986__$1,(2),inst_23981);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_23992 = [null,null,null,null,null,null,null,null];(statearr_23992[(0)] = state_machine__5694__auto__);
(statearr_23992[(1)] = (1));
return statearr_23992;
});
var state_machine__5694__auto____1 = (function (state_23986){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_23986);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e23993){if((e23993 instanceof Object))
{var ex__5697__auto__ = e23993;var statearr_23994_23996 = state_23986;(statearr_23994_23996[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23986);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23993;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23997 = state_23986;
state_23986 = G__23997;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_23986){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_23986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_23995 = f__5709__auto__.call(null);(statearr_23995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_23995;
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
figwheel.client.reload_css_file = (function reload_css_file(p__23998){var map__24000 = p__23998;var map__24000__$1 = ((cljs.core.seq_QMARK_.call(null,map__24000))?cljs.core.apply.call(null,cljs.core.hash_map,map__24000):map__24000);var f_data = map__24000__$1;var request_url = cljs.core.get.call(null,map__24000__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__24000__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__24001,files_msg){var map__24023 = p__24001;var map__24023__$1 = ((cljs.core.seq_QMARK_.call(null,map__24023))?cljs.core.apply.call(null,cljs.core.hash_map,map__24023):map__24023);var opts = map__24023__$1;var on_cssload = cljs.core.get.call(null,map__24023__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__24024_24044 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__24025_24045 = null;var count__24026_24046 = (0);var i__24027_24047 = (0);while(true){
if((i__24027_24047 < count__24026_24046))
{var f_24048 = cljs.core._nth.call(null,chunk__24025_24045,i__24027_24047);figwheel.client.reload_css_file.call(null,f_24048);
{
var G__24049 = seq__24024_24044;
var G__24050 = chunk__24025_24045;
var G__24051 = count__24026_24046;
var G__24052 = (i__24027_24047 + (1));
seq__24024_24044 = G__24049;
chunk__24025_24045 = G__24050;
count__24026_24046 = G__24051;
i__24027_24047 = G__24052;
continue;
}
} else
{var temp__4126__auto___24053 = cljs.core.seq.call(null,seq__24024_24044);if(temp__4126__auto___24053)
{var seq__24024_24054__$1 = temp__4126__auto___24053;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24024_24054__$1))
{var c__4314__auto___24055 = cljs.core.chunk_first.call(null,seq__24024_24054__$1);{
var G__24056 = cljs.core.chunk_rest.call(null,seq__24024_24054__$1);
var G__24057 = c__4314__auto___24055;
var G__24058 = cljs.core.count.call(null,c__4314__auto___24055);
var G__24059 = (0);
seq__24024_24044 = G__24056;
chunk__24025_24045 = G__24057;
count__24026_24046 = G__24058;
i__24027_24047 = G__24059;
continue;
}
} else
{var f_24060 = cljs.core.first.call(null,seq__24024_24054__$1);figwheel.client.reload_css_file.call(null,f_24060);
{
var G__24061 = cljs.core.next.call(null,seq__24024_24054__$1);
var G__24062 = null;
var G__24063 = (0);
var G__24064 = (0);
seq__24024_24044 = G__24061;
chunk__24025_24045 = G__24062;
count__24026_24046 = G__24063;
i__24027_24047 = G__24064;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__24023,map__24023__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__24023,map__24023__$1,opts,on_cssload){
return (function (state_24034){var state_val_24035 = (state_24034[(1)]);if((state_val_24035 === (2)))
{var inst_24030 = (state_24034[(2)]);var inst_24031 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_24032 = on_cssload.call(null,inst_24031);var state_24034__$1 = (function (){var statearr_24036 = state_24034;(statearr_24036[(7)] = inst_24030);
return statearr_24036;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24034__$1,inst_24032);
} else
{if((state_val_24035 === (1)))
{var inst_24028 = cljs.core.async.timeout.call(null,(100));var state_24034__$1 = state_24034;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24034__$1,(2),inst_24028);
} else
{return null;
}
}
});})(c__5708__auto__,map__24023,map__24023__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__24023,map__24023__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_24040 = [null,null,null,null,null,null,null,null];(statearr_24040[(0)] = state_machine__5694__auto__);
(statearr_24040[(1)] = (1));
return statearr_24040;
});
var state_machine__5694__auto____1 = (function (state_24034){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_24034);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e24041){if((e24041 instanceof Object))
{var ex__5697__auto__ = e24041;var statearr_24042_24065 = state_24034;(statearr_24042_24065[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24034);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24041;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24066 = state_24034;
state_24034 = G__24066;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_24034){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_24034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__24023,map__24023__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_24043 = f__5709__auto__.call(null);(statearr_24043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_24043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__24023,map__24023__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__24067){var map__24072 = p__24067;var map__24072__$1 = ((cljs.core.seq_QMARK_.call(null,map__24072))?cljs.core.apply.call(null,cljs.core.hash_map,map__24072):map__24072);var opts = map__24072__$1;var on_compile_fail = cljs.core.get.call(null,map__24072__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__24072__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__24072__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__24072__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__24072,map__24072__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__24073 = cljs.core._EQ_;var expr__24074 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__24073.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__24074)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__24073.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__24074)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__24073.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24074)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__24072,map__24072__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__24072,map__24072__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__24072,map__24072__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__24072,map__24072__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__24072,map__24072__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__24072,map__24072__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__24072,map__24072__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__24072,map__24072__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__24072,map__24072__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj24079 = {"detail":url};return obj24079;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__24080){var map__24082 = p__24080;var map__24082__$1 = ((cljs.core.seq_QMARK_.call(null,map__24082))?cljs.core.apply.call(null,cljs.core.hash_map,map__24082):map__24082);var class$ = cljs.core.get.call(null,map__24082__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__24082__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__24083){var map__24089 = p__24083;var map__24089__$1 = ((cljs.core.seq_QMARK_.call(null,map__24089))?cljs.core.apply.call(null,cljs.core.hash_map,map__24089):map__24089);var ed = map__24089__$1;var exception_data = cljs.core.get.call(null,map__24089__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__24089__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__24090_24094 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__24091_24095 = null;var count__24092_24096 = (0);var i__24093_24097 = (0);while(true){
if((i__24093_24097 < count__24092_24096))
{var msg_24098 = cljs.core._nth.call(null,chunk__24091_24095,i__24093_24097);console.log(msg_24098);
{
var G__24099 = seq__24090_24094;
var G__24100 = chunk__24091_24095;
var G__24101 = count__24092_24096;
var G__24102 = (i__24093_24097 + (1));
seq__24090_24094 = G__24099;
chunk__24091_24095 = G__24100;
count__24092_24096 = G__24101;
i__24093_24097 = G__24102;
continue;
}
} else
{var temp__4126__auto___24103 = cljs.core.seq.call(null,seq__24090_24094);if(temp__4126__auto___24103)
{var seq__24090_24104__$1 = temp__4126__auto___24103;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24090_24104__$1))
{var c__4314__auto___24105 = cljs.core.chunk_first.call(null,seq__24090_24104__$1);{
var G__24106 = cljs.core.chunk_rest.call(null,seq__24090_24104__$1);
var G__24107 = c__4314__auto___24105;
var G__24108 = cljs.core.count.call(null,c__4314__auto___24105);
var G__24109 = (0);
seq__24090_24094 = G__24106;
chunk__24091_24095 = G__24107;
count__24092_24096 = G__24108;
i__24093_24097 = G__24109;
continue;
}
} else
{var msg_24110 = cljs.core.first.call(null,seq__24090_24104__$1);console.log(msg_24110);
{
var G__24111 = cljs.core.next.call(null,seq__24090_24104__$1);
var G__24112 = null;
var G__24113 = (0);
var G__24114 = (0);
seq__24090_24094 = G__24111;
chunk__24091_24095 = G__24112;
count__24092_24096 = G__24113;
i__24093_24097 = G__24114;
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
var watch_and_reload__delegate = function (p__24115){var map__24117 = p__24115;var map__24117__$1 = ((cljs.core.seq_QMARK_.call(null,map__24117))?cljs.core.apply.call(null,cljs.core.hash_map,map__24117):map__24117);var opts = map__24117__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__24115 = null;if (arguments.length > 0) {
  p__24115 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__24115);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__24118){
var p__24115 = cljs.core.seq(arglist__24118);
return watch_and_reload__delegate(p__24115);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
