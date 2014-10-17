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
var log__delegate = function (p__23804,args){var map__23806 = p__23804;var map__23806__$1 = ((cljs.core.seq_QMARK_.call(null,map__23806))?cljs.core.apply.call(null,cljs.core.hash_map,map__23806):map__23806);var debug = cljs.core.get.call(null,map__23806__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__23804,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__23804,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__23807){
var p__23804 = cljs.core.first(arglist__23807);
var args = cljs.core.rest(arglist__23807);
return log__delegate(p__23804,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__23808){var map__23810 = p__23808;var map__23810__$1 = ((cljs.core.seq_QMARK_.call(null,map__23810))?cljs.core.apply.call(null,cljs.core.hash_map,map__23810):map__23810);var websocket_url = cljs.core.get.call(null,map__23810__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__23811,callback){var map__23813 = p__23811;var map__23813__$1 = ((cljs.core.seq_QMARK_.call(null,map__23813))?cljs.core.apply.call(null,cljs.core.hash_map,map__23813):map__23813);var msg = map__23813__$1;var dependency_file = cljs.core.get.call(null,map__23813__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__23813__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__23813__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__23813,map__23813__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__23813,map__23813__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__23814,p__23815){var map__23818 = p__23814;var map__23818__$1 = ((cljs.core.seq_QMARK_.call(null,map__23818))?cljs.core.apply.call(null,cljs.core.hash_map,map__23818):map__23818);var opts = map__23818__$1;var url_rewriter = cljs.core.get.call(null,map__23818__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__23819 = p__23815;var map__23819__$1 = ((cljs.core.seq_QMARK_.call(null,map__23819))?cljs.core.apply.call(null,cljs.core.hash_map,map__23819):map__23819);var d = map__23819__$1;var file = cljs.core.get.call(null,map__23819__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__23820,p__23821){var map__23863 = p__23820;var map__23863__$1 = ((cljs.core.seq_QMARK_.call(null,map__23863))?cljs.core.apply.call(null,cljs.core.hash_map,map__23863):map__23863);var opts = map__23863__$1;var on_jsload = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__23864 = p__23821;var map__23864__$1 = ((cljs.core.seq_QMARK_.call(null,map__23864))?cljs.core.apply.call(null,cljs.core.hash_map,map__23864):map__23864);var files = cljs.core.get.call(null,map__23864__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__23863,map__23863__$1,opts,on_jsload,before_jsload,map__23864,map__23864__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__23863,map__23863__$1,opts,on_jsload,before_jsload,map__23864,map__23864__$1,files){
return (function (state_23887){var state_val_23888 = (state_23887[(1)]);if((state_val_23888 === (6)))
{var inst_23869 = (state_23887[(7)]);var inst_23878 = (state_23887[(2)]);var inst_23879 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23880 = [inst_23869];var inst_23881 = (new cljs.core.PersistentVector(null,1,(5),inst_23879,inst_23880,null));var inst_23882 = cljs.core.apply.call(null,on_jsload,inst_23881);var state_23887__$1 = (function (){var statearr_23889 = state_23887;(statearr_23889[(8)] = inst_23878);
return statearr_23889;
})();var statearr_23890_23904 = state_23887__$1;(statearr_23890_23904[(2)] = inst_23882);
(statearr_23890_23904[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23888 === (5)))
{var inst_23885 = (state_23887[(2)]);var state_23887__$1 = state_23887;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23887__$1,inst_23885);
} else
{if((state_val_23888 === (4)))
{var state_23887__$1 = state_23887;var statearr_23891_23905 = state_23887__$1;(statearr_23891_23905[(2)] = null);
(statearr_23891_23905[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23888 === (3)))
{var inst_23869 = (state_23887[(7)]);var inst_23872 = console.debug("Figwheel: loaded these files");var inst_23873 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23869);var inst_23874 = cljs.core.prn_str.call(null,inst_23873);var inst_23875 = console.log(inst_23874);var inst_23876 = cljs.core.async.timeout.call(null,(10));var state_23887__$1 = (function (){var statearr_23892 = state_23887;(statearr_23892[(9)] = inst_23875);
(statearr_23892[(10)] = inst_23872);
return statearr_23892;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23887__$1,(6),inst_23876);
} else
{if((state_val_23888 === (2)))
{var inst_23869 = (state_23887[(7)]);var inst_23869__$1 = (state_23887[(2)]);var inst_23870 = cljs.core.not_empty.call(null,inst_23869__$1);var state_23887__$1 = (function (){var statearr_23893 = state_23887;(statearr_23893[(7)] = inst_23869__$1);
return statearr_23893;
})();if(cljs.core.truth_(inst_23870))
{var statearr_23894_23906 = state_23887__$1;(statearr_23894_23906[(1)] = (3));
} else
{var statearr_23895_23907 = state_23887__$1;(statearr_23895_23907[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23888 === (1)))
{var inst_23865 = before_jsload.call(null,files);var inst_23866 = figwheel.client.add_request_urls.call(null,opts,files);var inst_23867 = figwheel.client.load_all_js_files.call(null,inst_23866);var state_23887__$1 = (function (){var statearr_23896 = state_23887;(statearr_23896[(11)] = inst_23865);
return statearr_23896;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23887__$1,(2),inst_23867);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__23863,map__23863__$1,opts,on_jsload,before_jsload,map__23864,map__23864__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__23863,map__23863__$1,opts,on_jsload,before_jsload,map__23864,map__23864__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_23900 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23900[(0)] = state_machine__5694__auto__);
(statearr_23900[(1)] = (1));
return statearr_23900;
});
var state_machine__5694__auto____1 = (function (state_23887){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_23887);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e23901){if((e23901 instanceof Object))
{var ex__5697__auto__ = e23901;var statearr_23902_23908 = state_23887;(statearr_23902_23908[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23887);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23901;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23909 = state_23887;
state_23887 = G__23909;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_23887){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_23887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__23863,map__23863__$1,opts,on_jsload,before_jsload,map__23864,map__23864__$1,files))
})();var state__5710__auto__ = (function (){var statearr_23903 = f__5709__auto__.call(null);(statearr_23903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_23903;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__23863,map__23863__$1,opts,on_jsload,before_jsload,map__23864,map__23864__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__23910,link_href){var map__23912 = p__23910;var map__23912__$1 = ((cljs.core.seq_QMARK_.call(null,map__23912))?cljs.core.apply.call(null,cljs.core.hash_map,map__23912):map__23912);var request_url = cljs.core.get.call(null,map__23912__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__23912__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_23933){var state_val_23934 = (state_23933[(1)]);if((state_val_23934 === (2)))
{var inst_23930 = (state_23933[(2)]);var inst_23931 = parent.removeChild(orig_link);var state_23933__$1 = (function (){var statearr_23935 = state_23933;(statearr_23935[(7)] = inst_23930);
return statearr_23935;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23933__$1,inst_23931);
} else
{if((state_val_23934 === (1)))
{var inst_23928 = cljs.core.async.timeout.call(null,(200));var state_23933__$1 = state_23933;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23933__$1,(2),inst_23928);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_23939 = [null,null,null,null,null,null,null,null];(statearr_23939[(0)] = state_machine__5694__auto__);
(statearr_23939[(1)] = (1));
return statearr_23939;
});
var state_machine__5694__auto____1 = (function (state_23933){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_23933);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e23940){if((e23940 instanceof Object))
{var ex__5697__auto__ = e23940;var statearr_23941_23943 = state_23933;(statearr_23941_23943[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23933);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23940;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23944 = state_23933;
state_23933 = G__23944;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_23933){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_23933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_23942 = f__5709__auto__.call(null);(statearr_23942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_23942;
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
figwheel.client.reload_css_file = (function reload_css_file(p__23945){var map__23947 = p__23945;var map__23947__$1 = ((cljs.core.seq_QMARK_.call(null,map__23947))?cljs.core.apply.call(null,cljs.core.hash_map,map__23947):map__23947);var f_data = map__23947__$1;var request_url = cljs.core.get.call(null,map__23947__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__23947__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__23948,files_msg){var map__23970 = p__23948;var map__23970__$1 = ((cljs.core.seq_QMARK_.call(null,map__23970))?cljs.core.apply.call(null,cljs.core.hash_map,map__23970):map__23970);var opts = map__23970__$1;var on_cssload = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__23971_23991 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__23972_23992 = null;var count__23973_23993 = (0);var i__23974_23994 = (0);while(true){
if((i__23974_23994 < count__23973_23993))
{var f_23995 = cljs.core._nth.call(null,chunk__23972_23992,i__23974_23994);figwheel.client.reload_css_file.call(null,f_23995);
{
var G__23996 = seq__23971_23991;
var G__23997 = chunk__23972_23992;
var G__23998 = count__23973_23993;
var G__23999 = (i__23974_23994 + (1));
seq__23971_23991 = G__23996;
chunk__23972_23992 = G__23997;
count__23973_23993 = G__23998;
i__23974_23994 = G__23999;
continue;
}
} else
{var temp__4126__auto___24000 = cljs.core.seq.call(null,seq__23971_23991);if(temp__4126__auto___24000)
{var seq__23971_24001__$1 = temp__4126__auto___24000;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23971_24001__$1))
{var c__4314__auto___24002 = cljs.core.chunk_first.call(null,seq__23971_24001__$1);{
var G__24003 = cljs.core.chunk_rest.call(null,seq__23971_24001__$1);
var G__24004 = c__4314__auto___24002;
var G__24005 = cljs.core.count.call(null,c__4314__auto___24002);
var G__24006 = (0);
seq__23971_23991 = G__24003;
chunk__23972_23992 = G__24004;
count__23973_23993 = G__24005;
i__23974_23994 = G__24006;
continue;
}
} else
{var f_24007 = cljs.core.first.call(null,seq__23971_24001__$1);figwheel.client.reload_css_file.call(null,f_24007);
{
var G__24008 = cljs.core.next.call(null,seq__23971_24001__$1);
var G__24009 = null;
var G__24010 = (0);
var G__24011 = (0);
seq__23971_23991 = G__24008;
chunk__23972_23992 = G__24009;
count__23973_23993 = G__24010;
i__23974_23994 = G__24011;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__23970,map__23970__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__23970,map__23970__$1,opts,on_cssload){
return (function (state_23981){var state_val_23982 = (state_23981[(1)]);if((state_val_23982 === (2)))
{var inst_23977 = (state_23981[(2)]);var inst_23978 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_23979 = on_cssload.call(null,inst_23978);var state_23981__$1 = (function (){var statearr_23983 = state_23981;(statearr_23983[(7)] = inst_23977);
return statearr_23983;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23981__$1,inst_23979);
} else
{if((state_val_23982 === (1)))
{var inst_23975 = cljs.core.async.timeout.call(null,(100));var state_23981__$1 = state_23981;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23981__$1,(2),inst_23975);
} else
{return null;
}
}
});})(c__5708__auto__,map__23970,map__23970__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__23970,map__23970__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_23987 = [null,null,null,null,null,null,null,null];(statearr_23987[(0)] = state_machine__5694__auto__);
(statearr_23987[(1)] = (1));
return statearr_23987;
});
var state_machine__5694__auto____1 = (function (state_23981){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_23981);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e23988){if((e23988 instanceof Object))
{var ex__5697__auto__ = e23988;var statearr_23989_24012 = state_23981;(statearr_23989_24012[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23981);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23988;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24013 = state_23981;
state_23981 = G__24013;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_23981){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_23981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__23970,map__23970__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_23990 = f__5709__auto__.call(null);(statearr_23990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_23990;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__23970,map__23970__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__24014){var map__24019 = p__24014;var map__24019__$1 = ((cljs.core.seq_QMARK_.call(null,map__24019))?cljs.core.apply.call(null,cljs.core.hash_map,map__24019):map__24019);var opts = map__24019__$1;var on_compile_fail = cljs.core.get.call(null,map__24019__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__24019__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__24019__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__24019__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__24019,map__24019__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__24020 = cljs.core._EQ_;var expr__24021 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__24020.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__24021)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__24020.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__24021)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__24020.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24021)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__24019,map__24019__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__24019,map__24019__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__24019,map__24019__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__24019,map__24019__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__24019,map__24019__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__24019,map__24019__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__24019,map__24019__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__24019,map__24019__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__24019,map__24019__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj24026 = {"detail":url};return obj24026;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__24027){var map__24029 = p__24027;var map__24029__$1 = ((cljs.core.seq_QMARK_.call(null,map__24029))?cljs.core.apply.call(null,cljs.core.hash_map,map__24029):map__24029);var class$ = cljs.core.get.call(null,map__24029__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__24029__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__24030){var map__24036 = p__24030;var map__24036__$1 = ((cljs.core.seq_QMARK_.call(null,map__24036))?cljs.core.apply.call(null,cljs.core.hash_map,map__24036):map__24036);var ed = map__24036__$1;var exception_data = cljs.core.get.call(null,map__24036__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__24036__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__24037_24041 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__24038_24042 = null;var count__24039_24043 = (0);var i__24040_24044 = (0);while(true){
if((i__24040_24044 < count__24039_24043))
{var msg_24045 = cljs.core._nth.call(null,chunk__24038_24042,i__24040_24044);console.log(msg_24045);
{
var G__24046 = seq__24037_24041;
var G__24047 = chunk__24038_24042;
var G__24048 = count__24039_24043;
var G__24049 = (i__24040_24044 + (1));
seq__24037_24041 = G__24046;
chunk__24038_24042 = G__24047;
count__24039_24043 = G__24048;
i__24040_24044 = G__24049;
continue;
}
} else
{var temp__4126__auto___24050 = cljs.core.seq.call(null,seq__24037_24041);if(temp__4126__auto___24050)
{var seq__24037_24051__$1 = temp__4126__auto___24050;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24037_24051__$1))
{var c__4314__auto___24052 = cljs.core.chunk_first.call(null,seq__24037_24051__$1);{
var G__24053 = cljs.core.chunk_rest.call(null,seq__24037_24051__$1);
var G__24054 = c__4314__auto___24052;
var G__24055 = cljs.core.count.call(null,c__4314__auto___24052);
var G__24056 = (0);
seq__24037_24041 = G__24053;
chunk__24038_24042 = G__24054;
count__24039_24043 = G__24055;
i__24040_24044 = G__24056;
continue;
}
} else
{var msg_24057 = cljs.core.first.call(null,seq__24037_24051__$1);console.log(msg_24057);
{
var G__24058 = cljs.core.next.call(null,seq__24037_24051__$1);
var G__24059 = null;
var G__24060 = (0);
var G__24061 = (0);
seq__24037_24041 = G__24058;
chunk__24038_24042 = G__24059;
count__24039_24043 = G__24060;
i__24040_24044 = G__24061;
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
var watch_and_reload__delegate = function (p__24062){var map__24064 = p__24062;var map__24064__$1 = ((cljs.core.seq_QMARK_.call(null,map__24064))?cljs.core.apply.call(null,cljs.core.hash_map,map__24064):map__24064);var opts = map__24064__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__24062 = null;if (arguments.length > 0) {
  p__24062 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__24062);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__24065){
var p__24062 = cljs.core.seq(arglist__24065);
return watch_and_reload__delegate(p__24062);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
