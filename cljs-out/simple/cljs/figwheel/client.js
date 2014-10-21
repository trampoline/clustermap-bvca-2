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
var log__delegate = function (p__41010,args){var map__41012 = p__41010;var map__41012__$1 = ((cljs.core.seq_QMARK_.call(null,map__41012))?cljs.core.apply.call(null,cljs.core.hash_map,map__41012):map__41012);var debug = cljs.core.get.call(null,map__41012__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__41010,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__41010,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__41013){
var p__41010 = cljs.core.first(arglist__41013);
var args = cljs.core.rest(arglist__41013);
return log__delegate(p__41010,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__41014){var map__41016 = p__41014;var map__41016__$1 = ((cljs.core.seq_QMARK_.call(null,map__41016))?cljs.core.apply.call(null,cljs.core.hash_map,map__41016):map__41016);var websocket_url = cljs.core.get.call(null,map__41016__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__41017,callback){var map__41019 = p__41017;var map__41019__$1 = ((cljs.core.seq_QMARK_.call(null,map__41019))?cljs.core.apply.call(null,cljs.core.hash_map,map__41019):map__41019);var msg = map__41019__$1;var dependency_file = cljs.core.get.call(null,map__41019__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__41019__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__41019__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3637__auto__ = dependency_file;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__41019,map__41019__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__41019,map__41019__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__41020,p__41021){var map__41024 = p__41020;var map__41024__$1 = ((cljs.core.seq_QMARK_.call(null,map__41024))?cljs.core.apply.call(null,cljs.core.hash_map,map__41024):map__41024);var opts = map__41024__$1;var url_rewriter = cljs.core.get.call(null,map__41024__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__41025 = p__41021;var map__41025__$1 = ((cljs.core.seq_QMARK_.call(null,map__41025))?cljs.core.apply.call(null,cljs.core.hash_map,map__41025):map__41025);var d = map__41025__$1;var file = cljs.core.get.call(null,map__41025__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__41026,p__41027){var map__41069 = p__41026;var map__41069__$1 = ((cljs.core.seq_QMARK_.call(null,map__41069))?cljs.core.apply.call(null,cljs.core.hash_map,map__41069):map__41069);var opts = map__41069__$1;var on_jsload = cljs.core.get.call(null,map__41069__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__41069__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__41070 = p__41027;var map__41070__$1 = ((cljs.core.seq_QMARK_.call(null,map__41070))?cljs.core.apply.call(null,cljs.core.hash_map,map__41070):map__41070);var files = cljs.core.get.call(null,map__41070__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,map__41069,map__41069__$1,opts,on_jsload,before_jsload,map__41070,map__41070__$1,files){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,map__41069,map__41069__$1,opts,on_jsload,before_jsload,map__41070,map__41070__$1,files){
return (function (state_41093){var state_val_41094 = (state_41093[(1)]);if((state_val_41094 === (6)))
{var inst_41075 = (state_41093[(7)]);var inst_41084 = (state_41093[(2)]);var inst_41085 = cljs.core.PersistentVector.EMPTY_NODE;var inst_41086 = [inst_41075];var inst_41087 = (new cljs.core.PersistentVector(null,1,(5),inst_41085,inst_41086,null));var inst_41088 = cljs.core.apply.call(null,on_jsload,inst_41087);var state_41093__$1 = (function (){var statearr_41095 = state_41093;(statearr_41095[(8)] = inst_41084);
return statearr_41095;
})();var statearr_41096_41110 = state_41093__$1;(statearr_41096_41110[(2)] = inst_41088);
(statearr_41096_41110[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41094 === (5)))
{var inst_41091 = (state_41093[(2)]);var state_41093__$1 = state_41093;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41093__$1,inst_41091);
} else
{if((state_val_41094 === (4)))
{var state_41093__$1 = state_41093;var statearr_41097_41111 = state_41093__$1;(statearr_41097_41111[(2)] = null);
(statearr_41097_41111[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41094 === (3)))
{var inst_41075 = (state_41093[(7)]);var inst_41078 = console.debug("Figwheel: loaded these files");var inst_41079 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41075);var inst_41080 = cljs.core.prn_str.call(null,inst_41079);var inst_41081 = console.log(inst_41080);var inst_41082 = cljs.core.async.timeout.call(null,(10));var state_41093__$1 = (function (){var statearr_41098 = state_41093;(statearr_41098[(9)] = inst_41081);
(statearr_41098[(10)] = inst_41078);
return statearr_41098;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41093__$1,(6),inst_41082);
} else
{if((state_val_41094 === (2)))
{var inst_41075 = (state_41093[(7)]);var inst_41075__$1 = (state_41093[(2)]);var inst_41076 = cljs.core.not_empty.call(null,inst_41075__$1);var state_41093__$1 = (function (){var statearr_41099 = state_41093;(statearr_41099[(7)] = inst_41075__$1);
return statearr_41099;
})();if(cljs.core.truth_(inst_41076))
{var statearr_41100_41112 = state_41093__$1;(statearr_41100_41112[(1)] = (3));
} else
{var statearr_41101_41113 = state_41093__$1;(statearr_41101_41113[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41094 === (1)))
{var inst_41071 = before_jsload.call(null,files);var inst_41072 = figwheel.client.add_request_urls.call(null,opts,files);var inst_41073 = figwheel.client.load_all_js_files.call(null,inst_41072);var state_41093__$1 = (function (){var statearr_41102 = state_41093;(statearr_41102[(11)] = inst_41071);
return statearr_41102;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41093__$1,(2),inst_41073);
} else
{return null;
}
}
}
}
}
}
});})(c__5819__auto__,map__41069,map__41069__$1,opts,on_jsload,before_jsload,map__41070,map__41070__$1,files))
;return ((function (switch__5804__auto__,c__5819__auto__,map__41069,map__41069__$1,opts,on_jsload,before_jsload,map__41070,map__41070__$1,files){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_41106 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41106[(0)] = state_machine__5805__auto__);
(statearr_41106[(1)] = (1));
return statearr_41106;
});
var state_machine__5805__auto____1 = (function (state_41093){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_41093);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e41107){if((e41107 instanceof Object))
{var ex__5808__auto__ = e41107;var statearr_41108_41114 = state_41093;(statearr_41108_41114[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41093);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e41107;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__41115 = state_41093;
state_41093 = G__41115;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_41093){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_41093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,map__41069,map__41069__$1,opts,on_jsload,before_jsload,map__41070,map__41070__$1,files))
})();var state__5821__auto__ = (function (){var statearr_41109 = f__5820__auto__.call(null);(statearr_41109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_41109;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,map__41069,map__41069__$1,opts,on_jsload,before_jsload,map__41070,map__41070__$1,files))
);
return c__5819__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__41116,link_href){var map__41118 = p__41116;var map__41118__$1 = ((cljs.core.seq_QMARK_.call(null,map__41118))?cljs.core.apply.call(null,cljs.core.hash_map,map__41118):map__41118);var request_url = cljs.core.get.call(null,map__41118__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__41118__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_41139){var state_val_41140 = (state_41139[(1)]);if((state_val_41140 === (2)))
{var inst_41136 = (state_41139[(2)]);var inst_41137 = parent.removeChild(orig_link);var state_41139__$1 = (function (){var statearr_41141 = state_41139;(statearr_41141[(7)] = inst_41136);
return statearr_41141;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41139__$1,inst_41137);
} else
{if((state_val_41140 === (1)))
{var inst_41134 = cljs.core.async.timeout.call(null,(200));var state_41139__$1 = state_41139;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41139__$1,(2),inst_41134);
} else
{return null;
}
}
});})(c__5819__auto__,parent))
;return ((function (switch__5804__auto__,c__5819__auto__,parent){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_41145 = [null,null,null,null,null,null,null,null];(statearr_41145[(0)] = state_machine__5805__auto__);
(statearr_41145[(1)] = (1));
return statearr_41145;
});
var state_machine__5805__auto____1 = (function (state_41139){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_41139);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e41146){if((e41146 instanceof Object))
{var ex__5808__auto__ = e41146;var statearr_41147_41149 = state_41139;(statearr_41147_41149[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41139);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e41146;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__41150 = state_41139;
state_41139 = G__41150;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_41139){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_41139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,parent))
})();var state__5821__auto__ = (function (){var statearr_41148 = f__5820__auto__.call(null);(statearr_41148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_41148;
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
figwheel.client.reload_css_file = (function reload_css_file(p__41151){var map__41153 = p__41151;var map__41153__$1 = ((cljs.core.seq_QMARK_.call(null,map__41153))?cljs.core.apply.call(null,cljs.core.hash_map,map__41153):map__41153);var f_data = map__41153__$1;var request_url = cljs.core.get.call(null,map__41153__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__41153__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__41154,files_msg){var map__41176 = p__41154;var map__41176__$1 = ((cljs.core.seq_QMARK_.call(null,map__41176))?cljs.core.apply.call(null,cljs.core.hash_map,map__41176):map__41176);var opts = map__41176__$1;var on_cssload = cljs.core.get.call(null,map__41176__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__41177_41197 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__41178_41198 = null;var count__41179_41199 = (0);var i__41180_41200 = (0);while(true){
if((i__41180_41200 < count__41179_41199))
{var f_41201 = cljs.core._nth.call(null,chunk__41178_41198,i__41180_41200);figwheel.client.reload_css_file.call(null,f_41201);
{
var G__41202 = seq__41177_41197;
var G__41203 = chunk__41178_41198;
var G__41204 = count__41179_41199;
var G__41205 = (i__41180_41200 + (1));
seq__41177_41197 = G__41202;
chunk__41178_41198 = G__41203;
count__41179_41199 = G__41204;
i__41180_41200 = G__41205;
continue;
}
} else
{var temp__4126__auto___41206 = cljs.core.seq.call(null,seq__41177_41197);if(temp__4126__auto___41206)
{var seq__41177_41207__$1 = temp__4126__auto___41206;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41177_41207__$1))
{var c__4406__auto___41208 = cljs.core.chunk_first.call(null,seq__41177_41207__$1);{
var G__41209 = cljs.core.chunk_rest.call(null,seq__41177_41207__$1);
var G__41210 = c__4406__auto___41208;
var G__41211 = cljs.core.count.call(null,c__4406__auto___41208);
var G__41212 = (0);
seq__41177_41197 = G__41209;
chunk__41178_41198 = G__41210;
count__41179_41199 = G__41211;
i__41180_41200 = G__41212;
continue;
}
} else
{var f_41213 = cljs.core.first.call(null,seq__41177_41207__$1);figwheel.client.reload_css_file.call(null,f_41213);
{
var G__41214 = cljs.core.next.call(null,seq__41177_41207__$1);
var G__41215 = null;
var G__41216 = (0);
var G__41217 = (0);
seq__41177_41197 = G__41214;
chunk__41178_41198 = G__41215;
count__41179_41199 = G__41216;
i__41180_41200 = G__41217;
continue;
}
}
} else
{}
}
break;
}
var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,map__41176,map__41176__$1,opts,on_cssload){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,map__41176,map__41176__$1,opts,on_cssload){
return (function (state_41187){var state_val_41188 = (state_41187[(1)]);if((state_val_41188 === (2)))
{var inst_41183 = (state_41187[(2)]);var inst_41184 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_41185 = on_cssload.call(null,inst_41184);var state_41187__$1 = (function (){var statearr_41189 = state_41187;(statearr_41189[(7)] = inst_41183);
return statearr_41189;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41187__$1,inst_41185);
} else
{if((state_val_41188 === (1)))
{var inst_41181 = cljs.core.async.timeout.call(null,(100));var state_41187__$1 = state_41187;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41187__$1,(2),inst_41181);
} else
{return null;
}
}
});})(c__5819__auto__,map__41176,map__41176__$1,opts,on_cssload))
;return ((function (switch__5804__auto__,c__5819__auto__,map__41176,map__41176__$1,opts,on_cssload){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_41193 = [null,null,null,null,null,null,null,null];(statearr_41193[(0)] = state_machine__5805__auto__);
(statearr_41193[(1)] = (1));
return statearr_41193;
});
var state_machine__5805__auto____1 = (function (state_41187){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_41187);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e41194){if((e41194 instanceof Object))
{var ex__5808__auto__ = e41194;var statearr_41195_41218 = state_41187;(statearr_41195_41218[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41187);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e41194;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__41219 = state_41187;
state_41187 = G__41219;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_41187){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_41187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,map__41176,map__41176__$1,opts,on_cssload))
})();var state__5821__auto__ = (function (){var statearr_41196 = f__5820__auto__.call(null);(statearr_41196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_41196;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,map__41176,map__41176__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__41220){var map__41225 = p__41220;var map__41225__$1 = ((cljs.core.seq_QMARK_.call(null,map__41225))?cljs.core.apply.call(null,cljs.core.hash_map,map__41225):map__41225);var opts = map__41225__$1;var on_compile_fail = cljs.core.get.call(null,map__41225__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__41225__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__41225__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__41225__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__41225,map__41225__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__41226 = cljs.core._EQ_;var expr__41227 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__41226.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__41227)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__41226.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__41227)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__41226.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41227)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__41225,map__41225__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__41225,map__41225__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__41225,map__41225__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__41225,map__41225__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__41225,map__41225__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__41225,map__41225__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__41225,map__41225__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__41225,map__41225__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__41225,map__41225__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj41232 = {"detail":url};return obj41232;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__41233){var map__41235 = p__41233;var map__41235__$1 = ((cljs.core.seq_QMARK_.call(null,map__41235))?cljs.core.apply.call(null,cljs.core.hash_map,map__41235):map__41235);var class$ = cljs.core.get.call(null,map__41235__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__41235__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__41236){var map__41242 = p__41236;var map__41242__$1 = ((cljs.core.seq_QMARK_.call(null,map__41242))?cljs.core.apply.call(null,cljs.core.hash_map,map__41242):map__41242);var ed = map__41242__$1;var exception_data = cljs.core.get.call(null,map__41242__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__41242__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__41243_41247 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__41244_41248 = null;var count__41245_41249 = (0);var i__41246_41250 = (0);while(true){
if((i__41246_41250 < count__41245_41249))
{var msg_41251 = cljs.core._nth.call(null,chunk__41244_41248,i__41246_41250);console.log(msg_41251);
{
var G__41252 = seq__41243_41247;
var G__41253 = chunk__41244_41248;
var G__41254 = count__41245_41249;
var G__41255 = (i__41246_41250 + (1));
seq__41243_41247 = G__41252;
chunk__41244_41248 = G__41253;
count__41245_41249 = G__41254;
i__41246_41250 = G__41255;
continue;
}
} else
{var temp__4126__auto___41256 = cljs.core.seq.call(null,seq__41243_41247);if(temp__4126__auto___41256)
{var seq__41243_41257__$1 = temp__4126__auto___41256;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41243_41257__$1))
{var c__4406__auto___41258 = cljs.core.chunk_first.call(null,seq__41243_41257__$1);{
var G__41259 = cljs.core.chunk_rest.call(null,seq__41243_41257__$1);
var G__41260 = c__4406__auto___41258;
var G__41261 = cljs.core.count.call(null,c__4406__auto___41258);
var G__41262 = (0);
seq__41243_41247 = G__41259;
chunk__41244_41248 = G__41260;
count__41245_41249 = G__41261;
i__41246_41250 = G__41262;
continue;
}
} else
{var msg_41263 = cljs.core.first.call(null,seq__41243_41257__$1);console.log(msg_41263);
{
var G__41264 = cljs.core.next.call(null,seq__41243_41257__$1);
var G__41265 = null;
var G__41266 = (0);
var G__41267 = (0);
seq__41243_41247 = G__41264;
chunk__41244_41248 = G__41265;
count__41245_41249 = G__41266;
i__41246_41250 = G__41267;
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
var watch_and_reload__delegate = function (p__41268){var map__41270 = p__41268;var map__41270__$1 = ((cljs.core.seq_QMARK_.call(null,map__41270))?cljs.core.apply.call(null,cljs.core.hash_map,map__41270):map__41270);var opts = map__41270__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__41268 = null;if (arguments.length > 0) {
  p__41268 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__41268);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__41271){
var p__41268 = cljs.core.seq(arglist__41271);
return watch_and_reload__delegate(p__41268);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
