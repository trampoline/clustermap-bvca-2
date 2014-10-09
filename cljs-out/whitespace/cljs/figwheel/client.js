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
var log__delegate = function (p__23801,args){var map__23803 = p__23801;var map__23803__$1 = ((cljs.core.seq_QMARK_.call(null,map__23803))?cljs.core.apply.call(null,cljs.core.hash_map,map__23803):map__23803);var debug = cljs.core.get.call(null,map__23803__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__23801,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__23801,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__23804){
var p__23801 = cljs.core.first(arglist__23804);
var args = cljs.core.rest(arglist__23804);
return log__delegate(p__23801,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__23805){var map__23807 = p__23805;var map__23807__$1 = ((cljs.core.seq_QMARK_.call(null,map__23807))?cljs.core.apply.call(null,cljs.core.hash_map,map__23807):map__23807);var websocket_url = cljs.core.get.call(null,map__23807__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__23808,callback){var map__23810 = p__23808;var map__23810__$1 = ((cljs.core.seq_QMARK_.call(null,map__23810))?cljs.core.apply.call(null,cljs.core.hash_map,map__23810):map__23810);var msg = map__23810__$1;var dependency_file = cljs.core.get.call(null,map__23810__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__23810__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__23810__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__23810,map__23810__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__23810,map__23810__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__23811,p__23812){var map__23815 = p__23811;var map__23815__$1 = ((cljs.core.seq_QMARK_.call(null,map__23815))?cljs.core.apply.call(null,cljs.core.hash_map,map__23815):map__23815);var opts = map__23815__$1;var url_rewriter = cljs.core.get.call(null,map__23815__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__23816 = p__23812;var map__23816__$1 = ((cljs.core.seq_QMARK_.call(null,map__23816))?cljs.core.apply.call(null,cljs.core.hash_map,map__23816):map__23816);var d = map__23816__$1;var file = cljs.core.get.call(null,map__23816__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__23817,p__23818){var map__23860 = p__23817;var map__23860__$1 = ((cljs.core.seq_QMARK_.call(null,map__23860))?cljs.core.apply.call(null,cljs.core.hash_map,map__23860):map__23860);var opts = map__23860__$1;var on_jsload = cljs.core.get.call(null,map__23860__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__23860__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__23861 = p__23818;var map__23861__$1 = ((cljs.core.seq_QMARK_.call(null,map__23861))?cljs.core.apply.call(null,cljs.core.hash_map,map__23861):map__23861);var files = cljs.core.get.call(null,map__23861__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__23860,map__23860__$1,opts,on_jsload,before_jsload,map__23861,map__23861__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__23860,map__23860__$1,opts,on_jsload,before_jsload,map__23861,map__23861__$1,files){
return (function (state_23884){var state_val_23885 = (state_23884[(1)]);if((state_val_23885 === (6)))
{var inst_23866 = (state_23884[(7)]);var inst_23875 = (state_23884[(2)]);var inst_23876 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23877 = [inst_23866];var inst_23878 = (new cljs.core.PersistentVector(null,1,(5),inst_23876,inst_23877,null));var inst_23879 = cljs.core.apply.call(null,on_jsload,inst_23878);var state_23884__$1 = (function (){var statearr_23886 = state_23884;(statearr_23886[(8)] = inst_23875);
return statearr_23886;
})();var statearr_23887_23901 = state_23884__$1;(statearr_23887_23901[(2)] = inst_23879);
(statearr_23887_23901[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23885 === (5)))
{var inst_23882 = (state_23884[(2)]);var state_23884__$1 = state_23884;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23884__$1,inst_23882);
} else
{if((state_val_23885 === (4)))
{var state_23884__$1 = state_23884;var statearr_23888_23902 = state_23884__$1;(statearr_23888_23902[(2)] = null);
(statearr_23888_23902[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23885 === (3)))
{var inst_23866 = (state_23884[(7)]);var inst_23869 = console.debug("Figwheel: loaded these files");var inst_23870 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23866);var inst_23871 = cljs.core.prn_str.call(null,inst_23870);var inst_23872 = console.log(inst_23871);var inst_23873 = cljs.core.async.timeout.call(null,(10));var state_23884__$1 = (function (){var statearr_23889 = state_23884;(statearr_23889[(9)] = inst_23869);
(statearr_23889[(10)] = inst_23872);
return statearr_23889;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23884__$1,(6),inst_23873);
} else
{if((state_val_23885 === (2)))
{var inst_23866 = (state_23884[(7)]);var inst_23866__$1 = (state_23884[(2)]);var inst_23867 = cljs.core.not_empty.call(null,inst_23866__$1);var state_23884__$1 = (function (){var statearr_23890 = state_23884;(statearr_23890[(7)] = inst_23866__$1);
return statearr_23890;
})();if(cljs.core.truth_(inst_23867))
{var statearr_23891_23903 = state_23884__$1;(statearr_23891_23903[(1)] = (3));
} else
{var statearr_23892_23904 = state_23884__$1;(statearr_23892_23904[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23885 === (1)))
{var inst_23862 = before_jsload.call(null,files);var inst_23863 = figwheel.client.add_request_urls.call(null,opts,files);var inst_23864 = figwheel.client.load_all_js_files.call(null,inst_23863);var state_23884__$1 = (function (){var statearr_23893 = state_23884;(statearr_23893[(11)] = inst_23862);
return statearr_23893;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23884__$1,(2),inst_23864);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__23860,map__23860__$1,opts,on_jsload,before_jsload,map__23861,map__23861__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__23860,map__23860__$1,opts,on_jsload,before_jsload,map__23861,map__23861__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_23897 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23897[(0)] = state_machine__5694__auto__);
(statearr_23897[(1)] = (1));
return statearr_23897;
});
var state_machine__5694__auto____1 = (function (state_23884){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_23884);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e23898){if((e23898 instanceof Object))
{var ex__5697__auto__ = e23898;var statearr_23899_23905 = state_23884;(statearr_23899_23905[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23884);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23898;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23906 = state_23884;
state_23884 = G__23906;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_23884){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_23884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__23860,map__23860__$1,opts,on_jsload,before_jsload,map__23861,map__23861__$1,files))
})();var state__5710__auto__ = (function (){var statearr_23900 = f__5709__auto__.call(null);(statearr_23900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_23900;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__23860,map__23860__$1,opts,on_jsload,before_jsload,map__23861,map__23861__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__23907,link_href){var map__23909 = p__23907;var map__23909__$1 = ((cljs.core.seq_QMARK_.call(null,map__23909))?cljs.core.apply.call(null,cljs.core.hash_map,map__23909):map__23909);var request_url = cljs.core.get.call(null,map__23909__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__23909__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_23930){var state_val_23931 = (state_23930[(1)]);if((state_val_23931 === (2)))
{var inst_23927 = (state_23930[(2)]);var inst_23928 = parent.removeChild(orig_link);var state_23930__$1 = (function (){var statearr_23932 = state_23930;(statearr_23932[(7)] = inst_23927);
return statearr_23932;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23930__$1,inst_23928);
} else
{if((state_val_23931 === (1)))
{var inst_23925 = cljs.core.async.timeout.call(null,(200));var state_23930__$1 = state_23930;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23930__$1,(2),inst_23925);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_23936 = [null,null,null,null,null,null,null,null];(statearr_23936[(0)] = state_machine__5694__auto__);
(statearr_23936[(1)] = (1));
return statearr_23936;
});
var state_machine__5694__auto____1 = (function (state_23930){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_23930);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e23937){if((e23937 instanceof Object))
{var ex__5697__auto__ = e23937;var statearr_23938_23940 = state_23930;(statearr_23938_23940[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23930);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23937;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23941 = state_23930;
state_23930 = G__23941;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_23930){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_23930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_23939 = f__5709__auto__.call(null);(statearr_23939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_23939;
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
figwheel.client.reload_css_file = (function reload_css_file(p__23942){var map__23944 = p__23942;var map__23944__$1 = ((cljs.core.seq_QMARK_.call(null,map__23944))?cljs.core.apply.call(null,cljs.core.hash_map,map__23944):map__23944);var f_data = map__23944__$1;var request_url = cljs.core.get.call(null,map__23944__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__23944__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__23945,files_msg){var map__23967 = p__23945;var map__23967__$1 = ((cljs.core.seq_QMARK_.call(null,map__23967))?cljs.core.apply.call(null,cljs.core.hash_map,map__23967):map__23967);var opts = map__23967__$1;var on_cssload = cljs.core.get.call(null,map__23967__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__23968_23988 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__23969_23989 = null;var count__23970_23990 = (0);var i__23971_23991 = (0);while(true){
if((i__23971_23991 < count__23970_23990))
{var f_23992 = cljs.core._nth.call(null,chunk__23969_23989,i__23971_23991);figwheel.client.reload_css_file.call(null,f_23992);
{
var G__23993 = seq__23968_23988;
var G__23994 = chunk__23969_23989;
var G__23995 = count__23970_23990;
var G__23996 = (i__23971_23991 + (1));
seq__23968_23988 = G__23993;
chunk__23969_23989 = G__23994;
count__23970_23990 = G__23995;
i__23971_23991 = G__23996;
continue;
}
} else
{var temp__4126__auto___23997 = cljs.core.seq.call(null,seq__23968_23988);if(temp__4126__auto___23997)
{var seq__23968_23998__$1 = temp__4126__auto___23997;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23968_23998__$1))
{var c__4314__auto___23999 = cljs.core.chunk_first.call(null,seq__23968_23998__$1);{
var G__24000 = cljs.core.chunk_rest.call(null,seq__23968_23998__$1);
var G__24001 = c__4314__auto___23999;
var G__24002 = cljs.core.count.call(null,c__4314__auto___23999);
var G__24003 = (0);
seq__23968_23988 = G__24000;
chunk__23969_23989 = G__24001;
count__23970_23990 = G__24002;
i__23971_23991 = G__24003;
continue;
}
} else
{var f_24004 = cljs.core.first.call(null,seq__23968_23998__$1);figwheel.client.reload_css_file.call(null,f_24004);
{
var G__24005 = cljs.core.next.call(null,seq__23968_23998__$1);
var G__24006 = null;
var G__24007 = (0);
var G__24008 = (0);
seq__23968_23988 = G__24005;
chunk__23969_23989 = G__24006;
count__23970_23990 = G__24007;
i__23971_23991 = G__24008;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__23967,map__23967__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__23967,map__23967__$1,opts,on_cssload){
return (function (state_23978){var state_val_23979 = (state_23978[(1)]);if((state_val_23979 === (2)))
{var inst_23974 = (state_23978[(2)]);var inst_23975 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_23976 = on_cssload.call(null,inst_23975);var state_23978__$1 = (function (){var statearr_23980 = state_23978;(statearr_23980[(7)] = inst_23974);
return statearr_23980;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23978__$1,inst_23976);
} else
{if((state_val_23979 === (1)))
{var inst_23972 = cljs.core.async.timeout.call(null,(100));var state_23978__$1 = state_23978;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23978__$1,(2),inst_23972);
} else
{return null;
}
}
});})(c__5708__auto__,map__23967,map__23967__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__23967,map__23967__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_23984 = [null,null,null,null,null,null,null,null];(statearr_23984[(0)] = state_machine__5694__auto__);
(statearr_23984[(1)] = (1));
return statearr_23984;
});
var state_machine__5694__auto____1 = (function (state_23978){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_23978);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e23985){if((e23985 instanceof Object))
{var ex__5697__auto__ = e23985;var statearr_23986_24009 = state_23978;(statearr_23986_24009[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23978);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23985;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24010 = state_23978;
state_23978 = G__24010;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_23978){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_23978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__23967,map__23967__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_23987 = f__5709__auto__.call(null);(statearr_23987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_23987;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__23967,map__23967__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__24011){var map__24016 = p__24011;var map__24016__$1 = ((cljs.core.seq_QMARK_.call(null,map__24016))?cljs.core.apply.call(null,cljs.core.hash_map,map__24016):map__24016);var opts = map__24016__$1;var on_compile_fail = cljs.core.get.call(null,map__24016__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__24016__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__24016__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__24016__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__24016,map__24016__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__24017 = cljs.core._EQ_;var expr__24018 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__24017.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__24018)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__24017.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__24018)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__24017.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24018)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__24016,map__24016__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__24016,map__24016__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__24016,map__24016__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__24016,map__24016__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__24016,map__24016__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__24016,map__24016__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__24016,map__24016__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__24016,map__24016__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__24016,map__24016__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj24023 = {"detail":url};return obj24023;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__24024){var map__24026 = p__24024;var map__24026__$1 = ((cljs.core.seq_QMARK_.call(null,map__24026))?cljs.core.apply.call(null,cljs.core.hash_map,map__24026):map__24026);var class$ = cljs.core.get.call(null,map__24026__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__24026__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__24027){var map__24033 = p__24027;var map__24033__$1 = ((cljs.core.seq_QMARK_.call(null,map__24033))?cljs.core.apply.call(null,cljs.core.hash_map,map__24033):map__24033);var ed = map__24033__$1;var exception_data = cljs.core.get.call(null,map__24033__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__24033__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__24034_24038 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__24035_24039 = null;var count__24036_24040 = (0);var i__24037_24041 = (0);while(true){
if((i__24037_24041 < count__24036_24040))
{var msg_24042 = cljs.core._nth.call(null,chunk__24035_24039,i__24037_24041);console.log(msg_24042);
{
var G__24043 = seq__24034_24038;
var G__24044 = chunk__24035_24039;
var G__24045 = count__24036_24040;
var G__24046 = (i__24037_24041 + (1));
seq__24034_24038 = G__24043;
chunk__24035_24039 = G__24044;
count__24036_24040 = G__24045;
i__24037_24041 = G__24046;
continue;
}
} else
{var temp__4126__auto___24047 = cljs.core.seq.call(null,seq__24034_24038);if(temp__4126__auto___24047)
{var seq__24034_24048__$1 = temp__4126__auto___24047;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24034_24048__$1))
{var c__4314__auto___24049 = cljs.core.chunk_first.call(null,seq__24034_24048__$1);{
var G__24050 = cljs.core.chunk_rest.call(null,seq__24034_24048__$1);
var G__24051 = c__4314__auto___24049;
var G__24052 = cljs.core.count.call(null,c__4314__auto___24049);
var G__24053 = (0);
seq__24034_24038 = G__24050;
chunk__24035_24039 = G__24051;
count__24036_24040 = G__24052;
i__24037_24041 = G__24053;
continue;
}
} else
{var msg_24054 = cljs.core.first.call(null,seq__24034_24048__$1);console.log(msg_24054);
{
var G__24055 = cljs.core.next.call(null,seq__24034_24048__$1);
var G__24056 = null;
var G__24057 = (0);
var G__24058 = (0);
seq__24034_24038 = G__24055;
chunk__24035_24039 = G__24056;
count__24036_24040 = G__24057;
i__24037_24041 = G__24058;
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
var watch_and_reload__delegate = function (p__24059){var map__24061 = p__24059;var map__24061__$1 = ((cljs.core.seq_QMARK_.call(null,map__24061))?cljs.core.apply.call(null,cljs.core.hash_map,map__24061):map__24061);var opts = map__24061__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__24059 = null;if (arguments.length > 0) {
  p__24059 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__24059);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__24062){
var p__24059 = cljs.core.seq(arglist__24062);
return watch_and_reload__delegate(p__24059);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
