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
var log__delegate = function (p__56885,args){var map__56887 = p__56885;var map__56887__$1 = ((cljs.core.seq_QMARK_.call(null,map__56887))?cljs.core.apply.call(null,cljs.core.hash_map,map__56887):map__56887);var debug = cljs.core.get.call(null,map__56887__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__56885,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__56885,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__56888){
var p__56885 = cljs.core.first(arglist__56888);
var args = cljs.core.rest(arglist__56888);
return log__delegate(p__56885,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__56889){var map__56891 = p__56889;var map__56891__$1 = ((cljs.core.seq_QMARK_.call(null,map__56891))?cljs.core.apply.call(null,cljs.core.hash_map,map__56891):map__56891);var websocket_url = cljs.core.get.call(null,map__56891__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__56892,callback){var map__56894 = p__56892;var map__56894__$1 = ((cljs.core.seq_QMARK_.call(null,map__56894))?cljs.core.apply.call(null,cljs.core.hash_map,map__56894):map__56894);var msg = map__56894__$1;var dependency_file = cljs.core.get.call(null,map__56894__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__56894__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__56894__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__56894,map__56894__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__56894,map__56894__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__56895,p__56896){var map__56899 = p__56895;var map__56899__$1 = ((cljs.core.seq_QMARK_.call(null,map__56899))?cljs.core.apply.call(null,cljs.core.hash_map,map__56899):map__56899);var opts = map__56899__$1;var url_rewriter = cljs.core.get.call(null,map__56899__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__56900 = p__56896;var map__56900__$1 = ((cljs.core.seq_QMARK_.call(null,map__56900))?cljs.core.apply.call(null,cljs.core.hash_map,map__56900):map__56900);var d = map__56900__$1;var file = cljs.core.get.call(null,map__56900__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__56901,p__56902){var map__56944 = p__56901;var map__56944__$1 = ((cljs.core.seq_QMARK_.call(null,map__56944))?cljs.core.apply.call(null,cljs.core.hash_map,map__56944):map__56944);var opts = map__56944__$1;var on_jsload = cljs.core.get.call(null,map__56944__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__56944__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__56945 = p__56902;var map__56945__$1 = ((cljs.core.seq_QMARK_.call(null,map__56945))?cljs.core.apply.call(null,cljs.core.hash_map,map__56945):map__56945);var files = cljs.core.get.call(null,map__56945__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__56944,map__56944__$1,opts,on_jsload,before_jsload,map__56945,map__56945__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__56944,map__56944__$1,opts,on_jsload,before_jsload,map__56945,map__56945__$1,files){
return (function (state_56968){var state_val_56969 = (state_56968[(1)]);if((state_val_56969 === (6)))
{var inst_56950 = (state_56968[(7)]);var inst_56959 = (state_56968[(2)]);var inst_56960 = cljs.core.PersistentVector.EMPTY_NODE;var inst_56961 = [inst_56950];var inst_56962 = (new cljs.core.PersistentVector(null,1,(5),inst_56960,inst_56961,null));var inst_56963 = cljs.core.apply.call(null,on_jsload,inst_56962);var state_56968__$1 = (function (){var statearr_56970 = state_56968;(statearr_56970[(8)] = inst_56959);
return statearr_56970;
})();var statearr_56971_56985 = state_56968__$1;(statearr_56971_56985[(2)] = inst_56963);
(statearr_56971_56985[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56969 === (5)))
{var inst_56966 = (state_56968[(2)]);var state_56968__$1 = state_56968;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56968__$1,inst_56966);
} else
{if((state_val_56969 === (4)))
{var state_56968__$1 = state_56968;var statearr_56972_56986 = state_56968__$1;(statearr_56972_56986[(2)] = null);
(statearr_56972_56986[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56969 === (3)))
{var inst_56950 = (state_56968[(7)]);var inst_56953 = console.debug("Figwheel: loaded these files");var inst_56954 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_56950);var inst_56955 = cljs.core.prn_str.call(null,inst_56954);var inst_56956 = console.log(inst_56955);var inst_56957 = cljs.core.async.timeout.call(null,(10));var state_56968__$1 = (function (){var statearr_56973 = state_56968;(statearr_56973[(9)] = inst_56953);
(statearr_56973[(10)] = inst_56956);
return statearr_56973;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56968__$1,(6),inst_56957);
} else
{if((state_val_56969 === (2)))
{var inst_56950 = (state_56968[(7)]);var inst_56950__$1 = (state_56968[(2)]);var inst_56951 = cljs.core.not_empty.call(null,inst_56950__$1);var state_56968__$1 = (function (){var statearr_56974 = state_56968;(statearr_56974[(7)] = inst_56950__$1);
return statearr_56974;
})();if(cljs.core.truth_(inst_56951))
{var statearr_56975_56987 = state_56968__$1;(statearr_56975_56987[(1)] = (3));
} else
{var statearr_56976_56988 = state_56968__$1;(statearr_56976_56988[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56969 === (1)))
{var inst_56946 = before_jsload.call(null,files);var inst_56947 = figwheel.client.add_request_urls.call(null,opts,files);var inst_56948 = figwheel.client.load_all_js_files.call(null,inst_56947);var state_56968__$1 = (function (){var statearr_56977 = state_56968;(statearr_56977[(11)] = inst_56946);
return statearr_56977;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56968__$1,(2),inst_56948);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__56944,map__56944__$1,opts,on_jsload,before_jsload,map__56945,map__56945__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__56944,map__56944__$1,opts,on_jsload,before_jsload,map__56945,map__56945__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_56981 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_56981[(0)] = state_machine__5694__auto__);
(statearr_56981[(1)] = (1));
return statearr_56981;
});
var state_machine__5694__auto____1 = (function (state_56968){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56968);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56982){if((e56982 instanceof Object))
{var ex__5697__auto__ = e56982;var statearr_56983_56989 = state_56968;(statearr_56983_56989[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56968);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56982;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56990 = state_56968;
state_56968 = G__56990;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56968){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__56944,map__56944__$1,opts,on_jsload,before_jsload,map__56945,map__56945__$1,files))
})();var state__5710__auto__ = (function (){var statearr_56984 = f__5709__auto__.call(null);(statearr_56984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_56984;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__56944,map__56944__$1,opts,on_jsload,before_jsload,map__56945,map__56945__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__56991,link_href){var map__56993 = p__56991;var map__56993__$1 = ((cljs.core.seq_QMARK_.call(null,map__56993))?cljs.core.apply.call(null,cljs.core.hash_map,map__56993):map__56993);var request_url = cljs.core.get.call(null,map__56993__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__56993__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_57014){var state_val_57015 = (state_57014[(1)]);if((state_val_57015 === (2)))
{var inst_57011 = (state_57014[(2)]);var inst_57012 = parent.removeChild(orig_link);var state_57014__$1 = (function (){var statearr_57016 = state_57014;(statearr_57016[(7)] = inst_57011);
return statearr_57016;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57014__$1,inst_57012);
} else
{if((state_val_57015 === (1)))
{var inst_57009 = cljs.core.async.timeout.call(null,(200));var state_57014__$1 = state_57014;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57014__$1,(2),inst_57009);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_57020 = [null,null,null,null,null,null,null,null];(statearr_57020[(0)] = state_machine__5694__auto__);
(statearr_57020[(1)] = (1));
return statearr_57020;
});
var state_machine__5694__auto____1 = (function (state_57014){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_57014);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e57021){if((e57021 instanceof Object))
{var ex__5697__auto__ = e57021;var statearr_57022_57024 = state_57014;(statearr_57022_57024[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57014);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57021;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57025 = state_57014;
state_57014 = G__57025;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_57014){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_57014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_57023 = f__5709__auto__.call(null);(statearr_57023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_57023;
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
figwheel.client.reload_css_file = (function reload_css_file(p__57026){var map__57028 = p__57026;var map__57028__$1 = ((cljs.core.seq_QMARK_.call(null,map__57028))?cljs.core.apply.call(null,cljs.core.hash_map,map__57028):map__57028);var f_data = map__57028__$1;var request_url = cljs.core.get.call(null,map__57028__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__57028__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__57029,files_msg){var map__57051 = p__57029;var map__57051__$1 = ((cljs.core.seq_QMARK_.call(null,map__57051))?cljs.core.apply.call(null,cljs.core.hash_map,map__57051):map__57051);var opts = map__57051__$1;var on_cssload = cljs.core.get.call(null,map__57051__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__57052_57072 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__57053_57073 = null;var count__57054_57074 = (0);var i__57055_57075 = (0);while(true){
if((i__57055_57075 < count__57054_57074))
{var f_57076 = cljs.core._nth.call(null,chunk__57053_57073,i__57055_57075);figwheel.client.reload_css_file.call(null,f_57076);
{
var G__57077 = seq__57052_57072;
var G__57078 = chunk__57053_57073;
var G__57079 = count__57054_57074;
var G__57080 = (i__57055_57075 + (1));
seq__57052_57072 = G__57077;
chunk__57053_57073 = G__57078;
count__57054_57074 = G__57079;
i__57055_57075 = G__57080;
continue;
}
} else
{var temp__4126__auto___57081 = cljs.core.seq.call(null,seq__57052_57072);if(temp__4126__auto___57081)
{var seq__57052_57082__$1 = temp__4126__auto___57081;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57052_57082__$1))
{var c__4314__auto___57083 = cljs.core.chunk_first.call(null,seq__57052_57082__$1);{
var G__57084 = cljs.core.chunk_rest.call(null,seq__57052_57082__$1);
var G__57085 = c__4314__auto___57083;
var G__57086 = cljs.core.count.call(null,c__4314__auto___57083);
var G__57087 = (0);
seq__57052_57072 = G__57084;
chunk__57053_57073 = G__57085;
count__57054_57074 = G__57086;
i__57055_57075 = G__57087;
continue;
}
} else
{var f_57088 = cljs.core.first.call(null,seq__57052_57082__$1);figwheel.client.reload_css_file.call(null,f_57088);
{
var G__57089 = cljs.core.next.call(null,seq__57052_57082__$1);
var G__57090 = null;
var G__57091 = (0);
var G__57092 = (0);
seq__57052_57072 = G__57089;
chunk__57053_57073 = G__57090;
count__57054_57074 = G__57091;
i__57055_57075 = G__57092;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__57051,map__57051__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__57051,map__57051__$1,opts,on_cssload){
return (function (state_57062){var state_val_57063 = (state_57062[(1)]);if((state_val_57063 === (2)))
{var inst_57058 = (state_57062[(2)]);var inst_57059 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_57060 = on_cssload.call(null,inst_57059);var state_57062__$1 = (function (){var statearr_57064 = state_57062;(statearr_57064[(7)] = inst_57058);
return statearr_57064;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57062__$1,inst_57060);
} else
{if((state_val_57063 === (1)))
{var inst_57056 = cljs.core.async.timeout.call(null,(100));var state_57062__$1 = state_57062;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57062__$1,(2),inst_57056);
} else
{return null;
}
}
});})(c__5708__auto__,map__57051,map__57051__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__57051,map__57051__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_57068 = [null,null,null,null,null,null,null,null];(statearr_57068[(0)] = state_machine__5694__auto__);
(statearr_57068[(1)] = (1));
return statearr_57068;
});
var state_machine__5694__auto____1 = (function (state_57062){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_57062);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e57069){if((e57069 instanceof Object))
{var ex__5697__auto__ = e57069;var statearr_57070_57093 = state_57062;(statearr_57070_57093[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57062);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e57069;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57094 = state_57062;
state_57062 = G__57094;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_57062){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_57062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__57051,map__57051__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_57071 = f__5709__auto__.call(null);(statearr_57071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_57071;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__57051,map__57051__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__57095){var map__57100 = p__57095;var map__57100__$1 = ((cljs.core.seq_QMARK_.call(null,map__57100))?cljs.core.apply.call(null,cljs.core.hash_map,map__57100):map__57100);var opts = map__57100__$1;var on_compile_fail = cljs.core.get.call(null,map__57100__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__57100__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__57100__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__57100__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__57100,map__57100__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__57101 = cljs.core._EQ_;var expr__57102 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__57101.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__57102)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__57101.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__57102)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__57101.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__57102)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__57100,map__57100__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__57100,map__57100__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__57100,map__57100__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__57100,map__57100__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__57100,map__57100__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__57100,map__57100__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__57100,map__57100__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__57100,map__57100__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__57100,map__57100__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj57107 = {"detail":url};return obj57107;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__57108){var map__57110 = p__57108;var map__57110__$1 = ((cljs.core.seq_QMARK_.call(null,map__57110))?cljs.core.apply.call(null,cljs.core.hash_map,map__57110):map__57110);var class$ = cljs.core.get.call(null,map__57110__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__57110__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__57111){var map__57117 = p__57111;var map__57117__$1 = ((cljs.core.seq_QMARK_.call(null,map__57117))?cljs.core.apply.call(null,cljs.core.hash_map,map__57117):map__57117);var ed = map__57117__$1;var exception_data = cljs.core.get.call(null,map__57117__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__57117__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__57118_57122 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__57119_57123 = null;var count__57120_57124 = (0);var i__57121_57125 = (0);while(true){
if((i__57121_57125 < count__57120_57124))
{var msg_57126 = cljs.core._nth.call(null,chunk__57119_57123,i__57121_57125);console.log(msg_57126);
{
var G__57127 = seq__57118_57122;
var G__57128 = chunk__57119_57123;
var G__57129 = count__57120_57124;
var G__57130 = (i__57121_57125 + (1));
seq__57118_57122 = G__57127;
chunk__57119_57123 = G__57128;
count__57120_57124 = G__57129;
i__57121_57125 = G__57130;
continue;
}
} else
{var temp__4126__auto___57131 = cljs.core.seq.call(null,seq__57118_57122);if(temp__4126__auto___57131)
{var seq__57118_57132__$1 = temp__4126__auto___57131;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57118_57132__$1))
{var c__4314__auto___57133 = cljs.core.chunk_first.call(null,seq__57118_57132__$1);{
var G__57134 = cljs.core.chunk_rest.call(null,seq__57118_57132__$1);
var G__57135 = c__4314__auto___57133;
var G__57136 = cljs.core.count.call(null,c__4314__auto___57133);
var G__57137 = (0);
seq__57118_57122 = G__57134;
chunk__57119_57123 = G__57135;
count__57120_57124 = G__57136;
i__57121_57125 = G__57137;
continue;
}
} else
{var msg_57138 = cljs.core.first.call(null,seq__57118_57132__$1);console.log(msg_57138);
{
var G__57139 = cljs.core.next.call(null,seq__57118_57132__$1);
var G__57140 = null;
var G__57141 = (0);
var G__57142 = (0);
seq__57118_57122 = G__57139;
chunk__57119_57123 = G__57140;
count__57120_57124 = G__57141;
i__57121_57125 = G__57142;
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
var watch_and_reload__delegate = function (p__57143){var map__57145 = p__57143;var map__57145__$1 = ((cljs.core.seq_QMARK_.call(null,map__57145))?cljs.core.apply.call(null,cljs.core.hash_map,map__57145):map__57145);var opts = map__57145__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__57143 = null;if (arguments.length > 0) {
  p__57143 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__57143);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__57146){
var p__57143 = cljs.core.seq(arglist__57146);
return watch_and_reload__delegate(p__57143);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map