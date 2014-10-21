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
var log__delegate = function (p__24463,args){var map__24465 = p__24463;var map__24465__$1 = ((cljs.core.seq_QMARK_.call(null,map__24465))?cljs.core.apply.call(null,cljs.core.hash_map,map__24465):map__24465);var debug = cljs.core.get.call(null,map__24465__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__24463,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__24463,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__24466){
var p__24463 = cljs.core.first(arglist__24466);
var args = cljs.core.rest(arglist__24466);
return log__delegate(p__24463,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__24467){var map__24469 = p__24467;var map__24469__$1 = ((cljs.core.seq_QMARK_.call(null,map__24469))?cljs.core.apply.call(null,cljs.core.hash_map,map__24469):map__24469);var websocket_url = cljs.core.get.call(null,map__24469__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__24470,callback){var map__24472 = p__24470;var map__24472__$1 = ((cljs.core.seq_QMARK_.call(null,map__24472))?cljs.core.apply.call(null,cljs.core.hash_map,map__24472):map__24472);var msg = map__24472__$1;var dependency_file = cljs.core.get.call(null,map__24472__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__24472__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__24472__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3637__auto__ = dependency_file;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__24472,map__24472__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__24472,map__24472__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__24473,p__24474){var map__24477 = p__24473;var map__24477__$1 = ((cljs.core.seq_QMARK_.call(null,map__24477))?cljs.core.apply.call(null,cljs.core.hash_map,map__24477):map__24477);var opts = map__24477__$1;var url_rewriter = cljs.core.get.call(null,map__24477__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__24478 = p__24474;var map__24478__$1 = ((cljs.core.seq_QMARK_.call(null,map__24478))?cljs.core.apply.call(null,cljs.core.hash_map,map__24478):map__24478);var d = map__24478__$1;var file = cljs.core.get.call(null,map__24478__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__24479,p__24480){var map__24522 = p__24479;var map__24522__$1 = ((cljs.core.seq_QMARK_.call(null,map__24522))?cljs.core.apply.call(null,cljs.core.hash_map,map__24522):map__24522);var opts = map__24522__$1;var on_jsload = cljs.core.get.call(null,map__24522__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__24522__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__24523 = p__24480;var map__24523__$1 = ((cljs.core.seq_QMARK_.call(null,map__24523))?cljs.core.apply.call(null,cljs.core.hash_map,map__24523):map__24523);var files = cljs.core.get.call(null,map__24523__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,map__24522,map__24522__$1,opts,on_jsload,before_jsload,map__24523,map__24523__$1,files){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,map__24522,map__24522__$1,opts,on_jsload,before_jsload,map__24523,map__24523__$1,files){
return (function (state_24546){var state_val_24547 = (state_24546[(1)]);if((state_val_24547 === (6)))
{var inst_24528 = (state_24546[(7)]);var inst_24537 = (state_24546[(2)]);var inst_24538 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24539 = [inst_24528];var inst_24540 = (new cljs.core.PersistentVector(null,1,(5),inst_24538,inst_24539,null));var inst_24541 = cljs.core.apply.call(null,on_jsload,inst_24540);var state_24546__$1 = (function (){var statearr_24548 = state_24546;(statearr_24548[(8)] = inst_24537);
return statearr_24548;
})();var statearr_24549_24563 = state_24546__$1;(statearr_24549_24563[(2)] = inst_24541);
(statearr_24549_24563[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24547 === (5)))
{var inst_24544 = (state_24546[(2)]);var state_24546__$1 = state_24546;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24546__$1,inst_24544);
} else
{if((state_val_24547 === (4)))
{var state_24546__$1 = state_24546;var statearr_24550_24564 = state_24546__$1;(statearr_24550_24564[(2)] = null);
(statearr_24550_24564[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24547 === (3)))
{var inst_24528 = (state_24546[(7)]);var inst_24531 = console.debug("Figwheel: loaded these files");var inst_24532 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24528);var inst_24533 = cljs.core.prn_str.call(null,inst_24532);var inst_24534 = console.log(inst_24533);var inst_24535 = cljs.core.async.timeout.call(null,(10));var state_24546__$1 = (function (){var statearr_24551 = state_24546;(statearr_24551[(9)] = inst_24531);
(statearr_24551[(10)] = inst_24534);
return statearr_24551;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24546__$1,(6),inst_24535);
} else
{if((state_val_24547 === (2)))
{var inst_24528 = (state_24546[(7)]);var inst_24528__$1 = (state_24546[(2)]);var inst_24529 = cljs.core.not_empty.call(null,inst_24528__$1);var state_24546__$1 = (function (){var statearr_24552 = state_24546;(statearr_24552[(7)] = inst_24528__$1);
return statearr_24552;
})();if(cljs.core.truth_(inst_24529))
{var statearr_24553_24565 = state_24546__$1;(statearr_24553_24565[(1)] = (3));
} else
{var statearr_24554_24566 = state_24546__$1;(statearr_24554_24566[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24547 === (1)))
{var inst_24524 = before_jsload.call(null,files);var inst_24525 = figwheel.client.add_request_urls.call(null,opts,files);var inst_24526 = figwheel.client.load_all_js_files.call(null,inst_24525);var state_24546__$1 = (function (){var statearr_24555 = state_24546;(statearr_24555[(11)] = inst_24524);
return statearr_24555;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24546__$1,(2),inst_24526);
} else
{return null;
}
}
}
}
}
}
});})(c__5819__auto__,map__24522,map__24522__$1,opts,on_jsload,before_jsload,map__24523,map__24523__$1,files))
;return ((function (switch__5804__auto__,c__5819__auto__,map__24522,map__24522__$1,opts,on_jsload,before_jsload,map__24523,map__24523__$1,files){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_24559 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24559[(0)] = state_machine__5805__auto__);
(statearr_24559[(1)] = (1));
return statearr_24559;
});
var state_machine__5805__auto____1 = (function (state_24546){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_24546);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e24560){if((e24560 instanceof Object))
{var ex__5808__auto__ = e24560;var statearr_24561_24567 = state_24546;(statearr_24561_24567[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24546);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24560;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24568 = state_24546;
state_24546 = G__24568;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_24546){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_24546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,map__24522,map__24522__$1,opts,on_jsload,before_jsload,map__24523,map__24523__$1,files))
})();var state__5821__auto__ = (function (){var statearr_24562 = f__5820__auto__.call(null);(statearr_24562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_24562;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,map__24522,map__24522__$1,opts,on_jsload,before_jsload,map__24523,map__24523__$1,files))
);
return c__5819__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__24569,link_href){var map__24571 = p__24569;var map__24571__$1 = ((cljs.core.seq_QMARK_.call(null,map__24571))?cljs.core.apply.call(null,cljs.core.hash_map,map__24571):map__24571);var request_url = cljs.core.get.call(null,map__24571__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__24571__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_24592){var state_val_24593 = (state_24592[(1)]);if((state_val_24593 === (2)))
{var inst_24589 = (state_24592[(2)]);var inst_24590 = parent.removeChild(orig_link);var state_24592__$1 = (function (){var statearr_24594 = state_24592;(statearr_24594[(7)] = inst_24589);
return statearr_24594;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24592__$1,inst_24590);
} else
{if((state_val_24593 === (1)))
{var inst_24587 = cljs.core.async.timeout.call(null,(200));var state_24592__$1 = state_24592;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24592__$1,(2),inst_24587);
} else
{return null;
}
}
});})(c__5819__auto__,parent))
;return ((function (switch__5804__auto__,c__5819__auto__,parent){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_24598 = [null,null,null,null,null,null,null,null];(statearr_24598[(0)] = state_machine__5805__auto__);
(statearr_24598[(1)] = (1));
return statearr_24598;
});
var state_machine__5805__auto____1 = (function (state_24592){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_24592);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e24599){if((e24599 instanceof Object))
{var ex__5808__auto__ = e24599;var statearr_24600_24602 = state_24592;(statearr_24600_24602[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24592);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24599;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24603 = state_24592;
state_24592 = G__24603;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_24592){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_24592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,parent))
})();var state__5821__auto__ = (function (){var statearr_24601 = f__5820__auto__.call(null);(statearr_24601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_24601;
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
figwheel.client.reload_css_file = (function reload_css_file(p__24604){var map__24606 = p__24604;var map__24606__$1 = ((cljs.core.seq_QMARK_.call(null,map__24606))?cljs.core.apply.call(null,cljs.core.hash_map,map__24606):map__24606);var f_data = map__24606__$1;var request_url = cljs.core.get.call(null,map__24606__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__24606__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__24607,files_msg){var map__24629 = p__24607;var map__24629__$1 = ((cljs.core.seq_QMARK_.call(null,map__24629))?cljs.core.apply.call(null,cljs.core.hash_map,map__24629):map__24629);var opts = map__24629__$1;var on_cssload = cljs.core.get.call(null,map__24629__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__24630_24650 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__24631_24651 = null;var count__24632_24652 = (0);var i__24633_24653 = (0);while(true){
if((i__24633_24653 < count__24632_24652))
{var f_24654 = cljs.core._nth.call(null,chunk__24631_24651,i__24633_24653);figwheel.client.reload_css_file.call(null,f_24654);
{
var G__24655 = seq__24630_24650;
var G__24656 = chunk__24631_24651;
var G__24657 = count__24632_24652;
var G__24658 = (i__24633_24653 + (1));
seq__24630_24650 = G__24655;
chunk__24631_24651 = G__24656;
count__24632_24652 = G__24657;
i__24633_24653 = G__24658;
continue;
}
} else
{var temp__4126__auto___24659 = cljs.core.seq.call(null,seq__24630_24650);if(temp__4126__auto___24659)
{var seq__24630_24660__$1 = temp__4126__auto___24659;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24630_24660__$1))
{var c__4406__auto___24661 = cljs.core.chunk_first.call(null,seq__24630_24660__$1);{
var G__24662 = cljs.core.chunk_rest.call(null,seq__24630_24660__$1);
var G__24663 = c__4406__auto___24661;
var G__24664 = cljs.core.count.call(null,c__4406__auto___24661);
var G__24665 = (0);
seq__24630_24650 = G__24662;
chunk__24631_24651 = G__24663;
count__24632_24652 = G__24664;
i__24633_24653 = G__24665;
continue;
}
} else
{var f_24666 = cljs.core.first.call(null,seq__24630_24660__$1);figwheel.client.reload_css_file.call(null,f_24666);
{
var G__24667 = cljs.core.next.call(null,seq__24630_24660__$1);
var G__24668 = null;
var G__24669 = (0);
var G__24670 = (0);
seq__24630_24650 = G__24667;
chunk__24631_24651 = G__24668;
count__24632_24652 = G__24669;
i__24633_24653 = G__24670;
continue;
}
}
} else
{}
}
break;
}
var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,map__24629,map__24629__$1,opts,on_cssload){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,map__24629,map__24629__$1,opts,on_cssload){
return (function (state_24640){var state_val_24641 = (state_24640[(1)]);if((state_val_24641 === (2)))
{var inst_24636 = (state_24640[(2)]);var inst_24637 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_24638 = on_cssload.call(null,inst_24637);var state_24640__$1 = (function (){var statearr_24642 = state_24640;(statearr_24642[(7)] = inst_24636);
return statearr_24642;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24640__$1,inst_24638);
} else
{if((state_val_24641 === (1)))
{var inst_24634 = cljs.core.async.timeout.call(null,(100));var state_24640__$1 = state_24640;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24640__$1,(2),inst_24634);
} else
{return null;
}
}
});})(c__5819__auto__,map__24629,map__24629__$1,opts,on_cssload))
;return ((function (switch__5804__auto__,c__5819__auto__,map__24629,map__24629__$1,opts,on_cssload){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_24646 = [null,null,null,null,null,null,null,null];(statearr_24646[(0)] = state_machine__5805__auto__);
(statearr_24646[(1)] = (1));
return statearr_24646;
});
var state_machine__5805__auto____1 = (function (state_24640){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_24640);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e24647){if((e24647 instanceof Object))
{var ex__5808__auto__ = e24647;var statearr_24648_24671 = state_24640;(statearr_24648_24671[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24640);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24647;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24672 = state_24640;
state_24640 = G__24672;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_24640){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_24640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,map__24629,map__24629__$1,opts,on_cssload))
})();var state__5821__auto__ = (function (){var statearr_24649 = f__5820__auto__.call(null);(statearr_24649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_24649;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,map__24629,map__24629__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__24673){var map__24678 = p__24673;var map__24678__$1 = ((cljs.core.seq_QMARK_.call(null,map__24678))?cljs.core.apply.call(null,cljs.core.hash_map,map__24678):map__24678);var opts = map__24678__$1;var on_compile_fail = cljs.core.get.call(null,map__24678__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__24678__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__24678__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__24678__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__24678,map__24678__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__24679 = cljs.core._EQ_;var expr__24680 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__24679.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__24680)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__24679.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__24680)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__24679.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24680)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__24678,map__24678__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__24678,map__24678__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__24678,map__24678__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__24678,map__24678__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__24678,map__24678__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__24678,map__24678__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__24678,map__24678__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__24678,map__24678__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__24678,map__24678__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj24685 = {"detail":url};return obj24685;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__24686){var map__24688 = p__24686;var map__24688__$1 = ((cljs.core.seq_QMARK_.call(null,map__24688))?cljs.core.apply.call(null,cljs.core.hash_map,map__24688):map__24688);var class$ = cljs.core.get.call(null,map__24688__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__24688__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__24689){var map__24695 = p__24689;var map__24695__$1 = ((cljs.core.seq_QMARK_.call(null,map__24695))?cljs.core.apply.call(null,cljs.core.hash_map,map__24695):map__24695);var ed = map__24695__$1;var exception_data = cljs.core.get.call(null,map__24695__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__24695__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__24696_24700 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__24697_24701 = null;var count__24698_24702 = (0);var i__24699_24703 = (0);while(true){
if((i__24699_24703 < count__24698_24702))
{var msg_24704 = cljs.core._nth.call(null,chunk__24697_24701,i__24699_24703);console.log(msg_24704);
{
var G__24705 = seq__24696_24700;
var G__24706 = chunk__24697_24701;
var G__24707 = count__24698_24702;
var G__24708 = (i__24699_24703 + (1));
seq__24696_24700 = G__24705;
chunk__24697_24701 = G__24706;
count__24698_24702 = G__24707;
i__24699_24703 = G__24708;
continue;
}
} else
{var temp__4126__auto___24709 = cljs.core.seq.call(null,seq__24696_24700);if(temp__4126__auto___24709)
{var seq__24696_24710__$1 = temp__4126__auto___24709;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24696_24710__$1))
{var c__4406__auto___24711 = cljs.core.chunk_first.call(null,seq__24696_24710__$1);{
var G__24712 = cljs.core.chunk_rest.call(null,seq__24696_24710__$1);
var G__24713 = c__4406__auto___24711;
var G__24714 = cljs.core.count.call(null,c__4406__auto___24711);
var G__24715 = (0);
seq__24696_24700 = G__24712;
chunk__24697_24701 = G__24713;
count__24698_24702 = G__24714;
i__24699_24703 = G__24715;
continue;
}
} else
{var msg_24716 = cljs.core.first.call(null,seq__24696_24710__$1);console.log(msg_24716);
{
var G__24717 = cljs.core.next.call(null,seq__24696_24710__$1);
var G__24718 = null;
var G__24719 = (0);
var G__24720 = (0);
seq__24696_24700 = G__24717;
chunk__24697_24701 = G__24718;
count__24698_24702 = G__24719;
i__24699_24703 = G__24720;
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
var watch_and_reload__delegate = function (p__24721){var map__24723 = p__24721;var map__24723__$1 = ((cljs.core.seq_QMARK_.call(null,map__24723))?cljs.core.apply.call(null,cljs.core.hash_map,map__24723):map__24723);var opts = map__24723__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__24721 = null;if (arguments.length > 0) {
  p__24721 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__24721);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__24724){
var p__24721 = cljs.core.seq(arglist__24724);
return watch_and_reload__delegate(p__24721);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
