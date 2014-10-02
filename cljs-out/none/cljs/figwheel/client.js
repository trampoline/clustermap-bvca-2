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
var log__delegate = function (p__58513,args){var map__58515 = p__58513;var map__58515__$1 = ((cljs.core.seq_QMARK_.call(null,map__58515))?cljs.core.apply.call(null,cljs.core.hash_map,map__58515):map__58515);var debug = cljs.core.get.call(null,map__58515__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__58513,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__58513,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__58516){
var p__58513 = cljs.core.first(arglist__58516);
var args = cljs.core.rest(arglist__58516);
return log__delegate(p__58513,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__58517){var map__58519 = p__58517;var map__58519__$1 = ((cljs.core.seq_QMARK_.call(null,map__58519))?cljs.core.apply.call(null,cljs.core.hash_map,map__58519):map__58519);var websocket_url = cljs.core.get.call(null,map__58519__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__58520,callback){var map__58522 = p__58520;var map__58522__$1 = ((cljs.core.seq_QMARK_.call(null,map__58522))?cljs.core.apply.call(null,cljs.core.hash_map,map__58522):map__58522);var msg = map__58522__$1;var dependency_file = cljs.core.get.call(null,map__58522__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__58522__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__58522__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__58522,map__58522__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__58522,map__58522__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__58523,p__58524){var map__58527 = p__58523;var map__58527__$1 = ((cljs.core.seq_QMARK_.call(null,map__58527))?cljs.core.apply.call(null,cljs.core.hash_map,map__58527):map__58527);var opts = map__58527__$1;var url_rewriter = cljs.core.get.call(null,map__58527__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__58528 = p__58524;var map__58528__$1 = ((cljs.core.seq_QMARK_.call(null,map__58528))?cljs.core.apply.call(null,cljs.core.hash_map,map__58528):map__58528);var d = map__58528__$1;var file = cljs.core.get.call(null,map__58528__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__58529,p__58530){var map__58572 = p__58529;var map__58572__$1 = ((cljs.core.seq_QMARK_.call(null,map__58572))?cljs.core.apply.call(null,cljs.core.hash_map,map__58572):map__58572);var opts = map__58572__$1;var on_jsload = cljs.core.get.call(null,map__58572__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__58572__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__58573 = p__58530;var map__58573__$1 = ((cljs.core.seq_QMARK_.call(null,map__58573))?cljs.core.apply.call(null,cljs.core.hash_map,map__58573):map__58573);var files = cljs.core.get.call(null,map__58573__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__58572,map__58572__$1,opts,on_jsload,before_jsload,map__58573,map__58573__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__58572,map__58572__$1,opts,on_jsload,before_jsload,map__58573,map__58573__$1,files){
return (function (state_58596){var state_val_58597 = (state_58596[(1)]);if((state_val_58597 === (6)))
{var inst_58578 = (state_58596[(7)]);var inst_58587 = (state_58596[(2)]);var inst_58588 = cljs.core.PersistentVector.EMPTY_NODE;var inst_58589 = [inst_58578];var inst_58590 = (new cljs.core.PersistentVector(null,1,(5),inst_58588,inst_58589,null));var inst_58591 = cljs.core.apply.call(null,on_jsload,inst_58590);var state_58596__$1 = (function (){var statearr_58598 = state_58596;(statearr_58598[(8)] = inst_58587);
return statearr_58598;
})();var statearr_58599_58613 = state_58596__$1;(statearr_58599_58613[(2)] = inst_58591);
(statearr_58599_58613[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58597 === (5)))
{var inst_58594 = (state_58596[(2)]);var state_58596__$1 = state_58596;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58596__$1,inst_58594);
} else
{if((state_val_58597 === (4)))
{var state_58596__$1 = state_58596;var statearr_58600_58614 = state_58596__$1;(statearr_58600_58614[(2)] = null);
(statearr_58600_58614[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58597 === (3)))
{var inst_58578 = (state_58596[(7)]);var inst_58581 = console.debug("Figwheel: loaded these files");var inst_58582 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_58578);var inst_58583 = cljs.core.prn_str.call(null,inst_58582);var inst_58584 = console.log(inst_58583);var inst_58585 = cljs.core.async.timeout.call(null,(10));var state_58596__$1 = (function (){var statearr_58601 = state_58596;(statearr_58601[(9)] = inst_58581);
(statearr_58601[(10)] = inst_58584);
return statearr_58601;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58596__$1,(6),inst_58585);
} else
{if((state_val_58597 === (2)))
{var inst_58578 = (state_58596[(7)]);var inst_58578__$1 = (state_58596[(2)]);var inst_58579 = cljs.core.not_empty.call(null,inst_58578__$1);var state_58596__$1 = (function (){var statearr_58602 = state_58596;(statearr_58602[(7)] = inst_58578__$1);
return statearr_58602;
})();if(cljs.core.truth_(inst_58579))
{var statearr_58603_58615 = state_58596__$1;(statearr_58603_58615[(1)] = (3));
} else
{var statearr_58604_58616 = state_58596__$1;(statearr_58604_58616[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58597 === (1)))
{var inst_58574 = before_jsload.call(null,files);var inst_58575 = figwheel.client.add_request_urls.call(null,opts,files);var inst_58576 = figwheel.client.load_all_js_files.call(null,inst_58575);var state_58596__$1 = (function (){var statearr_58605 = state_58596;(statearr_58605[(11)] = inst_58574);
return statearr_58605;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58596__$1,(2),inst_58576);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__58572,map__58572__$1,opts,on_jsload,before_jsload,map__58573,map__58573__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__58572,map__58572__$1,opts,on_jsload,before_jsload,map__58573,map__58573__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_58609 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_58609[(0)] = state_machine__5694__auto__);
(statearr_58609[(1)] = (1));
return statearr_58609;
});
var state_machine__5694__auto____1 = (function (state_58596){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_58596);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e58610){if((e58610 instanceof Object))
{var ex__5697__auto__ = e58610;var statearr_58611_58617 = state_58596;(statearr_58611_58617[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58596);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e58610;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58618 = state_58596;
state_58596 = G__58618;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_58596){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_58596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__58572,map__58572__$1,opts,on_jsload,before_jsload,map__58573,map__58573__$1,files))
})();var state__5710__auto__ = (function (){var statearr_58612 = f__5709__auto__.call(null);(statearr_58612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_58612;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__58572,map__58572__$1,opts,on_jsload,before_jsload,map__58573,map__58573__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__58619,link_href){var map__58621 = p__58619;var map__58621__$1 = ((cljs.core.seq_QMARK_.call(null,map__58621))?cljs.core.apply.call(null,cljs.core.hash_map,map__58621):map__58621);var request_url = cljs.core.get.call(null,map__58621__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__58621__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_58642){var state_val_58643 = (state_58642[(1)]);if((state_val_58643 === (2)))
{var inst_58639 = (state_58642[(2)]);var inst_58640 = parent.removeChild(orig_link);var state_58642__$1 = (function (){var statearr_58644 = state_58642;(statearr_58644[(7)] = inst_58639);
return statearr_58644;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58642__$1,inst_58640);
} else
{if((state_val_58643 === (1)))
{var inst_58637 = cljs.core.async.timeout.call(null,(200));var state_58642__$1 = state_58642;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58642__$1,(2),inst_58637);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_58648 = [null,null,null,null,null,null,null,null];(statearr_58648[(0)] = state_machine__5694__auto__);
(statearr_58648[(1)] = (1));
return statearr_58648;
});
var state_machine__5694__auto____1 = (function (state_58642){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_58642);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e58649){if((e58649 instanceof Object))
{var ex__5697__auto__ = e58649;var statearr_58650_58652 = state_58642;(statearr_58650_58652[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58642);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e58649;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58653 = state_58642;
state_58642 = G__58653;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_58642){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_58642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_58651 = f__5709__auto__.call(null);(statearr_58651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_58651;
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
figwheel.client.reload_css_file = (function reload_css_file(p__58654){var map__58656 = p__58654;var map__58656__$1 = ((cljs.core.seq_QMARK_.call(null,map__58656))?cljs.core.apply.call(null,cljs.core.hash_map,map__58656):map__58656);var f_data = map__58656__$1;var request_url = cljs.core.get.call(null,map__58656__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__58656__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__58657,files_msg){var map__58679 = p__58657;var map__58679__$1 = ((cljs.core.seq_QMARK_.call(null,map__58679))?cljs.core.apply.call(null,cljs.core.hash_map,map__58679):map__58679);var opts = map__58679__$1;var on_cssload = cljs.core.get.call(null,map__58679__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__58680_58700 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__58681_58701 = null;var count__58682_58702 = (0);var i__58683_58703 = (0);while(true){
if((i__58683_58703 < count__58682_58702))
{var f_58704 = cljs.core._nth.call(null,chunk__58681_58701,i__58683_58703);figwheel.client.reload_css_file.call(null,f_58704);
{
var G__58705 = seq__58680_58700;
var G__58706 = chunk__58681_58701;
var G__58707 = count__58682_58702;
var G__58708 = (i__58683_58703 + (1));
seq__58680_58700 = G__58705;
chunk__58681_58701 = G__58706;
count__58682_58702 = G__58707;
i__58683_58703 = G__58708;
continue;
}
} else
{var temp__4126__auto___58709 = cljs.core.seq.call(null,seq__58680_58700);if(temp__4126__auto___58709)
{var seq__58680_58710__$1 = temp__4126__auto___58709;if(cljs.core.chunked_seq_QMARK_.call(null,seq__58680_58710__$1))
{var c__4314__auto___58711 = cljs.core.chunk_first.call(null,seq__58680_58710__$1);{
var G__58712 = cljs.core.chunk_rest.call(null,seq__58680_58710__$1);
var G__58713 = c__4314__auto___58711;
var G__58714 = cljs.core.count.call(null,c__4314__auto___58711);
var G__58715 = (0);
seq__58680_58700 = G__58712;
chunk__58681_58701 = G__58713;
count__58682_58702 = G__58714;
i__58683_58703 = G__58715;
continue;
}
} else
{var f_58716 = cljs.core.first.call(null,seq__58680_58710__$1);figwheel.client.reload_css_file.call(null,f_58716);
{
var G__58717 = cljs.core.next.call(null,seq__58680_58710__$1);
var G__58718 = null;
var G__58719 = (0);
var G__58720 = (0);
seq__58680_58700 = G__58717;
chunk__58681_58701 = G__58718;
count__58682_58702 = G__58719;
i__58683_58703 = G__58720;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__58679,map__58679__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__58679,map__58679__$1,opts,on_cssload){
return (function (state_58690){var state_val_58691 = (state_58690[(1)]);if((state_val_58691 === (2)))
{var inst_58686 = (state_58690[(2)]);var inst_58687 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_58688 = on_cssload.call(null,inst_58687);var state_58690__$1 = (function (){var statearr_58692 = state_58690;(statearr_58692[(7)] = inst_58686);
return statearr_58692;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58690__$1,inst_58688);
} else
{if((state_val_58691 === (1)))
{var inst_58684 = cljs.core.async.timeout.call(null,(100));var state_58690__$1 = state_58690;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58690__$1,(2),inst_58684);
} else
{return null;
}
}
});})(c__5708__auto__,map__58679,map__58679__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__58679,map__58679__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_58696 = [null,null,null,null,null,null,null,null];(statearr_58696[(0)] = state_machine__5694__auto__);
(statearr_58696[(1)] = (1));
return statearr_58696;
});
var state_machine__5694__auto____1 = (function (state_58690){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_58690);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e58697){if((e58697 instanceof Object))
{var ex__5697__auto__ = e58697;var statearr_58698_58721 = state_58690;(statearr_58698_58721[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58690);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e58697;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58722 = state_58690;
state_58690 = G__58722;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_58690){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_58690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__58679,map__58679__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_58699 = f__5709__auto__.call(null);(statearr_58699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_58699;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__58679,map__58679__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__58723){var map__58728 = p__58723;var map__58728__$1 = ((cljs.core.seq_QMARK_.call(null,map__58728))?cljs.core.apply.call(null,cljs.core.hash_map,map__58728):map__58728);var opts = map__58728__$1;var on_compile_fail = cljs.core.get.call(null,map__58728__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__58728__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__58728__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__58728__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__58728,map__58728__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__58729 = cljs.core._EQ_;var expr__58730 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__58729.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__58730)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__58729.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__58730)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__58729.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__58730)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__58728,map__58728__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__58728,map__58728__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__58728,map__58728__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__58728,map__58728__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__58728,map__58728__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__58728,map__58728__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__58728,map__58728__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__58728,map__58728__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__58728,map__58728__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj58735 = {"detail":url};return obj58735;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__58736){var map__58738 = p__58736;var map__58738__$1 = ((cljs.core.seq_QMARK_.call(null,map__58738))?cljs.core.apply.call(null,cljs.core.hash_map,map__58738):map__58738);var class$ = cljs.core.get.call(null,map__58738__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__58738__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__58739){var map__58745 = p__58739;var map__58745__$1 = ((cljs.core.seq_QMARK_.call(null,map__58745))?cljs.core.apply.call(null,cljs.core.hash_map,map__58745):map__58745);var ed = map__58745__$1;var exception_data = cljs.core.get.call(null,map__58745__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__58745__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__58746_58750 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__58747_58751 = null;var count__58748_58752 = (0);var i__58749_58753 = (0);while(true){
if((i__58749_58753 < count__58748_58752))
{var msg_58754 = cljs.core._nth.call(null,chunk__58747_58751,i__58749_58753);console.log(msg_58754);
{
var G__58755 = seq__58746_58750;
var G__58756 = chunk__58747_58751;
var G__58757 = count__58748_58752;
var G__58758 = (i__58749_58753 + (1));
seq__58746_58750 = G__58755;
chunk__58747_58751 = G__58756;
count__58748_58752 = G__58757;
i__58749_58753 = G__58758;
continue;
}
} else
{var temp__4126__auto___58759 = cljs.core.seq.call(null,seq__58746_58750);if(temp__4126__auto___58759)
{var seq__58746_58760__$1 = temp__4126__auto___58759;if(cljs.core.chunked_seq_QMARK_.call(null,seq__58746_58760__$1))
{var c__4314__auto___58761 = cljs.core.chunk_first.call(null,seq__58746_58760__$1);{
var G__58762 = cljs.core.chunk_rest.call(null,seq__58746_58760__$1);
var G__58763 = c__4314__auto___58761;
var G__58764 = cljs.core.count.call(null,c__4314__auto___58761);
var G__58765 = (0);
seq__58746_58750 = G__58762;
chunk__58747_58751 = G__58763;
count__58748_58752 = G__58764;
i__58749_58753 = G__58765;
continue;
}
} else
{var msg_58766 = cljs.core.first.call(null,seq__58746_58760__$1);console.log(msg_58766);
{
var G__58767 = cljs.core.next.call(null,seq__58746_58760__$1);
var G__58768 = null;
var G__58769 = (0);
var G__58770 = (0);
seq__58746_58750 = G__58767;
chunk__58747_58751 = G__58768;
count__58748_58752 = G__58769;
i__58749_58753 = G__58770;
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
var watch_and_reload__delegate = function (p__58771){var map__58773 = p__58771;var map__58773__$1 = ((cljs.core.seq_QMARK_.call(null,map__58773))?cljs.core.apply.call(null,cljs.core.hash_map,map__58773):map__58773);var opts = map__58773__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__58771 = null;if (arguments.length > 0) {
  p__58771 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__58771);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__58774){
var p__58771 = cljs.core.seq(arglist__58774);
return watch_and_reload__delegate(p__58771);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map