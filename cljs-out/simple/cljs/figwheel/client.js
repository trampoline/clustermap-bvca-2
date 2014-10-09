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
var log__delegate = function (p__32947,args){var map__32949 = p__32947;var map__32949__$1 = ((cljs.core.seq_QMARK_.call(null,map__32949))?cljs.core.apply.call(null,cljs.core.hash_map,map__32949):map__32949);var debug = cljs.core.get.call(null,map__32949__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__32947,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__32947,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__32950){
var p__32947 = cljs.core.first(arglist__32950);
var args = cljs.core.rest(arglist__32950);
return log__delegate(p__32947,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__32951){var map__32953 = p__32951;var map__32953__$1 = ((cljs.core.seq_QMARK_.call(null,map__32953))?cljs.core.apply.call(null,cljs.core.hash_map,map__32953):map__32953);var websocket_url = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__32954,callback){var map__32956 = p__32954;var map__32956__$1 = ((cljs.core.seq_QMARK_.call(null,map__32956))?cljs.core.apply.call(null,cljs.core.hash_map,map__32956):map__32956);var msg = map__32956__$1;var dependency_file = cljs.core.get.call(null,map__32956__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__32956__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__32956__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__32956,map__32956__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__32956,map__32956__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__32957,p__32958){var map__32961 = p__32957;var map__32961__$1 = ((cljs.core.seq_QMARK_.call(null,map__32961))?cljs.core.apply.call(null,cljs.core.hash_map,map__32961):map__32961);var opts = map__32961__$1;var url_rewriter = cljs.core.get.call(null,map__32961__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__32962 = p__32958;var map__32962__$1 = ((cljs.core.seq_QMARK_.call(null,map__32962))?cljs.core.apply.call(null,cljs.core.hash_map,map__32962):map__32962);var d = map__32962__$1;var file = cljs.core.get.call(null,map__32962__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__32963,p__32964){var map__33006 = p__32963;var map__33006__$1 = ((cljs.core.seq_QMARK_.call(null,map__33006))?cljs.core.apply.call(null,cljs.core.hash_map,map__33006):map__33006);var opts = map__33006__$1;var on_jsload = cljs.core.get.call(null,map__33006__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__33006__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__33007 = p__32964;var map__33007__$1 = ((cljs.core.seq_QMARK_.call(null,map__33007))?cljs.core.apply.call(null,cljs.core.hash_map,map__33007):map__33007);var files = cljs.core.get.call(null,map__33007__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__33006,map__33006__$1,opts,on_jsload,before_jsload,map__33007,map__33007__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__33006,map__33006__$1,opts,on_jsload,before_jsload,map__33007,map__33007__$1,files){
return (function (state_33030){var state_val_33031 = (state_33030[(1)]);if((state_val_33031 === (6)))
{var inst_33012 = (state_33030[(7)]);var inst_33021 = (state_33030[(2)]);var inst_33022 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33023 = [inst_33012];var inst_33024 = (new cljs.core.PersistentVector(null,1,(5),inst_33022,inst_33023,null));var inst_33025 = cljs.core.apply.call(null,on_jsload,inst_33024);var state_33030__$1 = (function (){var statearr_33032 = state_33030;(statearr_33032[(8)] = inst_33021);
return statearr_33032;
})();var statearr_33033_33047 = state_33030__$1;(statearr_33033_33047[(2)] = inst_33025);
(statearr_33033_33047[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33031 === (5)))
{var inst_33028 = (state_33030[(2)]);var state_33030__$1 = state_33030;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33030__$1,inst_33028);
} else
{if((state_val_33031 === (4)))
{var state_33030__$1 = state_33030;var statearr_33034_33048 = state_33030__$1;(statearr_33034_33048[(2)] = null);
(statearr_33034_33048[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33031 === (3)))
{var inst_33012 = (state_33030[(7)]);var inst_33015 = console.debug("Figwheel: loaded these files");var inst_33016 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33012);var inst_33017 = cljs.core.prn_str.call(null,inst_33016);var inst_33018 = console.log(inst_33017);var inst_33019 = cljs.core.async.timeout.call(null,(10));var state_33030__$1 = (function (){var statearr_33035 = state_33030;(statearr_33035[(9)] = inst_33015);
(statearr_33035[(10)] = inst_33018);
return statearr_33035;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33030__$1,(6),inst_33019);
} else
{if((state_val_33031 === (2)))
{var inst_33012 = (state_33030[(7)]);var inst_33012__$1 = (state_33030[(2)]);var inst_33013 = cljs.core.not_empty.call(null,inst_33012__$1);var state_33030__$1 = (function (){var statearr_33036 = state_33030;(statearr_33036[(7)] = inst_33012__$1);
return statearr_33036;
})();if(cljs.core.truth_(inst_33013))
{var statearr_33037_33049 = state_33030__$1;(statearr_33037_33049[(1)] = (3));
} else
{var statearr_33038_33050 = state_33030__$1;(statearr_33038_33050[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33031 === (1)))
{var inst_33008 = before_jsload.call(null,files);var inst_33009 = figwheel.client.add_request_urls.call(null,opts,files);var inst_33010 = figwheel.client.load_all_js_files.call(null,inst_33009);var state_33030__$1 = (function (){var statearr_33039 = state_33030;(statearr_33039[(11)] = inst_33008);
return statearr_33039;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33030__$1,(2),inst_33010);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__33006,map__33006__$1,opts,on_jsload,before_jsload,map__33007,map__33007__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__33006,map__33006__$1,opts,on_jsload,before_jsload,map__33007,map__33007__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_33043 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33043[(0)] = state_machine__5694__auto__);
(statearr_33043[(1)] = (1));
return statearr_33043;
});
var state_machine__5694__auto____1 = (function (state_33030){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_33030);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e33044){if((e33044 instanceof Object))
{var ex__5697__auto__ = e33044;var statearr_33045_33051 = state_33030;(statearr_33045_33051[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33030);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33044;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33052 = state_33030;
state_33030 = G__33052;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_33030){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_33030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__33006,map__33006__$1,opts,on_jsload,before_jsload,map__33007,map__33007__$1,files))
})();var state__5710__auto__ = (function (){var statearr_33046 = f__5709__auto__.call(null);(statearr_33046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_33046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__33006,map__33006__$1,opts,on_jsload,before_jsload,map__33007,map__33007__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__33053,link_href){var map__33055 = p__33053;var map__33055__$1 = ((cljs.core.seq_QMARK_.call(null,map__33055))?cljs.core.apply.call(null,cljs.core.hash_map,map__33055):map__33055);var request_url = cljs.core.get.call(null,map__33055__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__33055__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_33076){var state_val_33077 = (state_33076[(1)]);if((state_val_33077 === (2)))
{var inst_33073 = (state_33076[(2)]);var inst_33074 = parent.removeChild(orig_link);var state_33076__$1 = (function (){var statearr_33078 = state_33076;(statearr_33078[(7)] = inst_33073);
return statearr_33078;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33076__$1,inst_33074);
} else
{if((state_val_33077 === (1)))
{var inst_33071 = cljs.core.async.timeout.call(null,(200));var state_33076__$1 = state_33076;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33076__$1,(2),inst_33071);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_33082 = [null,null,null,null,null,null,null,null];(statearr_33082[(0)] = state_machine__5694__auto__);
(statearr_33082[(1)] = (1));
return statearr_33082;
});
var state_machine__5694__auto____1 = (function (state_33076){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_33076);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e33083){if((e33083 instanceof Object))
{var ex__5697__auto__ = e33083;var statearr_33084_33086 = state_33076;(statearr_33084_33086[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33076);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33083;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33087 = state_33076;
state_33076 = G__33087;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_33076){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_33076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_33085 = f__5709__auto__.call(null);(statearr_33085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_33085;
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
figwheel.client.reload_css_file = (function reload_css_file(p__33088){var map__33090 = p__33088;var map__33090__$1 = ((cljs.core.seq_QMARK_.call(null,map__33090))?cljs.core.apply.call(null,cljs.core.hash_map,map__33090):map__33090);var f_data = map__33090__$1;var request_url = cljs.core.get.call(null,map__33090__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__33090__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__33091,files_msg){var map__33113 = p__33091;var map__33113__$1 = ((cljs.core.seq_QMARK_.call(null,map__33113))?cljs.core.apply.call(null,cljs.core.hash_map,map__33113):map__33113);var opts = map__33113__$1;var on_cssload = cljs.core.get.call(null,map__33113__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__33114_33134 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__33115_33135 = null;var count__33116_33136 = (0);var i__33117_33137 = (0);while(true){
if((i__33117_33137 < count__33116_33136))
{var f_33138 = cljs.core._nth.call(null,chunk__33115_33135,i__33117_33137);figwheel.client.reload_css_file.call(null,f_33138);
{
var G__33139 = seq__33114_33134;
var G__33140 = chunk__33115_33135;
var G__33141 = count__33116_33136;
var G__33142 = (i__33117_33137 + (1));
seq__33114_33134 = G__33139;
chunk__33115_33135 = G__33140;
count__33116_33136 = G__33141;
i__33117_33137 = G__33142;
continue;
}
} else
{var temp__4126__auto___33143 = cljs.core.seq.call(null,seq__33114_33134);if(temp__4126__auto___33143)
{var seq__33114_33144__$1 = temp__4126__auto___33143;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33114_33144__$1))
{var c__4314__auto___33145 = cljs.core.chunk_first.call(null,seq__33114_33144__$1);{
var G__33146 = cljs.core.chunk_rest.call(null,seq__33114_33144__$1);
var G__33147 = c__4314__auto___33145;
var G__33148 = cljs.core.count.call(null,c__4314__auto___33145);
var G__33149 = (0);
seq__33114_33134 = G__33146;
chunk__33115_33135 = G__33147;
count__33116_33136 = G__33148;
i__33117_33137 = G__33149;
continue;
}
} else
{var f_33150 = cljs.core.first.call(null,seq__33114_33144__$1);figwheel.client.reload_css_file.call(null,f_33150);
{
var G__33151 = cljs.core.next.call(null,seq__33114_33144__$1);
var G__33152 = null;
var G__33153 = (0);
var G__33154 = (0);
seq__33114_33134 = G__33151;
chunk__33115_33135 = G__33152;
count__33116_33136 = G__33153;
i__33117_33137 = G__33154;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__33113,map__33113__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__33113,map__33113__$1,opts,on_cssload){
return (function (state_33124){var state_val_33125 = (state_33124[(1)]);if((state_val_33125 === (2)))
{var inst_33120 = (state_33124[(2)]);var inst_33121 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_33122 = on_cssload.call(null,inst_33121);var state_33124__$1 = (function (){var statearr_33126 = state_33124;(statearr_33126[(7)] = inst_33120);
return statearr_33126;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33124__$1,inst_33122);
} else
{if((state_val_33125 === (1)))
{var inst_33118 = cljs.core.async.timeout.call(null,(100));var state_33124__$1 = state_33124;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33124__$1,(2),inst_33118);
} else
{return null;
}
}
});})(c__5708__auto__,map__33113,map__33113__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__33113,map__33113__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_33130 = [null,null,null,null,null,null,null,null];(statearr_33130[(0)] = state_machine__5694__auto__);
(statearr_33130[(1)] = (1));
return statearr_33130;
});
var state_machine__5694__auto____1 = (function (state_33124){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_33124);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e33131){if((e33131 instanceof Object))
{var ex__5697__auto__ = e33131;var statearr_33132_33155 = state_33124;(statearr_33132_33155[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33124);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33131;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33156 = state_33124;
state_33124 = G__33156;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_33124){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_33124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__33113,map__33113__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_33133 = f__5709__auto__.call(null);(statearr_33133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_33133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__33113,map__33113__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__33157){var map__33162 = p__33157;var map__33162__$1 = ((cljs.core.seq_QMARK_.call(null,map__33162))?cljs.core.apply.call(null,cljs.core.hash_map,map__33162):map__33162);var opts = map__33162__$1;var on_compile_fail = cljs.core.get.call(null,map__33162__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__33162__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__33162__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__33162__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__33162,map__33162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__33163 = cljs.core._EQ_;var expr__33164 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__33163.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__33164)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__33163.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__33164)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__33163.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33164)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__33162,map__33162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__33162,map__33162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__33162,map__33162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__33162,map__33162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__33162,map__33162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__33162,map__33162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__33162,map__33162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__33162,map__33162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__33162,map__33162__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj33169 = {"detail":url};return obj33169;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__33170){var map__33172 = p__33170;var map__33172__$1 = ((cljs.core.seq_QMARK_.call(null,map__33172))?cljs.core.apply.call(null,cljs.core.hash_map,map__33172):map__33172);var class$ = cljs.core.get.call(null,map__33172__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__33172__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__33173){var map__33179 = p__33173;var map__33179__$1 = ((cljs.core.seq_QMARK_.call(null,map__33179))?cljs.core.apply.call(null,cljs.core.hash_map,map__33179):map__33179);var ed = map__33179__$1;var exception_data = cljs.core.get.call(null,map__33179__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__33179__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__33180_33184 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__33181_33185 = null;var count__33182_33186 = (0);var i__33183_33187 = (0);while(true){
if((i__33183_33187 < count__33182_33186))
{var msg_33188 = cljs.core._nth.call(null,chunk__33181_33185,i__33183_33187);console.log(msg_33188);
{
var G__33189 = seq__33180_33184;
var G__33190 = chunk__33181_33185;
var G__33191 = count__33182_33186;
var G__33192 = (i__33183_33187 + (1));
seq__33180_33184 = G__33189;
chunk__33181_33185 = G__33190;
count__33182_33186 = G__33191;
i__33183_33187 = G__33192;
continue;
}
} else
{var temp__4126__auto___33193 = cljs.core.seq.call(null,seq__33180_33184);if(temp__4126__auto___33193)
{var seq__33180_33194__$1 = temp__4126__auto___33193;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33180_33194__$1))
{var c__4314__auto___33195 = cljs.core.chunk_first.call(null,seq__33180_33194__$1);{
var G__33196 = cljs.core.chunk_rest.call(null,seq__33180_33194__$1);
var G__33197 = c__4314__auto___33195;
var G__33198 = cljs.core.count.call(null,c__4314__auto___33195);
var G__33199 = (0);
seq__33180_33184 = G__33196;
chunk__33181_33185 = G__33197;
count__33182_33186 = G__33198;
i__33183_33187 = G__33199;
continue;
}
} else
{var msg_33200 = cljs.core.first.call(null,seq__33180_33194__$1);console.log(msg_33200);
{
var G__33201 = cljs.core.next.call(null,seq__33180_33194__$1);
var G__33202 = null;
var G__33203 = (0);
var G__33204 = (0);
seq__33180_33184 = G__33201;
chunk__33181_33185 = G__33202;
count__33182_33186 = G__33203;
i__33183_33187 = G__33204;
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
var watch_and_reload__delegate = function (p__33205){var map__33207 = p__33205;var map__33207__$1 = ((cljs.core.seq_QMARK_.call(null,map__33207))?cljs.core.apply.call(null,cljs.core.hash_map,map__33207):map__33207);var opts = map__33207__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__33205 = null;if (arguments.length > 0) {
  p__33205 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__33205);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__33208){
var p__33205 = cljs.core.seq(arglist__33208);
return watch_and_reload__delegate(p__33205);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
