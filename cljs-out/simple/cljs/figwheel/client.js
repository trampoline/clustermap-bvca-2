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
var log__delegate = function (p__39910,args){var map__39912 = p__39910;var map__39912__$1 = ((cljs.core.seq_QMARK_.call(null,map__39912))?cljs.core.apply.call(null,cljs.core.hash_map,map__39912):map__39912);var debug = cljs.core.get.call(null,map__39912__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__39910,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__39910,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__39913){
var p__39910 = cljs.core.first(arglist__39913);
var args = cljs.core.rest(arglist__39913);
return log__delegate(p__39910,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__39914){var map__39916 = p__39914;var map__39916__$1 = ((cljs.core.seq_QMARK_.call(null,map__39916))?cljs.core.apply.call(null,cljs.core.hash_map,map__39916):map__39916);var websocket_url = cljs.core.get.call(null,map__39916__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__39917,callback){var map__39919 = p__39917;var map__39919__$1 = ((cljs.core.seq_QMARK_.call(null,map__39919))?cljs.core.apply.call(null,cljs.core.hash_map,map__39919):map__39919);var msg = map__39919__$1;var dependency_file = cljs.core.get.call(null,map__39919__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__39919__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__39919__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3637__auto__ = dependency_file;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__39919,map__39919__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__39919,map__39919__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__39920,p__39921){var map__39924 = p__39920;var map__39924__$1 = ((cljs.core.seq_QMARK_.call(null,map__39924))?cljs.core.apply.call(null,cljs.core.hash_map,map__39924):map__39924);var opts = map__39924__$1;var url_rewriter = cljs.core.get.call(null,map__39924__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__39925 = p__39921;var map__39925__$1 = ((cljs.core.seq_QMARK_.call(null,map__39925))?cljs.core.apply.call(null,cljs.core.hash_map,map__39925):map__39925);var d = map__39925__$1;var file = cljs.core.get.call(null,map__39925__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__39926,p__39927){var map__39969 = p__39926;var map__39969__$1 = ((cljs.core.seq_QMARK_.call(null,map__39969))?cljs.core.apply.call(null,cljs.core.hash_map,map__39969):map__39969);var opts = map__39969__$1;var on_jsload = cljs.core.get.call(null,map__39969__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__39969__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__39970 = p__39927;var map__39970__$1 = ((cljs.core.seq_QMARK_.call(null,map__39970))?cljs.core.apply.call(null,cljs.core.hash_map,map__39970):map__39970);var files = cljs.core.get.call(null,map__39970__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,map__39969,map__39969__$1,opts,on_jsload,before_jsload,map__39970,map__39970__$1,files){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,map__39969,map__39969__$1,opts,on_jsload,before_jsload,map__39970,map__39970__$1,files){
return (function (state_39993){var state_val_39994 = (state_39993[(1)]);if((state_val_39994 === (6)))
{var inst_39975 = (state_39993[(7)]);var inst_39984 = (state_39993[(2)]);var inst_39985 = cljs.core.PersistentVector.EMPTY_NODE;var inst_39986 = [inst_39975];var inst_39987 = (new cljs.core.PersistentVector(null,1,(5),inst_39985,inst_39986,null));var inst_39988 = cljs.core.apply.call(null,on_jsload,inst_39987);var state_39993__$1 = (function (){var statearr_39995 = state_39993;(statearr_39995[(8)] = inst_39984);
return statearr_39995;
})();var statearr_39996_40010 = state_39993__$1;(statearr_39996_40010[(2)] = inst_39988);
(statearr_39996_40010[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39994 === (5)))
{var inst_39991 = (state_39993[(2)]);var state_39993__$1 = state_39993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39993__$1,inst_39991);
} else
{if((state_val_39994 === (4)))
{var state_39993__$1 = state_39993;var statearr_39997_40011 = state_39993__$1;(statearr_39997_40011[(2)] = null);
(statearr_39997_40011[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39994 === (3)))
{var inst_39975 = (state_39993[(7)]);var inst_39978 = console.debug("Figwheel: loaded these files");var inst_39979 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39975);var inst_39980 = cljs.core.prn_str.call(null,inst_39979);var inst_39981 = console.log(inst_39980);var inst_39982 = cljs.core.async.timeout.call(null,(10));var state_39993__$1 = (function (){var statearr_39998 = state_39993;(statearr_39998[(9)] = inst_39978);
(statearr_39998[(10)] = inst_39981);
return statearr_39998;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39993__$1,(6),inst_39982);
} else
{if((state_val_39994 === (2)))
{var inst_39975 = (state_39993[(7)]);var inst_39975__$1 = (state_39993[(2)]);var inst_39976 = cljs.core.not_empty.call(null,inst_39975__$1);var state_39993__$1 = (function (){var statearr_39999 = state_39993;(statearr_39999[(7)] = inst_39975__$1);
return statearr_39999;
})();if(cljs.core.truth_(inst_39976))
{var statearr_40000_40012 = state_39993__$1;(statearr_40000_40012[(1)] = (3));
} else
{var statearr_40001_40013 = state_39993__$1;(statearr_40001_40013[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39994 === (1)))
{var inst_39971 = before_jsload.call(null,files);var inst_39972 = figwheel.client.add_request_urls.call(null,opts,files);var inst_39973 = figwheel.client.load_all_js_files.call(null,inst_39972);var state_39993__$1 = (function (){var statearr_40002 = state_39993;(statearr_40002[(11)] = inst_39971);
return statearr_40002;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39993__$1,(2),inst_39973);
} else
{return null;
}
}
}
}
}
}
});})(c__5819__auto__,map__39969,map__39969__$1,opts,on_jsload,before_jsload,map__39970,map__39970__$1,files))
;return ((function (switch__5804__auto__,c__5819__auto__,map__39969,map__39969__$1,opts,on_jsload,before_jsload,map__39970,map__39970__$1,files){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_40006 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40006[(0)] = state_machine__5805__auto__);
(statearr_40006[(1)] = (1));
return statearr_40006;
});
var state_machine__5805__auto____1 = (function (state_39993){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_39993);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e40007){if((e40007 instanceof Object))
{var ex__5808__auto__ = e40007;var statearr_40008_40014 = state_39993;(statearr_40008_40014[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39993);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40007;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40015 = state_39993;
state_39993 = G__40015;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_39993){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_39993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,map__39969,map__39969__$1,opts,on_jsload,before_jsload,map__39970,map__39970__$1,files))
})();var state__5821__auto__ = (function (){var statearr_40009 = f__5820__auto__.call(null);(statearr_40009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_40009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,map__39969,map__39969__$1,opts,on_jsload,before_jsload,map__39970,map__39970__$1,files))
);
return c__5819__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__40016,link_href){var map__40018 = p__40016;var map__40018__$1 = ((cljs.core.seq_QMARK_.call(null,map__40018))?cljs.core.apply.call(null,cljs.core.hash_map,map__40018):map__40018);var request_url = cljs.core.get.call(null,map__40018__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__40018__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_40039){var state_val_40040 = (state_40039[(1)]);if((state_val_40040 === (2)))
{var inst_40036 = (state_40039[(2)]);var inst_40037 = parent.removeChild(orig_link);var state_40039__$1 = (function (){var statearr_40041 = state_40039;(statearr_40041[(7)] = inst_40036);
return statearr_40041;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40039__$1,inst_40037);
} else
{if((state_val_40040 === (1)))
{var inst_40034 = cljs.core.async.timeout.call(null,(200));var state_40039__$1 = state_40039;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40039__$1,(2),inst_40034);
} else
{return null;
}
}
});})(c__5819__auto__,parent))
;return ((function (switch__5804__auto__,c__5819__auto__,parent){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_40045 = [null,null,null,null,null,null,null,null];(statearr_40045[(0)] = state_machine__5805__auto__);
(statearr_40045[(1)] = (1));
return statearr_40045;
});
var state_machine__5805__auto____1 = (function (state_40039){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_40039);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e40046){if((e40046 instanceof Object))
{var ex__5808__auto__ = e40046;var statearr_40047_40049 = state_40039;(statearr_40047_40049[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40039);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40046;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40050 = state_40039;
state_40039 = G__40050;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_40039){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_40039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,parent))
})();var state__5821__auto__ = (function (){var statearr_40048 = f__5820__auto__.call(null);(statearr_40048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_40048;
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
figwheel.client.reload_css_file = (function reload_css_file(p__40051){var map__40053 = p__40051;var map__40053__$1 = ((cljs.core.seq_QMARK_.call(null,map__40053))?cljs.core.apply.call(null,cljs.core.hash_map,map__40053):map__40053);var f_data = map__40053__$1;var request_url = cljs.core.get.call(null,map__40053__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__40053__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__40054,files_msg){var map__40076 = p__40054;var map__40076__$1 = ((cljs.core.seq_QMARK_.call(null,map__40076))?cljs.core.apply.call(null,cljs.core.hash_map,map__40076):map__40076);var opts = map__40076__$1;var on_cssload = cljs.core.get.call(null,map__40076__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__40077_40097 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__40078_40098 = null;var count__40079_40099 = (0);var i__40080_40100 = (0);while(true){
if((i__40080_40100 < count__40079_40099))
{var f_40101 = cljs.core._nth.call(null,chunk__40078_40098,i__40080_40100);figwheel.client.reload_css_file.call(null,f_40101);
{
var G__40102 = seq__40077_40097;
var G__40103 = chunk__40078_40098;
var G__40104 = count__40079_40099;
var G__40105 = (i__40080_40100 + (1));
seq__40077_40097 = G__40102;
chunk__40078_40098 = G__40103;
count__40079_40099 = G__40104;
i__40080_40100 = G__40105;
continue;
}
} else
{var temp__4126__auto___40106 = cljs.core.seq.call(null,seq__40077_40097);if(temp__4126__auto___40106)
{var seq__40077_40107__$1 = temp__4126__auto___40106;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40077_40107__$1))
{var c__4406__auto___40108 = cljs.core.chunk_first.call(null,seq__40077_40107__$1);{
var G__40109 = cljs.core.chunk_rest.call(null,seq__40077_40107__$1);
var G__40110 = c__4406__auto___40108;
var G__40111 = cljs.core.count.call(null,c__4406__auto___40108);
var G__40112 = (0);
seq__40077_40097 = G__40109;
chunk__40078_40098 = G__40110;
count__40079_40099 = G__40111;
i__40080_40100 = G__40112;
continue;
}
} else
{var f_40113 = cljs.core.first.call(null,seq__40077_40107__$1);figwheel.client.reload_css_file.call(null,f_40113);
{
var G__40114 = cljs.core.next.call(null,seq__40077_40107__$1);
var G__40115 = null;
var G__40116 = (0);
var G__40117 = (0);
seq__40077_40097 = G__40114;
chunk__40078_40098 = G__40115;
count__40079_40099 = G__40116;
i__40080_40100 = G__40117;
continue;
}
}
} else
{}
}
break;
}
var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,map__40076,map__40076__$1,opts,on_cssload){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,map__40076,map__40076__$1,opts,on_cssload){
return (function (state_40087){var state_val_40088 = (state_40087[(1)]);if((state_val_40088 === (2)))
{var inst_40083 = (state_40087[(2)]);var inst_40084 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_40085 = on_cssload.call(null,inst_40084);var state_40087__$1 = (function (){var statearr_40089 = state_40087;(statearr_40089[(7)] = inst_40083);
return statearr_40089;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40087__$1,inst_40085);
} else
{if((state_val_40088 === (1)))
{var inst_40081 = cljs.core.async.timeout.call(null,(100));var state_40087__$1 = state_40087;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40087__$1,(2),inst_40081);
} else
{return null;
}
}
});})(c__5819__auto__,map__40076,map__40076__$1,opts,on_cssload))
;return ((function (switch__5804__auto__,c__5819__auto__,map__40076,map__40076__$1,opts,on_cssload){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_40093 = [null,null,null,null,null,null,null,null];(statearr_40093[(0)] = state_machine__5805__auto__);
(statearr_40093[(1)] = (1));
return statearr_40093;
});
var state_machine__5805__auto____1 = (function (state_40087){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_40087);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e40094){if((e40094 instanceof Object))
{var ex__5808__auto__ = e40094;var statearr_40095_40118 = state_40087;(statearr_40095_40118[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40087);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40094;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40119 = state_40087;
state_40087 = G__40119;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_40087){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_40087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,map__40076,map__40076__$1,opts,on_cssload))
})();var state__5821__auto__ = (function (){var statearr_40096 = f__5820__auto__.call(null);(statearr_40096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_40096;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,map__40076,map__40076__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__40120){var map__40125 = p__40120;var map__40125__$1 = ((cljs.core.seq_QMARK_.call(null,map__40125))?cljs.core.apply.call(null,cljs.core.hash_map,map__40125):map__40125);var opts = map__40125__$1;var on_compile_fail = cljs.core.get.call(null,map__40125__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__40125__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__40125__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__40125__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__40125,map__40125__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__40126 = cljs.core._EQ_;var expr__40127 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__40126.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__40127)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__40126.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__40127)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__40126.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40127)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__40125,map__40125__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__40125,map__40125__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__40125,map__40125__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__40125,map__40125__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__40125,map__40125__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__40125,map__40125__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__40125,map__40125__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__40125,map__40125__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__40125,map__40125__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj40132 = {"detail":url};return obj40132;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__40133){var map__40135 = p__40133;var map__40135__$1 = ((cljs.core.seq_QMARK_.call(null,map__40135))?cljs.core.apply.call(null,cljs.core.hash_map,map__40135):map__40135);var class$ = cljs.core.get.call(null,map__40135__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__40135__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__40136){var map__40142 = p__40136;var map__40142__$1 = ((cljs.core.seq_QMARK_.call(null,map__40142))?cljs.core.apply.call(null,cljs.core.hash_map,map__40142):map__40142);var ed = map__40142__$1;var exception_data = cljs.core.get.call(null,map__40142__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__40142__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__40143_40147 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__40144_40148 = null;var count__40145_40149 = (0);var i__40146_40150 = (0);while(true){
if((i__40146_40150 < count__40145_40149))
{var msg_40151 = cljs.core._nth.call(null,chunk__40144_40148,i__40146_40150);console.log(msg_40151);
{
var G__40152 = seq__40143_40147;
var G__40153 = chunk__40144_40148;
var G__40154 = count__40145_40149;
var G__40155 = (i__40146_40150 + (1));
seq__40143_40147 = G__40152;
chunk__40144_40148 = G__40153;
count__40145_40149 = G__40154;
i__40146_40150 = G__40155;
continue;
}
} else
{var temp__4126__auto___40156 = cljs.core.seq.call(null,seq__40143_40147);if(temp__4126__auto___40156)
{var seq__40143_40157__$1 = temp__4126__auto___40156;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40143_40157__$1))
{var c__4406__auto___40158 = cljs.core.chunk_first.call(null,seq__40143_40157__$1);{
var G__40159 = cljs.core.chunk_rest.call(null,seq__40143_40157__$1);
var G__40160 = c__4406__auto___40158;
var G__40161 = cljs.core.count.call(null,c__4406__auto___40158);
var G__40162 = (0);
seq__40143_40147 = G__40159;
chunk__40144_40148 = G__40160;
count__40145_40149 = G__40161;
i__40146_40150 = G__40162;
continue;
}
} else
{var msg_40163 = cljs.core.first.call(null,seq__40143_40157__$1);console.log(msg_40163);
{
var G__40164 = cljs.core.next.call(null,seq__40143_40157__$1);
var G__40165 = null;
var G__40166 = (0);
var G__40167 = (0);
seq__40143_40147 = G__40164;
chunk__40144_40148 = G__40165;
count__40145_40149 = G__40166;
i__40146_40150 = G__40167;
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
var watch_and_reload__delegate = function (p__40168){var map__40170 = p__40168;var map__40170__$1 = ((cljs.core.seq_QMARK_.call(null,map__40170))?cljs.core.apply.call(null,cljs.core.hash_map,map__40170):map__40170);var opts = map__40170__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__40168 = null;if (arguments.length > 0) {
  p__40168 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__40168);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__40171){
var p__40168 = cljs.core.seq(arglist__40171);
return watch_and_reload__delegate(p__40168);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
