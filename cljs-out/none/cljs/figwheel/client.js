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
var log__delegate = function (p__67922,args){var map__67924 = p__67922;var map__67924__$1 = ((cljs.core.seq_QMARK_.call(null,map__67924))?cljs.core.apply.call(null,cljs.core.hash_map,map__67924):map__67924);var debug = cljs.core.get.call(null,map__67924__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__67922,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__67922,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__67925){
var p__67922 = cljs.core.first(arglist__67925);
var args = cljs.core.rest(arglist__67925);
return log__delegate(p__67922,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__67926){var map__67928 = p__67926;var map__67928__$1 = ((cljs.core.seq_QMARK_.call(null,map__67928))?cljs.core.apply.call(null,cljs.core.hash_map,map__67928):map__67928);var websocket_url = cljs.core.get.call(null,map__67928__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__67929,callback){var map__67931 = p__67929;var map__67931__$1 = ((cljs.core.seq_QMARK_.call(null,map__67931))?cljs.core.apply.call(null,cljs.core.hash_map,map__67931):map__67931);var msg = map__67931__$1;var dependency_file = cljs.core.get.call(null,map__67931__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__67931__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__67931__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__67931,map__67931__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__67931,map__67931__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__67932,p__67933){var map__67936 = p__67932;var map__67936__$1 = ((cljs.core.seq_QMARK_.call(null,map__67936))?cljs.core.apply.call(null,cljs.core.hash_map,map__67936):map__67936);var opts = map__67936__$1;var url_rewriter = cljs.core.get.call(null,map__67936__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__67937 = p__67933;var map__67937__$1 = ((cljs.core.seq_QMARK_.call(null,map__67937))?cljs.core.apply.call(null,cljs.core.hash_map,map__67937):map__67937);var d = map__67937__$1;var file = cljs.core.get.call(null,map__67937__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__67938,p__67939){var map__67981 = p__67938;var map__67981__$1 = ((cljs.core.seq_QMARK_.call(null,map__67981))?cljs.core.apply.call(null,cljs.core.hash_map,map__67981):map__67981);var opts = map__67981__$1;var on_jsload = cljs.core.get.call(null,map__67981__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__67981__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__67982 = p__67939;var map__67982__$1 = ((cljs.core.seq_QMARK_.call(null,map__67982))?cljs.core.apply.call(null,cljs.core.hash_map,map__67982):map__67982);var files = cljs.core.get.call(null,map__67982__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__67981,map__67981__$1,opts,on_jsload,before_jsload,map__67982,map__67982__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__67981,map__67981__$1,opts,on_jsload,before_jsload,map__67982,map__67982__$1,files){
return (function (state_68005){var state_val_68006 = (state_68005[(1)]);if((state_val_68006 === (6)))
{var inst_67987 = (state_68005[(7)]);var inst_67996 = (state_68005[(2)]);var inst_67997 = cljs.core.PersistentVector.EMPTY_NODE;var inst_67998 = [inst_67987];var inst_67999 = (new cljs.core.PersistentVector(null,1,(5),inst_67997,inst_67998,null));var inst_68000 = cljs.core.apply.call(null,on_jsload,inst_67999);var state_68005__$1 = (function (){var statearr_68007 = state_68005;(statearr_68007[(8)] = inst_67996);
return statearr_68007;
})();var statearr_68008_68022 = state_68005__$1;(statearr_68008_68022[(2)] = inst_68000);
(statearr_68008_68022[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68006 === (5)))
{var inst_68003 = (state_68005[(2)]);var state_68005__$1 = state_68005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68005__$1,inst_68003);
} else
{if((state_val_68006 === (4)))
{var state_68005__$1 = state_68005;var statearr_68009_68023 = state_68005__$1;(statearr_68009_68023[(2)] = null);
(statearr_68009_68023[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68006 === (3)))
{var inst_67987 = (state_68005[(7)]);var inst_67990 = console.debug("Figwheel: loaded these files");var inst_67991 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_67987);var inst_67992 = cljs.core.prn_str.call(null,inst_67991);var inst_67993 = console.log(inst_67992);var inst_67994 = cljs.core.async.timeout.call(null,(10));var state_68005__$1 = (function (){var statearr_68010 = state_68005;(statearr_68010[(9)] = inst_67990);
(statearr_68010[(10)] = inst_67993);
return statearr_68010;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68005__$1,(6),inst_67994);
} else
{if((state_val_68006 === (2)))
{var inst_67987 = (state_68005[(7)]);var inst_67987__$1 = (state_68005[(2)]);var inst_67988 = cljs.core.not_empty.call(null,inst_67987__$1);var state_68005__$1 = (function (){var statearr_68011 = state_68005;(statearr_68011[(7)] = inst_67987__$1);
return statearr_68011;
})();if(cljs.core.truth_(inst_67988))
{var statearr_68012_68024 = state_68005__$1;(statearr_68012_68024[(1)] = (3));
} else
{var statearr_68013_68025 = state_68005__$1;(statearr_68013_68025[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68006 === (1)))
{var inst_67983 = before_jsload.call(null,files);var inst_67984 = figwheel.client.add_request_urls.call(null,opts,files);var inst_67985 = figwheel.client.load_all_js_files.call(null,inst_67984);var state_68005__$1 = (function (){var statearr_68014 = state_68005;(statearr_68014[(11)] = inst_67983);
return statearr_68014;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68005__$1,(2),inst_67985);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__67981,map__67981__$1,opts,on_jsload,before_jsload,map__67982,map__67982__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__67981,map__67981__$1,opts,on_jsload,before_jsload,map__67982,map__67982__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_68018 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_68018[(0)] = state_machine__5694__auto__);
(statearr_68018[(1)] = (1));
return statearr_68018;
});
var state_machine__5694__auto____1 = (function (state_68005){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_68005);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e68019){if((e68019 instanceof Object))
{var ex__5697__auto__ = e68019;var statearr_68020_68026 = state_68005;(statearr_68020_68026[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68005);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e68019;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__68027 = state_68005;
state_68005 = G__68027;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_68005){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_68005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__67981,map__67981__$1,opts,on_jsload,before_jsload,map__67982,map__67982__$1,files))
})();var state__5710__auto__ = (function (){var statearr_68021 = f__5709__auto__.call(null);(statearr_68021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_68021;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__67981,map__67981__$1,opts,on_jsload,before_jsload,map__67982,map__67982__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__68028,link_href){var map__68030 = p__68028;var map__68030__$1 = ((cljs.core.seq_QMARK_.call(null,map__68030))?cljs.core.apply.call(null,cljs.core.hash_map,map__68030):map__68030);var request_url = cljs.core.get.call(null,map__68030__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__68030__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_68051){var state_val_68052 = (state_68051[(1)]);if((state_val_68052 === (2)))
{var inst_68048 = (state_68051[(2)]);var inst_68049 = parent.removeChild(orig_link);var state_68051__$1 = (function (){var statearr_68053 = state_68051;(statearr_68053[(7)] = inst_68048);
return statearr_68053;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68051__$1,inst_68049);
} else
{if((state_val_68052 === (1)))
{var inst_68046 = cljs.core.async.timeout.call(null,(200));var state_68051__$1 = state_68051;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68051__$1,(2),inst_68046);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_68057 = [null,null,null,null,null,null,null,null];(statearr_68057[(0)] = state_machine__5694__auto__);
(statearr_68057[(1)] = (1));
return statearr_68057;
});
var state_machine__5694__auto____1 = (function (state_68051){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_68051);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e68058){if((e68058 instanceof Object))
{var ex__5697__auto__ = e68058;var statearr_68059_68061 = state_68051;(statearr_68059_68061[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68051);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e68058;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__68062 = state_68051;
state_68051 = G__68062;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_68051){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_68051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_68060 = f__5709__auto__.call(null);(statearr_68060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_68060;
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
figwheel.client.reload_css_file = (function reload_css_file(p__68063){var map__68065 = p__68063;var map__68065__$1 = ((cljs.core.seq_QMARK_.call(null,map__68065))?cljs.core.apply.call(null,cljs.core.hash_map,map__68065):map__68065);var f_data = map__68065__$1;var request_url = cljs.core.get.call(null,map__68065__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__68065__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__68066,files_msg){var map__68088 = p__68066;var map__68088__$1 = ((cljs.core.seq_QMARK_.call(null,map__68088))?cljs.core.apply.call(null,cljs.core.hash_map,map__68088):map__68088);var opts = map__68088__$1;var on_cssload = cljs.core.get.call(null,map__68088__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__68089_68109 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__68090_68110 = null;var count__68091_68111 = (0);var i__68092_68112 = (0);while(true){
if((i__68092_68112 < count__68091_68111))
{var f_68113 = cljs.core._nth.call(null,chunk__68090_68110,i__68092_68112);figwheel.client.reload_css_file.call(null,f_68113);
{
var G__68114 = seq__68089_68109;
var G__68115 = chunk__68090_68110;
var G__68116 = count__68091_68111;
var G__68117 = (i__68092_68112 + (1));
seq__68089_68109 = G__68114;
chunk__68090_68110 = G__68115;
count__68091_68111 = G__68116;
i__68092_68112 = G__68117;
continue;
}
} else
{var temp__4126__auto___68118 = cljs.core.seq.call(null,seq__68089_68109);if(temp__4126__auto___68118)
{var seq__68089_68119__$1 = temp__4126__auto___68118;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68089_68119__$1))
{var c__4314__auto___68120 = cljs.core.chunk_first.call(null,seq__68089_68119__$1);{
var G__68121 = cljs.core.chunk_rest.call(null,seq__68089_68119__$1);
var G__68122 = c__4314__auto___68120;
var G__68123 = cljs.core.count.call(null,c__4314__auto___68120);
var G__68124 = (0);
seq__68089_68109 = G__68121;
chunk__68090_68110 = G__68122;
count__68091_68111 = G__68123;
i__68092_68112 = G__68124;
continue;
}
} else
{var f_68125 = cljs.core.first.call(null,seq__68089_68119__$1);figwheel.client.reload_css_file.call(null,f_68125);
{
var G__68126 = cljs.core.next.call(null,seq__68089_68119__$1);
var G__68127 = null;
var G__68128 = (0);
var G__68129 = (0);
seq__68089_68109 = G__68126;
chunk__68090_68110 = G__68127;
count__68091_68111 = G__68128;
i__68092_68112 = G__68129;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__68088,map__68088__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__68088,map__68088__$1,opts,on_cssload){
return (function (state_68099){var state_val_68100 = (state_68099[(1)]);if((state_val_68100 === (2)))
{var inst_68095 = (state_68099[(2)]);var inst_68096 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_68097 = on_cssload.call(null,inst_68096);var state_68099__$1 = (function (){var statearr_68101 = state_68099;(statearr_68101[(7)] = inst_68095);
return statearr_68101;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68099__$1,inst_68097);
} else
{if((state_val_68100 === (1)))
{var inst_68093 = cljs.core.async.timeout.call(null,(100));var state_68099__$1 = state_68099;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68099__$1,(2),inst_68093);
} else
{return null;
}
}
});})(c__5708__auto__,map__68088,map__68088__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__68088,map__68088__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_68105 = [null,null,null,null,null,null,null,null];(statearr_68105[(0)] = state_machine__5694__auto__);
(statearr_68105[(1)] = (1));
return statearr_68105;
});
var state_machine__5694__auto____1 = (function (state_68099){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_68099);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e68106){if((e68106 instanceof Object))
{var ex__5697__auto__ = e68106;var statearr_68107_68130 = state_68099;(statearr_68107_68130[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68099);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e68106;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__68131 = state_68099;
state_68099 = G__68131;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_68099){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_68099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__68088,map__68088__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_68108 = f__5709__auto__.call(null);(statearr_68108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_68108;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__68088,map__68088__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__68132){var map__68137 = p__68132;var map__68137__$1 = ((cljs.core.seq_QMARK_.call(null,map__68137))?cljs.core.apply.call(null,cljs.core.hash_map,map__68137):map__68137);var opts = map__68137__$1;var on_compile_fail = cljs.core.get.call(null,map__68137__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__68137__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__68137__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__68137__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__68137,map__68137__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__68138 = cljs.core._EQ_;var expr__68139 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__68138.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__68139)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__68138.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__68139)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__68138.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__68139)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__68137,map__68137__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__68137,map__68137__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__68137,map__68137__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__68137,map__68137__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__68137,map__68137__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__68137,map__68137__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__68137,map__68137__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__68137,map__68137__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__68137,map__68137__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj68144 = {"detail":url};return obj68144;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__68145){var map__68147 = p__68145;var map__68147__$1 = ((cljs.core.seq_QMARK_.call(null,map__68147))?cljs.core.apply.call(null,cljs.core.hash_map,map__68147):map__68147);var class$ = cljs.core.get.call(null,map__68147__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__68147__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__68148){var map__68154 = p__68148;var map__68154__$1 = ((cljs.core.seq_QMARK_.call(null,map__68154))?cljs.core.apply.call(null,cljs.core.hash_map,map__68154):map__68154);var ed = map__68154__$1;var exception_data = cljs.core.get.call(null,map__68154__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__68154__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__68155_68159 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__68156_68160 = null;var count__68157_68161 = (0);var i__68158_68162 = (0);while(true){
if((i__68158_68162 < count__68157_68161))
{var msg_68163 = cljs.core._nth.call(null,chunk__68156_68160,i__68158_68162);console.log(msg_68163);
{
var G__68164 = seq__68155_68159;
var G__68165 = chunk__68156_68160;
var G__68166 = count__68157_68161;
var G__68167 = (i__68158_68162 + (1));
seq__68155_68159 = G__68164;
chunk__68156_68160 = G__68165;
count__68157_68161 = G__68166;
i__68158_68162 = G__68167;
continue;
}
} else
{var temp__4126__auto___68168 = cljs.core.seq.call(null,seq__68155_68159);if(temp__4126__auto___68168)
{var seq__68155_68169__$1 = temp__4126__auto___68168;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68155_68169__$1))
{var c__4314__auto___68170 = cljs.core.chunk_first.call(null,seq__68155_68169__$1);{
var G__68171 = cljs.core.chunk_rest.call(null,seq__68155_68169__$1);
var G__68172 = c__4314__auto___68170;
var G__68173 = cljs.core.count.call(null,c__4314__auto___68170);
var G__68174 = (0);
seq__68155_68159 = G__68171;
chunk__68156_68160 = G__68172;
count__68157_68161 = G__68173;
i__68158_68162 = G__68174;
continue;
}
} else
{var msg_68175 = cljs.core.first.call(null,seq__68155_68169__$1);console.log(msg_68175);
{
var G__68176 = cljs.core.next.call(null,seq__68155_68169__$1);
var G__68177 = null;
var G__68178 = (0);
var G__68179 = (0);
seq__68155_68159 = G__68176;
chunk__68156_68160 = G__68177;
count__68157_68161 = G__68178;
i__68158_68162 = G__68179;
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
var watch_and_reload__delegate = function (p__68180){var map__68182 = p__68180;var map__68182__$1 = ((cljs.core.seq_QMARK_.call(null,map__68182))?cljs.core.apply.call(null,cljs.core.hash_map,map__68182):map__68182);var opts = map__68182__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__68180 = null;if (arguments.length > 0) {
  p__68180 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__68180);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__68183){
var p__68180 = cljs.core.seq(arglist__68183);
return watch_and_reload__delegate(p__68180);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map