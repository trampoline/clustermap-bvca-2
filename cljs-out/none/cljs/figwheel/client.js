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
var log__delegate = function (p__27855,args){var map__27857 = p__27855;var map__27857__$1 = ((cljs.core.seq_QMARK_.call(null,map__27857))?cljs.core.apply.call(null,cljs.core.hash_map,map__27857):map__27857);var debug = cljs.core.get.call(null,map__27857__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__27855,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__27855,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__27858){
var p__27855 = cljs.core.first(arglist__27858);
var args = cljs.core.rest(arglist__27858);
return log__delegate(p__27855,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__27859){var map__27861 = p__27859;var map__27861__$1 = ((cljs.core.seq_QMARK_.call(null,map__27861))?cljs.core.apply.call(null,cljs.core.hash_map,map__27861):map__27861);var websocket_url = cljs.core.get.call(null,map__27861__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__27862,callback){var map__27864 = p__27862;var map__27864__$1 = ((cljs.core.seq_QMARK_.call(null,map__27864))?cljs.core.apply.call(null,cljs.core.hash_map,map__27864):map__27864);var msg = map__27864__$1;var dependency_file = cljs.core.get.call(null,map__27864__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__27864__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__27864__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__7900__auto__ = dependency_file;if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__27864,map__27864__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__27864,map__27864__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__27865,p__27866){var map__27869 = p__27865;var map__27869__$1 = ((cljs.core.seq_QMARK_.call(null,map__27869))?cljs.core.apply.call(null,cljs.core.hash_map,map__27869):map__27869);var opts = map__27869__$1;var url_rewriter = cljs.core.get.call(null,map__27869__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__27870 = p__27866;var map__27870__$1 = ((cljs.core.seq_QMARK_.call(null,map__27870))?cljs.core.apply.call(null,cljs.core.hash_map,map__27870):map__27870);var d = map__27870__$1;var file = cljs.core.get.call(null,map__27870__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__27871,p__27872){var map__27914 = p__27871;var map__27914__$1 = ((cljs.core.seq_QMARK_.call(null,map__27914))?cljs.core.apply.call(null,cljs.core.hash_map,map__27914):map__27914);var opts = map__27914__$1;var on_jsload = cljs.core.get.call(null,map__27914__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__27914__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__27915 = p__27872;var map__27915__$1 = ((cljs.core.seq_QMARK_.call(null,map__27915))?cljs.core.apply.call(null,cljs.core.hash_map,map__27915):map__27915);var files = cljs.core.get.call(null,map__27915__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__9759__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto__,map__27914,map__27914__$1,opts,on_jsload,before_jsload,map__27915,map__27915__$1,files){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto__,map__27914,map__27914__$1,opts,on_jsload,before_jsload,map__27915,map__27915__$1,files){
return (function (state_27938){var state_val_27939 = (state_27938[(1)]);if((state_val_27939 === (6)))
{var inst_27920 = (state_27938[(7)]);var inst_27929 = (state_27938[(2)]);var inst_27930 = cljs.core.PersistentVector.EMPTY_NODE;var inst_27931 = [inst_27920];var inst_27932 = (new cljs.core.PersistentVector(null,1,(5),inst_27930,inst_27931,null));var inst_27933 = cljs.core.apply.call(null,on_jsload,inst_27932);var state_27938__$1 = (function (){var statearr_27940 = state_27938;(statearr_27940[(8)] = inst_27929);
return statearr_27940;
})();var statearr_27941_27955 = state_27938__$1;(statearr_27941_27955[(2)] = inst_27933);
(statearr_27941_27955[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27939 === (5)))
{var inst_27936 = (state_27938[(2)]);var state_27938__$1 = state_27938;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27938__$1,inst_27936);
} else
{if((state_val_27939 === (4)))
{var state_27938__$1 = state_27938;var statearr_27942_27956 = state_27938__$1;(statearr_27942_27956[(2)] = null);
(statearr_27942_27956[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27939 === (3)))
{var inst_27920 = (state_27938[(7)]);var inst_27923 = console.debug("Figwheel: loaded these files");var inst_27924 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27920);var inst_27925 = cljs.core.prn_str.call(null,inst_27924);var inst_27926 = console.log(inst_27925);var inst_27927 = cljs.core.async.timeout.call(null,(10));var state_27938__$1 = (function (){var statearr_27943 = state_27938;(statearr_27943[(9)] = inst_27923);
(statearr_27943[(10)] = inst_27926);
return statearr_27943;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27938__$1,(6),inst_27927);
} else
{if((state_val_27939 === (2)))
{var inst_27920 = (state_27938[(7)]);var inst_27920__$1 = (state_27938[(2)]);var inst_27921 = cljs.core.not_empty.call(null,inst_27920__$1);var state_27938__$1 = (function (){var statearr_27944 = state_27938;(statearr_27944[(7)] = inst_27920__$1);
return statearr_27944;
})();if(cljs.core.truth_(inst_27921))
{var statearr_27945_27957 = state_27938__$1;(statearr_27945_27957[(1)] = (3));
} else
{var statearr_27946_27958 = state_27938__$1;(statearr_27946_27958[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27939 === (1)))
{var inst_27916 = before_jsload.call(null,files);var inst_27917 = figwheel.client.add_request_urls.call(null,opts,files);var inst_27918 = figwheel.client.load_all_js_files.call(null,inst_27917);var state_27938__$1 = (function (){var statearr_27947 = state_27938;(statearr_27947[(11)] = inst_27916);
return statearr_27947;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27938__$1,(2),inst_27918);
} else
{return null;
}
}
}
}
}
}
});})(c__9759__auto__,map__27914,map__27914__$1,opts,on_jsload,before_jsload,map__27915,map__27915__$1,files))
;return ((function (switch__9744__auto__,c__9759__auto__,map__27914,map__27914__$1,opts,on_jsload,before_jsload,map__27915,map__27915__$1,files){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_27951 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27951[(0)] = state_machine__9745__auto__);
(statearr_27951[(1)] = (1));
return statearr_27951;
});
var state_machine__9745__auto____1 = (function (state_27938){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_27938);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e27952){if((e27952 instanceof Object))
{var ex__9748__auto__ = e27952;var statearr_27953_27959 = state_27938;(statearr_27953_27959[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27938);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27952;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27960 = state_27938;
state_27938 = G__27960;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_27938){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_27938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto__,map__27914,map__27914__$1,opts,on_jsload,before_jsload,map__27915,map__27915__$1,files))
})();var state__9761__auto__ = (function (){var statearr_27954 = f__9760__auto__.call(null);(statearr_27954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto__);
return statearr_27954;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto__,map__27914,map__27914__$1,opts,on_jsload,before_jsload,map__27915,map__27915__$1,files))
);
return c__9759__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__27961,link_href){var map__27963 = p__27961;var map__27963__$1 = ((cljs.core.seq_QMARK_.call(null,map__27963))?cljs.core.apply.call(null,cljs.core.hash_map,map__27963):map__27963);var request_url = cljs.core.get.call(null,map__27963__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__27963__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__9759__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto__,parent){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto__,parent){
return (function (state_27984){var state_val_27985 = (state_27984[(1)]);if((state_val_27985 === (2)))
{var inst_27981 = (state_27984[(2)]);var inst_27982 = parent.removeChild(orig_link);var state_27984__$1 = (function (){var statearr_27986 = state_27984;(statearr_27986[(7)] = inst_27981);
return statearr_27986;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27984__$1,inst_27982);
} else
{if((state_val_27985 === (1)))
{var inst_27979 = cljs.core.async.timeout.call(null,(200));var state_27984__$1 = state_27984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27984__$1,(2),inst_27979);
} else
{return null;
}
}
});})(c__9759__auto__,parent))
;return ((function (switch__9744__auto__,c__9759__auto__,parent){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_27990 = [null,null,null,null,null,null,null,null];(statearr_27990[(0)] = state_machine__9745__auto__);
(statearr_27990[(1)] = (1));
return statearr_27990;
});
var state_machine__9745__auto____1 = (function (state_27984){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_27984);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e27991){if((e27991 instanceof Object))
{var ex__9748__auto__ = e27991;var statearr_27992_27994 = state_27984;(statearr_27992_27994[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27984);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27991;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27995 = state_27984;
state_27984 = G__27995;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_27984){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_27984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto__,parent))
})();var state__9761__auto__ = (function (){var statearr_27993 = f__9760__auto__.call(null);(statearr_27993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto__);
return statearr_27993;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto__,parent))
);
return c__9759__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__27996){var map__27998 = p__27996;var map__27998__$1 = ((cljs.core.seq_QMARK_.call(null,map__27998))?cljs.core.apply.call(null,cljs.core.hash_map,map__27998):map__27998);var f_data = map__27998__$1;var request_url = cljs.core.get.call(null,map__27998__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__27998__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__27999,files_msg){var map__28021 = p__27999;var map__28021__$1 = ((cljs.core.seq_QMARK_.call(null,map__28021))?cljs.core.apply.call(null,cljs.core.hash_map,map__28021):map__28021);var opts = map__28021__$1;var on_cssload = cljs.core.get.call(null,map__28021__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__28022_28042 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__28023_28043 = null;var count__28024_28044 = (0);var i__28025_28045 = (0);while(true){
if((i__28025_28045 < count__28024_28044))
{var f_28046 = cljs.core._nth.call(null,chunk__28023_28043,i__28025_28045);figwheel.client.reload_css_file.call(null,f_28046);
{
var G__28047 = seq__28022_28042;
var G__28048 = chunk__28023_28043;
var G__28049 = count__28024_28044;
var G__28050 = (i__28025_28045 + (1));
seq__28022_28042 = G__28047;
chunk__28023_28043 = G__28048;
count__28024_28044 = G__28049;
i__28025_28045 = G__28050;
continue;
}
} else
{var temp__4126__auto___28051 = cljs.core.seq.call(null,seq__28022_28042);if(temp__4126__auto___28051)
{var seq__28022_28052__$1 = temp__4126__auto___28051;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28022_28052__$1))
{var c__8656__auto___28053 = cljs.core.chunk_first.call(null,seq__28022_28052__$1);{
var G__28054 = cljs.core.chunk_rest.call(null,seq__28022_28052__$1);
var G__28055 = c__8656__auto___28053;
var G__28056 = cljs.core.count.call(null,c__8656__auto___28053);
var G__28057 = (0);
seq__28022_28042 = G__28054;
chunk__28023_28043 = G__28055;
count__28024_28044 = G__28056;
i__28025_28045 = G__28057;
continue;
}
} else
{var f_28058 = cljs.core.first.call(null,seq__28022_28052__$1);figwheel.client.reload_css_file.call(null,f_28058);
{
var G__28059 = cljs.core.next.call(null,seq__28022_28052__$1);
var G__28060 = null;
var G__28061 = (0);
var G__28062 = (0);
seq__28022_28042 = G__28059;
chunk__28023_28043 = G__28060;
count__28024_28044 = G__28061;
i__28025_28045 = G__28062;
continue;
}
}
} else
{}
}
break;
}
var c__9759__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto__,map__28021,map__28021__$1,opts,on_cssload){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto__,map__28021,map__28021__$1,opts,on_cssload){
return (function (state_28032){var state_val_28033 = (state_28032[(1)]);if((state_val_28033 === (2)))
{var inst_28028 = (state_28032[(2)]);var inst_28029 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_28030 = on_cssload.call(null,inst_28029);var state_28032__$1 = (function (){var statearr_28034 = state_28032;(statearr_28034[(7)] = inst_28028);
return statearr_28034;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28032__$1,inst_28030);
} else
{if((state_val_28033 === (1)))
{var inst_28026 = cljs.core.async.timeout.call(null,(100));var state_28032__$1 = state_28032;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28032__$1,(2),inst_28026);
} else
{return null;
}
}
});})(c__9759__auto__,map__28021,map__28021__$1,opts,on_cssload))
;return ((function (switch__9744__auto__,c__9759__auto__,map__28021,map__28021__$1,opts,on_cssload){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_28038 = [null,null,null,null,null,null,null,null];(statearr_28038[(0)] = state_machine__9745__auto__);
(statearr_28038[(1)] = (1));
return statearr_28038;
});
var state_machine__9745__auto____1 = (function (state_28032){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_28032);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e28039){if((e28039 instanceof Object))
{var ex__9748__auto__ = e28039;var statearr_28040_28063 = state_28032;(statearr_28040_28063[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28032);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28039;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28064 = state_28032;
state_28032 = G__28064;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_28032){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_28032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto__,map__28021,map__28021__$1,opts,on_cssload))
})();var state__9761__auto__ = (function (){var statearr_28041 = f__9760__auto__.call(null);(statearr_28041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto__);
return statearr_28041;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto__,map__28021,map__28021__$1,opts,on_cssload))
);
return c__9759__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__28065){var map__28070 = p__28065;var map__28070__$1 = ((cljs.core.seq_QMARK_.call(null,map__28070))?cljs.core.apply.call(null,cljs.core.hash_map,map__28070):map__28070);var opts = map__28070__$1;var on_compile_fail = cljs.core.get.call(null,map__28070__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__28070__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__28070__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__28070__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__28070,map__28070__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__28071 = cljs.core._EQ_;var expr__28072 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__28071.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__28072)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__28071.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__28072)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__28071.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28072)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__28070,map__28070__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__28070,map__28070__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__28070,map__28070__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__28070,map__28070__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__28070,map__28070__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__28070,map__28070__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__28070,map__28070__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__28070,map__28070__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__28070,map__28070__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj28077 = {"detail":url};return obj28077;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__28078){var map__28080 = p__28078;var map__28080__$1 = ((cljs.core.seq_QMARK_.call(null,map__28080))?cljs.core.apply.call(null,cljs.core.hash_map,map__28080):map__28080);var class$ = cljs.core.get.call(null,map__28080__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__28080__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__28081){var map__28087 = p__28081;var map__28087__$1 = ((cljs.core.seq_QMARK_.call(null,map__28087))?cljs.core.apply.call(null,cljs.core.hash_map,map__28087):map__28087);var ed = map__28087__$1;var exception_data = cljs.core.get.call(null,map__28087__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__28087__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__28088_28092 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__28089_28093 = null;var count__28090_28094 = (0);var i__28091_28095 = (0);while(true){
if((i__28091_28095 < count__28090_28094))
{var msg_28096 = cljs.core._nth.call(null,chunk__28089_28093,i__28091_28095);console.log(msg_28096);
{
var G__28097 = seq__28088_28092;
var G__28098 = chunk__28089_28093;
var G__28099 = count__28090_28094;
var G__28100 = (i__28091_28095 + (1));
seq__28088_28092 = G__28097;
chunk__28089_28093 = G__28098;
count__28090_28094 = G__28099;
i__28091_28095 = G__28100;
continue;
}
} else
{var temp__4126__auto___28101 = cljs.core.seq.call(null,seq__28088_28092);if(temp__4126__auto___28101)
{var seq__28088_28102__$1 = temp__4126__auto___28101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28088_28102__$1))
{var c__8656__auto___28103 = cljs.core.chunk_first.call(null,seq__28088_28102__$1);{
var G__28104 = cljs.core.chunk_rest.call(null,seq__28088_28102__$1);
var G__28105 = c__8656__auto___28103;
var G__28106 = cljs.core.count.call(null,c__8656__auto___28103);
var G__28107 = (0);
seq__28088_28092 = G__28104;
chunk__28089_28093 = G__28105;
count__28090_28094 = G__28106;
i__28091_28095 = G__28107;
continue;
}
} else
{var msg_28108 = cljs.core.first.call(null,seq__28088_28102__$1);console.log(msg_28108);
{
var G__28109 = cljs.core.next.call(null,seq__28088_28102__$1);
var G__28110 = null;
var G__28111 = (0);
var G__28112 = (0);
seq__28088_28092 = G__28109;
chunk__28089_28093 = G__28110;
count__28090_28094 = G__28111;
i__28091_28095 = G__28112;
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
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__7900__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
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
var watch_and_reload__delegate = function (p__28113){var map__28115 = p__28113;var map__28115__$1 = ((cljs.core.seq_QMARK_.call(null,map__28115))?cljs.core.apply.call(null,cljs.core.hash_map,map__28115):map__28115);var opts = map__28115__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__28113 = null;if (arguments.length > 0) {
  p__28113 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__28113);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__28116){
var p__28113 = cljs.core.seq(arglist__28116);
return watch_and_reload__delegate(p__28113);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map