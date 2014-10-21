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
var log__delegate = function (p__37012,args){var map__37014 = p__37012;var map__37014__$1 = ((cljs.core.seq_QMARK_.call(null,map__37014))?cljs.core.apply.call(null,cljs.core.hash_map,map__37014):map__37014);var debug = cljs.core.get.call(null,map__37014__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__37012,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__37012,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__37015){
var p__37012 = cljs.core.first(arglist__37015);
var args = cljs.core.rest(arglist__37015);
return log__delegate(p__37012,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__37016){var map__37018 = p__37016;var map__37018__$1 = ((cljs.core.seq_QMARK_.call(null,map__37018))?cljs.core.apply.call(null,cljs.core.hash_map,map__37018):map__37018);var websocket_url = cljs.core.get.call(null,map__37018__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__37019,callback){var map__37021 = p__37019;var map__37021__$1 = ((cljs.core.seq_QMARK_.call(null,map__37021))?cljs.core.apply.call(null,cljs.core.hash_map,map__37021):map__37021);var msg = map__37021__$1;var dependency_file = cljs.core.get.call(null,map__37021__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__37021__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__37021__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__37021,map__37021__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__37021,map__37021__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__37022,p__37023){var map__37026 = p__37022;var map__37026__$1 = ((cljs.core.seq_QMARK_.call(null,map__37026))?cljs.core.apply.call(null,cljs.core.hash_map,map__37026):map__37026);var opts = map__37026__$1;var url_rewriter = cljs.core.get.call(null,map__37026__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__37027 = p__37023;var map__37027__$1 = ((cljs.core.seq_QMARK_.call(null,map__37027))?cljs.core.apply.call(null,cljs.core.hash_map,map__37027):map__37027);var d = map__37027__$1;var file = cljs.core.get.call(null,map__37027__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__37028,p__37029){var map__37071 = p__37028;var map__37071__$1 = ((cljs.core.seq_QMARK_.call(null,map__37071))?cljs.core.apply.call(null,cljs.core.hash_map,map__37071):map__37071);var opts = map__37071__$1;var on_jsload = cljs.core.get.call(null,map__37071__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__37071__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__37072 = p__37029;var map__37072__$1 = ((cljs.core.seq_QMARK_.call(null,map__37072))?cljs.core.apply.call(null,cljs.core.hash_map,map__37072):map__37072);var files = cljs.core.get.call(null,map__37072__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__37071,map__37071__$1,opts,on_jsload,before_jsload,map__37072,map__37072__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__37071,map__37071__$1,opts,on_jsload,before_jsload,map__37072,map__37072__$1,files){
return (function (state_37095){var state_val_37096 = (state_37095[(1)]);if((state_val_37096 === (6)))
{var inst_37077 = (state_37095[(7)]);var inst_37086 = (state_37095[(2)]);var inst_37087 = cljs.core.PersistentVector.EMPTY_NODE;var inst_37088 = [inst_37077];var inst_37089 = (new cljs.core.PersistentVector(null,1,(5),inst_37087,inst_37088,null));var inst_37090 = cljs.core.apply.call(null,on_jsload,inst_37089);var state_37095__$1 = (function (){var statearr_37097 = state_37095;(statearr_37097[(8)] = inst_37086);
return statearr_37097;
})();var statearr_37098_37112 = state_37095__$1;(statearr_37098_37112[(2)] = inst_37090);
(statearr_37098_37112[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37096 === (5)))
{var inst_37093 = (state_37095[(2)]);var state_37095__$1 = state_37095;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37095__$1,inst_37093);
} else
{if((state_val_37096 === (4)))
{var state_37095__$1 = state_37095;var statearr_37099_37113 = state_37095__$1;(statearr_37099_37113[(2)] = null);
(statearr_37099_37113[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37096 === (3)))
{var inst_37077 = (state_37095[(7)]);var inst_37080 = console.debug("Figwheel: loaded these files");var inst_37081 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37077);var inst_37082 = cljs.core.prn_str.call(null,inst_37081);var inst_37083 = console.log(inst_37082);var inst_37084 = cljs.core.async.timeout.call(null,(10));var state_37095__$1 = (function (){var statearr_37100 = state_37095;(statearr_37100[(9)] = inst_37083);
(statearr_37100[(10)] = inst_37080);
return statearr_37100;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37095__$1,(6),inst_37084);
} else
{if((state_val_37096 === (2)))
{var inst_37077 = (state_37095[(7)]);var inst_37077__$1 = (state_37095[(2)]);var inst_37078 = cljs.core.not_empty.call(null,inst_37077__$1);var state_37095__$1 = (function (){var statearr_37101 = state_37095;(statearr_37101[(7)] = inst_37077__$1);
return statearr_37101;
})();if(cljs.core.truth_(inst_37078))
{var statearr_37102_37114 = state_37095__$1;(statearr_37102_37114[(1)] = (3));
} else
{var statearr_37103_37115 = state_37095__$1;(statearr_37103_37115[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37096 === (1)))
{var inst_37073 = before_jsload.call(null,files);var inst_37074 = figwheel.client.add_request_urls.call(null,opts,files);var inst_37075 = figwheel.client.load_all_js_files.call(null,inst_37074);var state_37095__$1 = (function (){var statearr_37104 = state_37095;(statearr_37104[(11)] = inst_37073);
return statearr_37104;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37095__$1,(2),inst_37075);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__37071,map__37071__$1,opts,on_jsload,before_jsload,map__37072,map__37072__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__37071,map__37071__$1,opts,on_jsload,before_jsload,map__37072,map__37072__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_37108 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37108[(0)] = state_machine__5694__auto__);
(statearr_37108[(1)] = (1));
return statearr_37108;
});
var state_machine__5694__auto____1 = (function (state_37095){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_37095);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e37109){if((e37109 instanceof Object))
{var ex__5697__auto__ = e37109;var statearr_37110_37116 = state_37095;(statearr_37110_37116[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37095);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37109;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37117 = state_37095;
state_37095 = G__37117;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_37095){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_37095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__37071,map__37071__$1,opts,on_jsload,before_jsload,map__37072,map__37072__$1,files))
})();var state__5710__auto__ = (function (){var statearr_37111 = f__5709__auto__.call(null);(statearr_37111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_37111;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__37071,map__37071__$1,opts,on_jsload,before_jsload,map__37072,map__37072__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__37118,link_href){var map__37120 = p__37118;var map__37120__$1 = ((cljs.core.seq_QMARK_.call(null,map__37120))?cljs.core.apply.call(null,cljs.core.hash_map,map__37120):map__37120);var request_url = cljs.core.get.call(null,map__37120__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__37120__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_37141){var state_val_37142 = (state_37141[(1)]);if((state_val_37142 === (2)))
{var inst_37138 = (state_37141[(2)]);var inst_37139 = parent.removeChild(orig_link);var state_37141__$1 = (function (){var statearr_37143 = state_37141;(statearr_37143[(7)] = inst_37138);
return statearr_37143;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37141__$1,inst_37139);
} else
{if((state_val_37142 === (1)))
{var inst_37136 = cljs.core.async.timeout.call(null,(200));var state_37141__$1 = state_37141;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37141__$1,(2),inst_37136);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_37147 = [null,null,null,null,null,null,null,null];(statearr_37147[(0)] = state_machine__5694__auto__);
(statearr_37147[(1)] = (1));
return statearr_37147;
});
var state_machine__5694__auto____1 = (function (state_37141){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_37141);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e37148){if((e37148 instanceof Object))
{var ex__5697__auto__ = e37148;var statearr_37149_37151 = state_37141;(statearr_37149_37151[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37141);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37148;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37152 = state_37141;
state_37141 = G__37152;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_37141){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_37141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_37150 = f__5709__auto__.call(null);(statearr_37150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_37150;
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
figwheel.client.reload_css_file = (function reload_css_file(p__37153){var map__37155 = p__37153;var map__37155__$1 = ((cljs.core.seq_QMARK_.call(null,map__37155))?cljs.core.apply.call(null,cljs.core.hash_map,map__37155):map__37155);var f_data = map__37155__$1;var request_url = cljs.core.get.call(null,map__37155__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__37155__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__37156,files_msg){var map__37178 = p__37156;var map__37178__$1 = ((cljs.core.seq_QMARK_.call(null,map__37178))?cljs.core.apply.call(null,cljs.core.hash_map,map__37178):map__37178);var opts = map__37178__$1;var on_cssload = cljs.core.get.call(null,map__37178__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__37179_37199 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__37180_37200 = null;var count__37181_37201 = (0);var i__37182_37202 = (0);while(true){
if((i__37182_37202 < count__37181_37201))
{var f_37203 = cljs.core._nth.call(null,chunk__37180_37200,i__37182_37202);figwheel.client.reload_css_file.call(null,f_37203);
{
var G__37204 = seq__37179_37199;
var G__37205 = chunk__37180_37200;
var G__37206 = count__37181_37201;
var G__37207 = (i__37182_37202 + (1));
seq__37179_37199 = G__37204;
chunk__37180_37200 = G__37205;
count__37181_37201 = G__37206;
i__37182_37202 = G__37207;
continue;
}
} else
{var temp__4126__auto___37208 = cljs.core.seq.call(null,seq__37179_37199);if(temp__4126__auto___37208)
{var seq__37179_37209__$1 = temp__4126__auto___37208;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37179_37209__$1))
{var c__4314__auto___37210 = cljs.core.chunk_first.call(null,seq__37179_37209__$1);{
var G__37211 = cljs.core.chunk_rest.call(null,seq__37179_37209__$1);
var G__37212 = c__4314__auto___37210;
var G__37213 = cljs.core.count.call(null,c__4314__auto___37210);
var G__37214 = (0);
seq__37179_37199 = G__37211;
chunk__37180_37200 = G__37212;
count__37181_37201 = G__37213;
i__37182_37202 = G__37214;
continue;
}
} else
{var f_37215 = cljs.core.first.call(null,seq__37179_37209__$1);figwheel.client.reload_css_file.call(null,f_37215);
{
var G__37216 = cljs.core.next.call(null,seq__37179_37209__$1);
var G__37217 = null;
var G__37218 = (0);
var G__37219 = (0);
seq__37179_37199 = G__37216;
chunk__37180_37200 = G__37217;
count__37181_37201 = G__37218;
i__37182_37202 = G__37219;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__37178,map__37178__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__37178,map__37178__$1,opts,on_cssload){
return (function (state_37189){var state_val_37190 = (state_37189[(1)]);if((state_val_37190 === (2)))
{var inst_37185 = (state_37189[(2)]);var inst_37186 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_37187 = on_cssload.call(null,inst_37186);var state_37189__$1 = (function (){var statearr_37191 = state_37189;(statearr_37191[(7)] = inst_37185);
return statearr_37191;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37189__$1,inst_37187);
} else
{if((state_val_37190 === (1)))
{var inst_37183 = cljs.core.async.timeout.call(null,(100));var state_37189__$1 = state_37189;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37189__$1,(2),inst_37183);
} else
{return null;
}
}
});})(c__5708__auto__,map__37178,map__37178__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__37178,map__37178__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_37195 = [null,null,null,null,null,null,null,null];(statearr_37195[(0)] = state_machine__5694__auto__);
(statearr_37195[(1)] = (1));
return statearr_37195;
});
var state_machine__5694__auto____1 = (function (state_37189){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_37189);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e37196){if((e37196 instanceof Object))
{var ex__5697__auto__ = e37196;var statearr_37197_37220 = state_37189;(statearr_37197_37220[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37189);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37196;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37221 = state_37189;
state_37189 = G__37221;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_37189){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_37189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__37178,map__37178__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_37198 = f__5709__auto__.call(null);(statearr_37198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_37198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__37178,map__37178__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__37222){var map__37227 = p__37222;var map__37227__$1 = ((cljs.core.seq_QMARK_.call(null,map__37227))?cljs.core.apply.call(null,cljs.core.hash_map,map__37227):map__37227);var opts = map__37227__$1;var on_compile_fail = cljs.core.get.call(null,map__37227__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__37227__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__37227__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__37227__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__37227,map__37227__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__37228 = cljs.core._EQ_;var expr__37229 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__37228.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__37229)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__37228.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__37229)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__37228.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37229)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__37227,map__37227__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__37227,map__37227__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__37227,map__37227__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__37227,map__37227__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__37227,map__37227__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__37227,map__37227__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__37227,map__37227__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__37227,map__37227__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__37227,map__37227__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj37234 = {"detail":url};return obj37234;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__37235){var map__37237 = p__37235;var map__37237__$1 = ((cljs.core.seq_QMARK_.call(null,map__37237))?cljs.core.apply.call(null,cljs.core.hash_map,map__37237):map__37237);var class$ = cljs.core.get.call(null,map__37237__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__37237__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__37238){var map__37244 = p__37238;var map__37244__$1 = ((cljs.core.seq_QMARK_.call(null,map__37244))?cljs.core.apply.call(null,cljs.core.hash_map,map__37244):map__37244);var ed = map__37244__$1;var exception_data = cljs.core.get.call(null,map__37244__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__37244__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__37245_37249 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__37246_37250 = null;var count__37247_37251 = (0);var i__37248_37252 = (0);while(true){
if((i__37248_37252 < count__37247_37251))
{var msg_37253 = cljs.core._nth.call(null,chunk__37246_37250,i__37248_37252);console.log(msg_37253);
{
var G__37254 = seq__37245_37249;
var G__37255 = chunk__37246_37250;
var G__37256 = count__37247_37251;
var G__37257 = (i__37248_37252 + (1));
seq__37245_37249 = G__37254;
chunk__37246_37250 = G__37255;
count__37247_37251 = G__37256;
i__37248_37252 = G__37257;
continue;
}
} else
{var temp__4126__auto___37258 = cljs.core.seq.call(null,seq__37245_37249);if(temp__4126__auto___37258)
{var seq__37245_37259__$1 = temp__4126__auto___37258;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37245_37259__$1))
{var c__4314__auto___37260 = cljs.core.chunk_first.call(null,seq__37245_37259__$1);{
var G__37261 = cljs.core.chunk_rest.call(null,seq__37245_37259__$1);
var G__37262 = c__4314__auto___37260;
var G__37263 = cljs.core.count.call(null,c__4314__auto___37260);
var G__37264 = (0);
seq__37245_37249 = G__37261;
chunk__37246_37250 = G__37262;
count__37247_37251 = G__37263;
i__37248_37252 = G__37264;
continue;
}
} else
{var msg_37265 = cljs.core.first.call(null,seq__37245_37259__$1);console.log(msg_37265);
{
var G__37266 = cljs.core.next.call(null,seq__37245_37259__$1);
var G__37267 = null;
var G__37268 = (0);
var G__37269 = (0);
seq__37245_37249 = G__37266;
chunk__37246_37250 = G__37267;
count__37247_37251 = G__37268;
i__37248_37252 = G__37269;
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
var watch_and_reload__delegate = function (p__37270){var map__37272 = p__37270;var map__37272__$1 = ((cljs.core.seq_QMARK_.call(null,map__37272))?cljs.core.apply.call(null,cljs.core.hash_map,map__37272):map__37272);var opts = map__37272__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__37270 = null;if (arguments.length > 0) {
  p__37270 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__37270);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__37273){
var p__37270 = cljs.core.seq(arglist__37273);
return watch_and_reload__delegate(p__37270);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
